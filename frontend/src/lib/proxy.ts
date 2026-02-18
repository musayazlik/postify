import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

/**
 * Proxy API requests to the backend server.
 * Handles:
 * - Forwarding the request method, headers, and body
 * - Attaching the Authorization header from the httpOnly cookie
 * - Managing CORS headers for the response
 */
export async function proxy(req: NextRequest, path?: string) {
  try {
    const method = req.method;
    const url = new URL(req.url);
    
    // Determine the target endpoint
    // If path is provided, use it. Otherwise, extract from the URL (assuming /api/proxy/...)
    const endpoint = path || url.pathname.replace(/^\/api\/proxy/, '');
    
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    // Forward the request body if applicable
    const body = method !== 'GET' && method !== 'HEAD' ? await req.text() : undefined;

    const response = await fetch(`${API_URL}${endpoint}`, {
      method,
      headers,
      body,
    });

    // Parse the response
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    const res = NextResponse.json(data, { status: response.status });

    // Add CORS headers to the response
    res.headers.set('Access-Control-Allow-Origin', '*'); // Adjust as needed for security
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    return res;
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: String(error) },
      { status: 500 }
    );
  }
}
