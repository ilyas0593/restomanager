<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        \App\User::create([
            'name' => 'Ilyas Bendaas',
            'email' => 'ilyesben93@live.fr',
            'password' => bcrypt('password'),
        ]);

    }
}
