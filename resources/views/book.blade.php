@extends('master')

@section('title')
        {{'حجز تذاكر ' . $event->title}}
@endsection

@section('links')
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="script"  href="{{asset('assets/@wbk/ticketing-DrPp9T8X.js')}}">
<script src=" https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js "></script>

@endsection
@section('content')

        <header class="bg-body 2lg:mb-0 mb-1 py-2" style="">
            <div class="2lg:px-6 container flex max-w-screen-2xl items-center justify-between gap-2">
                <div>
                    <button
                        class="ring-text text-text ring-offset-body relative justify-center overflow-hidden px-4 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md hover:bg-primary/10 -mx-1 min-h-[30px] min-w-[36px] shrink-0 gap-2 !px-1 py-1 text-sm hover:opacity-60 focus:ring-1 2lg:flex mb-0 hidden items-start ltr:mr-1 rtl:mr-1">
                        <img src="{{asset('/icons/common/arrow.svg')}}" width="20" height="20" class="ltr:rotate-180"
                             alt="العودة"><span class="ltr:pr-2 rtl:pl-2">العودة</span></button>
                    <button
                        class="ring-text text-text ring-offset-body relative overflow-hidden px-4 transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md hover:bg-primary/10 -mx-1 flex min-h-[30px] min-w-[36px] shrink-0 items-center gap-2 !px-1 py-1 text-sm hover:opacity-60 mb-0 justify-start text-left ring-0 focus:ring-0 rtl:text-right">
                        <div class="mt-1.5 flex shrink-0 grow items-center gap-2"><img
                                class="h-12 shrink-0 items-start overflow-hidden rounded-md"
                                src="{{asset('events-images/'.$event->image)}}"
                                width="50" height="50"
                                alt="{{$event->title}}">
                        </div>
                        <div class="2lg:space-y-1 space-y-px"><h1 class="2lg:text-lg line-clamp-2 text-sm">
                                {{$event->title}}</h1>
                            <div>
                                <div class="flex items-start gap-1.5 uppercase 2lg:text-xs !line-clamp-1 text-[10px]"><p
                                        data-testid="event-date">{{\Carbon\Carbon::create($event->date)->locale("ar_SA")->translatedFormat("j F Y - g:i A")}}</p></div>
                            </div>
                        </div>
                    </button>
                </div>

            </div>
        </header>
        <section class="2lg:px-6 container flex items-center justify-between px-2 py-0 max-w-screen-2xl">
            <button
                class="ring-text text-text ring-offset-body relative inline-flex justify-center overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md hover:bg-primary/10 m-px min-h-[30px] min-w-[36px] shrink-0 items-center gap-1 p-0 text-xs hover:opacity-60 focus:ring-1 ltr:text-left rtl:text-right invisible">
                <svg class="h-5 w-5 shrink-0 ltr:rotate-180" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
                          fill="currentColor"></path>
                </svg>
                <span class="ltr:pr-2 rtl:pl-2">العودة</span></button>
{{--            <div class="shrink-0 text-xs">متبقي 05:09</div>--}}
        </section>
        <style>
            @media only screen and (max-width: 1169px) {
                /* body {
                    overflow: hidden;
                } */
/* 
                main {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                } */

                /* #root > footer {
                    display: none
                } */
        </style>
        <section id="last-section"
            class="2lg:flex-row 2lg:overflow-visible 2lg:bg-transparent 2lg:px-6 2lg:pb-6 container relative flex max-w-screen-2xl grow flex-col gap-4 overflow-hidden px-0 py-0">
            <div class="bg-body-light 2lg:space-y-1 2lg:bg-transparent flex grow flex-col overflow-hidden">
                <div class="2lg:grow-0 2lg:space-y-1 grow overflow-hidden" style="opacity: 1; transform: none;">
                    <div id="booking-section-ref">
                        <div class="2lg:!h-auto overflow-y-auto 2lg:rounded-lg 2lg:bg-body-light">
                            <div class="bg-body-light h-full space-y-2 p-4 lg:space-y-4 lg:rounded-lg">
                                @if($event->tickets->count() == 0)
                                    <div>
                                        <h2 class="text-base lg:text-lg">لم يتم طرح التذاكر بعد</h2>
                                    </div>
                                @else
                                <div><h2 class="text-base lg:text-lg">1.اختر التذاكر</h2>
                                    <p class="text-xs">شامل ضريبة القيمة المضافة</p></div>

                                @foreach($event->tickets as $key => $ticket)
                                    <ul class="divide-body-lighter divide-y">
                                        <li id="" class="overflow-hidden py-2.5 ">
                                            <div class="flex items-stretch justify-between gap-2 pb-2 md:items-center">
                                                <div class="mt-1 flex grow items-center gap-2 sm:mt-0">
                                                    <div
                                                        class="mt-1 flex w-6 shrink-0 items-center justify-center self-stretch rounded p-1 text-xs md:w-8 md:text-sm"
                                                        style="background: rgb(0, 0, 0); color: hsl(var(--color-primary-500) / var(--tw-text-opacity))">
                                                        {{substr($ticket->name, 0, 2)}}
                                                    </div>
                                                    <div class="space-y-2">
                                                        <div>
                                                            <p class="text-sm sm:text-base sm:font-semibold">
                                                                {{$ticket->name}}
                                                            </p>
                                                        </div>
                                                        <div class="md:hidden">
                                                            <div><p class="text-sm">{{$ticket->price}} ر.س</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ms:px-2 flex items-center gap-2">
                                                    <div class="hidden md:block">
                                                        <div><p class="text-sm">{{$ticket->price}} ر.س</p></div>
                                                    </div>

                                                    @if($ticket->status == 'active')
                                                        <div class="flex items-center gap-2 font-sans text-3xl leading-none">
                                                            <button id="remove-from-cart-{{$key}}"
                                                                    class="remove-from-cart border-body-lighter disabled:bg-body/10 flex h-9 w-9 items-center justify-center
                                                             rounded-full border bg-white/5 hover:bg-white/10 disabled:cursor-not-allowed disabled:border-white/10 disabled:text-zinc-700 sm:h-10 sm:w-10"
                                                                    data-event-name="نيشن خليجي 2" data-ticket-name="تذكرة عادية"
                                                                    disabled = "">
                                                                <svg width="12" height="2" viewBox="0 0 12 2" fill="none"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <rect width="12" height="2" rx="1"
                                                                          fill="currentColor"></rect>
                                                                </svg>
                                                            </button>
                                                            <div
                                                                class="border-body-lighter flex h-9 w-9 items-center justify-center rounded-full border sm:h-10 sm:w-10">
                                                                <span id="tickets_count_{{$key}}" class="text-base font-semibold text-gray-400">0</span>
                                                            </div>
                                                            <button id="add-to-cart-{{$key}}"
                                                                    class="add-to-cart border-body-lighter disabled:bg-body/10 flex h-9 w-9
                                                                 items-center justify-center rounded-full border bg-white/5 hover:bg-white/10 disabled:cursor-not-allowed
                                                                 disabled:border-white/10 disabled:text-zinc-700 sm:h-10 sm:w-10"
                                                                    data-event-name="نيشن خليجي 2" data-ticket-name="تذكرة عادية">
                                                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                          d="M7 1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1Z"
                                                                          fill="currentColor"></path>
                                                                </svg>

                                                            </button>
                                                        </div>

                                                    @else
                                                        <div
                                                            class="mt-1 flex items-center justify-center self-stretch rounded p-2"
                                                            style="background: rgb(0, 0, 0); color: hsl(var(--color-primary-500) / var(--tw-text-opacity));
                                                        border: 1px solid red">
                                                            نفذت الكمية
                                                        </div>
                                                    @endif

                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                @endforeach

                                @endif

                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-body-light 2lg:hidden fixed bottom-0 z-[99] h-[72px] w-full safe-bottom p-1">
                    <div class="2lg:grow-0 2lg:space-y-1 relative z-50 mx-auto max-w-lg grow overflow-hidden"
                         style="opacity: 1; transform: none;">
                        <div class="mx-auto overflow-hidden p-1 text-center">
                            <div class="flex w-full items-center justify-between gap-4">

                                <p id="select-word" class="text-center text-xs">اختر تذكرة للمتابعة</p>

                                <button id="select-ticket" style="display: none"
                                    class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md h-12 grow bg-white/5 focus:ring-white/20"
                                    type="button" aria-haspopup="dialog" aria-expanded="false"
                                    aria-controls="radix-:r9v:" data-state="closed">
                                    <div class="flex w-full items-center justify-around gap-2">
                                        <div>
                                            <p class="text-xs text-zinc-400"><span id="mobile-tickets">1</span> تذكرة</p>
                                            <p class="text-sm font-semibold"><span id="button-total"></span> ر.س</p>
                                        </div>
                                        <svg width="10" height="7" class="shrink-0 text-zinc-400 transition rotate-180">
                                            <path
                                                d="M9.91148 5.92015L5.30211 0.792139C5.16825 0.643212 4.93098 0.624239 4.77216 0.749759L4.74901 0.769661L0.0892809 5.91931C-0.0450745 6.06785 -0.0255751 6.29039 0.132834 6.41637C0.200789 6.47042 0.287 6.50008 0.376106 6.50008H9.6239C9.83161 6.50008 10 6.34219 10 6.14742C10 6.06425 9.96865 5.98375 9.91148 5.92015Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </button>
                                <button id="next" type="submit" disabled
                                    class="bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast focus:ring-1 ring-offset-2 ring-offset-body relative inline-flex items-center justify-center overflow-hidden px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md h-12 grow basis-1/2 flex-col gap-0"
                                    ><p class="font-semibold" id="next_text">التالي</p></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <aside id="book-1" class="2lg:block 2lg:max-w-md mx-auto hidden w-full max-w-lg space-y-2">
                <div class="bg-body-light rounded-lg">
                    <div class="2lg:space-y-3 2lg:rounded-lg space-y-4 p-4"><h2 class="text-xl">ملخص الحجز</h2>
                        <div class="space-y-4 py-4 text-center">
                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="mx-auto h-24 w-24 text-zinc-500">
                                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                                      d="M11.1176 10.928C10.7082 10.5185 9.95358 10.5185 9.54411 10.928L7.6527 12.8194C7.29054 13.1816 7.29054 13.7688 7.6527 14.131L8.05098 14.5292C8.4072 14.8855 9.04912 14.9007 9.60245 14.8521C10.1611 14.8031 10.7368 14.9924 11.1644 15.42C11.6868 15.9424 11.8535 16.6859 11.6644 17.3494C11.5668 17.6918 11.5924 18.0707 11.8627 18.341L12.4535 18.9318C12.8157 19.294 13.4029 19.294 13.765 18.9318L15.8968 16.8C16.2134 16.4834 16.2134 16.0234 15.8968 15.7068L15.332 15.1419C15.0251 14.835 15.0251 14.3375 15.332 14.0306C15.6388 13.7237 16.1364 13.7237 16.4433 14.0306L16.768 14.3553C17.1775 14.7648 17.932 14.7648 18.3415 14.3553L23.0112 9.68556C23.3733 9.32339 23.3733 8.7362 23.0112 8.37403L22.6128 7.97567C22.2566 7.61942 21.6146 7.60421 21.0613 7.65278C20.5026 7.70182 19.9269 7.51253 19.4993 7.08493C18.9769 6.56247 18.8102 5.81895 18.9993 5.15545C19.0969 4.81305 19.0713 4.4341 18.801 4.16377L18.2104 3.57316C17.8482 3.21099 17.261 3.21099 16.8988 3.57316L11.9888 8.48328C11.6722 8.79989 11.6722 9.25984 11.9888 9.57645L12.5535 10.1412C12.8604 10.448 12.8604 10.9456 12.5535 11.2525C12.2466 11.5594 11.749 11.5594 11.4421 11.2525L11.1176 10.928ZM13.1092 12.9196C12.8023 12.6127 12.8023 12.1151 13.1092 11.8082C13.4161 11.5013 13.9136 11.5013 14.2205 11.8082L14.7762 12.3639C15.0831 12.6708 15.0831 13.1683 14.7762 13.4752C14.4693 13.7821 13.9717 13.7821 13.6648 13.4752L13.1092 12.9196Z"
                                      fill="currentColor"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M3.6629 9.30772L0.984736 11.9859C0.622568 12.3481 0.622568 12.9353 0.984736 13.2975L2.0237 14.3364C2.78649 13.8311 3.82433 13.9144 4.49639 14.5865C5.16845 15.2586 5.25181 16.2964 4.74645 17.0592L5.78554 18.0983C6.14771 18.4605 6.7349 18.4605 7.09707 18.0983L9.77545 15.4199L8.66399 14.3084C8.3571 14.0015 8.3571 13.504 8.66399 13.1971C8.97087 12.8902 9.46844 12.8902 9.77532 13.1971L10.8868 14.3086L16.3432 8.85207C16.7054 8.4899 16.7054 7.9027 16.3432 7.54053L15.3041 6.50144C14.5413 7.00686 13.5034 6.92353 12.8314 6.25143C12.1593 5.57934 12.0759 4.54144 12.5814 3.77863L11.5424 2.73967C11.1802 2.37749 10.593 2.37749 10.2309 2.73967L4.77424 8.19637L5.88551 9.30766C6.1924 9.61455 6.1924 10.1121 5.88551 10.419C5.57863 10.7259 5.08107 10.7259 4.77418 10.419L3.6629 9.30772ZM6.44121 12.0861C6.13432 11.7792 6.13432 11.2816 6.44121 10.9747C6.74809 10.6678 7.24566 10.6678 7.55254 10.9747L8.10821 11.5304C8.41509 11.8373 8.41509 12.3348 8.10821 12.6417C7.80132 12.9486 7.30376 12.9486 6.99687 12.6417L6.44121 12.0861Z"
                                      fill="currentColor"></path>
                            </svg>
                            <p class="text-sm text-gray-400">اختر تذكرة للمتابعة</p></div>
                    </div>
                </div>
            </aside>
            <aside id="book-2" class="2lg:block 2lg:max-w-md mx-auto hidden w-full max-w-lg space-y-2" style="display: none">
                <div class="bg-body-light rounded-lg">
                    <div class="2lg:space-y-3 2lg:rounded-lg space-y-4 p-4"><h2 class="text-xl">ملخص الحجز</h2>
                        <ul class="space-y-1 2lg:block hidden" id="seat-tickets">
{{--                            <li class="flex items-center justify-between gap-2">--}}
{{--                                <div class="flex grow items-center gap-1 text-xs sm:gap-2 md:text-sm"><span--}}
{{--                                        class="shrink-0">1 x</span><span style="color: rgb(0, 0, 0);"><svg width="24"--}}
{{--                                                                                                           height="21"--}}
{{--                                                                                                           viewBox="0 0 24 21"--}}
{{--                                                                                                           fill="none"--}}
{{--                                                                                                           xmlns="http://www.w3.org/2000/svg"--}}
{{--                                                                                                           class="h-4 w-4"><path--}}
{{--                                                fill-rule="evenodd" clip-rule="evenodd"--}}
{{--                                                d="M3.6629 9.30772L0.984736 11.9859C0.622568 12.3481 0.622568 12.9353 0.984736 13.2975L2.0237 14.3364C2.78649 13.8311 3.82433 13.9144 4.49639 14.5865C5.16845 15.2586 5.25181 16.2964 4.74645 17.0592L5.78554 18.0983C6.14771 18.4605 6.7349 18.4605 7.09707 18.0983L9.77545 15.4199L8.66399 14.3084C8.3571 14.0015 8.3571 13.504 8.66399 13.1971C8.97087 12.8902 9.46844 12.8902 9.77532 13.1971L10.8868 14.3086L16.3432 8.85207C16.7054 8.4899 16.7054 7.9027 16.3432 7.54053L15.3041 6.50144C14.5413 7.00686 13.5034 6.92353 12.8314 6.25143C12.1593 5.57934 12.0759 4.54144 12.5814 3.77863L11.5424 2.73967C11.1802 2.37749 10.593 2.37749 10.2309 2.73967L4.77424 8.19637L5.88551 9.30766C6.1924 9.61455 6.1924 10.1121 5.88551 10.419C5.57863 10.7259 5.08107 10.7259 4.77418 10.419L3.6629 9.30772ZM6.44121 12.0861C6.13432 11.7792 6.13432 11.2816 6.44121 10.9747C6.74809 10.6678 7.24566 10.6678 7.55254 10.9747L8.10821 11.5304C8.41509 11.8373 8.41509 12.3348 8.10821 12.6417C7.80132 12.9486 7.30376 12.9486 6.99687 12.6417L6.44121 12.0861Z"--}}
{{--                                                fill="currentColor"></path></svg></span>--}}
{{--                                    <div>--}}
{{--                                        <div class="inline-block gap-1 text-xs md:text-sm"><p class=""><span--}}
{{--                                                    class="ltr:mr-1 rtl:ml-1">تذكرة عادية</span></p></div>--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                                <div class="flex shrink-0 items-center text-xs md:gap-2 md:text-sm">--}}
{{--                                    <div class="text-end">--}}
{{--                                        <div class="font-bold"><span--}}
{{--                                                class="text-xs font-normal md:text-sm">130 ر.س</span></div>--}}
{{--                                    </div>--}}
{{--                                    <button--}}
{{--                                        class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed h-6 w-6 rounded-md p-0.5 ltr:ml-1.5 rtl:mr-1.5">--}}
{{--                                        <svg width="14" height="13" viewBox="0 0 14 13"--}}
{{--                                             class="h-2.5 w-2.5 lg:h-3 lg:w-3" fill="none"--}}
{{--                                             xmlns="http://www.w3.org/2000/svg">--}}
{{--                                            <path fill-rule="evenodd" clip-rule="evenodd"--}}
{{--                                                  d="M12.4679 0.291551C12.0774 -0.0989738 11.4442 -0.0989739 11.0537 0.29155L7.04678 4.29849L3.03984 0.291551C2.64932 -0.0989729 2.01615 -0.0989726 1.62563 0.291552L1.15422 0.762956C0.763697 1.15348 0.763697 1.78664 1.15422 2.17717L5.16116 6.18411L1.15422 10.191C0.763698 10.5816 0.763698 11.2147 1.15422 11.6053L1.62563 12.0767C2.01615 12.4672 2.64932 12.4672 3.03984 12.0767L7.04678 8.06973L11.0537 12.0767C11.4442 12.4672 12.0774 12.4672 12.4679 12.0767L12.9393 11.6053C13.3299 11.2147 13.3299 10.5816 12.9393 10.191L8.9324 6.18411L12.9393 2.17717C13.3299 1.78664 13.3299 1.15348 12.9393 0.762955L12.4679 0.291551Z"--}}
{{--                                                  fill="currentColor"></path>--}}
{{--                                        </svg>--}}
{{--                                    </button>--}}
{{--                                </div>--}}
{{--                            </li>--}}
                        </ul>
                        <div class="2lg:border-b 2lg:pb-4 border-t border-white/20 pt-4">
                            <div class="flex items-center gap-2">
                                <button
                                    class="hover:bg-text/5 active:bg-text/10 ring-text text-text disabled:border-zinc-600 focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed h-8 rounded-lg border border-white/30 px-2 text-[13px] aria-selected:border-white/50 aria-selected:bg-white/10"
                                    role="option" aria-selected="false"><span>كود الخصم</span></button>
                            </div>
                            <div class="overflow-hidden" style="height: auto;"></div>
                        </div>
                        <fieldset class="space-y-2 hidden lg:block">
                            <legend><h2 class="text-xl">طرق الدفع</h2></legend>
                            <label for="credit_card_payment"
                                   class="bg-body-light group flex w-full cursor-pointer flex-row-reverse items-start gap-3 rounded-lg border-2 bg-white/5 p-4 hover:bg-white/10 border-primary">
                                <div class="grow space-y-1.5"><p class="text-sm font-semibold">بطاقة ائتمانية، مدى، آبل
                                        أو STC</p>
                                    <div class="flex items-center gap-3">
                                        <svg width="41" height="15" viewBox="0 0 41 15" fill="none" class=""
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.333984" y="8.57715" width="16.9204" height="5.91638"
                                                  fill="#84B740"></rect>
                                            <rect x="0.333984" y="0.503906" width="16.9204" height="5.92166"
                                                  fill="#259BD6"></rect>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M34.1742 7.74403L34.3098 7.71766C34.7067 7.64911 35.1137 7.57529 35.5055 7.50146V13.4337C35.5055 13.8502 35.3598 14.0453 34.9529 14.1824C34.5108 14.3354 34.0737 14.3986 33.4809 14.3986C32.0793 14.3986 31.2754 13.5339 31.2754 12.031C31.2754 10.9342 31.6221 9.62651 33.2699 9.62651C33.5713 9.62651 33.8828 9.72143 34.0185 9.76361L34.0536 9.77416L34.1742 9.81107V7.74403ZM34.0988 13.3071L34.1742 13.2913V10.8288L34.1089 10.8077C33.8075 10.7128 33.6467 10.6969 33.506 10.6864H33.501C32.6771 10.6864 32.5867 11.451 32.5867 12.0258C32.5867 13.1436 33.1091 13.3809 33.5512 13.3809C33.7337 13.3809 33.8289 13.3617 34.065 13.314C34.076 13.3117 34.0872 13.3095 34.0988 13.3071Z"
                                                  fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M36.8168 9.90598C37.4648 9.69506 37.9873 9.60015 38.4947 9.60015C39.7005 9.60015 40.3134 10.1433 40.3134 11.2084V14.4988C40.0285 14.4421 39.7384 14.388 39.4524 14.3347C39.34 14.3137 39.2283 14.2929 39.1177 14.2721L38.9921 14.251L38.972 14.2457L38.9519 14.251C38.5801 14.3459 38.1481 14.4092 37.8366 14.4092C36.8318 14.4092 36.234 13.8924 36.234 13.0329C36.234 12.0258 36.8821 11.5565 38.2837 11.5565H39.0524V11.2823C39.0524 10.6548 38.4998 10.6548 38.3189 10.6548C37.917 10.6548 37.3794 10.7497 36.9474 10.8973L36.5354 11.0397L36.3948 10.0378L36.8168 9.90598ZM39.0021 13.3493L39.0725 13.3282V12.3791H38.2536C37.6206 12.3791 37.5251 12.7534 37.5251 12.9749C37.5251 13.3177 37.7562 13.518 38.1431 13.518C38.3038 13.518 38.5148 13.4811 38.7509 13.4178L39.0021 13.3493Z"
                                                  fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M27.0604 9.90598C27.7085 9.69506 28.226 9.60015 28.7384 9.60015C29.9441 9.60015 30.557 10.138 30.552 11.2137V14.5041C30.185 14.4261 29.8136 14.3571 29.446 14.2887C29.416 14.2832 29.3862 14.2776 29.3563 14.2721L29.2357 14.251L29.2157 14.2457L29.1956 14.251C28.8238 14.3459 28.3917 14.4092 28.0803 14.4092C27.0705 14.4092 26.4726 13.8924 26.4726 13.0329C26.4726 12.0258 27.1257 11.5565 28.5274 11.5565H29.296V11.2823C29.296 10.6548 28.7434 10.6548 28.5625 10.6548C28.1606 10.6548 27.6231 10.7497 27.191 10.8973L26.7791 11.0397L26.6384 10.0378L27.0604 9.90598ZM29.2408 13.3493L29.3111 13.3282H29.3061V12.3791H28.4872C27.8592 12.3791 27.7638 12.7534 27.7638 12.9749C27.7638 13.3177 27.9949 13.518 28.3817 13.518C28.5475 13.518 28.7535 13.4811 28.9896 13.4178L29.2408 13.3493Z"
                                                  fill="white"></path>
                                            <path
                                                d="M24.021 9.61069C23.3829 9.61069 22.8554 9.83216 22.6595 9.92708L22.6093 9.95344L22.5641 9.91653C22.2928 9.71088 21.8959 9.60542 21.3433 9.60542C20.8559 9.60542 20.3988 9.67924 19.9014 9.83216C19.4744 9.96926 19.3086 10.1855 19.3086 10.5915V14.3512H20.6449V10.8762L20.7103 10.8551C20.9815 10.7602 21.1423 10.7444 21.298 10.7444C21.6849 10.7444 21.8808 10.9606 21.8808 11.3824V14.3565H23.1971V11.3244C23.1971 11.1452 23.1619 11.0397 23.1569 11.0186L23.1117 10.929L23.2021 10.8868C23.403 10.7919 23.6241 10.7444 23.8552 10.7444C24.1215 10.7444 24.438 10.8551 24.438 11.3824V14.3565H25.7492V11.2453C25.7492 10.1433 25.1865 9.61069 24.021 9.61069Z"
                                                fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M38.0476 0.503906H38.0828C39.4493 0.535545 40.3284 1.52161 40.3335 3.02443C40.3335 4.54308 39.4241 5.52914 38.0225 5.52914C37.6055 5.52914 36.9976 5.4395 36.6711 5.27076C36.6599 5.27263 36.6486 5.27451 36.6372 5.27641C36.4242 5.31196 36.1826 5.35226 35.9727 5.39732H29.5171C29.557 5.13424 29.5944 4.87117 29.6272 4.63999C29.6397 4.55144 29.6516 4.46756 29.6628 4.39016H31.7628C31.9285 4.39016 32.034 4.42707 32.0491 4.43234L32.1345 4.4798V3.01389C32.1345 2.13856 31.7979 1.56907 31.1599 1.56907H29.9441C29.9692 1.38187 29.9918 1.22236 30.0144 1.06285C30.0371 0.903342 30.0597 0.743831 30.0848 0.556637H31.3056C32.5565 0.556637 33.4206 1.40033 33.4508 2.93479H33.4558V4.39016H35.8823L35.9275 4.30052C35.9275 4.30052 35.929 4.29634 35.9302 4.29319C35.94 4.26805 35.9677 4.19618 35.9677 4.03686V1.94345C35.9727 1.63234 36.0582 1.36869 36.2089 1.15777C36.4902 0.725375 37.279 0.503906 38.0476 0.503906ZM37.3091 4.28997C37.5653 4.3427 37.8919 4.36379 38.0878 4.36379C38.5249 4.36379 39.0524 4.1265 39.0574 3.00861C39.0574 2.43385 38.9619 1.66925 38.1431 1.66925H38.138C38.1113 1.6716 38.077 1.6729 38.0368 1.67443C37.8957 1.6798 37.6803 1.68799 37.4498 1.75362C37.4424 1.75362 37.4351 1.75645 37.4257 1.76003C37.4223 1.76134 37.4186 1.76276 37.4146 1.76417L37.3242 1.79581L37.3091 1.80635C37.2992 1.81051 37.2901 1.81385 37.2814 1.81702C37.2681 1.82188 37.256 1.82633 37.2438 1.83272L37.1584 1.86963L37.1986 1.954C37.2036 1.96982 37.2337 2.07528 37.2337 2.24402V4.27415L37.3091 4.28997Z"
                                                  fill="white"></path>
                                            <path
                                                d="M26.8243 6.01426C28.226 6.01426 28.8791 5.52914 28.8791 4.33215C28.8791 3.47264 28.2812 2.78715 27.2764 2.78715H25.9853C25.5985 2.78715 25.3674 2.55513 25.3674 2.16492C25.3674 1.90127 25.4628 1.57434 26.0958 1.57434H28.9192C28.9795 1.18941 29.0097 0.946844 29.0649 0.56191H26.131C24.7645 0.56191 24.0762 1.16304 24.0762 2.16492C24.0762 3.15626 24.6741 3.67302 25.6789 3.67302H26.97C27.3568 3.67302 27.5879 3.99468 27.5879 4.33215C27.5879 4.55362 27.4925 5.01238 26.8645 5.01238H26.6485L22.5138 5.00183H21.7602C21.1222 5.00183 20.6751 4.62217 20.6751 3.74157V3.13517C20.6751 2.21765 21.0217 1.64816 21.7602 1.64816H22.9861C23.0413 1.25796 23.0765 1.01012 23.1267 0.641006H21.4538C20.2028 0.641006 19.3387 1.52161 19.3086 3.05607V3.74157C19.3387 5.27603 20.2028 6.00899 21.4538 6.00899H22.6746L24.9152 6.01426H26.8243Z"
                                                fill="white"></path>
                                        </svg>
                                        <svg width="41" height="17" viewBox="0 0 41 17" fill="none" class=""
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.72769 2.24583C8.19862 1.66032 8.51818 0.874163 8.4339 0.0708008C7.74453 0.104874 6.90329 0.522882 6.41625 1.10885C5.97894 1.61063 5.59188 2.42971 5.69279 3.1994C6.46664 3.26612 7.23978 2.81491 7.72769 2.24583Z"
                                                fill="white"></path>
                                            <path
                                                d="M8.42511 3.34968C7.30128 3.28314 6.34576 3.98369 5.80908 3.98369C5.2721 3.98369 4.45027 3.38321 3.56139 3.3994C2.40445 3.41629 1.33095 4.06652 0.74385 5.10069C-0.463706 7.16954 0.425177 10.2384 1.59946 11.9233C2.16972 12.7569 2.85698 13.6748 3.76255 13.6418C4.61816 13.6085 4.95353 13.0911 5.99356 13.0911C7.03283 13.0911 7.33492 13.6418 8.24064 13.6251C9.17989 13.6084 9.76709 12.7911 10.3373 11.9567C10.9915 11.0064 11.2593 10.0889 11.2762 10.0385C11.2593 10.0218 9.46504 9.33761 9.4484 7.28595C9.43146 5.56807 10.8571 4.75095 10.9242 4.70028C10.1191 3.51667 8.86121 3.38321 8.42511 3.34968Z"
                                                fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M22.3539 5.13515C22.3539 2.69845 20.6531 1.02481 18.2105 1.02481L13.4908 1.02481V13.538H15.4448V9.26289H18.1492C20.6181 9.26289 22.3539 7.58055 22.3539 5.13515ZM17.6868 7.63256H15.4448V2.66382H17.6956C19.388 2.66382 20.3562 3.5657 20.3562 5.14384C20.3562 6.72214 19.388 7.63256 17.6868 7.63256Z"
                                                  fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M26.2756 8.24827C24.0945 8.36971 22.8645 9.34954 22.8645 10.9452C22.8645 12.5841 24.1208 13.6941 25.9179 13.6941C27.1217 13.6941 28.2821 13.0524 28.8142 12.0378H28.8576V13.538H30.6635V7.25105C30.6635 5.42135 29.2416 4.25067 27.017 4.25067C24.7488 4.25067 23.3356 5.46467 23.231 7.11239H25.0106C25.1762 6.29714 25.8567 5.77695 26.9474 5.77695C28.0987 5.77695 28.7879 6.38395 28.7879 7.39857V8.10092L26.2756 8.24827ZM28.7879 9.40173V10.1215C28.7879 11.3094 27.7584 12.2113 26.4412 12.2113C25.4292 12.2113 24.7663 11.6909 24.7663 10.8932C24.7663 10.1128 25.403 9.6185 26.5284 9.54039L28.7879 9.40173Z"
                                                  fill="white"></path>
                                            <path
                                                d="M32.3684 16.894V15.3764C32.5077 15.411 32.8217 15.411 32.9788 15.411C33.8512 15.411 34.3223 15.0469 34.6101 14.1104C34.6101 14.093 34.776 13.5554 34.776 13.5467L31.4611 4.41542H33.5022L35.8229 11.8384H35.8576L38.1784 4.41542H40.1673L36.7299 14.0149C35.9451 16.2263 35.0378 16.9373 33.136 16.9373C32.9788 16.9373 32.5077 16.9199 32.3684 16.894Z"
                                                fill="white"></path>
                                        </svg>
                                        <svg width="39" height="13" viewBox="0 0 39 13" fill="none" class=""
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M28.4882 1.00937L28.0457 3.49887C26.7188 2.78718 23.699 2.6188 23.6987 3.9296C23.6987 4.45034 24.3819 4.80847 25.2054 5.24011C26.4544 5.89474 28.0259 6.71846 28.0259 8.53492C28.0259 11.4375 24.8337 12.5039 22.7178 12.5039C20.6024 12.5039 19.2179 11.8493 19.2179 11.8493L19.6788 9.24629C20.9484 10.2383 24.7952 10.5202 24.7952 8.94704C24.7952 8.286 24.0379 7.89616 23.1598 7.4441C21.9482 6.82036 20.5065 6.07818 20.5065 4.34172C20.5065 1.15853 24.1606 0.503906 25.6993 0.503906C27.1227 0.503906 28.4882 1.00937 28.4882 1.00937ZM38.834 12.3039H35.9869L35.6237 10.5819H31.6819L31.0355 12.3039H27.8032L32.4277 1.57469C32.4277 1.57469 32.708 0.710744 33.8591 0.710744H36.3516L38.834 12.3039ZM11.5981 0.711054L8.64202 8.6847L8.29222 6.96766L7.24919 1.75486C7.24919 1.75486 7.12304 0.711054 5.77832 0.711054H0.891328L0.833984 0.907348C0.833984 0.907348 2.32843 1.21001 4.07743 2.23241L6.77133 12.3042H10.002L14.9352 0.711054H11.5981ZM17.3073 12.3039H14.2066L16.1445 0.711054H19.2456L17.3073 12.3039ZM32.5749 8.20311L34.2041 3.86479L35.1206 8.20311H32.5749Z"
                                                  fill="white"></path>
                                            <path
                                                d="M8.29254 6.96817L7.24919 1.75474C7.24919 1.75474 7.12304 0.710938 5.77832 0.710938H0.891328L0.833984 0.907232C0.833984 0.907232 3.18286 1.38107 5.43585 3.1564C7.59007 4.85327 8.29254 6.96817 8.29254 6.96817Z"
                                                fill="white"></path>
                                        </svg>
                                        <svg width="29" height="23" viewBox="0 0 29 23" fill="none" class=""
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M27.3185 19.124V22.3772H26.8185V22.0954C26.66 22.3042 26.4197 22.4354 26.0928 22.4354C25.4486 22.4354 24.9436 21.9253 24.9436 21.2169C24.9436 20.5085 25.4489 19.9984 26.0928 19.9984C26.4197 19.9984 26.66 20.1295 26.8185 20.3384V19.124H27.3185ZM8.5771 20.0557L8.57654 22.3772H8.0775V22.0954C7.91904 22.3042 7.67855 22.4354 7.35183 22.4354C6.70763 22.4354 6.20258 21.9253 6.20258 21.2169C6.20258 20.5085 6.70791 19.9984 7.35183 19.9984C7.67869 19.9984 7.91904 20.1295 8.0775 20.3384V20.0557H8.5771ZM6.71701 21.2164C6.71701 20.8085 6.98158 20.4734 7.41399 20.4734C7.82721 20.4734 8.10606 20.7941 8.10606 21.2164C8.10606 21.6386 7.82721 21.9593 7.41399 21.9593C6.98158 21.9593 6.71701 21.6242 6.71701 21.2164ZM28.3156 22.1103C28.2717 22.0667 28.2127 22.0423 28.1511 22.0424L28.1518 22.04C28.1203 22.0398 28.0891 22.046 28.06 22.0584C28.0322 22.0696 28.0069 22.0864 27.9857 22.1079C27.9645 22.1288 27.9477 22.1537 27.9361 22.1812C27.9119 22.2383 27.9119 22.303 27.9361 22.3601C27.9475 22.3882 27.9641 22.414 27.985 22.4358C28.0065 22.4569 28.0317 22.4737 28.0593 22.4853C28.0884 22.4977 28.1196 22.5039 28.1511 22.5037C28.1823 22.5039 28.2132 22.4976 28.2418 22.4853C28.2692 22.4734 28.2941 22.4566 28.3156 22.4358C28.3365 22.4147 28.3533 22.3898 28.3652 22.3625C28.3893 22.3054 28.3893 22.2407 28.3652 22.1836C28.3536 22.1561 28.3368 22.1312 28.3156 22.1103ZM28.1511 22.451C28.1748 22.4512 28.1982 22.4464 28.2199 22.4368C28.2408 22.4277 28.2598 22.4147 28.2759 22.3985C28.292 22.3823 28.3049 22.3631 28.3138 22.342C28.3322 22.2972 28.3322 22.2468 28.3138 22.202C28.3047 22.1809 28.2919 22.1618 28.2759 22.1455C28.2598 22.1292 28.2408 22.1162 28.2199 22.1071C28.1981 22.0981 28.1747 22.0936 28.1511 22.0939C28.1272 22.0936 28.1034 22.0981 28.0811 22.1071C28.0598 22.1161 28.0403 22.1291 28.0239 22.1455C27.9733 22.1979 27.9586 22.2758 27.9865 22.3434C27.995 22.3646 28.0078 22.3838 28.0239 22.3999C28.0404 22.4163 28.0598 22.4293 28.0811 22.4382C28.1033 22.4478 28.1271 22.4526 28.1511 22.4524V22.451ZM28.2278 22.1815C28.2097 22.1682 28.1875 22.1617 28.1651 22.1631L28.0678 22.1633V22.3772H28.1129V22.3025H28.1381L28.1982 22.3772H28.2521L28.1849 22.2999C28.1883 22.2986 28.1916 22.2969 28.1947 22.2947C28.2085 22.2915 28.2214 22.285 28.2322 22.2755C28.2441 22.2641 28.2505 22.2481 28.2498 22.2316C28.2508 22.2123 28.2426 22.1937 28.2278 22.1815ZM28.1849 22.2999C28.18 22.3018 28.175 22.3026 28.1699 22.3025H28.1381L28.1338 22.2972H28.1129V22.3025L28.1124 22.2036L28.1699 22.2026C28.1807 22.2019 28.1915 22.2063 28.2008 22.2152C28.2083 22.2234 28.2127 22.2374 28.2123 22.2521C28.2127 22.267 28.2084 22.2813 28.2008 22.2899C28.1988 22.2917 28.1968 22.2933 28.1947 22.2947C28.1906 22.2956 28.1864 22.2963 28.1821 22.2966L28.1849 22.2999ZM25.4579 21.2164C25.4579 20.8085 25.7224 20.4734 26.155 20.4734C26.5686 20.4734 26.8471 20.7941 26.8471 21.2164C26.8471 21.6386 26.5686 21.9593 26.155 21.9593C25.7226 21.9593 25.4579 21.6242 25.4579 21.2164ZM14.7779 20.4495C15.0998 20.4496 15.3065 20.6535 15.3593 21.0123H14.1672C14.2205 20.6773 14.4219 20.4495 14.7779 20.4495ZM13.6435 21.2156C13.6435 20.492 14.1145 19.9971 14.7878 19.9971C15.4309 19.9971 15.8735 20.4921 15.8786 21.2155C15.8786 21.2822 15.8737 21.3445 15.8689 21.4062L15.8686 21.4095H14.1627C14.2348 21.8272 14.5279 21.9778 14.8499 21.9778C15.0804 21.9778 15.3257 21.8906 15.5183 21.7351L15.7631 22.109C15.4843 22.3469 15.1673 22.4341 14.8213 22.4341C14.1334 22.4341 13.6435 21.9535 13.6435 21.2156ZM20.8194 21.2155C20.8194 20.8076 21.084 20.4726 21.5164 20.4726C21.9296 20.4726 22.2085 20.7932 22.2085 21.2155C22.2085 21.6378 21.9296 21.9584 21.5164 21.9584C21.084 21.9584 20.8194 21.6234 20.8194 21.2155ZM22.6794 20.0557L22.6795 22.3772H22.18V22.0954C22.021 22.3042 21.7812 22.4354 21.4544 22.4354C20.8102 22.4354 20.3051 21.9253 20.3051 21.2169C20.3051 20.5085 20.8105 19.9984 21.4544 19.9984C21.7812 19.9984 22.021 20.1295 22.18 20.3384V20.0557H22.6794ZM17.9981 21.2155C17.9981 21.9194 18.4832 22.434 19.2237 22.434C19.5698 22.434 19.8003 22.3562 20.0496 22.1573L19.8097 21.7495C19.6221 21.8856 19.4252 21.9584 19.2078 21.9584C18.809 21.9535 18.5157 21.6622 18.5157 21.2155C18.5157 20.7688 18.809 20.4777 19.2078 20.4726C19.4246 20.4726 19.6216 20.5454 19.8097 20.6815L20.0496 20.2737C19.7999 20.0748 19.5694 19.997 19.2237 19.997C18.4832 19.997 17.9981 20.5115 17.9981 21.2155ZM23.833 20.337C23.9627 20.1331 24.1504 19.997 24.4387 19.997C24.5399 19.997 24.6838 20.0168 24.7944 20.0608L24.6404 20.5363C24.5411 20.4962 24.4349 20.4764 24.3279 20.478C24.0014 20.478 23.838 20.6913 23.838 21.0753V22.3759H23.3378V20.0557H23.833V20.337ZM11.0471 20.2402C10.8067 20.0801 10.4755 19.9974 10.1102 19.9974C9.52814 19.9974 9.15341 20.2792 9.15341 20.7402C9.15341 21.1185 9.43239 21.3519 9.94613 21.4247L10.1821 21.4587C10.4561 21.4975 10.5854 21.5704 10.5854 21.7014C10.5854 21.8808 10.4035 21.9832 10.0618 21.9832C9.71572 21.9832 9.46599 21.8715 9.29759 21.7404L9.06284 22.1339C9.33679 22.3377 9.68282 22.435 10.0576 22.435C10.7211 22.435 11.1056 22.1194 11.1056 21.6777C11.1056 21.2698 10.803 21.0565 10.3029 20.9837L10.0675 20.9492C9.85122 20.9209 9.67792 20.8769 9.67792 20.7214C9.67792 20.5518 9.84128 20.4497 10.1154 20.4497C10.4086 20.4497 10.6925 20.5614 10.8317 20.6486L11.0479 20.2407L11.0471 20.2402ZM16.8883 20.3379C17.0175 20.134 17.2052 19.9979 17.4934 19.9979C17.5946 19.9979 17.7385 20.0168 17.8491 20.0608L17.6951 20.5363C17.5958 20.4962 17.4896 20.4764 17.3827 20.478C17.0561 20.478 16.8928 20.6913 16.8928 21.0753V22.3759H16.3932V20.0557H16.8883V20.3379ZM13.2301 20.0557H12.4132V19.3518H11.9081V20.0557H11.4421V20.5168H11.9081V21.5753C11.9081 22.1136 12.115 22.4343 12.706 22.4343C12.9229 22.4343 13.1726 22.3664 13.331 22.2549L13.1867 21.8228C13.0376 21.9101 12.8743 21.954 12.7444 21.954C12.4946 21.954 12.4132 21.7985 12.4132 21.5657V20.5173H13.2301V20.0557ZM5.76079 20.9203V22.3765L5.25462 22.3753V21.084C5.25462 20.6907 5.09182 20.4723 4.75068 20.4723C4.41906 20.4723 4.18851 20.6863 4.18851 21.0891V22.3756H3.68345V21.0843C3.68345 20.691 3.51561 20.4726 3.18385 20.4726C2.8423 20.4726 2.62112 20.6866 2.62112 21.0894V22.3759H2.11719V20.0557H2.61721V20.3425C2.80492 20.0708 3.04471 19.998 3.2901 19.998C3.64118 19.998 3.89091 20.1535 4.04937 20.4108C4.26116 20.0852 4.56366 19.993 4.85693 19.998C5.41476 20.0029 5.76079 20.3719 5.76079 20.9203Z"
                                                  fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M28.4083 14.3193V14.6626H28.346V14.4034L28.25 14.6272H28.1846L28.0885 14.404V14.6626H28.0254V14.3193H28.1145L28.2167 14.5549L28.3195 14.3193H28.4083ZM27.8448 14.3781V14.6626H27.7817V14.3781H27.668V14.3202H27.9585V14.3781H27.8448Z"
                                                  fill="#F79410"></path>
                                            <path d="M18.4539 16.1136H10.8828V2.37207H18.454L18.4539 16.1136Z"
                                                  fill="#FF5F00"></path>
                                            <path
                                                d="M11.3626 9.2432C11.3626 6.45574 12.655 3.97266 14.6673 2.37245C13.1441 1.15939 11.26 0.501021 9.32015 0.503916C4.54156 0.503916 0.667969 4.41657 0.667969 9.2432C0.667969 14.0698 4.54156 17.9825 9.32015 17.9825C11.2601 17.9854 13.1442 17.327 14.6675 16.114C12.6552 14.514 11.3626 12.0308 11.3626 9.2432Z"
                                                fill="#EB001B"></path>
                                            <path
                                                d="M28.6682 9.2432C28.6682 14.0698 24.7946 17.9825 20.016 17.9825C18.0759 17.9854 16.1916 17.327 14.668 16.114C16.6809 14.5138 17.9732 12.0308 17.9732 9.2432C17.9732 6.4556 16.6809 3.97266 14.668 2.37245C16.1915 1.15943 18.0758 0.501072 20.0159 0.503915C24.7944 0.503915 28.668 4.41657 28.668 9.2432"
                                                fill="#F79E1B"></path>
                                        </svg>
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" class=""
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.166565 0H23.1666V23H0.166565V0Z" fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M1.85373 1.59912H21.4911V12.3315H20.4706C20.1742 12.3315 19.9439 12.4137 19.7791 12.5289V12.3315H18.2812C18.0345 12.3315 17.7546 12.3972 17.6064 12.5289V12.3314H14.9233V12.5288C14.693 12.3642 14.3472 12.3314 14.1661 12.3314H12.3884V12.5288C12.2239 12.3642 11.8451 12.3314 11.6149 12.3314H9.62313L9.16219 12.825L8.73419 12.3314H5.77131V15.5575H8.68503L9.16231 15.0636L9.5902 15.5575H11.4008V14.8003H11.5655C11.8123 14.8003 12.0923 14.8003 12.339 14.6851V15.5575H13.8205V14.7181H13.9027C13.9852 14.7181 14.0015 14.7181 14.0015 14.8169V15.5575H18.5118C18.7915 15.5575 19.0879 15.4918 19.2524 15.3599V15.5575H20.6845C20.9808 15.5575 21.2772 15.5081 21.4911 15.4093V21.3187H1.85373V11.5905H2.80854L3.02249 11.0638H3.4999L3.69737 11.5905H5.55748V11.1955L5.72203 11.5905H6.69319L6.85773 11.179V11.5905H11.4668V10.7346H11.549C11.6149 10.7346 11.6313 10.7511 11.6313 10.8499V11.5907H14.0181V11.3932C14.2155 11.4919 14.5119 11.5907 14.9069 11.5907H15.9109L16.1249 11.064H16.6024L16.8163 11.5907H18.7423V11.0969L19.0385 11.5907H20.5856V8.36443H19.0549V8.74304L18.8244 8.36443H17.2607V8.74304L17.0631 8.36443H14.9398C14.5775 8.36443 14.2648 8.41371 14.018 8.54544V8.36443H12.5531V8.54544C12.3883 8.41383 12.1744 8.36443 11.9276 8.36443H6.57792L6.21578 9.18739L5.83717 8.36443H4.15819V8.74304L3.9606 8.36443H2.52862L1.85373 9.89521V1.59912ZM19.3018 11.1297H20.0917V8.82525H19.5322V10.4219L18.5611 8.82525H17.705V10.9981L16.7833 8.82537H15.9602L15.1702 10.636H14.9232C14.7752 10.636 14.6269 10.603 14.5447 10.5208C14.4459 10.4056 14.3965 10.2244 14.3965 9.97754C14.3965 9.73067 14.4459 9.54965 14.5447 9.45086C14.6598 9.35206 14.7752 9.31912 14.9726 9.31912H15.4993V8.82525H14.9726C14.5941 8.82525 14.2977 8.90746 14.1331 9.08859C13.8864 9.33547 13.837 9.64821 13.837 9.99389C13.837 10.4054 13.9358 10.6688 14.1169 10.8663C14.3143 11.0638 14.6599 11.1297 14.9233 11.1297H15.5654L15.7793 10.6194H16.9315L17.1457 11.1297H18.2648V9.40134L19.3018 11.1297ZM21.6227 14.3725C21.6227 14.8664 21.31 15.0966 20.7503 15.0966H19.6805V14.6027H20.7503C20.8491 14.6027 20.9314 14.5863 20.9644 14.5535C20.9972 14.5205 21.0302 14.4711 21.0302 14.4053C21.0302 14.3394 20.9974 14.2736 20.9644 14.2408C20.9314 14.2077 20.8656 14.1914 20.7668 14.1914C20.7342 14.1903 20.701 14.1895 20.6674 14.1886C20.1771 14.1759 19.6147 14.1614 19.6147 13.4836C19.6147 13.1542 19.8286 12.7921 20.4047 12.7921H21.5075V13.286H20.4869C20.3884 13.286 20.3224 13.286 20.273 13.3188C20.2236 13.3682 20.1908 13.4176 20.1908 13.4999C20.1908 13.5823 20.2402 13.6317 20.3059 13.6647L20.3073 13.6651C20.3728 13.6813 20.4383 13.6975 20.5201 13.6975H20.8162C21.129 13.6975 21.3266 13.7633 21.4583 13.8787C21.5569 13.9938 21.6227 14.1421 21.6227 14.3725ZM1.39291 21.0224C1.39291 20.8251 1.22837 20.6603 1.0143 20.6603C0.816825 20.6603 0.652161 20.8251 0.652161 21.0224C0.652161 21.2364 0.816825 21.4012 1.0143 21.4012C1.22825 21.4011 1.39291 21.2364 1.39291 21.0224ZM1.1131 21.2035H1.17885V21.1706C1.17063 21.1706 1.16652 21.1706 1.16445 21.1686C1.16238 21.1665 1.16238 21.1624 1.16238 21.1541V21.0883C1.16238 21.0554 1.14603 21.0389 1.12957 21.0223C1.14591 21.0061 1.16238 20.9895 1.16238 20.9401C1.16238 20.8745 1.1131 20.8579 1.04724 20.8579H0.899038V21.2035H0.948437V21.0555H1.04724C1.09663 21.0555 1.09663 21.0883 1.09663 21.1047C1.09663 21.1116 1.09948 21.1241 1.1028 21.1388C1.10748 21.1594 1.1131 21.1843 1.1131 21.2035ZM1.0637 20.9073C1.08017 20.9073 1.1131 20.9073 1.1131 20.9567C1.1131 20.9895 1.08017 21.0061 1.04724 21.0061H0.948437V20.9073H1.0637ZM1.0143 21.3352C1.19543 21.3352 1.34351 21.2036 1.34351 21.0224C1.34351 20.8579 1.19531 20.7097 1.0143 20.7097C0.833291 20.7097 0.70156 20.8579 0.70156 21.0224C0.70156 21.2035 0.833172 21.3352 1.0143 21.3352ZM18.6597 13.6975C18.9725 13.6975 19.1701 13.7633 19.3018 13.8787C19.4006 13.9938 19.4664 14.1421 19.4664 14.3725C19.4664 14.8663 19.1535 15.0966 18.594 15.0966H17.524V14.6027H18.594C18.6928 14.6027 18.7585 14.5863 18.8079 14.5535C18.8409 14.5205 18.8739 14.4711 18.8739 14.4053C18.8739 14.3394 18.8407 14.2736 18.8079 14.2408C18.7751 14.2077 18.7091 14.1914 18.6106 14.1914C18.578 14.1903 18.5448 14.1895 18.5113 14.1886C18.0208 14.1759 17.4582 14.1613 17.4582 13.4836C17.4582 13.1542 17.6558 12.7921 18.2484 12.7921H19.3512V13.286H18.3306C18.2318 13.286 18.1661 13.286 18.1167 13.3188C18.0508 13.3682 18.0345 13.4176 18.0345 13.4999C18.0345 13.5823 18.0836 13.6317 18.1496 13.6647L18.1524 13.6654C18.2173 13.6814 18.2825 13.6975 18.3636 13.6975H18.6597ZM17.1948 14.6194H15.8947V14.1585H17.162V13.6978H15.8947V13.2696H17.1948V12.7923H15.3514V15.0967H17.1948V14.6194ZM14.0839 12.7922C14.3637 12.7922 14.5776 12.8088 14.7587 12.9076C14.9399 13.0062 15.0387 13.1544 15.0388 13.4176C15.0388 13.7799 14.7917 13.9774 14.6437 14.0266C14.7755 14.076 14.874 14.1582 14.9234 14.2242C14.9893 14.3394 15.0056 14.4382 15.0056 14.6521V15.0966H14.4626V14.8169C14.4626 14.6687 14.4626 14.4711 14.3638 14.3559C14.2815 14.2737 14.1661 14.2571 13.9687 14.2571H13.376V15.0966H12.8165V12.7922H14.0839ZM11.6313 12.7922H9.87001L9.16219 13.5494L8.48731 12.7922H6.26518V15.0966H8.4545L9.16231 14.3394L9.8372 15.0966H10.9072V14.3231H11.5985C12.0758 14.3231 12.5533 14.1914 12.5533 13.5494C12.5532 12.924 12.0593 12.7922 11.6313 12.7922ZM14.0509 13.7799C14.1497 13.7799 14.2321 13.7799 14.3143 13.747C14.3803 13.6976 14.4294 13.6153 14.4294 13.5165C14.4294 13.4177 14.3803 13.352 14.3143 13.3189C14.2485 13.2695 14.1497 13.2695 14.0509 13.2695H13.376V13.7964L14.0509 13.7799ZM11.6313 13.8622H10.907V13.2695H11.6313C11.8289 13.2695 11.9605 13.352 11.9605 13.5494C11.9605 13.747 11.8288 13.8622 11.6313 13.8622ZM10.3638 13.0392L9.50787 13.9444L10.3638 14.8992V13.0392ZM8.17457 14.6194H6.80833V14.1585H8.02637V13.6978H6.80833V13.2696H8.19103L8.80005 13.9445L8.17457 14.6194ZM13.5572 8.82525H12.9977V11.1297H13.5572V8.82525ZM11.7301 8.82525C12.0099 8.82525 12.2073 8.82525 12.3884 8.92405C12.5694 9.0392 12.6848 9.18739 12.6847 9.45074C12.6847 9.81288 12.4376 9.99389 12.2896 10.0598C12.4048 10.109 12.5036 10.1914 12.553 10.2572C12.6352 10.3725 12.6515 10.4713 12.6515 10.6688V11.1297H12.092V10.8334C12.092 10.8176 12.0923 10.8008 12.0925 10.7833C12.0943 10.6554 12.0967 10.4903 12.0098 10.389C11.9276 10.3066 11.7959 10.2902 11.5983 10.2902H11.0057V11.1297H10.4626V8.82525H11.7301ZM10.0675 10.6524H8.78359V10.1915H10.051V9.7142H8.78359V9.30266H10.0675V8.82537H8.22397V11.1298H10.0675V10.6524ZM6.90713 8.82525H7.81231V11.1297H7.25269V9.31912L6.44607 11.1297H5.96878L5.16229 9.31912V11.1297H4.04293L3.82899 10.6194H2.67681L2.46287 11.1297H1.87032L2.85794 8.82525H3.68091L4.61913 10.998V8.82525H5.50796L6.23225 10.389L6.90713 8.82525ZM16.7341 10.1256L16.3554 9.22033L15.9769 10.1256H16.7341ZM11.6807 9.813C11.796 9.813 11.8783 9.813 11.9605 9.7636C12.0263 9.73055 12.0592 9.64833 12.0592 9.54965C12.0592 9.45098 12.0262 9.38511 11.9604 9.33571C11.8944 9.30278 11.7794 9.30278 11.6806 9.30278H11.0057V9.813H11.6807ZM2.87429 10.1256L3.2529 9.22033L3.63151 10.1256H2.87429Z"
                                                  fill="#0077A6"></path>
                                        </svg>
                                    </div>
                                </div>
                                <input
                                    class="bg-body-lighter text-primary !ring-offset-body-lighter checked:!ring-primary hover:ring-primary mt-1.5 h-4 w-4 appearance-none border-0 !bg-none ring-1 ring-white/30 ring-offset-[3px] checked:!ring-2 checked:!ring-offset-[3px]"
                                    type="radio" id="credit_card_payment" value="credit_card" checked=""></label>
                        </fieldset>
                        <div class="space-y-2 py-2">
                            <div class="mb-4 h-[1px] w-full bg-white/20"></div>
                            <div class="flex items-center justify-between text-[13px] text-gray-100"><p>قبل الضريبة</p>
                                <div class="flex items-center gap-2"><p class="">113.04 ر.س</p></div>
                            </div>
                            <div class="flex items-center justify-between text-[13px] text-gray-100"><p>الضريبة</p>
                                <div class="flex items-center gap-2"><p class="">16.96 ر.س</p></div>
                            </div>
                            <div class="flex flex-wrap items-center justify-between text-base font-bold"><p>المجموع</p>
                                <div class="flex items-center gap-2"><p class="">130 ر.س</p></div>
                            </div>
                        </div>
                        <div class="rounded-lg border border-t-0 border-white/20 hidden">
                            <div class="flex w-full items-center justify-between">
                                <div
                                    class="mt-0 h-5 w-full border-t border-white/20 ltr:rounded-l-lg rtl:rounded-r-lg"></div>
                                <p class="-mt-4 shrink-0 grow px-2 text-center text-xs text-zinc-400">طرق الدفع
                                    المتاحة</p>
                                <div
                                    class="mt-0 h-5 w-full border-t border-white/20 ltr:rounded-r-lg rtl:rounded-l-lg"></div>
                            </div>
                            <div class="-mt-2 flex w-full flex-wrap items-center justify-center gap-4 p-1 pb-3 pt-1.5">
                                <svg width="41" height="15" viewBox="0 0 41 15" fill="none" class=""
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.333984" y="8.57715" width="16.9204" height="5.91638"
                                          fill="#84B740"></rect>
                                    <rect x="0.333984" y="0.503906" width="16.9204" height="5.92166"
                                          fill="#259BD6"></rect>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M34.1742 7.74403L34.3098 7.71766C34.7067 7.64911 35.1137 7.57529 35.5055 7.50146V13.4337C35.5055 13.8502 35.3598 14.0453 34.9529 14.1824C34.5108 14.3354 34.0737 14.3986 33.4809 14.3986C32.0793 14.3986 31.2754 13.5339 31.2754 12.031C31.2754 10.9342 31.6221 9.62651 33.2699 9.62651C33.5713 9.62651 33.8828 9.72143 34.0185 9.76361L34.0536 9.77416L34.1742 9.81107V7.74403ZM34.0988 13.3071L34.1742 13.2913V10.8288L34.1089 10.8077C33.8075 10.7128 33.6467 10.6969 33.506 10.6864H33.501C32.6771 10.6864 32.5867 11.451 32.5867 12.0258C32.5867 13.1436 33.1091 13.3809 33.5512 13.3809C33.7337 13.3809 33.8289 13.3617 34.065 13.314C34.076 13.3117 34.0872 13.3095 34.0988 13.3071Z"
                                          fill="white"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M36.8168 9.90598C37.4648 9.69506 37.9873 9.60015 38.4947 9.60015C39.7005 9.60015 40.3134 10.1433 40.3134 11.2084V14.4988C40.0285 14.4421 39.7384 14.388 39.4524 14.3347C39.34 14.3137 39.2283 14.2929 39.1177 14.2721L38.9921 14.251L38.972 14.2457L38.9519 14.251C38.5801 14.3459 38.1481 14.4092 37.8366 14.4092C36.8318 14.4092 36.234 13.8924 36.234 13.0329C36.234 12.0258 36.8821 11.5565 38.2837 11.5565H39.0524V11.2823C39.0524 10.6548 38.4998 10.6548 38.3189 10.6548C37.917 10.6548 37.3794 10.7497 36.9474 10.8973L36.5354 11.0397L36.3948 10.0378L36.8168 9.90598ZM39.0021 13.3493L39.0725 13.3282V12.3791H38.2536C37.6206 12.3791 37.5251 12.7534 37.5251 12.9749C37.5251 13.3177 37.7562 13.518 38.1431 13.518C38.3038 13.518 38.5148 13.4811 38.7509 13.4178L39.0021 13.3493Z"
                                          fill="white"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M27.0604 9.90598C27.7085 9.69506 28.226 9.60015 28.7384 9.60015C29.9441 9.60015 30.557 10.138 30.552 11.2137V14.5041C30.185 14.4261 29.8136 14.3571 29.446 14.2887C29.416 14.2832 29.3862 14.2776 29.3563 14.2721L29.2357 14.251L29.2157 14.2457L29.1956 14.251C28.8238 14.3459 28.3917 14.4092 28.0803 14.4092C27.0705 14.4092 26.4726 13.8924 26.4726 13.0329C26.4726 12.0258 27.1257 11.5565 28.5274 11.5565H29.296V11.2823C29.296 10.6548 28.7434 10.6548 28.5625 10.6548C28.1606 10.6548 27.6231 10.7497 27.191 10.8973L26.7791 11.0397L26.6384 10.0378L27.0604 9.90598ZM29.2408 13.3493L29.3111 13.3282H29.3061V12.3791H28.4872C27.8592 12.3791 27.7638 12.7534 27.7638 12.9749C27.7638 13.3177 27.9949 13.518 28.3817 13.518C28.5475 13.518 28.7535 13.4811 28.9896 13.4178L29.2408 13.3493Z"
                                          fill="white"></path>
                                    <path
                                        d="M24.021 9.61069C23.3829 9.61069 22.8554 9.83216 22.6595 9.92708L22.6093 9.95344L22.5641 9.91653C22.2928 9.71088 21.8959 9.60542 21.3433 9.60542C20.8559 9.60542 20.3988 9.67924 19.9014 9.83216C19.4744 9.96926 19.3086 10.1855 19.3086 10.5915V14.3512H20.6449V10.8762L20.7103 10.8551C20.9815 10.7602 21.1423 10.7444 21.298 10.7444C21.6849 10.7444 21.8808 10.9606 21.8808 11.3824V14.3565H23.1971V11.3244C23.1971 11.1452 23.1619 11.0397 23.1569 11.0186L23.1117 10.929L23.2021 10.8868C23.403 10.7919 23.6241 10.7444 23.8552 10.7444C24.1215 10.7444 24.438 10.8551 24.438 11.3824V14.3565H25.7492V11.2453C25.7492 10.1433 25.1865 9.61069 24.021 9.61069Z"
                                        fill="white"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M38.0476 0.503906H38.0828C39.4493 0.535545 40.3284 1.52161 40.3335 3.02443C40.3335 4.54308 39.4241 5.52914 38.0225 5.52914C37.6055 5.52914 36.9976 5.4395 36.6711 5.27076C36.6599 5.27263 36.6486 5.27451 36.6372 5.27641C36.4242 5.31196 36.1826 5.35226 35.9727 5.39732H29.5171C29.557 5.13424 29.5944 4.87117 29.6272 4.63999C29.6397 4.55144 29.6516 4.46756 29.6628 4.39016H31.7628C31.9285 4.39016 32.034 4.42707 32.0491 4.43234L32.1345 4.4798V3.01389C32.1345 2.13856 31.7979 1.56907 31.1599 1.56907H29.9441C29.9692 1.38187 29.9918 1.22236 30.0144 1.06285C30.0371 0.903342 30.0597 0.743831 30.0848 0.556637H31.3056C32.5565 0.556637 33.4206 1.40033 33.4508 2.93479H33.4558V4.39016H35.8823L35.9275 4.30052C35.9275 4.30052 35.929 4.29634 35.9302 4.29319C35.94 4.26805 35.9677 4.19618 35.9677 4.03686V1.94345C35.9727 1.63234 36.0582 1.36869 36.2089 1.15777C36.4902 0.725375 37.279 0.503906 38.0476 0.503906ZM37.3091 4.28997C37.5653 4.3427 37.8919 4.36379 38.0878 4.36379C38.5249 4.36379 39.0524 4.1265 39.0574 3.00861C39.0574 2.43385 38.9619 1.66925 38.1431 1.66925H38.138C38.1113 1.6716 38.077 1.6729 38.0368 1.67443C37.8957 1.6798 37.6803 1.68799 37.4498 1.75362C37.4424 1.75362 37.4351 1.75645 37.4257 1.76003C37.4223 1.76134 37.4186 1.76276 37.4146 1.76417L37.3242 1.79581L37.3091 1.80635C37.2992 1.81051 37.2901 1.81385 37.2814 1.81702C37.2681 1.82188 37.256 1.82633 37.2438 1.83272L37.1584 1.86963L37.1986 1.954C37.2036 1.96982 37.2337 2.07528 37.2337 2.24402V4.27415L37.3091 4.28997Z"
                                          fill="white"></path>
                                    <path
                                        d="M26.8243 6.01426C28.226 6.01426 28.8791 5.52914 28.8791 4.33215C28.8791 3.47264 28.2812 2.78715 27.2764 2.78715H25.9853C25.5985 2.78715 25.3674 2.55513 25.3674 2.16492C25.3674 1.90127 25.4628 1.57434 26.0958 1.57434H28.9192C28.9795 1.18941 29.0097 0.946844 29.0649 0.56191H26.131C24.7645 0.56191 24.0762 1.16304 24.0762 2.16492C24.0762 3.15626 24.6741 3.67302 25.6789 3.67302H26.97C27.3568 3.67302 27.5879 3.99468 27.5879 4.33215C27.5879 4.55362 27.4925 5.01238 26.8645 5.01238H26.6485L22.5138 5.00183H21.7602C21.1222 5.00183 20.6751 4.62217 20.6751 3.74157V3.13517C20.6751 2.21765 21.0217 1.64816 21.7602 1.64816H22.9861C23.0413 1.25796 23.0765 1.01012 23.1267 0.641006H21.4538C20.2028 0.641006 19.3387 1.52161 19.3086 3.05607V3.74157C19.3387 5.27603 20.2028 6.00899 21.4538 6.00899H22.6746L24.9152 6.01426H26.8243Z"
                                        fill="white"></path>
                                </svg>
                                <svg width="41" height="17" viewBox="0 0 41 17" fill="none" class=""
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.72769 2.24583C8.19862 1.66032 8.51818 0.874163 8.4339 0.0708008C7.74453 0.104874 6.90329 0.522882 6.41625 1.10885C5.97894 1.61063 5.59188 2.42971 5.69279 3.1994C6.46664 3.26612 7.23978 2.81491 7.72769 2.24583Z"
                                        fill="white"></path>
                                    <path
                                        d="M8.42511 3.34968C7.30128 3.28314 6.34576 3.98369 5.80908 3.98369C5.2721 3.98369 4.45027 3.38321 3.56139 3.3994C2.40445 3.41629 1.33095 4.06652 0.74385 5.10069C-0.463706 7.16954 0.425177 10.2384 1.59946 11.9233C2.16972 12.7569 2.85698 13.6748 3.76255 13.6418C4.61816 13.6085 4.95353 13.0911 5.99356 13.0911C7.03283 13.0911 7.33492 13.6418 8.24064 13.6251C9.17989 13.6084 9.76709 12.7911 10.3373 11.9567C10.9915 11.0064 11.2593 10.0889 11.2762 10.0385C11.2593 10.0218 9.46504 9.33761 9.4484 7.28595C9.43146 5.56807 10.8571 4.75095 10.9242 4.70028C10.1191 3.51667 8.86121 3.38321 8.42511 3.34968Z"
                                        fill="white"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M22.3539 5.13515C22.3539 2.69845 20.6531 1.02481 18.2105 1.02481L13.4908 1.02481V13.538H15.4448V9.26289H18.1492C20.6181 9.26289 22.3539 7.58055 22.3539 5.13515ZM17.6868 7.63256H15.4448V2.66382H17.6956C19.388 2.66382 20.3562 3.5657 20.3562 5.14384C20.3562 6.72214 19.388 7.63256 17.6868 7.63256Z"
                                          fill="white"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M26.2756 8.24827C24.0945 8.36971 22.8645 9.34954 22.8645 10.9452C22.8645 12.5841 24.1208 13.6941 25.9179 13.6941C27.1217 13.6941 28.2821 13.0524 28.8142 12.0378H28.8576V13.538H30.6635V7.25105C30.6635 5.42135 29.2416 4.25067 27.017 4.25067C24.7488 4.25067 23.3356 5.46467 23.231 7.11239H25.0106C25.1762 6.29714 25.8567 5.77695 26.9474 5.77695C28.0987 5.77695 28.7879 6.38395 28.7879 7.39857V8.10092L26.2756 8.24827ZM28.7879 9.40173V10.1215C28.7879 11.3094 27.7584 12.2113 26.4412 12.2113C25.4292 12.2113 24.7663 11.6909 24.7663 10.8932C24.7663 10.1128 25.403 9.6185 26.5284 9.54039L28.7879 9.40173Z"
                                          fill="white"></path>
                                    <path
                                        d="M32.3684 16.894V15.3764C32.5077 15.411 32.8217 15.411 32.9788 15.411C33.8512 15.411 34.3223 15.0469 34.6101 14.1104C34.6101 14.093 34.776 13.5554 34.776 13.5467L31.4611 4.41542H33.5022L35.8229 11.8384H35.8576L38.1784 4.41542H40.1673L36.7299 14.0149C35.9451 16.2263 35.0378 16.9373 33.136 16.9373C32.9788 16.9373 32.5077 16.9199 32.3684 16.894Z"
                                        fill="white"></path>
                                </svg>
                                <svg width="39" height="13" viewBox="0 0 39 13" fill="none" class=""
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M28.4882 1.00937L28.0457 3.49887C26.7188 2.78718 23.699 2.6188 23.6987 3.9296C23.6987 4.45034 24.3819 4.80847 25.2054 5.24011C26.4544 5.89474 28.0259 6.71846 28.0259 8.53492C28.0259 11.4375 24.8337 12.5039 22.7178 12.5039C20.6024 12.5039 19.2179 11.8493 19.2179 11.8493L19.6788 9.24629C20.9484 10.2383 24.7952 10.5202 24.7952 8.94704C24.7952 8.286 24.0379 7.89616 23.1598 7.4441C21.9482 6.82036 20.5065 6.07818 20.5065 4.34172C20.5065 1.15853 24.1606 0.503906 25.6993 0.503906C27.1227 0.503906 28.4882 1.00937 28.4882 1.00937ZM38.834 12.3039H35.9869L35.6237 10.5819H31.6819L31.0355 12.3039H27.8032L32.4277 1.57469C32.4277 1.57469 32.708 0.710744 33.8591 0.710744H36.3516L38.834 12.3039ZM11.5981 0.711054L8.64202 8.6847L8.29222 6.96766L7.24919 1.75486C7.24919 1.75486 7.12304 0.711054 5.77832 0.711054H0.891328L0.833984 0.907348C0.833984 0.907348 2.32843 1.21001 4.07743 2.23241L6.77133 12.3042H10.002L14.9352 0.711054H11.5981ZM17.3073 12.3039H14.2066L16.1445 0.711054H19.2456L17.3073 12.3039ZM32.5749 8.20311L34.2041 3.86479L35.1206 8.20311H32.5749Z"
                                          fill="white"></path>
                                    <path
                                        d="M8.29254 6.96817L7.24919 1.75474C7.24919 1.75474 7.12304 0.710938 5.77832 0.710938H0.891328L0.833984 0.907232C0.833984 0.907232 3.18286 1.38107 5.43585 3.1564C7.59007 4.85327 8.29254 6.96817 8.29254 6.96817Z"
                                        fill="white"></path>
                                </svg>
                                <svg width="29" height="23" viewBox="0 0 29 23" fill="none" class=""
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M27.3185 19.124V22.3772H26.8185V22.0954C26.66 22.3042 26.4197 22.4354 26.0928 22.4354C25.4486 22.4354 24.9436 21.9253 24.9436 21.2169C24.9436 20.5085 25.4489 19.9984 26.0928 19.9984C26.4197 19.9984 26.66 20.1295 26.8185 20.3384V19.124H27.3185ZM8.5771 20.0557L8.57654 22.3772H8.0775V22.0954C7.91904 22.3042 7.67855 22.4354 7.35183 22.4354C6.70763 22.4354 6.20258 21.9253 6.20258 21.2169C6.20258 20.5085 6.70791 19.9984 7.35183 19.9984C7.67869 19.9984 7.91904 20.1295 8.0775 20.3384V20.0557H8.5771ZM6.71701 21.2164C6.71701 20.8085 6.98158 20.4734 7.41399 20.4734C7.82721 20.4734 8.10606 20.7941 8.10606 21.2164C8.10606 21.6386 7.82721 21.9593 7.41399 21.9593C6.98158 21.9593 6.71701 21.6242 6.71701 21.2164ZM28.3156 22.1103C28.2717 22.0667 28.2127 22.0423 28.1511 22.0424L28.1518 22.04C28.1203 22.0398 28.0891 22.046 28.06 22.0584C28.0322 22.0696 28.0069 22.0864 27.9857 22.1079C27.9645 22.1288 27.9477 22.1537 27.9361 22.1812C27.9119 22.2383 27.9119 22.303 27.9361 22.3601C27.9475 22.3882 27.9641 22.414 27.985 22.4358C28.0065 22.4569 28.0317 22.4737 28.0593 22.4853C28.0884 22.4977 28.1196 22.5039 28.1511 22.5037C28.1823 22.5039 28.2132 22.4976 28.2418 22.4853C28.2692 22.4734 28.2941 22.4566 28.3156 22.4358C28.3365 22.4147 28.3533 22.3898 28.3652 22.3625C28.3893 22.3054 28.3893 22.2407 28.3652 22.1836C28.3536 22.1561 28.3368 22.1312 28.3156 22.1103ZM28.1511 22.451C28.1748 22.4512 28.1982 22.4464 28.2199 22.4368C28.2408 22.4277 28.2598 22.4147 28.2759 22.3985C28.292 22.3823 28.3049 22.3631 28.3138 22.342C28.3322 22.2972 28.3322 22.2468 28.3138 22.202C28.3047 22.1809 28.2919 22.1618 28.2759 22.1455C28.2598 22.1292 28.2408 22.1162 28.2199 22.1071C28.1981 22.0981 28.1747 22.0936 28.1511 22.0939C28.1272 22.0936 28.1034 22.0981 28.0811 22.1071C28.0598 22.1161 28.0403 22.1291 28.0239 22.1455C27.9733 22.1979 27.9586 22.2758 27.9865 22.3434C27.995 22.3646 28.0078 22.3838 28.0239 22.3999C28.0404 22.4163 28.0598 22.4293 28.0811 22.4382C28.1033 22.4478 28.1271 22.4526 28.1511 22.4524V22.451ZM28.2278 22.1815C28.2097 22.1682 28.1875 22.1617 28.1651 22.1631L28.0678 22.1633V22.3772H28.1129V22.3025H28.1381L28.1982 22.3772H28.2521L28.1849 22.2999C28.1883 22.2986 28.1916 22.2969 28.1947 22.2947C28.2085 22.2915 28.2214 22.285 28.2322 22.2755C28.2441 22.2641 28.2505 22.2481 28.2498 22.2316C28.2508 22.2123 28.2426 22.1937 28.2278 22.1815ZM28.1849 22.2999C28.18 22.3018 28.175 22.3026 28.1699 22.3025H28.1381L28.1338 22.2972H28.1129V22.3025L28.1124 22.2036L28.1699 22.2026C28.1807 22.2019 28.1915 22.2063 28.2008 22.2152C28.2083 22.2234 28.2127 22.2374 28.2123 22.2521C28.2127 22.267 28.2084 22.2813 28.2008 22.2899C28.1988 22.2917 28.1968 22.2933 28.1947 22.2947C28.1906 22.2956 28.1864 22.2963 28.1821 22.2966L28.1849 22.2999ZM25.4579 21.2164C25.4579 20.8085 25.7224 20.4734 26.155 20.4734C26.5686 20.4734 26.8471 20.7941 26.8471 21.2164C26.8471 21.6386 26.5686 21.9593 26.155 21.9593C25.7226 21.9593 25.4579 21.6242 25.4579 21.2164ZM14.7779 20.4495C15.0998 20.4496 15.3065 20.6535 15.3593 21.0123H14.1672C14.2205 20.6773 14.4219 20.4495 14.7779 20.4495ZM13.6435 21.2156C13.6435 20.492 14.1145 19.9971 14.7878 19.9971C15.4309 19.9971 15.8735 20.4921 15.8786 21.2155C15.8786 21.2822 15.8737 21.3445 15.8689 21.4062L15.8686 21.4095H14.1627C14.2348 21.8272 14.5279 21.9778 14.8499 21.9778C15.0804 21.9778 15.3257 21.8906 15.5183 21.7351L15.7631 22.109C15.4843 22.3469 15.1673 22.4341 14.8213 22.4341C14.1334 22.4341 13.6435 21.9535 13.6435 21.2156ZM20.8194 21.2155C20.8194 20.8076 21.084 20.4726 21.5164 20.4726C21.9296 20.4726 22.2085 20.7932 22.2085 21.2155C22.2085 21.6378 21.9296 21.9584 21.5164 21.9584C21.084 21.9584 20.8194 21.6234 20.8194 21.2155ZM22.6794 20.0557L22.6795 22.3772H22.18V22.0954C22.021 22.3042 21.7812 22.4354 21.4544 22.4354C20.8102 22.4354 20.3051 21.9253 20.3051 21.2169C20.3051 20.5085 20.8105 19.9984 21.4544 19.9984C21.7812 19.9984 22.021 20.1295 22.18 20.3384V20.0557H22.6794ZM17.9981 21.2155C17.9981 21.9194 18.4832 22.434 19.2237 22.434C19.5698 22.434 19.8003 22.3562 20.0496 22.1573L19.8097 21.7495C19.6221 21.8856 19.4252 21.9584 19.2078 21.9584C18.809 21.9535 18.5157 21.6622 18.5157 21.2155C18.5157 20.7688 18.809 20.4777 19.2078 20.4726C19.4246 20.4726 19.6216 20.5454 19.8097 20.6815L20.0496 20.2737C19.7999 20.0748 19.5694 19.997 19.2237 19.997C18.4832 19.997 17.9981 20.5115 17.9981 21.2155ZM23.833 20.337C23.9627 20.1331 24.1504 19.997 24.4387 19.997C24.5399 19.997 24.6838 20.0168 24.7944 20.0608L24.6404 20.5363C24.5411 20.4962 24.4349 20.4764 24.3279 20.478C24.0014 20.478 23.838 20.6913 23.838 21.0753V22.3759H23.3378V20.0557H23.833V20.337ZM11.0471 20.2402C10.8067 20.0801 10.4755 19.9974 10.1102 19.9974C9.52814 19.9974 9.15341 20.2792 9.15341 20.7402C9.15341 21.1185 9.43239 21.3519 9.94613 21.4247L10.1821 21.4587C10.4561 21.4975 10.5854 21.5704 10.5854 21.7014C10.5854 21.8808 10.4035 21.9832 10.0618 21.9832C9.71572 21.9832 9.46599 21.8715 9.29759 21.7404L9.06284 22.1339C9.33679 22.3377 9.68282 22.435 10.0576 22.435C10.7211 22.435 11.1056 22.1194 11.1056 21.6777C11.1056 21.2698 10.803 21.0565 10.3029 20.9837L10.0675 20.9492C9.85122 20.9209 9.67792 20.8769 9.67792 20.7214C9.67792 20.5518 9.84128 20.4497 10.1154 20.4497C10.4086 20.4497 10.6925 20.5614 10.8317 20.6486L11.0479 20.2407L11.0471 20.2402ZM16.8883 20.3379C17.0175 20.134 17.2052 19.9979 17.4934 19.9979C17.5946 19.9979 17.7385 20.0168 17.8491 20.0608L17.6951 20.5363C17.5958 20.4962 17.4896 20.4764 17.3827 20.478C17.0561 20.478 16.8928 20.6913 16.8928 21.0753V22.3759H16.3932V20.0557H16.8883V20.3379ZM13.2301 20.0557H12.4132V19.3518H11.9081V20.0557H11.4421V20.5168H11.9081V21.5753C11.9081 22.1136 12.115 22.4343 12.706 22.4343C12.9229 22.4343 13.1726 22.3664 13.331 22.2549L13.1867 21.8228C13.0376 21.9101 12.8743 21.954 12.7444 21.954C12.4946 21.954 12.4132 21.7985 12.4132 21.5657V20.5173H13.2301V20.0557ZM5.76079 20.9203V22.3765L5.25462 22.3753V21.084C5.25462 20.6907 5.09182 20.4723 4.75068 20.4723C4.41906 20.4723 4.18851 20.6863 4.18851 21.0891V22.3756H3.68345V21.0843C3.68345 20.691 3.51561 20.4726 3.18385 20.4726C2.8423 20.4726 2.62112 20.6866 2.62112 21.0894V22.3759H2.11719V20.0557H2.61721V20.3425C2.80492 20.0708 3.04471 19.998 3.2901 19.998C3.64118 19.998 3.89091 20.1535 4.04937 20.4108C4.26116 20.0852 4.56366 19.993 4.85693 19.998C5.41476 20.0029 5.76079 20.3719 5.76079 20.9203Z"
                                          fill="white"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M28.4083 14.3193V14.6626H28.346V14.4034L28.25 14.6272H28.1846L28.0885 14.404V14.6626H28.0254V14.3193H28.1145L28.2167 14.5549L28.3195 14.3193H28.4083ZM27.8448 14.3781V14.6626H27.7817V14.3781H27.668V14.3202H27.9585V14.3781H27.8448Z"
                                          fill="#F79410"></path>
                                    <path d="M18.4539 16.1136H10.8828V2.37207H18.454L18.4539 16.1136Z"
                                          fill="#FF5F00"></path>
                                    <path
                                        d="M11.3626 9.2432C11.3626 6.45574 12.655 3.97266 14.6673 2.37245C13.1441 1.15939 11.26 0.501021 9.32015 0.503916C4.54156 0.503916 0.667969 4.41657 0.667969 9.2432C0.667969 14.0698 4.54156 17.9825 9.32015 17.9825C11.2601 17.9854 13.1442 17.327 14.6675 16.114C12.6552 14.514 11.3626 12.0308 11.3626 9.2432Z"
                                        fill="#EB001B"></path>
                                    <path
                                        d="M28.6682 9.2432C28.6682 14.0698 24.7946 17.9825 20.016 17.9825C18.0759 17.9854 16.1916 17.327 14.668 16.114C16.6809 14.5138 17.9732 12.0308 17.9732 9.2432C17.9732 6.4556 16.6809 3.97266 14.668 2.37245C16.1915 1.15943 18.0758 0.501072 20.0159 0.503915C24.7944 0.503915 28.668 4.41657 28.668 9.2432"
                                        fill="#F79E1B"></path>
                                </svg>
                                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" class=""
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.166565 0H23.1666V23H0.166565V0Z" fill="white"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M1.85373 1.59912H21.4911V12.3315H20.4706C20.1742 12.3315 19.9439 12.4137 19.7791 12.5289V12.3315H18.2812C18.0345 12.3315 17.7546 12.3972 17.6064 12.5289V12.3314H14.9233V12.5288C14.693 12.3642 14.3472 12.3314 14.1661 12.3314H12.3884V12.5288C12.2239 12.3642 11.8451 12.3314 11.6149 12.3314H9.62313L9.16219 12.825L8.73419 12.3314H5.77131V15.5575H8.68503L9.16231 15.0636L9.5902 15.5575H11.4008V14.8003H11.5655C11.8123 14.8003 12.0923 14.8003 12.339 14.6851V15.5575H13.8205V14.7181H13.9027C13.9852 14.7181 14.0015 14.7181 14.0015 14.8169V15.5575H18.5118C18.7915 15.5575 19.0879 15.4918 19.2524 15.3599V15.5575H20.6845C20.9808 15.5575 21.2772 15.5081 21.4911 15.4093V21.3187H1.85373V11.5905H2.80854L3.02249 11.0638H3.4999L3.69737 11.5905H5.55748V11.1955L5.72203 11.5905H6.69319L6.85773 11.179V11.5905H11.4668V10.7346H11.549C11.6149 10.7346 11.6313 10.7511 11.6313 10.8499V11.5907H14.0181V11.3932C14.2155 11.4919 14.5119 11.5907 14.9069 11.5907H15.9109L16.1249 11.064H16.6024L16.8163 11.5907H18.7423V11.0969L19.0385 11.5907H20.5856V8.36443H19.0549V8.74304L18.8244 8.36443H17.2607V8.74304L17.0631 8.36443H14.9398C14.5775 8.36443 14.2648 8.41371 14.018 8.54544V8.36443H12.5531V8.54544C12.3883 8.41383 12.1744 8.36443 11.9276 8.36443H6.57792L6.21578 9.18739L5.83717 8.36443H4.15819V8.74304L3.9606 8.36443H2.52862L1.85373 9.89521V1.59912ZM19.3018 11.1297H20.0917V8.82525H19.5322V10.4219L18.5611 8.82525H17.705V10.9981L16.7833 8.82537H15.9602L15.1702 10.636H14.9232C14.7752 10.636 14.6269 10.603 14.5447 10.5208C14.4459 10.4056 14.3965 10.2244 14.3965 9.97754C14.3965 9.73067 14.4459 9.54965 14.5447 9.45086C14.6598 9.35206 14.7752 9.31912 14.9726 9.31912H15.4993V8.82525H14.9726C14.5941 8.82525 14.2977 8.90746 14.1331 9.08859C13.8864 9.33547 13.837 9.64821 13.837 9.99389C13.837 10.4054 13.9358 10.6688 14.1169 10.8663C14.3143 11.0638 14.6599 11.1297 14.9233 11.1297H15.5654L15.7793 10.6194H16.9315L17.1457 11.1297H18.2648V9.40134L19.3018 11.1297ZM21.6227 14.3725C21.6227 14.8664 21.31 15.0966 20.7503 15.0966H19.6805V14.6027H20.7503C20.8491 14.6027 20.9314 14.5863 20.9644 14.5535C20.9972 14.5205 21.0302 14.4711 21.0302 14.4053C21.0302 14.3394 20.9974 14.2736 20.9644 14.2408C20.9314 14.2077 20.8656 14.1914 20.7668 14.1914C20.7342 14.1903 20.701 14.1895 20.6674 14.1886C20.1771 14.1759 19.6147 14.1614 19.6147 13.4836C19.6147 13.1542 19.8286 12.7921 20.4047 12.7921H21.5075V13.286H20.4869C20.3884 13.286 20.3224 13.286 20.273 13.3188C20.2236 13.3682 20.1908 13.4176 20.1908 13.4999C20.1908 13.5823 20.2402 13.6317 20.3059 13.6647L20.3073 13.6651C20.3728 13.6813 20.4383 13.6975 20.5201 13.6975H20.8162C21.129 13.6975 21.3266 13.7633 21.4583 13.8787C21.5569 13.9938 21.6227 14.1421 21.6227 14.3725ZM1.39291 21.0224C1.39291 20.8251 1.22837 20.6603 1.0143 20.6603C0.816825 20.6603 0.652161 20.8251 0.652161 21.0224C0.652161 21.2364 0.816825 21.4012 1.0143 21.4012C1.22825 21.4011 1.39291 21.2364 1.39291 21.0224ZM1.1131 21.2035H1.17885V21.1706C1.17063 21.1706 1.16652 21.1706 1.16445 21.1686C1.16238 21.1665 1.16238 21.1624 1.16238 21.1541V21.0883C1.16238 21.0554 1.14603 21.0389 1.12957 21.0223C1.14591 21.0061 1.16238 20.9895 1.16238 20.9401C1.16238 20.8745 1.1131 20.8579 1.04724 20.8579H0.899038V21.2035H0.948437V21.0555H1.04724C1.09663 21.0555 1.09663 21.0883 1.09663 21.1047C1.09663 21.1116 1.09948 21.1241 1.1028 21.1388C1.10748 21.1594 1.1131 21.1843 1.1131 21.2035ZM1.0637 20.9073C1.08017 20.9073 1.1131 20.9073 1.1131 20.9567C1.1131 20.9895 1.08017 21.0061 1.04724 21.0061H0.948437V20.9073H1.0637ZM1.0143 21.3352C1.19543 21.3352 1.34351 21.2036 1.34351 21.0224C1.34351 20.8579 1.19531 20.7097 1.0143 20.7097C0.833291 20.7097 0.70156 20.8579 0.70156 21.0224C0.70156 21.2035 0.833172 21.3352 1.0143 21.3352ZM18.6597 13.6975C18.9725 13.6975 19.1701 13.7633 19.3018 13.8787C19.4006 13.9938 19.4664 14.1421 19.4664 14.3725C19.4664 14.8663 19.1535 15.0966 18.594 15.0966H17.524V14.6027H18.594C18.6928 14.6027 18.7585 14.5863 18.8079 14.5535C18.8409 14.5205 18.8739 14.4711 18.8739 14.4053C18.8739 14.3394 18.8407 14.2736 18.8079 14.2408C18.7751 14.2077 18.7091 14.1914 18.6106 14.1914C18.578 14.1903 18.5448 14.1895 18.5113 14.1886C18.0208 14.1759 17.4582 14.1613 17.4582 13.4836C17.4582 13.1542 17.6558 12.7921 18.2484 12.7921H19.3512V13.286H18.3306C18.2318 13.286 18.1661 13.286 18.1167 13.3188C18.0508 13.3682 18.0345 13.4176 18.0345 13.4999C18.0345 13.5823 18.0836 13.6317 18.1496 13.6647L18.1524 13.6654C18.2173 13.6814 18.2825 13.6975 18.3636 13.6975H18.6597ZM17.1948 14.6194H15.8947V14.1585H17.162V13.6978H15.8947V13.2696H17.1948V12.7923H15.3514V15.0967H17.1948V14.6194ZM14.0839 12.7922C14.3637 12.7922 14.5776 12.8088 14.7587 12.9076C14.9399 13.0062 15.0387 13.1544 15.0388 13.4176C15.0388 13.7799 14.7917 13.9774 14.6437 14.0266C14.7755 14.076 14.874 14.1582 14.9234 14.2242C14.9893 14.3394 15.0056 14.4382 15.0056 14.6521V15.0966H14.4626V14.8169C14.4626 14.6687 14.4626 14.4711 14.3638 14.3559C14.2815 14.2737 14.1661 14.2571 13.9687 14.2571H13.376V15.0966H12.8165V12.7922H14.0839ZM11.6313 12.7922H9.87001L9.16219 13.5494L8.48731 12.7922H6.26518V15.0966H8.4545L9.16231 14.3394L9.8372 15.0966H10.9072V14.3231H11.5985C12.0758 14.3231 12.5533 14.1914 12.5533 13.5494C12.5532 12.924 12.0593 12.7922 11.6313 12.7922ZM14.0509 13.7799C14.1497 13.7799 14.2321 13.7799 14.3143 13.747C14.3803 13.6976 14.4294 13.6153 14.4294 13.5165C14.4294 13.4177 14.3803 13.352 14.3143 13.3189C14.2485 13.2695 14.1497 13.2695 14.0509 13.2695H13.376V13.7964L14.0509 13.7799ZM11.6313 13.8622H10.907V13.2695H11.6313C11.8289 13.2695 11.9605 13.352 11.9605 13.5494C11.9605 13.747 11.8288 13.8622 11.6313 13.8622ZM10.3638 13.0392L9.50787 13.9444L10.3638 14.8992V13.0392ZM8.17457 14.6194H6.80833V14.1585H8.02637V13.6978H6.80833V13.2696H8.19103L8.80005 13.9445L8.17457 14.6194ZM13.5572 8.82525H12.9977V11.1297H13.5572V8.82525ZM11.7301 8.82525C12.0099 8.82525 12.2073 8.82525 12.3884 8.92405C12.5694 9.0392 12.6848 9.18739 12.6847 9.45074C12.6847 9.81288 12.4376 9.99389 12.2896 10.0598C12.4048 10.109 12.5036 10.1914 12.553 10.2572C12.6352 10.3725 12.6515 10.4713 12.6515 10.6688V11.1297H12.092V10.8334C12.092 10.8176 12.0923 10.8008 12.0925 10.7833C12.0943 10.6554 12.0967 10.4903 12.0098 10.389C11.9276 10.3066 11.7959 10.2902 11.5983 10.2902H11.0057V11.1297H10.4626V8.82525H11.7301ZM10.0675 10.6524H8.78359V10.1915H10.051V9.7142H8.78359V9.30266H10.0675V8.82537H8.22397V11.1298H10.0675V10.6524ZM6.90713 8.82525H7.81231V11.1297H7.25269V9.31912L6.44607 11.1297H5.96878L5.16229 9.31912V11.1297H4.04293L3.82899 10.6194H2.67681L2.46287 11.1297H1.87032L2.85794 8.82525H3.68091L4.61913 10.998V8.82525H5.50796L6.23225 10.389L6.90713 8.82525ZM16.7341 10.1256L16.3554 9.22033L15.9769 10.1256H16.7341ZM11.6807 9.813C11.796 9.813 11.8783 9.813 11.9605 9.7636C12.0263 9.73055 12.0592 9.64833 12.0592 9.54965C12.0592 9.45098 12.0262 9.38511 11.9604 9.33571C11.8944 9.30278 11.7794 9.30278 11.6806 9.30278H11.0057V9.813H11.6807ZM2.87429 10.1256L3.2529 9.22033L3.63151 10.1256H2.87429Z"
                                          fill="#0077A6"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="hidden 2lg:block"><label
                                class="group flex cursor-pointer items-start gap-2 has-[input:disabled]:cursor-not-allowed"><input
                                    type="checkbox"
                                    class="bg-body !ring-offset-body h-[18px] w-[18px] focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-offset-1 group-hover:ring-1 group-hover:ring-offset-1 focus:ring-primary text-primary group-hover:ring-primary rounded-sm mt-px"><span
                                    class="text-sm">أؤكد أنني أوافق على <a class="text-primary font-semibold underline"
                                                                           href="/ar/terms" target="_blank"
                                                                           rel="noreferrer">الشروط والأحكام</a></span></label>
                        </div>
                        <div class=" text-sm mt-4hidden 2lg:block"><label
                                class="group flex cursor-pointer items-start gap-2 has-[input:disabled]:cursor-not-allowed"><input
                                    type="checkbox"
                                    class="bg-body !ring-offset-body h-[18px] w-[18px] focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-offset-1 group-hover:ring-1 group-hover:ring-offset-1 focus:ring-primary text-primary group-hover:ring-primary rounded-sm mt-px">أوافق
                                على أن إعادة بيع أي تذكرة على منصة اخرى غير webook.com تعتبر غير نظامية، وسيترتب عليه
                                حظر الحساب وإلغاء التذكرة وعدم قبول طلب استرداد التذاكر او قيمتها.</label></div>
                        <button
                            class="bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast focus:ring-1 ring-offset-2 ring-offset-body relative items-center justify-center overflow-hidden px-4 transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md 2lg:flex !mt-8 hidden w-full gap-2 py-3 text-center text-lg font-semibold"
                            disabled="" id="proceed-to-payment" data-event-name="نيشن خليجي 2"
                            data-event-venue="ميوزك نيشن">
                            <svg width="15" height="15" viewBox="0 0 15 15" class="h-4 w-4 pb-0.5 grayscale" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path id="Main shape" fill-rule="evenodd" clip-rule="evenodd"
                                      d="M3.33253 4.66359C3.33253 2.36195 5.19839 0.496094 7.50003 0.496094C9.80168 0.496094 11.6675 2.36195 11.6675 4.66359V6.33059H12.168C13.2726 6.33059 14.168 7.22602 14.168 8.33059V12.6656C14.168 13.7702 13.2726 14.6656 12.168 14.6656H2.83203C1.72746 14.6656 0.832031 13.7702 0.832031 12.6656V8.33059C0.832031 7.22602 1.72746 6.33059 2.83203 6.33059H3.33253V4.66359ZM7.50003 2.16309C6.11904 2.16309 4.99953 3.2826 4.99953 4.66359V6.33059H10.0005V4.66359C10.0005 3.28261 8.88102 2.16309 7.50003 2.16309Z"
                                      fill="currentColor"></path>
                            </svg>
                            <span>الذهاب للدفع</span>
                            <div class="items-center gap-2 2lg:block hidden"><p class="">130 ر.س</p></div>
                        </button>
                    </div>
                </div>
            </aside>
        </section>
@endsection

@section('scripts')
  <script>


      // ********************************** Web Start Here ******************************************************

      document.addEventListener('DOMContentLoaded', function () {


      var total_tickets = 0;
          if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

              @foreach($event->tickets as $key => $ticket)
              var added_ticket_{{$key}} = 0;
              var a = 0;

              $("#add-to-cart-" + {{$key}}).click(function () {
                  var ticket_val = parseInt($("#tickets_count_" + {{$key}}).text(), 10);
                  var final_ticket = ticket_val + 1;
                  $("#tickets_count_" + {{$key}}).text(final_ticket);
                  total_tickets = total_tickets + 1;

                  if (final_ticket > 0) {
                      $('#remove-from-cart-' + {{$key}}).removeAttr('disabled');
                      if (total_tickets !== 0) {
                          $('#book-1').attr('style', 'display:none');
                          $('#book-2').removeAttr('style');

                          if (added_ticket_{{$key}} === 0) {
                              $("#seat-tickets").after(`<li id = "ticket-{{$key}}" class="flex items-center justify-between gap-2">
                                <div class="flex grow items-center gap-1 text-xs sm:gap-2 md:text-sm"><span id = "total_ticket_count_{{$key}}"
                                        class="shrink-0">` + final_ticket + ` x</span><span style="color: rgb(0, 0, 0);"><svg width="24"
                                                                                                           height="21"
                                                                                                           viewBox="0 0 24 21"
                                                                                                           fill="none"
                                                                                                           xmlns="http://www.w3.org/2000/svg"
                                                                                                           class="h-4 w-4"><path
                                                fill-rule="evenodd" clip-rule="evenodd"
                                                d="M3.6629 9.30772L0.984736 11.9859C0.622568 12.3481 0.622568 12.9353 0.984736 13.2975L2.0237 14.3364C2.78649 13.8311 3.82433 13.9144 4.49639 14.5865C5.16845 15.2586 5.25181 16.2964 4.74645 17.0592L5.78554 18.0983C6.14771 18.4605 6.7349 18.4605 7.09707 18.0983L9.77545 15.4199L8.66399 14.3084C8.3571 14.0015 8.3571 13.504 8.66399 13.1971C8.97087 12.8902 9.46844 12.8902 9.77532 13.1971L10.8868 14.3086L16.3432 8.85207C16.7054 8.4899 16.7054 7.9027 16.3432 7.54053L15.3041 6.50144C14.5413 7.00686 13.5034 6.92353 12.8314 6.25143C12.1593 5.57934 12.0759 4.54144 12.5814 3.77863L11.5424 2.73967C11.1802 2.37749 10.593 2.37749 10.2309 2.73967L4.77424 8.19637L5.88551 9.30766C6.1924 9.61455 6.1924 10.1121 5.88551 10.419C5.57863 10.7259 5.08107 10.7259 4.77418 10.419L3.6629 9.30772ZM6.44121 12.0861C6.13432 11.7792 6.13432 11.2816 6.44121 10.9747C6.74809 10.6678 7.24566 10.6678 7.55254 10.9747L8.10821 11.5304C8.41509 11.8373 8.41509 12.3348 8.10821 12.6417C7.80132 12.9486 7.30376 12.9486 6.99687 12.6417L6.44121 12.0861Z"
                                                fill="currentColor"></path></svg></span>
                                    <div>
                                        <div class="inline-block gap-1 text-xs md:text-sm"><p class=""><span
                                                    class="ltr:mr-1 rtl:ml-1">{{$ticket->name}}</span></p></div>
                                    </div>
                                </div>
                                <div class="flex shrink-0 items-center text-xs md:gap-2 md:text-sm">
                                    <div class="text-end">
                                        <div class="font-bold"><span
                                                class="text-xs font-normal md:text-sm">{{$ticket->price}} ر.س</span></div>
                                    </div>
                                    <button id = "remove-ticket-0"
                                        class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1
                                         ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden text-center
                                          transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none
                                           h-6 w-6 rounded-md p-0.5 ltr:ml-1.5 rtl:mr-1.5">
                                        <svg width="14" height="13" viewBox="0 0 14 13"
                                             class="h-2.5 w-2.5 lg:h-3 lg:w-3" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M12.4679 0.291551C12.0774 -0.0989738 11.4442 -0.0989739 11.0537 0.29155L7.04678 4.29849L3.03984 0.291551C2.64932 -0.0989729 2.01615 -0.0989726 1.62563 0.291552L1.15422 0.762956C0.763697 1.15348 0.763697 1.78664 1.15422 2.17717L5.16116 6.18411L1.15422 10.191C0.763698 10.5816 0.763698 11.2147 1.15422 11.6053L1.62563 12.0767C2.01615 12.4672 2.64932 12.4672 3.03984 12.0767L7.04678 8.06973L11.0537 12.0767C11.4442 12.4672 12.0774 12.4672 12.4679 12.0767L12.9393 11.6053C13.3299 11.2147 13.3299 10.5816 12.9393 10.191L8.9324 6.18411L12.9393 2.17717C13.3299 1.78664 13.3299 1.15348 12.9393 0.762955L12.4679 0.291551Z"
                                                  fill="currentColor"></path>
                                        </svg>
                                    </button>
                                </div>
                            </li>`);


                          }
                          added_ticket_{{$key}} = added_ticket_{{$key}} + 1;
                          $("#total_ticket_count_" + {{$key}}).text(added_ticket_{{$key}})
                          $("#mobile-tickets").text(total_tickets);

                      }
                  }

              })


              $("#remove-from-cart-" + {{$key}}).click(function () {
                  var ticket_val = parseInt($("#tickets_count_" + {{$key}}).text(), 10);
                  var final_ticket = ticket_val - 1;
                  $("#tickets_count_" + {{$key}}).text(final_ticket);
                  total_tickets = total_tickets - 1;

                  if (final_ticket === 0) {
                      $('#remove-from-cart-' + {{$key}}).attr('disabled', '');

                      if (total_tickets === 0) {
                          $('#book-2').attr('style', 'display:none');
                          $('#book-1').removeAttr('style');
                      }
                  }
                  added_ticket_{{$key}} = added_ticket_{{$key}} - 1;
                  $("#total_ticket_count_" + {{$key}}).text(added_ticket_{{$key}})
                  $("#mobile-tickets").text(total_tickets);


              })


              @endforeach

          }
      });

      // ********************************** Web Ends Here ******************************************************



      // ********************************** Mobile Start Here ******************************************************

      document.addEventListener('DOMContentLoaded', function () {
          var total_tickets = 0;
          var total_before_tax = 0;
          var tax = 16.96;
          var tickets = [];

          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

              @foreach($event->tickets as $key => $ticket)
              var added_ticket_{{$key}} = 0;

              $("#add-to-cart-"+{{$key}}).click(function(){
                  var ticket_val =  parseInt($("#tickets_count_"+{{$key}}).text(),10);
                  var final_ticket = ticket_val + 1;
                  $("#tickets_count_"+{{$key}}).text(final_ticket);
                  total_tickets = total_tickets+1;

                      $('#select-word').attr('style','display:none');
                      $('#select-ticket').removeAttr('style');
                      $('#next').removeAttr('disabled');



                  if (final_ticket > 0){
                      $('#remove-from-cart-'+{{$key}}).removeAttr('disabled');
                      if (total_tickets !== 0) {

                          if (added_ticket_{{$key}} === 0) {
                                  if (total_tickets === 1){
                                      $("#last-section").after(`    <div id="tickets-summery" data-radix-popper-content-wrapper=""
         style="display: none; position: fixed; left: 0px; top: 0px; transform: translate(0px, -64px); min-width: max-content;
will-change: transform; z-index: 50; --radix-popper-available-width: 414.3999938964844px; --radix-popper-available-height: 832px;
--radix-popper-anchor-width: 143.31666564941406px; --radix-popper-anchor-height: 48px; --radix-popper-transform-origin: 50% 896px;">
        <div data-side="top" data-align="center" data-state="open" role="dialog"
             style="--radix-popover-content-transform-origin: var(--radix-popper-transform-origin); --radix-popover-content-available-width: var(--radix-popper-available-width); --radix-popover-content-available-height: var(--radix-popper-available-height); --radix-popover-trigger-width: var(--radix-popper-anchor-width); --radix-popover-trigger-height: var(--radix-popper-anchor-height);"
             tabindex="-1"
             class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 rounded-md p-4 relative flex h-screen w-screen items-end bg-black/10 !px-0 backdrop-blur-sm">
            <div style="height: auto;"
                 class="relative z-50 mx-auto w-full max-w-md overflow-hidden rounded-lg bg-[#141414]">
                <div class="flex justify-end p-1">
                    <button id="main-cancel"
                        class="m-1 flex items-center justify-center rounded-full bg-zinc-700 p-2 font-bold text-zinc-400"
                        aria-label="Close Tickets Summary">
                        <svg width="14" height="13" viewBox="0 0 14 13" class="h-3 w-3" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M12.4679 0.291551C12.0774 -0.0989738 11.4442 -0.0989739 11.0537 0.29155L7.04678 4.29849L3.03984 0.291551C2.64932 -0.0989729 2.01615 -0.0989726 1.62563 0.291552L1.15422 0.762956C0.763697 1.15348 0.763697 1.78664 1.15422 2.17717L5.16116 6.18411L1.15422 10.191C0.763698 10.5816 0.763698 11.2147 1.15422 11.6053L1.62563 12.0767C2.01615 12.4672 2.64932 12.4672 3.03984 12.0767L7.04678 8.06973L11.0537 12.0767C11.4442 12.4672 12.0774 12.4672 12.4679 12.0767L12.9393 11.6053C13.3299 11.2147 13.3299 10.5816 12.9393 10.191L8.9324 6.18411L12.9393 2.17717C13.3299 1.78664 13.3299 1.15348 12.9393 0.762955L12.4679 0.291551Z"
                                  fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
                <ul class="h-full max-h-[calc(100vh-260px)] space-y-1 overflow-y-auto px-2 pt-2" id="mobile-seat-tickets">
                </ul>
                <hr class="border-body-lighter my-4 border-dashed">
                <div class="space-y-1 px-2 pb-2">
                    <div class="flex items-center justify-between text-xs"><p>قبل الضريبة</p>
                        <div class="flex items-center gap-2"><p class=""><span id="total-before-tax"></span> ر.س</p></div>
                    </div>
                    <div class="flex items-center justify-between text-xs"><p>الضريبة</p>
                        <div class="flex items-center gap-2"><p class="" id="tax"> </p>ر.س</div>
                    </div>
                    <div class="flex flex-wrap items-center justify-between font-semibold"><p>المجموع</p>
                        <div class="flex items-center gap-2"><p class="" id="total"> </p>ر.س</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`);
                                  }

                                  $("#select-ticket").on('click', function()
                                  {
                                      $("#tax").text(tax);
                                      $("#total").text(parseInt(total_before_tax + tax),10);
                                      $('#tickets-summery').attr('style',`display: block; position: fixed; left: 0px; top: 0px; transform: translate(0px, -64px); min-width: max-content;
                              will-change: transform; z-index: 50; --radix-popper-available-width: 414.3999938964844px; --radix-popper-available-height: 832px;
                              --radix-popper-anchor-width: 143.31666564941406px; --radix-popper-anchor-height: 48px; --radix-popper-transform-origin: 50% 896px;`);

                                      $("#main-cancel").on('click', function()
                                      {
                                          $('#tickets-summery').attr('style',`display: none; position: fixed; left: 0px; top: 0px; transform: translate(0px, -64px); min-width: max-content;
                              will-change: transform; z-index: 50; --radix-popper-available-width: 414.3999938964844px; --radix-popper-available-height: 832px;
                              --radix-popper-anchor-width: 143.31666564941406px; --radix-popper-anchor-height: 48px; --radix-popper-transform-origin: 50% 896px;`);
                                      });
                                  });

                          }

                          // you need to check every added <li> element id before adding it if it's exist not and if it's exist don't add it and just increase the count +1
                          if ($("#ticket-item-{{$key}}").val() === 0){
                              // console.log('ticket added before just increase count number')
                          }else {

                              $("#mobile-seat-tickets").after(`<li id="ticket-item-{{$key}}" class="flex items-center justify-between gap-2">
                        <div class="flex grow items-center gap-1 text-xs sm:gap-2 md:text-sm">
                        <span id = "mobile-total-ticket-count-{{$key}}" class="shrink-0">`+final_ticket+`</span><span style="color: red;"><svg width="24"
                                                                                                   height="21"
                                                                                                   viewBox="0 0 24 21"
                                                                                                   fill="none"
                                                                                                   xmlns="http://www.w3.org/2000/svg"
                                                                                                   class="h-4 w-4"><path
                                        fill-rule="evenodd" clip-rule="evenodd"
                                        d="M3.6629 9.30772L0.984736 11.9859C0.622568 12.3481 0.622568 12.9353 0.984736 13.2975L2.0237 14.3364C2.78649 13.8311 3.82433 13.9144 4.49639 14.5865C5.16845 15.2586 5.25181 16.2964 4.74645 17.0592L5.78554 18.0983C6.14771 18.4605 6.7349 18.4605 7.09707 18.0983L9.77545 15.4199L8.66399 14.3084C8.3571 14.0015 8.3571 13.504 8.66399 13.1971C8.97087 12.8902 9.46844 12.8902 9.77532 13.1971L10.8868 14.3086L16.3432 8.85207C16.7054 8.4899 16.7054 7.9027 16.3432 7.54053L15.3041 6.50144C14.5413 7.00686 13.5034 6.92353 12.8314 6.25143C12.1593 5.57934 12.0759 4.54144 12.5814 3.77863L11.5424 2.73967C11.1802 2.37749 10.593 2.37749 10.2309 2.73967L4.77424 8.19637L5.88551 9.30766C6.1924 9.61455 6.1924 10.1121 5.88551 10.419C5.57863 10.7259 5.08107 10.7259 4.77418 10.419L3.6629 9.30772ZM6.44121 12.0861C6.13432 11.7792 6.13432 11.2816 6.44121 10.9747C6.74809 10.6678 7.24566 10.6678 7.55254 10.9747L8.10821 11.5304C8.41509 11.8373 8.41509 12.3348 8.10821 12.6417C7.80132 12.9486 7.30376 12.9486 6.99687 12.6417L6.44121 12.0861Z"
                                        fill="currentColor"></path></svg></span>
                            <div>
                                <div class="inline-block gap-1 text-xs md:text-sm"><p class=""><span
                                            class="ltr:mr-1 rtl:ml-1">{{$ticket->name}}</span></p></div>
                            </div>
                        </div>
                        <div class="flex shrink-0 items-center text-xs md:gap-2 md:text-sm">
                            <div class="text-end">
                                <div class="font-bold"><span id = "ticket-price-{{$key}}" class="text-xs font-normal md:text-sm">{{$ticket->price}} ر.س</span></div>
                            </div>
                            <button
                                class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed h-6 w-6 rounded-md p-0.5 ltr:ml-1.5 rtl:mr-1.5">
                                <span> ر.س</span>
                            </button>
                        </div>
                    </li>
`);
                          }




                      }
                  }

                  added_ticket_{{$key}} = added_ticket_{{$key}} + 1;
                  $("#mobile-total-ticket-count-"+{{$key}}).text(added_ticket_{{$key}} + ' x')
                  $("#mobile-tickets").text(total_tickets);

                  var total_item_price = added_ticket_{{$key}} * {{$ticket->price}};
                  $("#ticket-price-{{$key}}").text(total_item_price);
                  total_before_tax = total_before_tax + {{$ticket->price}};
                  $("#total-before-tax").text(total_before_tax);
                  $("#button-total").text(total_before_tax);

                  addOrUpdatePair(`{{$ticket->id}}` , added_ticket_{{$key}});

                  {{--console.log("name : " , `{{$ticket->name}}` , "count : " , added_ticket_{{$key}})--}}


              })


              ///////////////////////////////////// decrease ticket number //////////////////////////////////////////////////////


              $("#remove-from-cart-"+{{$key}}).click(function(){
                  var ticket_val =  parseInt($("#tickets_count_"+{{$key}}).text(),10);
                  var final_ticket = ticket_val - 1;
                  $("#tickets_count_"+{{$key}}).text(final_ticket);
                  total_tickets = total_tickets-1;

                  if (final_ticket === 0){
                      $('#remove-from-cart-'+{{$key}}).attr('disabled','');

                      if (total_tickets === 0){
                          $('#select-word').removeAttr('style');
                          $('#select-ticket').attr('style','display:none');
                          $('#next').attr('disabled','');
                          $('#tickets-summery').remove();


                      }
                  }
                  added_ticket_{{$key}} = added_ticket_{{$key}} - 1;
                  $("#mobile-total-ticket-count-"+{{$key}}).text(added_ticket_{{$key}})
                  $("#mobile-tickets").text(total_tickets);
                  var total_item_price = added_ticket_{{$key}} * {{$ticket->price}};
                  $("#ticket-price-{{$key}}").text(total_item_price);

                  total_before_tax = total_before_tax - {{$ticket->price}};
                  $("#total-before-tax").text(total_before_tax);
                  $("#button-total").text(total_before_tax);

                  if (added_ticket_{{$key}} === 0){
                      $("#ticket-item-{{$key}}").remove();
                  }

                  addOrUpdatePair(`{{$ticket->id}}` , added_ticket_{{$key}});
                  {{--console.log("name : " , `{{$ticket->name}}` , "count : " , added_ticket_{{$key}})--}}

              })



              @endforeach

          }
      });

      // ********************************** Mobile Ends Here ******************************************************

      // ************************************* Insert & Delete From Array ********************************************
      // Initialize the array
      let uniqueArray = [];


      // Function to update or add pair to the array
      function addOrUpdatePair(name , count) {
          const firstValue = name;
          const secondValue = count;

          // Check if the first value already exists
          let found = false;
          for (let i = 0; i < uniqueArray.length; i++) {
              if (uniqueArray[i][0] === firstValue) {
                  // Update the second value if the first value is found
                  uniqueArray[i][1] = secondValue;
                  found = true;
                  break;
              }
          }

          // If the first value does not exist, add a new pair
          if (!found) {
              uniqueArray.push([firstValue, secondValue]);
          }

          // Remove elements where the second value is 0
          uniqueArray = uniqueArray.filter(pair => pair[1] !== 0);

          // Display the updated array
          displayArray();
      }

      // Function to display the array
      function displayArray() {
          console.log(JSON.stringify(uniqueArray, null, 2));
      }



      // **************************************** Send Array To Laravel Controller****************************************


      // Function to send the array to Laravel
      function sendToLaravel() {
          fetch('{{route('confirm-booking')}}', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
              },
              body: JSON.stringify({ data: uniqueArray })
          })

              .then($('#next').attr('disabled',''))
              .then($("#next_text").text('جار الحجز . . .'))
              .then(response => response.json())
              .then(data => {
                  sessionStorage.setItem('order-tickets', JSON.stringify(data.data));

                  // Redirect
                  window.location.href = `{{route('user-info')}}`;
              })
              .catch(error => {
                  console.error('Error:', error);
              });
      }
      const sendButton = document.getElementById('next');
      sendButton.addEventListener('click', sendToLaravel);
  </script>

@endsection




