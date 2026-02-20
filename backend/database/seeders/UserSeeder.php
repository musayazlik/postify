<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create a test user with specific credentials
        // Using updateOrCreate to prevent duplicates if seeder runs multiple times
        User::updateOrCreate(
            ['email' => 'test@example.com'],
            [
                'name' => 'Test User',
                'password' => Hash::make('password'), // Explicitly hashing
                'email_verified_at' => now(),
            ]
        );

        // Create random users using the factory
        User::factory(10)->create();
    }
}
