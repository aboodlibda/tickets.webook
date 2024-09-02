@extends('master')

@section('title')
    {{$event->title}}
@endsection
@section('content')

    <main id="main">

        <section class="container py-4">
            <ul class="flex list-none flex-wrap items-center text-sm">
                <li class="flex items-center capitalize leading-none "><a href="/ar/explore?type=events"><span
                            class="block">الفعاليات</span></a><img src="{{asset('icons/common/arrow.svg')}}" width="22" height="22"
                                                                   class="rtl:rotate-180" alt="breadcrumb seperator">
                </li>
                <li class="flex items-center capitalize leading-none text-gray-400"><span>{{$event->title}}</span>
                </li>
            </ul>
        </section>
        <div class="container flex flex-col items-start gap-6 space-y-6 xl:flex-row xl:space-y-0">
            <section class="w-full grow">
                <div
                    class="bg-body-light fixed inset-x-0 top-0 z-50 hidden h-20 items-center gap-2 p-4 transition-all duration-300 lg:flex -translate-y-full">
                    <a class="logo-image relative block shrink-0 hover:opacity-90" data-location="header"
                       aria-label="webook.com Logo" href="{{ route('home') }}"><img src="{{asset('icons/logo.svg')}}" width="100" height="48"
                                                                    alt=""></a>
                    <div class="flex grow items-center justify-start gap-4"><img
                            class="aspect-1 max-w-2xl overflow-hidden rounded-md object-cover"
                            src="{{asset('events-images/'.$event->image)}}?fm=webp"
                            width="60" height="60" alt="{{$event->title}}">
                        <div><p class="mb-1 font-medium uppercase">{{$event->title}}</p>
                            <div class="flex items-start gap-1.5 uppercase text-xs"><p data-testid="event-date">
                                    {{\Carbon\Carbon::create($event->date)->locale("ar_SA")->translatedFormat("j F Y - g:i A")}}

                                </p></div>
                        </div>
                    </div>
                    <div class="hidden shrink-0 gap-4 lg:flex lg:justify-between [&amp;>div]:w-full"
                         data-testid="buy-tickets-cta">
                        <div
                            class="flex items-center justify-between gap-8 rounded-md bg-white/5 px-3 py-4 sm:gap-6 !bg-transparent">
                            <div class="shrink-0">
                                <div class="flex items-end gap-1"><p>يبدأ من</p>
                                    <div><p class="flex items-center gap-1"><strong
                                                class="text-lg leading-none">{{$event->tickets->min('price')}}</strong><span>ر.س</span></p></div>
                                </div>
                                <p class="text-[11px] text-gray-500">شامل ضريبة القيمة المضافة</p></div>
                            <a class="bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast focus:ring-1 ring-offset-2 ring-offset-body relative inline-flex items-center justify-center overflow-hidden py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md buy-ticket mx-auto w-full max-w-[260px] gap-2 capitalize lg:mx-0 min-h-[44px] px-6 text-base font-normal"
                               data-event-name="{{$event->title}}"
                               data-event-start-date="2024-07-21T19:00:00.000+03:00" data-category="main"
                               href="{{ route('book-event',$event->id) }}"> <span>احجز التذاكر</span></a>
                        </div>
                    </div>
                </div>
                <div class="space-y-4 pb-6">
                    <figure class="pb-2 xl:hidden"><img
                            src="{{asset('events-images/'.$event->image)}}?fm=webp&amp;w=600&amp;h=600"
                            class="aspect-1 mx-auto w-full max-w-2xl overflow-hidden rounded-lg object-cover sm:hidden"
                            width="600" height="600" alt="{{$event->title}}" data-loaded="true" srcset=""><img
                            src="{{asset('events-images/'.$event->image)}}?fm=webp&amp;w=600&amp;h=400"
                            class="mx-auto hidden aspect-[3/1] w-full max-w-2xl overflow-hidden rounded-lg object-cover sm:block"
                            width="600" height="400" alt="{{$event->title}}" data-loaded="true" srcset=""></figure>
                    <div class="flex flex-col-reverse items-start gap-6 md:flex-row md:items-center">
                        <div class="grow space-y-4"><h1 class="text-2xl sm:text-4xl">{{$event->title}}</h1>
                            <div class="flex flex-wrap items-center gap-4"></div>
                        </div>
                    </div>
                    <div class="flex w-full flex-col items-center gap-2 lg:flex-row [&amp;>div]:w-full"
                         data-testid="buy-tickets-cta">
                        <div class="xl:max-w-lg">
                            <div
                                class="flex items-center justify-between gap-8 rounded-md bg-white/5 px-3 py-4 sm:gap-6">
                                <div class="shrink-0">
                                    <div class="flex items-end gap-1"><p>يبدأ من</p>
                                        <div><p class="flex items-center gap-1"><strong
                                                    class="text-lg leading-none">{{$event->tickets->min('price')}}</strong><span>ر.س</span></p></div>
                                    </div>
                                    <p class="text-[11px] text-gray-500">شامل ضريبة القيمة المضافة</p></div>
                                <a class="bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast focus:ring-1 ring-offset-2 ring-offset-body relative inline-flex items-center justify-center overflow-hidden px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md buy-ticket min-h-[50px] w-full max-w-[260px] gap-2 text-lg font-bold capitalize leading-none lg:mx-0 m-0"
                                   data-event-name="{{$event->title}}"
                                   data-event-start-date="2024-07-21T19:00:00.000+03:00" data-category="main"
                                   href="{{ route('book-event',$event->id) }}"> <span>احجز التذاكر</span></a>
                            </div>
                        </div>
                        <button
                            class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative overflow-hidden py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md share-action flex shrink-0 items-center justify-center gap-2 px-6 undefined">
                            <img alt="مشاركة {{$event->title}}" src="{{asset('icons/common/share.svg')}}" width="21" height="22"><span>مشاركة</span>
                        </button>
                    </div>
                    <div class="flex items-start gap-3 rounded-md p-4 xl:max-w-lg"
                         style="background: rgba(186, 229, 0, 0.125);">
                        <div class="mt-px rounded-md p-1 text-white"
                             style="background: rgb(186, 229, 0); color: rgb(0, 0, 0);">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="h-8 w-8"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M11 19.5229C11 20.265 11.9624 20.5564 12.374 19.9389L18.2227 11.166C18.5549 10.6676 18.1976 10 17.5986 10H13V4.47708C13 3.73503 12.0376 3.44363 11.626 4.06106L5.77735 12.834C5.44507 13.3324 5.80237 14 6.40139 14H11V19.5229Z"
                                      fill="currentColor"></path>
                            </svg>
                        </div>
                        <div><p class="font-semibold">حجز فوري</p>
                            <p class="text-text text-sm">سيتم حجزك مباشرة على webook.com</p></div>
                    </div>
                </div>
                <style>
                    @media (max-width: 1023px) {
                        footer {
                            margin-bottom: 100px;
                        }
                    }
                </style>
                <div
                    class="bg-body-light fixed bottom-0 left-0 z-30 flex min-h-[70px] w-full items-start border-t border-white/10 lg:hidden [&amp;>div]:w-full [&amp;>div]:justify-center safe-bottom px-4 py-2"
                    data-testid="buy-tickets-cta-mobile" style="transform: translateY(200px) translateZ(0px);">
                    <div
                        class="flex items-center justify-between gap-8 rounded-md sm:gap-6 max-w-lg mx-auto !justify-between bg-transparent p-0 pb-1">
                        <div class="shrink-0">
                            <div class="flex items-end gap-1"><p>يبدأ من</p>
                                <div><p class="flex items-center gap-1"><strong
                                            class="text-lg leading-none">{{$event->tickets->min('price')}}</strong><span>ر.س</span></p></div>
                            </div>
                            <p class="text-[11px] text-gray-500">شامل ضريبة القيمة المضافة</p></div>
                        <a class="bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast focus:ring-1 ring-offset-2 ring-offset-body relative inline-flex items-center justify-center overflow-hidden px-4 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md buy-ticket mx-auto min-h-[50px] w-full max-w-[260px] gap-2 font-bold capitalize lg:mx-0 py-2 text-base"
                           data-event-name="{{$event->title}}" data-event-start-date="2024-07-21T19:00:00.000+03:00"
                           data-category="main" href="{{ route('book-event',$event->id) }}"> <span>احجز التذاكر</span></a>
                    </div>
                </div>
                <div class="space-y-1 border-b border-white/20 py-6"><h2 class="text-xl">يبدأ من</h2>
                    <div class="flex items-start gap-1.5 text-sm uppercase"><img src="{{asset('icons/common/calendar.svg')}}"
                                                                                 width="20" height="20" alt="calendar">
{{--                        <p data-testid="event-date">21 يوليو 2024 - 7:00 م</p></div>--}}
                        <p data-testid="event-date"> {{\Carbon\Carbon::create($event->date)->locale("ar_SA")->translatedFormat("j F Y - g:i A")}}</p></div>
                </div>
    {{--                <div class="space-y-2 border-b border-white/20 py-6"><h2 class="text-xl">عن الفعالية</h2>--}}
    {{--                    <div class="relative inline-block w-full">--}}
    {{--                        <div class="" style="height: 97px;">--}}
    {{--                        <div class="text-text prose">--}}
    {{--                            <div class="prose w-full max-w-full text-white">--}}
    {{--                                <div>--}}
    {{--                                    <p>--}}
    {{--                                        {{$event->about}}--}}
    {{--                                    </p>--}}
    {{--                                </div>--}}
    {{--                            </div>--}}

    {{--                        </div>--}}
    {{--                        </div>--}}
    {{--                    </div>--}}
    {{--                </div>--}}
                <div class="space-y-4 border-b border-white/20 py-6"><h2 class="text-xl">عن الفعالية</h2>
                    <div class="relative inline-block w-full">
                        <div class="" style="height: 97px;">
                            <div class=" text-text prose">
                                <div class="prose w-full max-w-full text-white">
                                    <div>
                                        <textarea class="prose w-full max-w-full text-white !bg-transparent border-0" rows="8" cols="10" readonly disabled>{{$event->about}}</textarea>
                                        <p style="max-width: 300px">

                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="space-y-4 border-b border-white/20 py-6"><h2 class="text-xl">الشروط الأحكام</h2>
                    <div class="relative inline-block w-full">
                        <div class="" style="height: 97px;">
                            <div class=" text-text prose">
                                <div class="prose w-full max-w-full text-white">
                                    <div>
                                        <p>
                                            بشراء هذه التذكرة، فأنت توافق على جميع الشروط والأحكام والقيود
                                            التي قد يضعها المنظم قبل أو اثناء الفعالية:
                                        </p>
                                        <ul>
                                            <li>يجب شراء تذكرة لكل شخص منفرد.</li>
                                            <li>يسمح بدخول الأطفال من 12 سنوات وأكبر.</li>
                                            <li>سعر التذكرة غير مسترد.</li>
                                            <li>في حال تم بيع التذكرة خارج إطار منصة Webook سيتم إلغاء التذكرة دون إرجاع
                                                المبالغ
                                            </li>
                                            <li>في حالة تم إلغاء، تأجيل، أو تغيير تاريخ الفعالية من قِبل الجهة المنظمة
                                                فإنه سيتم إعادة قيمة التذكرة.
                                            </li>
                                            <li>حامل التذكرة مسؤول عن التحقق من تاريخ الفعالية ووقتها ومكانها والعمر
                                                المفروض لحضورها كما يجب على حاملي التذكرة الوصول باكراً إلى موقع
                                                الفعالية، ويحق للجهة المنظمة أن ترفض دخول الأشخاص المتأخرين، وفي هذه
                                                الحالة لن يجوز لحامل التذكرة أن يطالب باسترداد سعر التذكرة أو طلب تعويض
                                                من أي نوع كان.
                                            </li>
                                            <li>في حال مغادرة المبنى، لا يسمح بالعودة مجدداً.</li>
                                            <li>قد يتم تفتيش حاملي التذاكر ومقتنياتهم الشخصية عند دخول موقع الفعالية،
                                                وسوف يتم مصادرة المواد المحظورة والخطرة، كما ستتم مصادرة كل مادة ترى
                                                الجهة المنظمة أو الجهاز الأمني في مقر الفعالية أنها خطرة أو يمكن أن يتم
                                                استخدامها لإلحاق الضرر بالمكان أو إفساد الفعالية.
                                            </li>
                                            <li>لا يسمح بدخول المأكولات والمشروبات من الخارج. سيتم توفير عربات بيع
                                                الطعام والشراب داخل الفعالية.
                                            </li>
                                            <li>لا يسمح باصطحاب الحيوانات.</li>
                                            <li>لا يسمح باستخدام آلات التصوير والتسجيل المتخصصة في موقع الفعالية.</li>
                                            <li>يوافق حامل التذكرة بصفته الحاضر لمكان الفعالية على الصور الفوتوغرافية
                                                ومقاطع الفيديو والمقاطع الصوتية المسجلة التي قد يتم استخدامها كمطبوعات
                                                أو نسخ الكترونية أو نشرها على شبكة الأنترنت.
                                            </li>
                                            <li>التدخين غير مسموح به في المبنى، بما في ذلك السجائر الإلكترونية. ولا يسمح
                                                أيضاُ باستخدام القداحات وأعواد الكبريت داخل الموقع، الا في الموقع
                                                المخصصة للتدخين.
                                            </li>
                                            <li>لا تتحمل الجهة المنظمة مسؤولية الإصابات الجسدية أو الأمراض أو وفاة أي
                                                زائر (بما في ذلك حامل التذكرة) أو فقدان أو تضرر المقتنيات لأسباب ناجمة
                                                عن الفعالية أو مرتبطة بها.
                                            </li>
                                            <li>للجهة المنظمة الحق في إخراج من يصدر عنه تصرف يعتبر برأي الجهة المنظمة
                                                مخالف.
                                            </li>
                                            <li>الالتزام بقواعد الذوق العام بما يتماشى مع ثقافة وقيم وتقاليد المملكة
                                                العربية السعودية.
                                            </li>
                                            <li>في حال وجود شكوى، يجب تقديمها إلى "بوابة الترفيه" بزيارة الموقع
                                                الالكتروني (cx.gea.gov.sa) خلال 3 أيام كحد أقصى من تاريخ وقوعها.
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="space-y-2 py-6"><h2 class="text-xl">الموقع</h2>
                    <div class="w-full">
                        <div class="space-y-2"><a
                                class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body items-center gap-1 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed relative flex h-full max-h-96 min-h-[225px] w-full flex-col justify-between overflow-hidden rounded-md !bg-cover !bg-center p-0"
                                href="https://www.google.com/maps/search/?api=1&amp;query={{$event->lat}},{{$event->long}}"
                                target="_blank" rel="noreferrer"
                                style="background: url(&quot;https://images.ctfassets.net/vy53kjqs34an/6exWlhuVTQYKuFNXwDOU37/f99c0a40ed2a5fcd9e1631dd8fe4083b/image__45_.png&quot;);"> </a>
                            <div class="flex items-start justify-between gap-4"><p
                                    class="flex items-start gap-2 text-sm"><img class="mt-0.5"
                                                                                src="{{asset('/icons/common/location-marker.svg')}}"
                                                                                width="15" height="16" alt="location">
                                    {{$event->location}}

                                </p><a
                                    class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md shrink-0 bg-white/10 py-1 text-sm"
                                    target="_blank" rel="noreferrer"
                                    href="https://www.google.com/maps/search/?api=1&amp;query={{$event->lat}},{{$event->long}}">
                                    انتقل إلى الموقع<img src="{{asset('/icons/common/location.svg')}}" width="15" height="16"
                                                         class="shrink-0 rtl:scale-x-[-1]" alt="direction"></a></div>
                        </div>
                    </div>
                </div>
            </section>
            <aside class="sticky top-24 mx-auto w-full max-w-xl shrink-0 grow gap-8 xl:max-w-lg">
                <div class="hidden space-y-8 xl:block">
                    <figure class="rounded-lg"><img
                            src="{{asset('events-images/'.$event->image)}}?fm=webp&amp;w=600&amp;h=600"
                            class="aspect-1 overflow-hidden rounded-lg object-cover" width="600" height="600"
                            alt="{{$event->title}}" data-loaded="true" srcset=""></figure>
                </div>
            </aside>
        </div>
        <div class="space-y-4 border-t border-white/20 py-12 [&amp;>section]:py-0"><h2
                class="container text-2xl font-semibold">قد تعجبك أيضاً</h2>
            <section class="container space-y-8 py-12">
                <div class="flex items-center justify-between space-y-4 md:flex-row md:space-y-0">
                    <div></div>
                    <div class="flex gap-2">
                        <button
                            class="hover:bg-text/5 active:bg-text/10 ring-text text-text disabled:border-zinc-600 focus:ring-1 ring-offset-body relative gap-1 overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-white/30 p-0"
                            aria-label="Previous"><img src="{{asset('/icons/common/arrow.svg')}}" class="ltr:rotate-180" alt=""
                                                       width="24" height="24"></button>
                        <button
                            class="hover:bg-text/5 active:bg-text/10 ring-text text-text disabled:border-zinc-600 focus:ring-1 ring-offset-body relative gap-1 overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-white/30 p-0"
                            aria-label="Next"><img src="{{asset('/icons/common/arrow.svg')}}" class="rtl:rotate-180" alt=""
                                                   width="24" height="24"></button>
                    </div>
                </div>
                <div class="embla">
                    <div class="embla__viewport p-1">
                        <div class="embla__container" style="transform: translate3d(0px, 0px, 0px);">
                            @foreach($event->category->events as $item)
                                @if($item->id != $event->id)
                                    <div
                                        class="xs:mr-3 xs:basis-1/2 relative mr-2 shrink-0 basis-[85%] md:basis-[28%] lg:basis-[22%] xl:basis-[18%]">
                                        <a class="ring-transparent text-text ring-offset-2 inline-flex items-center justify-center overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md group relative h-full w-full gap-0 bg-transparent p-px ring-offset-white focus:ring-1"
                                           to="/ar/events/kadim-alsahir-83562" href="{{ route('main-event',$item->id) }}">
                                            <div class="flex h-full w-full flex-col items-start overflow-hidden rounded-md">
                                                <div class="relative w-full overflow-hidden rounded-md "><img
                                                        src="{{asset('events-images/'.$item->image)}}?fm=webp&amp;fit=thumb&amp;w=600&amp;h=600"
                                                        class="aspect-1 h-full object-cover transition duration-300 group-hover:scale-[1.02] group-focus:scale-[1.02]"
                                                        width="600" height="600" alt="{{$item->title}}" data-loaded="true" srcset="">
                                                </div>
                                                <div class="text-text space-y-0.5 pt-2 text-start">
                                                    <div class="text-sm leading-none text-gray-400"><span>فعالية</span><span> · {{\Carbon\Carbon::create($event->date)->locale("ar_SA")->translatedFormat("j F")}}</span>
                                                    </div>
                                                    <p class="line-clamp-2">{{$item->title}}</p>
                                                    <div>
                                                        <div class="flex items-center gap-1"><p class="text-sm text-gray-400">
                                                                يبدأ من</p>
                                                            <p class="font-semibold">{{$item->tickets->min('price') == null ? '0' : $item->tickets->min('price')}} ر.س</p></div>
                                                    </div>
                                                    <div class="flex items-center gap-1 rounded-md text-xs py-1">
                                                        <div style="color: rgb(186, 229, 0);">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                 class="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                      d="M11 19.5229C11 20.265 11.9624 20.5564 12.374 19.9389L18.2227 11.166C18.5549 10.6676 18.1976 10 17.5986 10H13V4.47708C13 3.73503 12.0376 3.44363 11.626 4.06106L5.77735 12.834C5.44507 13.3324 5.80237 14 6.40139 14H11V19.5229Z"
                                                                      fill="currentColor"></path>
                                                            </svg>
                                                        </div>
                                                        <p class="leading-none text-gray-400">حجز فوري</p></div>
                                                </div>
                                            </div>
                                        </a></div>
                                @endif
                            @endforeach

                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-center gap-4"></div>
            </section>
        </div>
    </main>

@endsection
