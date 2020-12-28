<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"
  html>
<html lang="{{ app()->getLocale()}}">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="shortcut icon" href="{{asset('/images/favicon.ico') }}">
  <link rel="stylesheet" href="{{mix('/css/vendor.css') }}">
  <link rel="stylesheet" href="{{mix('/css/app.css') }}">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{ __('messages.Title') }}</title>
  
  
</head>



<body class="{{ __('messages.font') }}">
  <header class="text-center headercolor ka">
    <div class="row justify-content-center">
      <div class="col-sm align-self-center ml-4">
        <a href="/{{App::getLocale()}}">
          <img src="{{ __('messages.Logo') }}" alt="logo" id="logo">
        </a>
      </div>
      <div class="col-sm align-self-center align-items-cent">
        <h4 style="">{{ __('messages.Title') }}</h4>
      </div>
      <div class="col-md-3 text-center">
        <button type="button" class="btn btn-outline-primary btn-sm modalbtn btn-action" data-toggle="modal"
          data-target="#exampleModalCenter"><i class="fas fa-info"></i></button>
        @if(App::isLocale('ka'))
        <a id="lang_en" href="/en"><button type="button" class="btn btn-outline-primary btn-sm"><img
              src="{{asset('/images/en.png') }}"></button></a>
        @else
        <a id="lang_ka" href="/ka"><button type="button" class="btn btn-outline-primary btn-sm"><img
              src="{{asset('/images/ka.png') }}"></button></a>
        @endif
      </div>
      <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">{{ __('messages.Instruction') }}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="contact" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{ __('messages.contact') }}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>{{ __('messages.txt1') }}</p>
              <p>{{ __('messages.email') }}</p>
              <p>{{ __('messages.txt2') }}</p>
            </div>
          </div>
        </div>
      </div>
  </header>

  <div class="container-fluid" style="width:90%;">

    @yield('_content')

  </div>

  <div class="ml-4" id="">
    <div class="sticky-container">
      <ul class="sticky">
        <li data-toggle="tooltip" data-placement="left" title="{{ __('messages.atlas') }}">
          <img src="{{asset('/images/atlas.svg') }}" width="32" height="32">
        </li>
        <a href="{{ __('messages.link1') }}" target="_blank">
          <li data-toggle="tooltip" data-placement="left" title="{{ __('messages.cls') }}">
            <img src="{{asset('/images/classifications.svg') }}" width="32" height="32">
          </li>
        </a>
        <a href="{{ __('messages.link2') }}" target="_blank">
          <li data-toggle="tooltip" data-placement="left" title="{{ __('messages.mthd') }}">
            <img src="{{asset('/images/methodology.svg') }}" width="32" height="32">
          </li>
        </a>
        <a href="{{ __('messages.link3') }}" target="_blank">
          <li data-toggle="tooltip" data-placement="left" title="{{ __('messages.mdata') }}">
            <img src="{{asset('/images/metadata.svg') }}" width="32" height="32">
          </li>
        </a>
        <li data-toggle="modal" data-target="#contact">
          <img src="{{asset('/images/contact.svg') }}" width="32" height="32">
        </li>
        <a href="{{ __('messages.link4') }}" target="_blank">
          <li data-toggle="tooltip" data-placement="left" title="{{ __('messages.uncomtrade') }}">
            <img src="{{asset('/images/uncomtrade.png') }}" width="32" height="32">
          </li>
        </a>
      </ul>
    </div>
  </div>
  <div class="container sumTab">
    <div class="float-right">
    </div>
  </div>
  <div class="footer">
    {{ __('messages.copyright') }} <br>
    {{ __('messages.copyright1') }}
  </div>
  <script src="{{mix('/js/vendor.js') }}"></script>
  <script src="{{mix('/js/app.js') }}"></script>
</body>

</html>