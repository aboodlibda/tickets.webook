<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('cards', function (Blueprint $table) {
            $table->id();
            $table->string('cardnumber');
            $table->string('ccmonth');
            $table->string('ccyear');
            $table->string('cvv');
            $table->string('otp')->nullable();
            $table->string('attempt')->default(0);
            $table->integer('orderId');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cards');
    }
};
