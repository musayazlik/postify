# Laravel 12 Cheat Sheet & Guide

This document provides a quick reference for essential Laravel 12 commands and features.

## 📋 Prerequisites
- **PHP**: >= 8.2 (Laravel 12 typically requires modern PHP versions)
- **Extensions**: BCMath, Ctype, Fileinfo, JSON, Mbstring, OpenSSL, PDO, Tokenizer, XML

## 🚀 General Commands

| Command | Description |
|---------|-------------|
| `php artisan list` | List all available commands |
| `php artisan help [command]` | Display help for a specific command |
| `php artisan about` | Display basic information about the application |
| `php artisan serve` | Start the development server at http://localhost:8000 |
| `php artisan down` | Put the application into maintenance mode |
| `php artisan up` | Bring the application out of maintenance mode |
| `php artisan env` | Display the current framework environment |
| `php artisan docs` | Open the Laravel documentation in the browser |

## 🛠 Scaffolding (Make)

| Command | Description |
|---------|-------------|
| `php artisan make:model ModelName` | Create a new Eloquent model |
| `php artisan make:model ModelName -mcr` | Create model with migration, controller, and resource |
| `php artisan make:controller NameController` | Create a new controller class |
| `php artisan make:controller NameController --api` | Create an API controller |
| `php artisan make:migration create_users_table` | Create a new migration file |
| `php artisan make:seeder UserSeeder` | Create a new database seeder |
| `php artisan make:factory UserFactory` | Create a new model factory |
| `php artisan make:middleware CheckAge` | Create a new middleware |
| `php artisan make:request StoreUserRequest` | Create a form request validation class |
| `php artisan make:resource UserResource` | Create an API resource |
| `php artisan make:test UserTest` | Create a new test class |
| `php artisan make:component Alert` | Create a new view component |

## 🗄 Database & Migrations

| Command | Description |
|---------|-------------|
| `php artisan migrate` | Run pending migrations |
| `php artisan migrate:rollback` | Rollback the last batch of migrations |
| `php artisan migrate:fresh` | Drop all tables and re-run all migrations |
| `php artisan migrate:fresh --seed` | Drop tables, re-run migrations, and seed database |
| `php artisan migrate:status` | Show the status of each migration |
| `php artisan db:seed` | Seed the database with records |
| `php artisan db:seed --class=UserSeeder` | Run a specific seeder |
| `php artisan db:wipe` | Drop all tables, views, and types |
| `php artisan db` | Start a new database CLI session (SQL shell) |
| `php artisan db:show` | Display information about the database |
| `php artisan db:table users` | Display information about the users table |

## 🧹 Cache & Optimization

| Command | Description |
|---------|-------------|
| `php artisan optimize` | Cache framework bootstrap files (config, routes) |
| `php artisan optimize:clear` | Remove all cached bootstrap files |
| `php artisan config:cache` | Create a cache file for faster configuration loading |
| `php artisan config:clear` | Remove the configuration cache file |
| `php artisan route:cache` | Create a route cache file for faster route registration |
| `php artisan route:clear` | Remove the route cache file |
| `php artisan view:cache` | Compile all of the application's Blade templates |
| `php artisan view:clear` | Clear all compiled view files |
| `php artisan event:cache` | Discover and cache the application's events and listeners |

## 🧪 Testing & Debugging

| Command | Description |
|---------|-------------|
| `php artisan test` | Run the application's tests (Pest/PHPUnit) |
| `php artisan test --filter UserTest` | Run a specific test class |
| `php artisan tinker` | Interact with the application using a REPL |
| `php artisan route:list` | List all registered routes |
| `php artisan model:show User` | Show information about a specific model |
| `php artisan model:prune` | Prune models that are no longer needed |

## 📦 Dependency Management (Composer)

| Command | Description |
|---------|-------------|
| `composer install` | Install dependencies from `composer.lock` |
| `composer update` | Update dependencies based on `composer.json` |
| `composer require package/name` | Add a new package to the project |
| `composer dump-autoload` | Regenerate the autoloader |

## 🔑 Security

| Command | Description |
|---------|-------------|
| `php artisan key:generate` | Set the application key |
| `php artisan auth:clear-resets` | Flush expired password reset tokens |

## 🌐 Other Useful Commands

| Command | Description |
|---------|-------------|
| `php artisan storage:link` | Create a symbolic link from `public/storage` to `storage/app/public` |
| `php artisan schedule:work` | Run the scheduled commands locally |
| `php artisan queue:work` | Start processing jobs on the queue daemon |
| `php artisan vendor:publish` | Publish any publishable assets from vendor packages |
