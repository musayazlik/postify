# Postify - Social Media Management Platform

Postify is a comprehensive social media management platform designed to help users schedule posts, analyze performance, and grow their audience across multiple platforms from a single dashboard.

![Postify Hero](https://placehold.co/1200x600/6366f1/ffffff?text=Postify+Dashboard)

## 🚀 Features

- **Smart Scheduling**: Plan and schedule content ahead of time.
- **Analytics Dashboard**: Detailed insights into audience growth and engagement.
- **Team Collaboration**: Manage roles and permissions for team members.
- **Multi-Platform Support**: Unified interface for various social networks.
- **Secure Authentication**: Robust authentication system with email verification and password reset.

## 🛠 Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/), Magic UI, Aceternity UI
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: React Context API
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend
- **Framework**: [Laravel 12](https://laravel.com/)
- **Authentication**: Laravel Sanctum (Cookie-based auth)
- **API Documentation**: L5-Swagger (OpenAPI)
- **Database**: PostgreSQL / MySQL (configurable)
- **Testing**: Pest

## 📂 Project Structure

```bash
postify/
├── backend/          # Laravel API
│   ├── app/
│   ├── routes/
│   └── ...
├── frontend/         # Next.js Application
│   ├── src/
│   ├── public/
│   └── ...
└── docker-compose.yml # Docker configuration (optional)
```

## 🏁 Getting Started

### Prerequisites

- **Node.js**: v18 or higher
- **PHP**: v8.2 or higher
- **Composer**: v2.x
- **Database**: PostgreSQL or MySQL

### 1. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
```

Configure your `.env` file with your database credentials. Then run migrations:

```bash
php artisan migrate --seed
php artisan serve
```

The API will be available at `http://localhost:8000`.

### 2. Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
cp .env.example .env.local
```

Configure `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### 3. Mail Service (Docker)

To test email functionality (e.g., verification emails, password resets), you can use the Mailpit service included in the `docker-compose.yml`.

Start the mail service:

```bash
docker-compose up -d mailpit
```

- **Mailpit Web UI**: [http://localhost:8025](http://localhost:8025)
- **SMTP Port**: `1025`

Make sure your backend `.env` is configured to use Mailpit:

```env
MAIL_MAILER=smtp
MAIL_HOST=127.0.0.1
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"
```

## 🔒 Authentication Flow

Postify uses a secure cookie-based authentication flow:
1.  **Login**: Frontend sends credentials to Backend.
2.  **Token**: Backend validates and sets an `httpOnly`, `secure` cookie containing the auth token.
3.  **Proxy**: Next.js Middleware/Proxy forwards requests to the backend with the cookie.
4.  **Protection**: Middleware protects `/dashboard` and other private routes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
