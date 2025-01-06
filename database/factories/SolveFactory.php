<?php

namespace Database\Factories;

use App\Enums\Event;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Solve>
 */
class SolveFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => 1,
            'event' => $this->faker->randomElement(Event::toArray()),
            'time' => $this->faker->randomFloat(3, 7, 10),
            'scramble' => 'L2 R2 F R2 D2 L2 F2 D2 F2 D2 U2 F\' D L R2 D2 U L D2 L2 F2',
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ];
    }
}
