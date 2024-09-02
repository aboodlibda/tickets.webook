@extends('admin.layout')
@section('title')
    {{'كل الطلبات'}}
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
                    <h1 class="d-flex align-items-center text-dark fw-bolder my-1 fs-1">الطلبات</h1>
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
                        <li class="breadcrumb-item text-dark">الطلبات</li>
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
                <!--begin::Tables Widget 11-->


                <div class="card mb-5 mb-xl-8">
                    <!--begin::Header-->
                    <div class="card-header border-0 pt-5">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="card-label fw-bolder fs-3 mb-1">جميع الطلبات</span>
                        </h3>
                    </div>
                    <!--end::Header-->
                    <!--begin::Body-->
                    <div class="card-body py-3">
                        <!--begin::Table container-->
                        <div class="table-responsive">
                            <!--begin::Table-->
                            <table class="table align-middle gs-0 gy-4">
                                <!--begin::Table head-->
                                <thead>
                                <tr class="fw-bolder text-muted bg-light">
                                    <th class="ps-4 rounded-start">اسم صاحب الطلب</th>
                                    <th class="ps-4 rounded-start">البريد</th>
                                    <th class="ps-4 rounded-start">الجوال</th>
                                    <th class="ps-4 rounded-start">التذاكر الطلوبة</th>
                                    <th class="ps-4 rounded-start">مجموع الطلب</th>
{{--                                    <th class="ps-15">العمليات</th>--}}
                                </tr>
                                </thead>
                                <!--end::Table head-->
                                <!--begin::Table body-->
                                <tbody>
                                @foreach($orders as $order)
                                    @php
                                        $grandTotal = 0;
                                    @endphp

                                    @foreach ($order->tickets as $ticket)
                                        @php
                                            $price = $ticket->price;
                                            $count = $ticket->pivot->count;
                                            $total = $price * $count;
                                            $grandTotal += $total;
                                        @endphp
                                    @endforeach
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="d-flex justify-content-start flex-column">
                                                    <span class="text-dark fw-bolder  mb-1 fs-6">{{$order->user_name}}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="d-flex justify-content-start flex-column">
                                                    <span class="text-white fw-bolder  mb-1 fs-6 badge badge-primary">{{$order->email}}</span>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="d-flex justify-content-start flex-column">
                                                    <span class="text-white fw-bolder  mb-1 fs-6 badge badge-danger">{{$order->phone}}</span>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="d-flex justify-content-start flex-column">
                                                    @foreach($order->tickets as $ticket)
                                                        <span class="text-white fw-bolder  mb-1 fs-6 badge badge-info">
                                                         {{$ticket->name}}<br>
                                                        {{$ticket->price}} ريال <br>
                                                        {{$ticket->pivot->count}}<br>
                                                    </span>

                                                    @endforeach

                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="d-flex justify-content-start flex-column">
                                                        <span class="text-white fw-bolder  mb-1 fs-6 badge badge-dark">
                                                        {{$grandTotal}} ريال
                                                        </span>
                                                </div>
                                            </div>
                                        </td>

{{--                                        <td>--}}

{{--                                            <button type="button"  data-bs-toggle="modal" data-bs-target="#kt_modal_1"  data-id="{{ $order->id }}"  class="btn btn-icon btn-bg-light btn-active-color-danger ">--}}
{{--                                                <!--begin::Svg Icon | path: icons/duotone/General/Trash.svg-->--}}
{{--                                                <span class="svg-icon svg-icon-3">--}}
{{--																	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">--}}
{{--																		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">--}}
{{--																			<rect x="0" y="0" width="24" height="24" />--}}
{{--																			<path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero" />--}}
{{--																			<path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />--}}
{{--																		</g>--}}
{{--																	</svg>--}}
{{--																</span>--}}
{{--                                                <!--end::Svg Icon-->--}}
{{--                                            </button>--}}
{{--                                        </td>--}}
                                    </tr>
                                @endforeach
                                </tbody>
                                <!--end::Table body-->
                            </table>
                            <!--end::Table-->
                        </div>
                        <!--end::Table container-->
                    </div>
                    {{$orders->links()}}
                    <!--begin::Body-->
                </div>
                <!--end::Tables Widget 11-->
            </div>
            <!--end::Card body-->
        </div>


    </div>

    <div class="modal fade" tabindex="-1" id="kt_modal_1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">حذف الطلب</h5>

                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-danger ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <span class="svg-icon svg-icon-2x"></span>
                    </div>
                    <!--end::Close-->
                </div>

                <form action="" method="POST">.
                    @method('DELETE')
                    @csrf
                    <div class="modal-body">
                        <p>هل أنت متأكد من عملية الحذف ؟</p>
                        <input type="hidden" id="id" name="id">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">إلغاء</button>
                        <button type="submit" class="btn btn-danger">حذف</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

@endsection

@section('scripts')

    <script>

        $('#kt_modal_1').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var id = button.data('id')
            var modal = $(this)
            modal.find('.modal-body #id').val(id);
        })

    </script>

@endsection
