<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\HasMany;
class Category extends Model
{
    protected $guarded = [];

    public function events(): HasMany
    {
        return $this->hasMany(Event::class)->orderByDesc('created_at')->limit(1);
    }
}
