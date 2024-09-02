@extends('master')

@section('title')
        {{'بيانات تأكيد الحجز'}}
@endsection

@section('links')
    <script src=" https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js "></script>
@endsection

@section('content')

    <header class="bg-body 2lg:mb-0 mb-1 py-2">
        <div class="2lg:px-6 container flex max-w-screen-2xl items-center justify-between gap-2">
{{--            <div>--}}
{{--                <button--}}
{{--                    class="ring-text text-text ring-offset-body relative justify-center overflow-hidden px-4 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md hover:bg-primary/10 -mx-1 min-h-[30px] min-w-[36px] shrink-0 gap-2 !px-1 py-1 text-sm hover:opacity-60 focus:ring-1 2lg:flex mb-0 hidden items-start ltr:mr-1 rtl:mr-1">--}}
{{--                    <img src="/icons/common/arrow.svg" width="20" height="20" class="ltr:rotate-180" alt="العودة"><span--}}
{{--                        class="ltr:pr-2 rtl:pl-2">العودة</span></button>--}}
{{--                <button--}}
{{--                    class="ring-text text-text ring-offset-body relative overflow-hidden px-4 transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md hover:bg-primary/10 -mx-1 flex min-h-[30px] min-w-[36px] shrink-0 items-center gap-2 !px-1 py-1 text-sm hover:opacity-60 mb-0 justify-start text-left ring-0 focus:ring-0 rtl:text-right">--}}
{{--                    <div class="mt-1.5 flex shrink-0 grow items-center gap-2"><img--}}
{{--                            class="h-12 shrink-0 items-start overflow-hidden rounded-md"--}}
{{--                            src="https://images.ctfassets.net/vy53kjqs34an/210hbsogyWqmrQTxVwC6Ib/486cff00dbd2ab978dc61ca0387f98d9/1280x1280.jpg"--}}
{{--                            width="50" height="50" alt="انضم الى تامر حسني في الرياض - جولة المملكة 2024"></div>--}}
{{--                    <div class="2lg:space-y-1 space-y-px"><h1 class="2lg:text-lg line-clamp-2 text-sm">انضم الى تامر--}}
{{--                            حسني في الرياض - جولة المملكة 2024</h1>--}}
{{--                        <div>--}}
{{--                            <div class="flex items-start gap-1.5 uppercase 2lg:text-xs !line-clamp-1 text-[10px]"><p--}}
{{--                                    data-testid="event-date">10 أغسطس 2024 - 9:00 م</p></div>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </button>--}}
{{--            </div>--}}
{{--            <div--}}
{{--                class="mt-1 flex shrink-0 items-center gap-4 [&amp;>button]:text-xs [&amp;>button]:text-zinc-400 md:[&amp;>button]:text-base">--}}
{{--                <button--}}
{{--                    class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center overflow-hidden px-4 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md gap-1 py-1 uppercase underline-offset-2 hover:underline"--}}
{{--                    data-testid="lang-switcher" data-location="header" data-target-language="en" role="menuitem"><span--}}
{{--                        class="ltr:font-vazirmatn rtl:font-gellix hidden md:block">English</span><span--}}
{{--                        class="ltr:font-vazirmatn rtl:font-gellix md:hidden">English</span></button>--}}
{{--            </div>--}}
        </div>
    </header>
    <div
        class="2lg:my-0 mx-auto my-8 w-full max-w-lg grow overflow-hidden shadow-2xl [&amp;>div>div]:rounded-none [&amp;>div>div]:md:rounded-lg">
        <div class="bg-body-light overflow-hidden rounded-lg p-4">
            <div class="mb-4 flex items-start justify-center gap-2">
                <div class="text-2xl font-bold">أدخل بياناتك لتأكيد الحجز</div>
            </div>
            <div style="opacity: 1; transform: none;">
                <form id="user_info" name="user_info_form" method="POST" action="{{ route('create-order') }}" class="" data-gtm-form-interact-id="0">
                    @csrf
                    <div>
                        <label class="block pb-1 font-semibold "><span
                                class="font-semibold">الإسم بالكامل</span></label>
                        <div class="relative">
                            <input
                                class="bg-input/20 hover:bg-input/30 focus:bg-input/30 w-full border
                                 p-2 placeholder:text-gray-400 focus:outline-none focus:ring-0

                                   border-input/20 focus:border-input/30 rounded-md ltr:pr-6 rtl:pl-6 rtl:text-right"
                                type="text" name="user_name" placeholder="الإسم بالكامل"
                                data-gtm-form-interact-field-id="0" required>
                        </div>
                    </div>
                    <div class="h-4"></div>

                    <div>
                        <label class="block pb-1 font-semibold "><span
                                class="font-semibold">البريد الإلكتروني</span></label>
                        <div class="relative">
                            <input
                                class="bg-input/20 hover:bg-input/30 focus:bg-input/30 w-full border
                                 p-2 placeholder:text-gray-400 focus:outline-none focus:ring-0
                                  disabled:bg-input/10 disabled:text-text/60 disabled:cursor-not-allowed
                                   border-input/20 focus:border-input/30 rounded-md ltr:pr-6 rtl:pl-6 rtl:text-right"
                                type="email" name="email" placeholder="البريد الإلكتروني"
                                data-gtm-form-interact-field-id="0" required>
                        </div>
                    </div>
                    <div class="h-4"></div>

                    <div>
                        <label class="block pb-1 font-semibold "><span
                                class="font-semibold">رقم المحمول</span></label>
                        <div class="relative">
                            <input
                                class="bg-input/20 hover:bg-input/30 focus:bg-input/30 w-full border
                                 p-2 placeholder:text-gray-400 focus:outline-none focus:ring-0
                                  disabled:bg-input/10 disabled:text-text/60 disabled:cursor-not-allowed
                                   border-input/20 focus:border-input/30 rounded-md ltr:pr-6 rtl:pl-6 rtl:text-right"
                                type="text" name="phone" placeholder="966512345678"
                                data-gtm-form-interact-field-id="0" required>
                        </div>
                    </div>
                    <input type="hidden" id="orderId" name="orderId" value="">
                    <div class="h-4"></div>

                    <button
                        class="bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast focus:ring-1 ring-offset-2
                         ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition
                           rounded-md mt-4 w-full"
                        type="submit"   id="submitButton"><span class="text-xl font-bold">تأكيد</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
@endsection

@section('scripts')

    <script>
        // script.js

        const data = JSON.parse(sessionStorage.getItem('order-tickets'));
        if (data == null){
            window.location.href = `{{route('home')}}`;
        }
        console.log(data); // Use the data as needed

        $('#orderId').val(data);
    </script>
@endsection




