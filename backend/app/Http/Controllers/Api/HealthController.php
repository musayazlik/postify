<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use OpenApi\Annotations as OA;

class HealthController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/health",
     *     tags={"Health"},
     *     summary="Check API health status",
     *     description="Returns the health status of the API",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="ok"),
     *             @OA\Property(property="message", type="string", example="API is running smoothly")
     *         )
     *     )
     * )
     */
    public function check(): JsonResponse
    {
        return response()->json([
            'status' => 'ok',
            'message' => 'API is running smoothly'
        ]);
    }
}
