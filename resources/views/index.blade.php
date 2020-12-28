@if (!empty($country) && !empty($bec) && !empty($sitc) && !empty($grp) && !empty($hssecdatas))
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
              ...
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
  <div class="container-fluid" style="width:90%">
    <form onsubmit="return false;" action="{{ route('displayTable') }}" method="get" id="filterForm">
      <div class="row pt-4">
        <div class="col-12 col-lg-12 col-xl-4">
          <div class="blockItem col-12 p-3" id="one">
            <div>
              <h2 class="ct-step-title newfont">{{ __('messages.head_titlemain') }}</h2>
            </div>
            <div class="cont mt-1">
              <div class="item1">
                <div style=" text-align: left !important;">
                  <span class="lab typeClass ml-3"><b>{{ __('messages.type') }}</b></span>
                </div>
              </div>
              <div class="item1">
                <select multiple id="type" name="type[]">
                  <option value="E" data-badge="" selected="selected">{{ __('messages.Export') }}</option>
                  <option value="I" data-badge="" selected="selected">{{ __('messages.Import') }}</option>
                  <option value="DE" data-badge="">{{ __('messages.Domestic') }}</option>
                  <option value="RE" data-badge="">{{ __('messages.Reexport') }}</option>
                  <option value="CI" data-badge="">{{ __('messages.Circulation') }}</option>
                  <option value="BA" data-badge="">{{ __('messages.Balance') }}</option>
                </select>
              </div>
            </div>
            <div class="cont mt-3 noBorder">
              <div class="item1">
                <div class="">
                  <fieldset class="ct-fs-compact p-0">
                    <legend class="newfont ml-3"><b>{{ __('messages.Periodicity') }}</b></legend>
                  </fieldset>
                </div>
              </div>
            </div>
            <div class="cont">
              <div class="item1">
                <div style=" text-align: left !important;" class="">
                  <span class="lab {{ __('messages.subfont') }} ml-3">{{ __('messages.Year') }} <input type="radio"
                      value="year" class="chk1" data-selectId="year" checked disabled> </span>
                </div>
              </div>
              <div class="item1">
                <div>
                  <select multiple id="year" name="year[]">
                    <option value="2020" data-badge="">2020*</option>
                    <option value="2019" data-badge="" selected>2019*</option>
                    <option value="2018" data-badge="">2018</option>
                    <option value="2017" data-badge="">2017</option>
                    <option value="2016" data-badge="">2016</option>
                    <option value="2015" data-badge="">2015</option>
                    <option value="2014" data-badge="">2014</option>
                    <option value="2013" data-badge="">2013</option>
                    <option value="2012" data-badge="">2012</option>
                    <option value="2011" data-badge="">2011</option>
                    <option value="2010" data-badge="">2010</option>
                    <option value="2009" data-badge="">2009</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="cont mt-1">
              <div class="item1">
                <div style=" text-align: left !important;" class="">
                  <span class="lab {{ __('messages.subfont') }} ml-3">{{ __('messages.Quarter') }}
                    <input type="checkbox" value="quarter" class="chk1" data-selectId="quarter" dataName="groupOne"
                      name="quarterMonth" id="cbs1"></span>
                </div>
              </div>
              <div class="item1">
                <div>
                  <select multiple id="quarter" name="quarter[]">
                    <option value="1" data-badge="">Q1</option>
                    <option value="2" data-badge="">Q2</option>
                    <option value="3" data-badge="">Q3</option>
                    <option value="4" data-badge="">Q4</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="cont mt-1">
              <div class="item1">
                <div style=" text-align: left !important;" class="">
                  <span class="lab {{ __('messages.subfont') }} ml-3">{{ __('messages.Month') }}<input type="checkbox"
                      value="month" class="chk1" dataName="groupOne" data-selectId="month" checked name="quarterMonth"
                      id="cbs2"></span>
                </div>
              </div>
              <div class="item1">
                <div>
                  <select multiple id="month" name="month[]">
                    <option value="1" data-badge="">{{ __('messages.January') }}</option>
                    <option value="2" data-badge="" selected>{{ __('messages.February') }}</option>
                    <option value="3" data-badge="">{{ __('messages.March') }}</option>
                    <option value="4" data-badge="">{{ __('messages.April') }}</option>
                    <option value="5" data-badge="">{{ __('messages.May') }}</option>
                    <option value="6" data-badge="">{{ __('messages.June') }}</option>
                    <option value="7" data-badge="">{{ __('messages.July') }}</option>
                    <option value="8" data-badge="">{{ __('messages.August') }}</option>
                    <option value="9" data-badge="">{{ __('messages.September') }}</option>
                    <option value="10" data-badge="">{{ __('messages.October') }}</option>
                    <option value="11" data-badge="">{{ __('messages.November') }}</option>
                    <option value="12" data-badge="">{{ __('messages.Decmber') }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="cont noBorder pt-1 pr-5" style="flex-direction: row;justify-content: flex-end;">
              <div class="item1 pr-1">
                <span class="lab {{ __('messages.subfont') }} ml-3">{{ __('messages.PeriodicityTwo') }}</span>
                <input type="checkbox" value="sumval" name=" sum" class="ml-2">
              </div>
            </div>
            <div class="cont mt-4">
              <div class="item1">
                <div style=" text-align: left !important;">
                  <span class="lab typeClass ml-3"><b>{{ __('messages.Cost') }}</b></span>
                </div>
              </div>
              <div class="item1">
                <div>
                  <select multiple id="cost" name="cost[]">
                    <option value="usd1000" data-badge="" selected>{{ __('messages.usd') }}</option>
                    <option value="tons" data-badge="">{{ __('messages.tons') }}</option>
                    <option value="addsize" data-badge="">{{ __('messages.additional_size') }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" col-12 col-lg-12 col-xl-4">
          <div class="blockItem col-12 p-3" id="three">
            <div>
              <h2 class=" ct-step-title newfont">{{ __('messages.head_subtitle') }}</h2>
            </div>
            <div class="cont mt-1">
              <div class="item1">
                <div style=" text-align: left !important;">
                  <span class="lab ml-3 {{ __('messages.subfont') }}">
                    <b> {{ __('messages.Country') }}</b>
                  </span>
                </div>
              </div>
              <div class="item1">
                <div>
                  <select multiple id="country" name="country[]" data-name="ქვეყანა">
                    @foreach($country as $countries)
                    @php $lang='name_'.app()->getLocale(); @endphp
                    <option value="{{$countries->country_id}}">{{$countries->{$lang} }}
                    </option>
                    @endforeach
                  </select>
                </div>
              </div>
            </div>
            <div class="cont mt-1">
              <div class="item1">
                <div style=" text-align: left !important;">
                  <span class="lab ml-3 {{ __('messages.subfont') }}">
                    <b> {{ __('messages.Country_grp') }}</b>
                  </span>
                </div>
              </div>
              <div class="item1">
                <div id="grpHover">
                  <select multiple id="grp" name="grp[]">
                    @foreach($grp as $single)
                    <option value="{{$single->name}}">{{$single->name }}
                    </option>
                    @endforeach
                  </select>
                </div>
              </div>
            </div>
            <div class="cont mt-1">
              <div class="item1">
                <div style=" text-align: left !important;">
                  <span class="lab ml-3 {{ __('messages.subfont') }}">
                    <b> {{ __('messages.Transport') }}</b>
                  </span>
                </div>
              </div>
              <div class="item1">
                <div>
                  <select multiple id="transout" name="transout[]">
                    @foreach($transout as $transouts)
                    @php $lang='name_'.app()->getLocale(); @endphp
                    <option value="{{$transouts->transout_id}}">{{$transouts-> {$lang} }}
                    </option>
                    @endforeach
                  </select>
                </div>
              </div>
            </div>
            <div class="wrapper">
              <div class="cont mt-3 noBorder paramtitle" style="display:none;font-size: 12.5px;">
                <div class="item1">
                  <div class="">
                    <fieldset class="ct-fs-compact p-0">
                      <legend class="newfont ml-3"><b>{{ __('messages.parameter') }}</b></legend>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div class="cont mt-1 parameterClass" style="display:none;">
                <div class="item1">
                  <div style=" text-align: left !important;">
                    <span class="lab ml-3 {{ __('messages.subfont') }}">
                      <i class="fas fa-info-circle"></i> {{ __('messages.groupparameter') }}
                    </span>
                  </div>
                </div>
                <div class="item1">
                  <div id="groups">
                    <select multiple id="parameters" name="parameters">
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-12 col-xl-4">
          <div class="blockItem col-12 p-3" id="two">
            <div>
              <h2 class="ct-step-title newfont">{{ __('messages.class') }}</h2>
            </div>
            <div class="cont noBorder mt-2">
              <div class="item1">
                <div class="">
                  <fieldset class="ct-fs-compact">
                    <legend class="enFont ml-3"><b data-toggle="tooltip" data-placement="left"
                        title="{{ __('messages.hstitle') }}">HS</b>
                    </legend>
                  </fieldset>
                </div>
              </div>
            </div>
            <div class="cont">
              <div class="item1">
                <div style=" text-align: left !important;" class="">
                  <span class="lab {{ __('messages.subfont') }} ml-3"><b>{{ __('messages.door') }}</b><input
                      type="checkbox" value="door" class="chk1" name="door" dataName="groupTwo" data-selectId="hssec">
                  </span>
                </div>
              </div>
              <div class="item1">
                <div id="hssHover">
                  <select multiple id="hssec" name="hssec[]">
                    @foreach($hssecdatas as $single)
                    @php $lang='name_'.app()->getLocale(); @endphp
                    <option value="{{$single->id}}">{{$single->{$lang} }}
                    </option>
                    @endforeach
                  </select>
                </div>
              </div>
            </div>
            <div class="cont mt-1">
              <div class="item1">
                <div style=" text-align: left !important;" class="">
                  <span class="lab enFont ml-3"><b>{{ __('messages.two-digits') }} </b><input type="checkbox"
                      value="two" class="chk1" name="hs2" dataName="groupTwo" data-selectId="hs2">
                  </span>
                </div>
              </div>
              <div class="item1">
                <div>
                  <select multiple id="hs2" name="hs2[]">
                    <option value="{{$single->name_ka}}">{{$single->name_ka}}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="cont mt-1">
              <div class="item1">
                <div style=" text-align: left !important;" class="">
                  <span class="lab enFont ml-3"><b>{{ __('messages.four-digits') }}</b><input type="checkbox"
                      value="four" class="chk1" dataName="groupTwo" name="hs4" data-selectId="hs4"></span>
                </div>
              </div>
              <div class="item1">
                <div>
                  <select multiple id="hs4" name="hs4[]">
                    @foreach($hs4data as $single)
                    @php $lang='name_'.app()->getLocale(); @endphp
                    <option value="{{$single->hs4_id}} ">{{$single->{$lang} }}
                    </option>
                    @endforeach
                  </select>
                </div>
              </div>
            </div>
            <div class="cont mt-1">
              <div class="item1">
                <div style=" text-align: left !important;" class="">
                  <span class="lab enFont ml-3"><b>{{ __('messages.six-digits') }}</b><input type="checkbox" value="six"
                      class="chk1" dataName="groupTwo" name="hs6" data-selectId="hs6"></span>
                </div>
              </div>
              <div class="item1">
                <div>
                  <select multiple id="hs6" name="hs6[]">
                    @foreach($hs6data as $single)
                    @php $lang='name_'.app()->getLocale(); @endphp
                    <option value="{{$single->hs6_id}}">{{$single->{$lang} }}
                    </option>
                    @endforeach
                  </select>
                </div>
              </div>
            </div>
            <div class="cont noBorder mt-2">
              <div class="item1">
                <div class="">
                  <fieldset class="ct-fs-compact">
                    <legend class="enFont ml-3"><b data-toggle="tooltip" data-placement="left"
                        title="{{ __('messages.becalert') }}">BEC</b>
                    </legend>
                  </fieldset>
                </div>
              </div>
            </div>
            <div class="cont mb-2">
              <div class="item1">
                <div style=" text-align: left !important;" class="">
                  <span class="lab enFont ml-3"><b>{{ __('messages.BEC') }}</b> <input type="checkbox" value="bec"
                      class="chk1" dataName="groupThree" data-selectId="bec" id="cb1"></span>
                </div>
              </div>
              <div class="item1">
                <div>
                  <select multiple id="bec" name="bec1[]">
                    @foreach($bec as $becs)
                    @php $lang='name_'.app()->getLocale(); @endphp
                    <option value="{{$becs->id}}">{{$becs->{$lang} }}
                    </option>
                    @endforeach
                  </select>
                </div>
              </div>
            </div>
            <div class="cont noBorder mt-2">
              <div class="item1">
                <div class="">
                  <fieldset class="ct-fs-compact">
                    <legend class="enFont ml-3"><b data-toggle="tooltip" data-placement="left"
                        title="{{ __('messages.sitcalert') }}">SITC</b>
                    </legend>
                  </fieldset>
                </div>
              </div>
            </div>
            <div class="cont">
              <div class="item1">
                <div style=" text-align: left !important;" class="">
                  <span class="lab enFont ml-3"><b>{{ __('messages.SITC') }}</b> <input type="checkbox" value="sitc"
                      class="chk1" data-selectId="sitc" dataName="groupThree" id="cb2"></span>
                </div>
              </div>
              <div class="item1">
                <div>
                  <select multiple id="sitc" name="sitc1[]">
                    @foreach($sitc as $sitcs)
                    @php $lang='name_'.app()->getLocale(); @endphp
                    <option value="{{$sitcs->id}}">{{$sitcs->{$lang} }}
                    </option>
                    @endforeach
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row float-right no-gutters">
        <div class="col-md-7 col-lg-5 col-xl-12 mt-3">
          <button type="button" class="btn btn-primary" id="filterSubmit">
            {{ __('messages.Filter') }}
          </button>
        </div>
      </div>
    </form>
    <table id="table_id" class="mdl-data-table mt-1 row-border cell-border compact stripe display" s tyle="width:100%">
    </table>
    <div class="row">
      <div class="col-12" style="font-size:9px;">
        <b>{{ __('messages.msgtxt1') }}</b>
      </div>
      <div class="col-12" style="font-size:9px;">
        <b>{{ __('messages.msgtxt2') }}</b>
      </div>
      <div class="col-5" style="font-size:9px;">
        {{ __('messages.msgtxt3') }}
      </div>
      <div class="col-12" style="font-size:10px;">
        {{ __('messages.msgtxt4') }}
      </div>
    </div>
  </div>
  <div class="ml-4" id="">
    <div class="sticky-container">
      <ul class="sticky">
        <li data-toggle="tooltip" data-placement="left" title="{{ __('messages.atlas') }}">
          <img src="{{asset('/images/atlas.svg') }}" width="32" height="32">
        </li>
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
  <script src="{{mix('/js/vendor.js') }}"></script>
  <script src="{{mix('/js/app.js') }}"></script>
</body>

</html>
@else
<p>error</p>
@endif