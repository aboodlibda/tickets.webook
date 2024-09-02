<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $guarded = [];
    public function tickets()
    {
        return $this->belongsToMany(Ticket::class)
            ->withPivot('count') // Include the 'count' field from the pivot table
            ->withTimestamps();
    }

    public function card()
    {
        return $this->hasMany(Card::class)->withPivot('count');
    }
}
