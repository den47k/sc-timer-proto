<?php

namespace Database\Seeders;

use App\Models\Solve;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = User::factory()->create([
            'name' => 'den47k',
            'email' => 'admin@blog.com',
            'password' => bcrypt('qwer1234'),
        ]);

        Solve::factory()->count(100)->create();
    }
}
