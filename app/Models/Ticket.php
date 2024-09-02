<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;
class Ticket extends Model
{
    protected $guarded = [];

    public function event(): BelongsTo
    {
        return $this->belongsTo(Event::class);
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class)
            ->withPivot('count') // Include the 'count' field from the pivot table
            ->withTimestamps();
    }
}
