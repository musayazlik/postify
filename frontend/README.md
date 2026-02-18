# Postify Frontend

This is the frontend application for the Postify Social Media Management Platform, built with [Next.js 16](https://nextjs.org/) and [Tailwind CSS v4](https://tailwindcss.com/).

![Postify Frontend](https://placehold.co/1200x600/6366f1/ffffff?text=Postify+Frontend)

## 🚀 Key Features

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 + Shadcn UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context API
- **Authentication**: Secure Cookie-based Auth (httpOnly)

## 🛠 Tech Stack

- **[Next.js](https://nextjs.org/)**: React Framework for production.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework.
- **[Shadcn UI](https://ui.shadcn.com/)**: Beautifully designed components.
- **[Magic UI](https://magicui.design/)**: Interactive UI components.
- **[Aceternity UI](https://ui.aceternity.com/)**: Modern web components.
- **[Framer Motion](https://www.framer.com/motion/)**: Animation library.
- **[Lucide React](https://lucide.dev/)**: Icon library.

## 📂 Project Structure

```bash
frontend/
├── src/
│   ├── app/                # App Router Pages & API Routes
│   │   ├── api/            # Serverless Functions (Proxy, Auth)
│   │   ├── auth/           # Authentication Pages (Login, Register, etc.)
│   │   ├── dashboard/      # Protected Dashboard Area
│   │   ├── globals.css     # Global Styles
│   │   ├── layout.tsx      # Root Layout
│   │   └── page.tsx        # Landing Page
│   ├── components/         # Reusable Components
│   │   ├── landing/        # Landing Page Components (Hero, Header, Features)
│   │   └── ui/             # Shadcn UI Components
│   ├── context/            # React Context (AuthContext)
│   ├── lib/                # Utilities & Helpers (API, Proxy, cn)
│   └── middleware.ts       # Route Protection Middleware
├── public/                 # Static Assets
├── components.json         # Shadcn Configuration
├── next.config.ts          # Next.js Configuration
├── package.json            # Dependencies
└── tsconfig.json           # TypeScript Configuration
```

## 🏁 Getting Started

### Prerequisites

- **Node.js**: v18 or higher
- **Backend**: Ensure the Laravel API is running at `http://localhost:8000`.

### Installation

1.  Clone the repository and navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  Set up environment variables:
    Create a `.env.local` file in the root of the `frontend` directory and add the following:
    ```env
    NEXT_PUBLIC_API_URL=http://localhost:8000/api
    ```

4.  Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔒 Authentication Flow

The frontend implements a secure authentication flow:
- **Login**: Sends credentials to `/api/auth/login`.
- **Token Storage**: Auth token is stored in an `httpOnly`, `secure` cookie via Next.js API Routes.
- **Proxy**: All API requests are proxied through `/api/proxy/[...path]` to attach the token automatically.
- **Protection**: `middleware.ts` ensures protected routes (like `/dashboard`) are only accessible to authenticated users.

## 🤝 Contributing

We welcome contributions! Please follow the standard pull request process.

## 📄 License

This project is licensed under the MIT License.
