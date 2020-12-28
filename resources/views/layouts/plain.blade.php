<!DOCTYPE html>
<html lang="{{ app()->getLocale()}}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-161401045-1"></script>
  <script>
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'UA-161401045-1');
  </script>
  <link rel="shortcut icon" href="{{asset('/images/favicon.ico') }}">
  <meta property="og:title" content="{{ __('messages.Title') }}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{{localized_url(Config::get('app.locale'), request()->url())}}" />
  <meta property="og:description" content="{{ __('messages.Title') }}" />
  <meta property="og:image" content="{{asset('/images/fb_'.Config::get('app.locale').'.png')}}" />
  <meta property="og:image:secure_url" content="{{asset('/images/fb_'.Config::get('app.locale').'.png')}}" />
  <meta property="og:image:width" content="600" />
  <meta property="og:image:height" content="315" />
  <meta property="og:image:alt" content="Geostat Image" />
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- Required meta tags -->
  <title>{{ __('messages.Title') }}</title>
  <link rel="stylesheet" href="{{mix('/css/vendor.css') }}">
  <link rel="stylesheet" href="{{mix('/css/app.css') }}">
  <link rel="stylesheet" href="https://cdn.datatables.net/colreorder/1.5.2/css/colReorder.dataTables.min.css">
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js" type="text/javascript"></script>
  <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0">
  </script>
</head>
<?php
function localized_url($locale, $url = null)
    {
        if (is_null($url)) {
            $url = Request::fullUrl();
        }
        $url = explode('/', $url);
        $url[Config::get('locale_segment', 1) + 2] = $locale;
        return implode('/', $url);
    }
?>

<body class="{{ __('messages.font') }}" style="background-image: url('../images/map.jpg');background-position:center;">
  <header class="text-center headercolor ka">
    <div class="row justify-content-center">
      <div class="col-sm align-self-center ml-4">
        <a href="/{{App::getLocale()}}">
          <img src="{{ __('messages.Logo') }}" alt="logo" id="logo">
        </a>
      </div>
      <div class="col-sm align-self-center align-items-cent">
        <h4 style="font-size: 2rem;">{{ __('messages.Title') }}</h4>
      </div>
      <div class="col-md-3  align-self-center text-center">
        @if (Request::segment(2)=="map")
        <a href="../{{  Config::get('app.locale') }}">
          <button type="button" style="padding: 0.25rem 0.5rem;"
            class="btn btn-outline-primary btn-sm modalbtn btn-action">
            <img src="{{asset('/images/atlas.svg') }}" width="32" height="32">
          </button>
        </a> 
      @else
      <a href="../{{  Config::get('app.locale') }}/map">
        <button type="button" style="padding: 0.25rem 0.5rem;"
          class="btn btn-outline-primary btn-sm modalbtn btn-action">
          <img src="{{asset('/images/atlas.svg') }}" width="32" height="32">
        </button>
      </a> 
      @endif
        <button type="button" style="padding: 0.25rem 0.5rem;"
          class="btn btn-outline-primary btn-sm modalbtn btn-action" data-toggle="modal"
          data-target="#exampleModalCenter">
          <i class="fas fa-info"></i>
        </button>
        <div class="mediaWrapper" style="display: inline-block; margin-right: 10px;margin-left: -15px;">
          <a href="https://www.facebook.com/sharer/sharer.php?u={{localized_url(Config::get('app.locale'), request()->url())}}"
            onclick="window.open(this.href, 'facebook-share-dialog','left=20,top=20,width=450,height=503,toolbar=1,resizable=0'); return false;">
            <button type="button" class="btn btn-outline-primary btn-sm">
              <i class="fab fa-facebook-f"></i>
            </button>
          </a>
          <a id="lang_en"
            href="https://twitter.com/share?text={{ __('messages.Title') }}&amp;url={{localized_url(Config::get('app.locale'), request()->url())}}"
            onclick="window.open(this.href, 'Twitter-dialog','left=20,top=20,width=450,height=503,toolbar=1,resizable=0'); return false;">
            <button type="button" class="btn btn-outline-primary btn-sm">
              <i class="fab fa-twitter"></i>
            </button>
          </a>
          <a id="lang_en"
            href="https://www.linkedin.com/shareArticle?mini=true&url={{localized_url(Config::get('app.locale'), request()->url())}}&title={{ __('messages.Title') }}&summary={{ __('messages.Title') }}&source=https://www.geostat.ge/ka"
            onclick="window.open(this.href, 'Twitter-dialog','left=20,top=20,width=450,height=503,toolbar=1,resizable=0'); return false;">
            <button type="button" class="btn btn-outline-primary btn-sm">
              <i class="fab fa-linkedin-in"></i>
            </button>
          </a>
        </div>
        @if(App::isLocale('ka'))
        <a id="lang_en" href="{{localized_url('en', request()->url())}}"><button type="button"
            class="btn btn-outline-primary btn-sm"><img width="14" src="{{asset('/images/en.png') }}"></button></a>
        @else
        <a id="lang_ka" href="{{localized_url('ka', request()->url())}}"><button type="button"
            class="btn btn-outline-primary btn-sm"><img width="14" src="{{asset('/images/ka.png') }}"></button></a>
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
              @if ( Config::get('app.locale') == 'ka')
              <iframe width="450" height="315" src="https://www.youtube.com/embed/14Pph6YG7TY?controls=0&enablejsapi=1"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
              @endif
              <div class="cont noBorder">
                @if ( Config::get('app.locale') == 'ka')
                <div class="item1">
                  <a href="{{ __('messages.inslink') }}" target="_blank">{{ __('messages.ins') }}</a>
                </div>
                @endif
                <div class="item1">
                  <a href="{{ __('messages.desclink') }}" target="_blank">{{ __('messages.desc') }}</a>
                </div>
              </div>
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
        <a href="../{{  Config::get('app.locale') }}/map">
          <li data-toggle="tooltip" data-placement="left" title="{{ __('messages.atlas') }}">
            <img src="{{asset('/images/atlas.svg') }}" width="32" height="32">
          </li>
        </a>
        <a href="{{ __('messages.link1') }}" target="_blank">
          <li data-toggle="tooltip" data-placement="left" title="{{ __('messages.icons') }}">
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
  <div id="fb-root"></div>
  <script src="{{mix('/js/vendor.js') }}"></script>
  <script src="{{mix('/js/app.js') }}"></script>

  

</body>

</html>