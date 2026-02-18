# Postify Backend

This is the backend API for the Postify Social Media Management Platform, built with [Laravel 12](https://laravel.com/).

![Postify Backend](https://placehold.co/1200x600/ef3b2d/ffffff?text=Laravel+API)

## 🚀 Key Features

- **Framework**: Laravel 12
- **Authentication**: Laravel Sanctum (Stateful & Token-based)
- **Documentation**: L5-Swagger (OpenAPI)
- **Database**: PostgreSQL / MySQL Support
- **Testing**: Pest Testing Framework
- **Code Quality**: Pint

## 🛠 Tech Stack

- **[Laravel](https://laravel.com/)**: The PHP Framework for Web Artisans.
- **[Sanctum](https://laravel.com/docs/sanctum)**: Lightweight authentication system.
- **[L5-Swagger](https://github.com/DarkaOnLine/L5-Swagger)**: OpenAPI documentation generator.
- **[Pest](https://pestphp.com/)**: Elegant PHP Testing Framework.

## 📂 Project Structure

```bash
backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/    # API Controllers
│   │   ├── Middleware/     # Custom Middleware
│   │   ├── Requests/       # Form Requests & Validation
│   │   └── Resources/      # API Resources (JSON Transformation)
│   ├── Models/             # Eloquent Models
│   └── ...
├── config/                 # Configuration Files
├── database/
│   ├── migrations/         # Database Schema
│   ├── seeders/            # Data Seeding
│   └── factories/          # Model Factories
├── routes/
│   ├── api.php             # API Routes
│   └── web.php             # Web Routes
├── tests/                  # Pest Tests
├── composer.json           # Dependencies
└── phpunit.xml             # Testing Configuration
```

## 🏁 Getting Started

### Prerequisites

- **PHP**: v8.2 or higher
- **Composer**: v2.x
- **Database**: PostgreSQL or MySQL

### Installation

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```

2.  Install dependencies:
    ```bash
    composer install
    ```

3.  Set up environment variables:
    ```bash
    cp .env.example .env
    ```
    Update the `.env` file with your database credentials:
    ```env
    DB_CONNECTION=pgsql
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_DATABASE=postify
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
    ```

4.  Generate application key:
    ```bash
    php artisan key:generate
    ```

5.  Run migrations and seed the database:
    ```bash
    php artisan migrate --seed
    ```

6.  Serve the application:
    ```bash
    php artisan serve
    ```
    The API will be available at `http://localhost:8000`.

## 📖 API Documentation

The API documentation is generated using L5-Swagger.
Once the server is running, you can access the documentation at:
`http://localhost:8000/api/documentation`

## 🧪 Testing

Run the test suite using Pest:

```bash
php artisan test
```

## 🔒 Security

- **Sanctum**: Used for secure token-based authentication.
- **CORS**: Configured in `config/cors.php` to allow requests from the frontend.
- **Validation**: Strict validation using Form Requests.

## 🤝 Contributing

We welcome contributions! Please follow the standard pull request process.

## 📄 License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
