@extends('master')

@section('title')
    {{'ويبوك.كوم | احجز تذاكر المباريات، فعاليات، مسرحيات، مطاعم، تجارب وأكثر'}}
@endsection

@section('links')

    <style>
        .med-related-prod-wrap{
            margin: 40px 16px 0px 16px;
        }
        .med-related-prod-wrap .related-prod-heading{
            margin: 0px;
            font-size: 18px;
        }
        .med-related-prod-wrap .med-rel-prod-slider{
            display: flex;
            column-gap: 8px;
            margin-top: 20px;
            overflow: auto;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
            scroll-behavior: smooth;
        }
        .med-related-prod-wrap .med-rel-prod-slider::-webkit-scrollbar {
            display: none;
        }
        .med-slider-arrow-section{
            display: none;
            align-items: center;
            justify-content: end;
            margin-top: 40px;
            column-gap:10px;
        }
        .med-slider-arrow{
            --size: 30px;
            z-index: 9;
            background: #ffffff;
            width: var(--size);
            height: var(--size);
            border-radius: var(--size);
            -webkit-transition: opacity .5s,visibility .5s;
            transition: opacity .5s,visibility .5s;
            border: 1px solid #dfe1e5;
            box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 4px 8px 0 rgb(0 0 0 / 20%);
            padding: 0;
            transform: translate(0,-50%);
            cursor: pointer;
            outline: 0!important;
            transition: 0.2s ease-in-out;
        }
        .med-slider-arrow:after {
            background-image:  url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 12H19' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 5L19 12L12 19' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
            background-size: 16px;
            content: '';
            width: var(--size);
            height: var(--size);
            display: block;
            background-repeat: no-repeat;
            background-position: 49% 50%;
            transform:rotate(180deg);
        }
        .med-slider-arrow.btn-left{
            display: none;
        }
        .med-slider-arrow.med-slider-next:after{
            transform:rotate(360deg);
        }
        .med-rel-prod-slider .med-product-card:hover .related-prod-img{
            transform: scale(1.1);
        }
        .med-rel-prod-slider .med-product-card{
            display: inline-grid;
            grid-auto-rows: min-content auto;
            padding: 32px 12px;
            background: transparent;

            border: 1px solid #E5E5F0;
            border-radius: 15px;
            width: 224px;
            flex-shrink: 0;
            cursor: pointer;
            overflow: hidden;
        }
        .med-product-card .related-prod-wrapper{
            height: 140px;
            width: 100%;
            overflow: hidden;
        }
        .related-prod-wrapper .related-prod-img{
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: 0.5s all ease-in-out;
        }
        .med-product-card .rel-med-name{
            font-size: 24px;
            padding-top: 32px;
            color: #232426;
        }
        .med-product-card .rel-no-of-tab{
            color: #878787;
            font-size: 18px;
        }
        .med-product-card .rel-company-name{
            color: #232426;
            font-size: 14px;
            text-decoration: underline;
            font-weight: 600;
        }
        .med-product-card .rel-prod-price{
            font-weight: 600;
            font-size: 24px;
            margin-bottom: 0px;
        }
        .med-product-card .related-prod-detail{
            margin-top:auto;
        }
        @media (min-width: 992px){
            .med-related-prod-wrap{
                margin: 0px 0px 50px 0px;
            }
            .med-related-prod-wrap .related-prod-heading{
                margin: 0px;
                font-size: 26px;
            }
            .med-related-prod-wrap .med-rel-prod-slider{
                margin-top: 40px;
            }
            .med-slider-arrow-section{
                display: flex;
            }
        }
    </style>

@endsection
@section('content')

    <section class="container max-w-4xl space-y-4 pt-8 md:space-y-2 xl:!px-4">
        <h1 class="text-center text-xl font-semibold md:text-3xl">احجز أفضل الفعاليات والتجارب والمسرحيات في
            السعودية</h1>
        <form class="relative z-20 mx-auto hidden w-full max-w-xl overflow-hidden p-1 md:block" type="button"
              aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1:" data-state="closed"><img
                src="{{asset('/icons/common/search.svg')}}"
                class="absolute top-1/2 -translate-y-1/2 transform opacity-60 ltr:left-3 rtl:right-3" width="20"
                height="20" alt=""><input type="search" inputmode="search"
                                          class="focus:ring-primary focus:border-primary bg-input/10 h-12 w-full rounded-md border-none border-transparent text-sm ltr:pl-8 rtl:pr-8"
                                          placeholder="ابحث عن الفعاليات والتجارب والمطاعم والفنانين" value=""><button type="submit"
                                                                                                                       aria-label="Search"
                                                                                                                       class="bg-primary absolute top-1/2 flex h-9 w-9 -translate-y-1/2 items-start justify-center rounded-md ltr:right-3 rtl:left-3"><img
                    class="h-full" src="{{asset('/icons/common/search.svg')}}" width="18" height="18" alt="Search"></button>
        </form>
    </section>
    <section>
{{--        <video autoplay="" loop="" playsinline="" disablepictureinpicture=""--}}
{{--               class="pointer-events-none absolute inset-0 z-[-1] h-full w-full select-none object-cover opacity-50">--}}
{{--            <source--}}
{{--                src="assets/Gold_Burst_03-1.m4v"--}}
{{--                type="video/mp4">--}}
{{--        </video>--}}
        <div class="med-related-prod-wrap" id="med-related-prod-wrapper">
            <div class="med-rel-prod-slider-wrapper">
                <div class="med-rel-prod-slider carousel-content">

                    <div class="embla__slide flex h-full w-full shrink-0 py-4 md:mx-auto md:w-[85%] md:max-w-screen-xl"
                         style="transform: translate3d(0px, 0px, 0px);"><a
                            class="text-text focus:ring-1 ring-offset-body inline-flex items-center gap-1 overflow-hidden py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md bg-body-light relative h-full flex-col justify-between !py-0 px-0 ring-white/50 sm:basis-[98%] md:rounded-lg md:scale-[0.95] lg:scale-[0.96] 2xl:scale-[0.90]"
                            to=""
                            href="">
                            <div class="aspect-1 h-full w-full md:aspect-[3/1]"><img
                                    src="{{asset('/assets/tamer.jpg')}}"
                                    class="hidden h-full w-full overflow-hidden object-contain object-center md:block"
                                    width="100%" height="100%" alt="" data-loaded="true" srcset=""><img
                                    src="{{asset('/assets/tamer.jpg')}}"
                                    class="h-full w-full overflow-hidden object-contain object-center md:hidden"
                                    width="600" height="600" alt="" data-loaded="true" srcset=""></div>
                            <div class="hidden w-full items-center justify-between p-4 pt-2 md:flex">
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">
                                    </p>
                                    <p class="text-xs text-gray-400"></p>
                                </div><button
                                    class="bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast focus:ring-1 ring-offset-2 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md w-full max-w-xs"
                                    tabindex="-1"> احجز التذاكر</button>
                            </div>
                            <div
                                class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/5 via-black/10 to-black/95 to-90% p-4 md:hidden">
                                <div></div>
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">
                                    </p>
                                    <p class="text-xs text-gray-400"></p>
                                </div>
                            </div>
                        </a></div>


                </div>
            </div>

        </div>
    </section>

    <div
        class="relative z-20 mx-auto flex min-h-[122px] max-w-full items-center justify-center overflow-hidden py-4 [&amp;>div]:mx-auto">
        <div id="home/lb"></div>
    </div>

    <div
        class="relative z-20 mx-auto flex min-h-[122px] max-w-full items-center justify-center overflow-hidden py-4 [&amp;>div]:mx-auto">
        <div id="home/lb"></div>
    </div>




    <section class="container space-y-8 py-12">
        <h2 class="text-2xl font-semibold text-gray-100">استكشف حسب الفئة</h2>
        <div class="med-related-prod-wrap" id="med-related-prod-wrapper">
            <div class="med-rel-prod-slider-wrapper">
                <div class="med-rel-prod-slider carousel-content">
                    <div
                        class="embla__slide flex max-w-sm shrink-0 basis-[80%] px-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                        <a class="group relative flex h-36 w-full items-center overflow-hidden rounded-[14px] border-2 border-[var(--color)] text-[var(--color)]"
                           aria-label="الفعاليات" style="--color: #5c3cc5; --highlight: #5c3cc530;"
                           href=""><span
                                class="absolute top-0 ltr:left-0 rtl:right-0 rtl:-scale-x-100"><svg width="60"
                                                                                                    height="51" viewBox="0 0 60 51" fill="none"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    class="text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4]">
                                            <path
                                                d="M-3.36978 -37.733C16.0635 -51.6447 39.6225 -37.9962 52.4968 -15.4198C65.3711 7.15655 61.2321 33.7701 43.2521 44.0233C25.2721 54.2765 -0.425292 54.3771 -12.6145 21.7102C-24.8038 -10.9566 -22.803 -23.8212 -3.36978 -37.733Z"
                                                fill="currentColor"></path>
                                        </svg></span><img
                                src="https://images.ctfassets.net/vy53kjqs34an/UYWGEQHmu9zJkiYJrI9Rg/96b5ce6f73a4ccb9d860eceff235d87d/event_categoy_icon.svg?w=20&amp;h=20"
                                width="20" height="20"
                                class="absolute top-3 z-[3] ltr:left-4 rtl:right-4 rtl:-scale-x-100"
                                alt="الفعاليات">
                            <div class="relative z-[3] px-4 text-2xl font-semibold tracking-[-0.5px]">الفعاليات
                            </div>
                            <div class="absolute bottom-0 z-[2] ltr:-right-2 rtl:-left-2 rtl:-scale-x-100"><svg
                                    width="153" height="113" viewBox="0 0 153 113" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute bottom-0 text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4] ltr:-right-1 rtl:-left-1">
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        class="fill-body"></path>
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        fill="currentColor"></path>
                                </svg><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/6MvAgcHMJDrWMOSy5RY7Vz/799d92f25e2c16a4950873bfc9f924be/events_category.png?fm=webp&amp;w=120&amp;h=120"
                                    width="120" height="120" class="relative" alt=""></div>
                        </a></div>
                    <div
                        class="embla__slide flex max-w-sm shrink-0 basis-[80%] px-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                        <a class="group relative flex h-36 w-full items-center overflow-hidden rounded-[14px] border-2 border-[var(--color)] text-[var(--color)]"
                           aria-label="&nbsp;التجارب" style="--color: #22c55e; --highlight: #22c55e30;"
                           href=""><span
                                class="absolute top-0 ltr:left-0 rtl:right-0 rtl:-scale-x-100"><svg width="60"
                                                                                                    height="51" viewBox="0 0 60 51" fill="none"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    class="text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4]">
                                            <path
                                                d="M-3.36978 -37.733C16.0635 -51.6447 39.6225 -37.9962 52.4968 -15.4198C65.3711 7.15655 61.2321 33.7701 43.2521 44.0233C25.2721 54.2765 -0.425292 54.3771 -12.6145 21.7102C-24.8038 -10.9566 -22.803 -23.8212 -3.36978 -37.733Z"
                                                fill="currentColor"></path>
                                        </svg></span><img
                                src="https://images.ctfassets.net/vy53kjqs34an/25Q7iEz7ycm8nwdizfYAVn/bbd289214a520fe75a9e523c69c134b4/experiences_icon.svg?w=20&amp;h=20"
                                width="20" height="20"
                                class="absolute top-3 z-[3] ltr:left-4 rtl:right-4 rtl:-scale-x-100"
                                alt="&nbsp;التجارب">
                            <div class="relative z-[3] px-4 text-2xl font-semibold tracking-[-0.5px]">
                                &nbsp;التجارب</div>
                            <div class="absolute bottom-0 z-[2] ltr:-right-2 rtl:-left-2 rtl:-scale-x-100"><svg
                                    width="153" height="113" viewBox="0 0 153 113" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute bottom-0 text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4] ltr:-right-1 rtl:-left-1">
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        class="fill-body"></path>
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        fill="currentColor"></path>
                                </svg><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/5OlwAbuDG93SaTHQwkefJO/929a833e4db3c9a1a6374451d5ba4dde/experiences.png?fm=webp&amp;w=120&amp;h=120"
                                    width="120" height="120" class="relative" alt=""></div>
                        </a></div>
                    <div
                        class="embla__slide flex max-w-sm shrink-0 basis-[80%] px-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                        <a class="group relative flex h-36 w-full items-center overflow-hidden rounded-[14px] border-2 border-[var(--color)] text-[var(--color)]"
                           aria-label="المطاعم" style="--color: #e36914; --highlight: #e3691430;"
                           href=""><span
                                class="absolute top-0 ltr:left-0 rtl:right-0 rtl:-scale-x-100"><svg width="60"
                                                                                                    height="51" viewBox="0 0 60 51" fill="none"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    class="text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4]">
                                            <path
                                                d="M-3.36978 -37.733C16.0635 -51.6447 39.6225 -37.9962 52.4968 -15.4198C65.3711 7.15655 61.2321 33.7701 43.2521 44.0233C25.2721 54.2765 -0.425292 54.3771 -12.6145 21.7102C-24.8038 -10.9566 -22.803 -23.8212 -3.36978 -37.733Z"
                                                fill="currentColor"></path>
                                        </svg></span><img
                                src="https://images.ctfassets.net/vy53kjqs34an/3N5biTMbx6lgYKrXheqCt4/3a3d04ecc2ddc8fd382bf86839b094aa/restaurant.svg?w=20&amp;h=20"
                                width="20" height="20"
                                class="absolute top-3 z-[3] ltr:left-4 rtl:right-4 rtl:-scale-x-100"
                                alt="المطاعم">
                            <div class="relative z-[3] px-4 text-2xl font-semibold tracking-[-0.5px]">المطاعم
                            </div>
                            <div class="absolute bottom-0 z-[2] ltr:-right-2 rtl:-left-2 rtl:-scale-x-100"><svg
                                    width="153" height="113" viewBox="0 0 153 113" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute bottom-0 text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4] ltr:-right-1 rtl:-left-1">
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        class="fill-body"></path>
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        fill="currentColor"></path>
                                </svg><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/5QL7veN3eC4RzfUmK5lKQG/8fc69d3e1897c2b3855ec9bf9b98092a/restaurant.png?fm=webp&amp;w=120&amp;h=120"
                                    width="120" height="120" class="relative" alt=""></div>
                        </a></div>
                    <div
                        class="embla__slide flex max-w-sm shrink-0 basis-[80%] px-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                        <a class="group relative flex h-36 w-full items-center overflow-hidden rounded-[14px] border-2 border-[var(--color)] text-[var(--color)]"
                           aria-label="المسرحيات" style="--color: #ef4444; --highlight: #ef444430;"
                           href=""><span
                                class="absolute top-0 ltr:left-0 rtl:right-0 rtl:-scale-x-100"><svg width="60"
                                                                                                    height="51" viewBox="0 0 60 51" fill="none"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    class="text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4]">
                                            <path
                                                d="M-3.36978 -37.733C16.0635 -51.6447 39.6225 -37.9962 52.4968 -15.4198C65.3711 7.15655 61.2321 33.7701 43.2521 44.0233C25.2721 54.2765 -0.425292 54.3771 -12.6145 21.7102C-24.8038 -10.9566 -22.803 -23.8212 -3.36978 -37.733Z"
                                                fill="currentColor"></path>
                                        </svg></span><img
                                src="https://images.ctfassets.net/vy53kjqs34an/6CqmOdUfKkCKtAAfUsbiyw/3d43eeb4071a1d1f735a7475039840e6/Experience_type_icon.png?w=20&amp;h=20"
                                width="20" height="20"
                                class="absolute top-3 z-[3] ltr:left-4 rtl:right-4 rtl:-scale-x-100"
                                alt="المسرحيات">
                            <div class="relative z-[3] px-4 text-2xl font-semibold tracking-[-0.5px]">المسرحيات
                            </div>
                            <div class="absolute bottom-0 z-[2] ltr:-right-2 rtl:-left-2 rtl:-scale-x-100"><svg
                                    width="153" height="113" viewBox="0 0 153 113" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute bottom-0 text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4] ltr:-right-1 rtl:-left-1">
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        class="fill-body"></path>
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        fill="currentColor"></path>
                                </svg><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/27Epg26E0g8m0Ustep9K7Q/86b3ea43180973e751aa62d8b9dfbe03/Ellipse_3.png?fm=webp&amp;w=120&amp;h=120"
                                    width="120" height="120" class="relative" alt=""></div>
                        </a></div>
                    <div
                        class="embla__slide flex max-w-sm shrink-0 basis-[80%] px-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                        <a class="group relative flex h-36 w-full items-center overflow-hidden rounded-[14px] border-2 border-[var(--color)] text-[var(--color)]"
                           aria-label="كأس العالم للرياضات الإلكترونية"
                           style="--color: #907c4b; --highlight: #907c4b30;"
                           href=""><span
                                class="absolute top-0 ltr:left-0 rtl:right-0 rtl:-scale-x-100"><svg width="60"
                                                                                                    height="51" viewBox="0 0 60 51" fill="none"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    class="text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4]">
                                            <path
                                                d="M-3.36978 -37.733C16.0635 -51.6447 39.6225 -37.9962 52.4968 -15.4198C65.3711 7.15655 61.2321 33.7701 43.2521 44.0233C25.2721 54.2765 -0.425292 54.3771 -12.6145 21.7102C-24.8038 -10.9566 -22.803 -23.8212 -3.36978 -37.733Z"
                                                fill="currentColor"></path>
                                        </svg></span><img
                                src="https://images.ctfassets.net/vy53kjqs34an/PCLoYRXNe5Qqek21BMNxf/f145bc0d2483f6dd6c176a107b48589b/game.svg?w=20&amp;h=20"
                                width="20" height="20"
                                class="absolute top-3 z-[3] ltr:left-4 rtl:right-4 rtl:-scale-x-100"
                                alt="كأس العالم للرياضات الإلكترونية">
                            <div class="relative z-[3] px-4 text-2xl font-semibold tracking-[-0.5px]">كأس العالم
                                للرياضات الإلكترونية</div>
                            <div class="absolute bottom-0 z-[2] ltr:-right-2 rtl:-left-2 rtl:-scale-x-100"><svg
                                    width="153" height="113" viewBox="0 0 153 113" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute bottom-0 text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4] ltr:-right-1 rtl:-left-1">
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        class="fill-body"></path>
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        fill="currentColor"></path>
                                </svg><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/eaECxtSAnM18XcVqzEhC3/89374744ef03554602527058c2f1ebd9/ewc_category.png?fm=webp&amp;w=120&amp;h=120"
                                    width="120" height="120" class="relative" alt=""></div>
                        </a></div>
                </div>
            </div>
        </div>
    </section>
    <section class="container space-y-8 py-12">
        <div class="flex items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div>
                <h2>موسيقى ماتوقف في جدة </h2>
            </div>
{{--            <div class="flex gap-2"><button--}}
{{--                    class="hover:bg-text/5 active:bg-text/10 ring-text text-text disabled:border-zinc-600 focus:ring-1 ring-offset-body relative gap-1 overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-white/30 p-0"--}}
{{--                    aria-label="Previous"> <img src="{{asset('/icons/common/arrow.svg')}}" class="ltr:rotate-180" alt=""--}}
{{--                                                width="24" height="24"></button><button--}}
{{--                    class="hover:bg-text/5 active:bg-text/10 ring-text text-text disabled:border-zinc-600 focus:ring-1 ring-offset-body relative gap-1 overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-white/30 p-0"--}}
{{--                    aria-label="Next"> <img src="{{asset('/icons/common/arrow.svg')}}" class="rtl:rotate-180" alt=""--}}
{{--                                            width="24" height="24"></button></div>--}}
        </div>

        <div class="med-related-prod-wrap" id="med-related-prod-wrapper">
            <div class="med-rel-prod-slider-wrapper">
                <div class="med-rel-prod-slider carousel-content">

                    @php
                        $events = \App\Models\Event::query()->whereHas('category', function ($query) {
                                $query->where('name', 'LIKE', 'احتفالات الصيف');
                            })
                            ->where('status', 'active')
                            ->latest()
                            ->paginate(10);
                    @endphp
                    @foreach($events as $event)
                        <div
                            class="xs:mr-3 xs:basis-1/2 relative mr-2 shrink-0 basis-[85%] md:basis-[28%] lg:basis-[22%] xl:basis-[18%]">
                            <a class="ring-transparent text-text ring-offset-2 inline-flex items-center justify-center overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md group relative h-full w-full gap-0 bg-transparent p-px ring-offset-white focus:ring-1"
                               to=""
                               href="{{ route('main-event',$event->id) }}">
                                <div class="flex h-full w-full flex-col items-start overflow-hidden rounded-md">
                                    <div class="relative w-full overflow-hidden rounded-md "><img
                                            src="{{asset('events-images/'.$event->image)}}?fm=webp&amp;fit=thumb&amp;w=600&amp;h=600"
                                            class="aspect-1 h-full object-cover transition duration-300 group-hover:scale-[1.02] group-focus:scale-[1.02]"
                                            width="600" height="600" alt="كاظم الساهر" data-loaded="true" srcset="">
                                    </div>
                                    <div class="text-text space-y-0.5 pt-2 text-start">
                                        <div class="text-sm leading-none text-gray-400"><span>فعالية</span><span> ·
{{--                                                    12 يوليو</span>--}}
                                                {{\Carbon\Carbon::create($event->date)->locale("ar_SA")->translatedFormat("j F")}}</span>

                                        </div>
                                        <p class="line-clamp-2">{{$event->title}}</p>
                                        <div>
                                            <div class="flex items-center gap-1">
                                                <p class="text-sm text-gray-400">يبدأ من</p>
                                                <p class="font-semibold">{{$event->tickets->min('price')}} ر.س</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-1 rounded-md text-xs py-1">
                                            <div style="color: rgb(186, 229, 0);"><svg width="24" height="24"
                                                                                       viewBox="0 0 24 24" fill="none" class="h-4 w-4"
                                                                                       xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M11 19.5229C11 20.265 11.9624 20.5564 12.374 19.9389L18.2227 11.166C18.5549 10.6676 18.1976 10 17.5986 10H13V4.47708C13 3.73503 12.0376 3.44363 11.626 4.06106L5.77735 12.834C5.44507 13.3324 5.80237 14 6.40139 14H11V19.5229Z"
                                                          fill="currentColor"></path>
                                                </svg></div>
                                            <p class="leading-none text-gray-400">حجز فوري</p>
                                        </div>
                                    </div>
                                </div>
                            </a></div>
                    @endforeach

                </div>

            </div>
            <div class="med-slider-arrow-section">
                <button class="med-slider-prev med-slider-arrow btn-left" aria-label="left-arrow" onclick="" id="med-btn-left" type="button"></button>
                <button class="med-slider-next med-slider-arrow btn-right" aria-label="right-arrow" onclick="" id="med-btn-right" type="button"></button>
            </div>
        </div>

    </section>

    <section class="container relative py-12">
        <div class="flex items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div>
                <h2>احجز مبكرًا: بطولة كأس العالم للرياضات الإلكترونية تنتظرك!</h2>
            </div>
        </div>
        <div class="med-related-prod-wrap" id="med-related-prod-wrapper">
            <div class="med-rel-prod-slider-wrapper">
                <div class="med-rel-prod-slider carousel-content">
                    @php
                        $events = \App\Models\Event::query()->whereHas('category', function ($query) {
                            $query->where('name', 'LIKE', 'كأس العالم للرياضات الإلكترونية');
                        })
                        ->where('status', 'active')
                        ->latest()
                        ->paginate(10);

                    @endphp
                    @foreach($events as $event)
                        <div
                            class="xs:mr-3 xs:basis-1/2 relative mr-2 shrink-0 basis-[85%] md:basis-[28%] lg:basis-[22%] xl:basis-[18%]">
                            <a class="ring-transparent text-text ring-offset-2 inline-flex items-center justify-center overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md group relative h-full w-full gap-0 bg-transparent p-px ring-offset-white focus:ring-1"
                               to=""
                               href="{{ route('main-event',$event->id) }}">
                                <div class="flex h-full w-full flex-col items-start overflow-hidden rounded-md">
                                    <div class="relative w-full overflow-hidden rounded-md "><img
                                            src="{{asset('events-images/'.$event->image)}}?fm=webp&amp;fit=thumb&amp;w=600&amp;h=600"
                                            class="aspect-1 h-full object-cover transition duration-300 group-hover:scale-[1.02] group-focus:scale-[1.02]"
                                            width="600" height="600" alt="كاظم الساهر" data-loaded="true" srcset="">
                                    </div>
                                    <div class="text-text space-y-0.5 pt-2 text-start">
                                        <div class="text-sm leading-none text-gray-400"><span>فعالية</span><span> ·
{{--                                                    12 يوليو</span>--}}
                                                {{\Carbon\Carbon::create($event->date)->locale("ar_SA")->translatedFormat("j F")}}</span>

                                        </div>
                                        <p class="line-clamp-2">{{$event->title}}</p>
                                        <div>
                                            <div class="flex items-center gap-1">
                                                <p class="text-sm text-gray-400">يبدأ من</p>
                                                <p class="font-semibold">{{$event->tickets->min('price')}} ر.س</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-1 rounded-md text-xs py-1">
                                            <div style="color: rgb(186, 229, 0);"><svg width="24" height="24"
                                                                                       viewBox="0 0 24 24" fill="none" class="h-4 w-4"
                                                                                       xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M11 19.5229C11 20.265 11.9624 20.5564 12.374 19.9389L18.2227 11.166C18.5549 10.6676 18.1976 10 17.5986 10H13V4.47708C13 3.73503 12.0376 3.44363 11.626 4.06106L5.77735 12.834C5.44507 13.3324 5.80237 14 6.40139 14H11V19.5229Z"
                                                          fill="currentColor"></path>
                                                </svg></div>
                                            <p class="leading-none text-gray-400">حجز فوري</p>
                                        </div>
                                    </div>
                                </div>
                            </a></div>
                    @endforeach
                </div>
            </div>
        </div>
    </section>
    <section class="container space-y-8 py-12">
        <h2>شركاء ويبوك</h2>
        <div class="space-y-6 text-center">
            <div class="mx-auto space-y-2 max-w-full">
                <div class="flex flex-wrap items-center justify-center gap-6"><a
                        href="https://book.visitsaudi.com/sa-ar" target="_blank" rel="noreferrer"
                        class="transition hover:scale-105"><img
                            src="https://images.ctfassets.net/vy53kjqs34an/7CHCFVXSQRhDZxtKejvRHd/c3dc56299e04fa6ae8ea603b6b44958b/visit_saudi.png"
                            alt="visit saudi" width="167" height="80" class="h-full max-h-[80px]"></a><a
                        href="https://tickets.victoryarena.com/ar/tickets" target="_blank" rel="noreferrer"
                        class="transition hover:scale-105"><img
                            src="https://images.ctfassets.net/vy53kjqs34an/7z8tI15IMXFliKRrJxWixy/88ea98030676362c4630f4ba97431a50/alawal.png"
                            alt="Alawaal" width="290" height="80" class="h-full max-h-[80px]"></a><a
                        href="https://sfadomes.com/ar" target="_blank" rel="noreferrer"
                        class="transition hover:scale-105"><img
                            src="https://images.ctfassets.net/vy53kjqs34an/6SGrUWqrT6YehussBYmaRQ/d8677fa7a38e49b50e2d7cffde7da0e1/sfa.png"
                            alt="sfa dom" width="146" height="80" class="h-full max-h-[80px]"></a><a
                        href="https://tickets.jarir.com/sa-ar" target="_blank" rel="noreferrer"
                        class="transition hover:scale-105"><img
                            src="https://images.ctfassets.net/vy53kjqs34an/ZynThXKVomCfgAnaHkNtb/8d6a52974df2c618a6b8db4b76afc1c1/jarir.png"
                            alt="jarir" width="249" height="80" class="h-full max-h-[80px]"></a><a
                        href="https://tickets.saudiarabiangp.com/ar" target="_blank" rel="noreferrer"
                        class="transition hover:scale-105"><img
                            src="https://images.ctfassets.net/vy53kjqs34an/6nMklmV7nR24nEpOZKZ2vn/20c5a88975e951a6bed6ce23b732643e/sagp.png"
                            alt="sagp" width="176" height="80" class="h-full max-h-[80px]"></a><a
                        href="https://tickets.saudigames.sa/" target="_blank" rel="noreferrer"
                        class="transition hover:scale-105"><img
                            src="https://images.ctfassets.net/vy53kjqs34an/747ilctbzylTyQA71o4FHx/9e0e300030bc1f38dbd199b9124001b3/saudi_games.png"
                            alt="saudi games" width="88" height="79" class="h-full max-h-[80px]"></a></div>
            </div>
        </div>
    </section>
    <section class="container">
        <div class="my-10 flex flex-col overflow-hidden rounded-[24px] bg-violet-500 lg:flex-row lg:gap-6">
            <div
                class="border-b border-white/30 bg-[url(/images/app/pattern.png)] bg-[100%_50%] lg:border-none rtl:bg-[0%_50%]">
                <img class="mx-auto" src="{{asset('/images/app/iphones.png')}}" alt=""></div>
            <div class="flex-1 self-center p-4 lg:pb-8">
                <div class="lg:py-4">
                    <h2 class="mb-4 text-2xl font-semibold leading-tight text-gray-100 xl:text-5xl">حمل التطبيق
                        لدخول السحب على جوائز آيفون أسبوعية!</h2>
                    <div class="flex flex-row items-center gap-2 xl:gap-4"><a class="hover:opacity-80"
                                                                              href="https://apps.apple.com/us/app/webook-com-fun-things-to-do/id6468667896"
                                                                              target="_blank" rel="noopener noreferrer"><img src="{{asset('/images/app/appstore.svg')}}"
                                                                                                                             alt="appstore" width="105" height="35"></a><a class="hover:opacity-80"
                                                                                                                                                                           href="https://play.google.com/store/apps/details?id=com.webook.android"
                                                                                                                                                                           target="_blank" rel="noopener noreferrer"><img src="{{asset('/images/app/playstore.svg')}}"
                                                                                                                                                                                                                          alt="playstore" width="115" height="35"></a><a class="hover:opacity-80"
                                                                                                                                                                                                                                                                         href="https://appgallery.huawei.com/app/C109536445" target="_blank"
                                                                                                                                                                                                                                                                         rel="noopener noreferrer"><img src="{{asset('/images/app/huawei.svg')}}" alt="playstore"
                                                                                                                                                                                                                                                                                                        width="115" height="35"></a></div>
                </div>
                <div class="my-5 hidden h-px bg-white/20 lg:block"></div>
                <div class="hidden items-center gap-6 lg:flex">
                    <div class="flex items-center justify-center rounded-xl bg-white p-3"><img
                            src="{{asset('/images/app/qr-code.png')}}" alt="QR Code" width="110" height="110"></div>
                    <div class="text-gray-100">امسح الرمز للتحميل</div>
                </div>
            </div>
        </div>
    </section>

@endsection
@section('scripts')

    <script>
        const bindCarouselEvents = (containerId) => {
            const wrapper = document.getElementById(containerId);
            const btn_left = wrapper.getElementsByClassName('btn-left')[0]
            const btn_right = wrapper.getElementsByClassName('btn-right')[0]
            const content = wrapper.getElementsByClassName('carousel-content')[0]
            const content_scroll_width = content.scrollWidth;
            let content_scoll_left = content.scrollLeft;
            if (btn_right) {
                btn_right.addEventListener('click', () => {
                    content_scoll_left += 224;
                    if (content_scoll_left >= content_scroll_width) {
                        content_scoll_left = content_scroll_width;
                    }
                    content.scrollLeft = content_scoll_left;
                });
            }
            if (btn_left) {
                btn_left.addEventListener('click', () => {
                    content_scoll_left -= 224;
                    content.scrollLeft = content_scoll_left;
                });
            }

            // scroll binding
            content.addEventListener('scroll', () => {
                let scrollLeft = Math.ceil(content.scrollLeft)
                let contentScrollWidth = content.scrollWidth
                let contentWidth = content.clientWidth
                let rightEdge = (contentScrollWidth - contentWidth)
                if (scrollLeft >= rightEdge) {
                    btn_right.style.display = "none"
                } else if (scrollLeft < rightEdge) {
                    btn_right.style.display = "block"
                }

                if (scrollLeft == 0) {
                    btn_left.style.display = "none"
                } else if (scrollLeft > 0) {
                    btn_left.style.display = "block"
                }

                content_scoll_left = scrollLeft
            });
        }

        // javascript for scroll on click
        window.addEventListener('DOMContentLoaded', function(){
            bindCarouselEvents('med-related-prod-wrapper')
        });
    </script>
@endsection
