<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    //
    protected $qith = ['category'];

    public function category(){

        return $this->belongsTo(Category::class);

    }

}
