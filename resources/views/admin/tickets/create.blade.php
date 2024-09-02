@extends('admin.layout')
@section('title')
    {{'إضافة تذكرة'}}
@endsection


@section('content')


    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Toolbar-->
        <div class="toolbar" id="kt_toolbar">
            <!--begin::Container-->
            <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
                <!--begin::Page title-->
                <div data-kt-place="true" data-kt-place-mode="prepend" data-kt-place-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" class="page-title d-flex flex-column align-items-start me-3">
                    <!--begin::Title-->
                    <h1 class="d-flex align-items-center text-dark fw-bolder my-1 fs-1">إضافة تذكرة جديدة</h1>
                    <!--end::Title-->
                    <!--begin::Breadcrumb-->
                    <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-muted">
                            <a href="{{route('admin')}}" class="text-muted text-hover-primary">الرئيسية</a>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-muted">
                            <a href="{{route('tickets.index')}}" class="text-muted text-hover-primary">التذاكر</a>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-dark">إضافة تذكرة جديدة</li>
                        <!--end::Item-->
                    </ul>
                    <!--end::Breadcrumb-->
                </div>
                <!--end::Page title-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container">

                <div class="card">
                    <!--begin::Card body-->
                    <div class="card-body p-10">
                        <!--begin::Heading-->
                        <!--begin::Alert-->
                        <!--end::Alert-->
                        <div class="modal-header pb-0 border-0 justify-content-end">
                            <!--begin::Close-->

                            <!--end::Close-->
                        </div>
                        <!--begin::Modal header-->
                        <!--begin::Modal body-->
                        <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
                            <!--begin:Form-->
                            <form id="kt_modal_new_target_form" class="form" method="POST" action="{{route('tickets.store')}}" enctype="multipart/form-data">
                                @csrf
                                <!--begin::Heading-->
                                <div class="mb-13 text-center">
                                    <!--begin::Title-->
                                    <h1 class="mb-3">أدخل بيانات التذكرة</h1>
                                    <!--end::Title-->
                                    <!--begin::Description-->
                                    <div class="text-gray-400 fw-bold fs-5">يمكنك تصفح جميع التذاكر من
                                        <a href="{{route('tickets.index')}}" class="fw-bolder link-primary">هنا</a>.</div>
                                    <!--end::Description-->
                                </div>
                                <!--end::Heading-->
                                <!--begin::Input group-->
                                <div class="row">
                                <div class="col-md-3 d-flex flex-column mb-8 fv-row">
                                    <!--begin::Label-->
                                    <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                                        <span class="required">عنوان التذكرة</span>
                                        <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="عنوان التذكرة الذي ستقوم بإضافة المنتجات له وسيظهر للمستخدم"></i>
                                    </label>
                                    <!--end::Label-->
                                    <input type="text" class="form-control form-control-solid" placeholder="أدخل عنوان تذكرة" name="name" />
                                    <span class="text-danger">
                                        @error('name')
                                        {{$message}}
                                        @enderror
                                            </span>
                                </div>

                                <div class="col-md-3 d-flex flex-column mb-8 fv-row">
                                    <!--begin::Label-->
                                    <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                                        <span class="required">سعر التذكرة</span>
                                        <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="سعر التذكرة الذي ستقوم بإضافة المنتجات له وسيظهر للمستخدم"></i>
                                    </label>
                                    <!--end::Label-->
                                    <input type="text" class="form-control form-control-solid" placeholder="أدخل سعر تذكرة" name="price" />
                                    <span class="text-danger">
                                        @error('price')
                                        {{$message}}
                                        @enderror
                                            </span>
                                </div>

                                    <div class="col-md-3 d-flex flex-column mb-8 fv-row">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                                            <span class="required">الفعالية</span>
                                            <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="قم بإختيار الفعالية التي ستتوفر هذه التذكرة لها"></i>
                                        </label>
                                        <!--end::Label-->
                                        <select class="form-control form-control-solid" name="event_id">
                                            <option selected hidden>-- اختر --</option>
                                            @foreach($events as $event)
                                                <option value="{{ $event->id }}">{{ $event->title }}</option>
                                            @endforeach
                                        </select>
                                        <span class="text-danger">
                                        @error('event_id')
                                            {{$message}}
                                            @enderror
                                            </span>
                                    </div>

                                    <div class="col-md-3 d-flex flex-column mb-8 fv-row">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                                            <span class="required">الحالة</span>

                                        </label>
                                        <!--end::Label-->
                                        <div class="form-check form-check-solid form-switch fv-row">
                                            <input class="form-check-input w-45px h-30px" name="status" type="checkbox" checked />
                                        </div>
                                        @error('status')
                                        <span class="text-danger">
                                                            {{$message}}
                                                        </span>
                                        @enderror
                                    </div>

                                    </div>  <!--end of row-->

                                <!--end::Input group-->

                                <!--begin::Actions-->
                                <div class="text-center">
                                    <button type="reset" class="btn btn-white me-3">مسح البيانات</button>
                                    <button type="submit" class="btn btn-primary">
                                        <span class="indicator-label">إضافة</span>
                                    </button>
                                </div>
                                <!--end::Actions-->
                            </form>
                            <!--end:Form-->
                        </div>
                        <!--end::Modal body-->

                        <!--end::Modal content-->

                        <!--end::Modal dialog-->
                    </div>
                    <!--end::Action-->
                </div>
                <!--end::Heading-->
                <!--begin::Illustration-->

                <!--end::Illustration-->
            </div>
            <!--end::Card body-->
        </div>


    </div>


@endsection

