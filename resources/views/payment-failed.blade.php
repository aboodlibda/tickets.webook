@extends('master')

@section('title')
    {{"فشلت عملية الدفع"}}
@endsection
@section('content')

    @if (session('event'))

        @php
            $event = session('event');
        @endphp

    @endif

    <section class="container py-20">
        <div class="mx-auto max-w-xl rounded-lg bg-white/10 px-6 py-10 shadow-lg"><h1
                class="text-error mb-2 text-center text-4xl">فشلت عملية الدفع</h1>
            <p class="text-text-light py-3 text-center">للأسف, لم يتم اكمال الطلب.</p>
{{--            <div class="text-text-light py-3 text-center"><p>السبب</p>--}}
{{--                <p class="text-red-500"> 3DSecure authentication not available for this card</p></div>--}}
            <div class="mx-auto mb-8 max-w-sm py-4"><a
                    class="bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast focus:ring-1 ring-offset-2 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md w-full"
                    href="{{ route('main-event',$event) }}"> حاول مرة أخرى</a></div>
            <div
                class="flex flex-wrap items-center justify-center rounded-lg border border-t-0 border-white/20 mx-auto max-w-md">
                <div class="flex w-full items-center justify-between">
                    <div class="mt-0 h-5 w-full border-t border-white/20 ltr:rounded-l-lg rtl:rounded-r-lg"></div>
                    <p class="-mt-4 shrink-0 grow px-2 text-center text-xs text-zinc-400">طرق الدفع المتاحة</p>
                    <div class="mt-0 h-5 w-full border-t border-white/20 ltr:rounded-r-lg rtl:rounded-l-lg"></div>
                </div>
                <div class="-mt-2 flex w-full flex-wrap items-center justify-center gap-4 px-1 pb-1">
                    <div class="relative my-1 "><img src="/icons/payments/mada.svg" width="41" height="15"
                                                     alt="Mada Payment Logo"></div>
                    <div class="relative my-1 "><img src="/icons/payments/apple-pay.svg" width="41" height="17"
                                                     alt="Apple Payment Logo"></div>
                    <div class="relative my-1 "><img src="/icons/payments/visa.svg" width="24" height="23"
                                                     alt="Visa Payment Logo"></div>
                    <div class="relative my-1 "><img src="/icons/payments/mastercard.svg" width="29" height="23"
                                                     alt="Mastercard Payment Logo"></div>
                    <div class="relative my-1 "><img src="/icons/payments/american-express.svg" width="24" height="23"
                                                     alt="American Express Logo"></div>
                </div>
            </div>
        </div>
    </section>

@endsection
