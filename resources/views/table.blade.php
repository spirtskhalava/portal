@extends('layouts.plain')


@section('_content')

<form id="filterForm">
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
                        <select id="flow" name="flow[]">
                            <option value="E" data-badge="" selected="selected">{{ __('messages.Export') }}</option>
                            <option value="I" data-badge="">{{ __('messages.Import') }}</option>
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
                                <legend class="newfont ml-3"><b>{{ __('messages.Periodicity') }} <span
                                            class="{{ __('messages.style') }}">({{ __('messages.Select') }})</span></b>
                                </legend>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div class="cont">
                    <div class="item1">
                        <div style=" text-align: left !important;" class="">
                            <span class="lab {{ __('messages.subfont') }} ml-3">{{ __('messages.Year') }} <input
                                    type="radio" value="year" class="chk1" data-selectId="year" checked disabled>
                            </span>
                        </div>
                    </div>
                    <div class="item1">
                        <div>
                            <select multiple id="year" name="year[]">
                                @foreach($year as $singley)
                                @if($singley->val==now()->year)
                                <option value="{{$singley->val}}" selected>{{$singley->year }}
                                </option>
                                @else
                                <option value="{{$singley->val}}">{{$singley->year }}
                                </option>
                                @endif
                                @endforeach
                            </select>
                        </div>
                    </div>
                </div>
                <div class="cont mt-1">
                    <div class="item1">
                        <div style=" text-align: left !important;" class="">
                            <span class="lab {{ __('messages.subfont') }} ml-3">{{ __('messages.Quarter') }}
                                <input type="checkbox" value="quarter" class="chk1" data-selectId="quarter"
                                    dataName="groupOne" id="quartertitle"></span>
                        </div>
                    </div>
                    <div class="item1">
                        <div>
                            <select multiple id="quarter" name="quarter[]">
                                <option value="1" data-badge="">{{ __('messages.q1') }}</option>
                                <option value="2" data-badge="">{{ __('messages.q2') }}</option>
                                <option value="3" data-badge="">{{ __('messages.q3') }}</option>
                                <option value="4" data-badge="">{{ __('messages.q4') }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="cont mt-1">
                    <div class="item1">
                        <div style=" text-align: left !important;" class="">
                            <span class="lab {{ __('messages.subfont') }} ml-3">{{ __('messages.Month') }}<input
                                    type="checkbox" value="month" class="chk1" dataName="groupOne" data-selectId="month"
                                    checked name="quarterMonth" id="monthtitle"></span>
                        </div>
                    </div>
                    <div class="item1">
                        <div>
                            <select multiple id="month" name="month[]">
                                <option value="1" data-badge="" selected>{{ __('messages.January') }}</option>
                                <option value="2" data-badge="">{{ __('messages.February') }}</option>
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
                        <input type="checkbox" value="sumval" id="sumval" name="sum" class="ml-2">
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
                                <option value="suppu" data-badge="">{{ __('messages.others') }}</option>
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
                        <div class="disablecountry">
                            <select multiple id="country" name="country[]">
                                <option value="all" data-badge="" id="all" selected>{{ __('messages.worldtotal') }}
                                </option>
                                <option value="world" data-badge="" id="world" disabled>{{ __('messages.allcountry') }}</option>
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
                            {{-- <select multiple id="grp" name="grp[]">
                @foreach($grp as $single)
                <option value="{{$single->name}}">{{$single->name}}
                            @php if($single->name=='EU'){echo "(28)";}elseif($single->name=='OECD'){echo "(36)";}@endphp
                            </option>
                            @endforeach
                            </select> --}}
                            <select multiple id="grp" name="grp[]"></select>
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
                    {{-- <div class="cont mt-3 noBorder paramtitle" style="display:none;font-size: 12.5px;">
                        <div class="item1">
                            <div class="">
                                <fieldset class="ct-fs-compact p-0">
                                    <legend class="newfont ml-3"><b>{{ __('messages.parameter') }}</b></legend>
                                </fieldset>
                            </div>
                        </div>
                    </div> --}}
                    <div class="cont mt-1 parameterClass">
                        <div class="item1">
                            <div style=" text-align: left !important;">
                                <span class="lab ml-3 {{ __('messages.subfont') }}">
                                    <i class="fas fa-info-circle"></i> {{ __('messages.groupparameter') }}
                                </span>
                            </div>
                        </div>
                        <div class="item1">
                            <div id="groups">
                                <select id="parameters" name="parameters">
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
                                        title="{{ __('messages.hstitle') }}">HS</b> <span
                                        class="newfont {{ __('messages.style1') }}">({{ __('messages.Select') }})</span>
                                </legend>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div class="cont">
                    <div class="item1">
                        <div style=" text-align: left !important;" class="">
                            <span class="lab {{ __('messages.subfont') }} ml-3"><b>{{ __('messages.door') }}</b><input
                                    type="checkbox" value="door" class="chk1" name="door" dataName="groupTwo"
                                    data-selectId="hssec">
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
                        <div class="disablehs4">
                            <select multiple id="hs4" name="hs4[]">
                                <option value="0 ">{{ __('messages.all') }}
                                </option>
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
                            <span class="lab enFont ml-3"><b>{{ __('messages.six-digits') }}</b><input type="checkbox"
                                    value="six" class="chk1" dataName="groupTwo" name="hs6" data-selectId="hs6"></span>
                        </div>
                    </div>
                    <div class="item1">
                        <div class="disablehs6">
                            <select multiple id="hs6" name="hs6[]">
                                <option value="0 ">{{ __('messages.all') }}
                                </option>
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
                            <span class="lab enFont ml-3"><b>{{ __('messages.BEC') }}</b> <input type="checkbox"
                                    value="bec" class="chk1" dataName="groupThree" name="bec" data-selectId="bec"
                                    id="cb1"></span>
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
                            <span class="lab enFont ml-3"><b>{{ __('messages.SITC') }}</b> <input type="checkbox"
                                    value="sitc" class="chk1" data-selectId="sitc" name="sitc" dataName="groupThree"
                                    id="cb2"></span>
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
            <button type="submit" class="btn btn-primary" id="filterSubmit">
                {{ __('messages.Filter') }}
            </button>
        </div>
    </div>
</form>

<table id="table_id" class="mdl-data-table mt-1 row-border cell-border compact stripe display" s tyle="width:100%">
</table>
<div class="row">
    <div class="col-12" style="font-size:9px;">
        {{ __('messages.msgtxt1') }}
    </div>
    <div class="col-12" style="font-size:9px;" id="addTxt">
        {{ __('messages.msgtxt6') }}
    </div>
    <div class="col-12" style="font-size:9px;">
        {{ __('messages.msgtxt2') }}
    </div>
    <div class="col-5" style="font-size:9px;">
        {{ __('messages.msgtxt3') }}
    </div>
    <div class="col-12" style="font-size:10px;">
        {{ __('messages.msgtxt4') }}
    </div>
    <div class="col-12" style="font-size:10px;" id="marker">
        {{ __('messages.msgtxt5') }}
    </div>
</div>
</div>

@stop
