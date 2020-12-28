@extends('layouts.plain')



@section('_content')


<style type="text/css">
body {
  background-image: none !important;
}

.select2-selection__choice span:not(.select2-selection__choice__remove) {
  display: inline-block !important;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.select2-container .select-all {
  position: absolute;
  top: 12px;
  right: 10px;
  width: 20px;
  height: 20px;
  margin: auto;
  display: block;
  background: url('https://png.pngtree.com/svg/20160818/fd3864e68b.svg') no-repeat center;
  background-size: contain;
  cursor: pointer;
  z-index: 999999;
  background-color: #fff;
}

.select2-container .select-all.activeChekbox {
  position: absolute;
  top: 12px;
  right: 10px;
  width: 20px;
  height: 20px;
  margin: auto;
  display: block;
  background: url('https://icon-library.net/images/icon-checkbox/icon-checkbox-27.jpg ') no-repeat center;
  background-size: contain;
  cursor: pointer;
  z-index: 999999;
  background-color: #fff;
}

.select2-results__options {
  font-size: 12px !important;
}

.select2-selection__rendered {
  line-height: 12px !important;
  font-size: 12px;
}

.select2-selection {
  height: 24px !important;
}

.select2-selection__choice {
  height: 24px !important;
  min-height: auto !important;
  margin: 3px 1px 1px 1px !important;
}

.tail-select {
  width: 100%;
}


.form-group {
  margin-bottom: 20px;

}

label {
  margin-bottom: 0.2rem !important;
  font-family: "bpgArial" !important;
  font-weight: bold;
}
</style>


<div class="row home-id-1 mt-2">

  <div style="" class="col-xl-10  col-lg-12  col-md-12 col-12 order-xl-1 order-lg-2 order-md-2 order-2">
    <div class="d-flex justify-content-left mb-1">
      <div id="title" class="center" style="font-weight: bold; font-size: 0.8rem; line-height: 20px;"></div>
    </div>
    <div id="titleSum" class="center" style="font-weight: bold; font-size: 0.8rem;"></div>
    <div id="chartdiv" style="height: 800px; ">
    </div>
  </div>

  <div class="col-xl-2  col-lg-12  col-md-12 col-12 order-xl-2 order-lg-1 order-md-1 order-1 "
    style=" /*border-bottom: 1px solid #ccc;*/">

    <form id="national_income" class="form-cont">

      <div class="row">


        <div class="form-group col-xl-12 col-sm-6">

          <label for="angarishebi">@lang('main.type')</label>

          <div class="multiple-selector" style="width: 100%; max-width: initial;">
            <select id="flow" name="flow" params='{"multiple": false}'>
              <option value="0">@lang('main.select')</option>
              <option value="E">@lang('main.e')</option>
              <option value="I">@lang('main.i')</option>
              <option value="DE">@lang('main.de')</option>
              <option value="RE">@lang('main.re')</option>
            </select>
          </div>
        </div>

        <div class="form-group col-xl-12 col-sm-6" style="margin-bottom: 0px;">

          <label for="angarishebi">@lang('main.rYear')</label>

          <div class="multiple-selector" style="width: 100%; max-width: initial;">
            <select id="year" name="year" params='{"multiple": false}'>
              <option value="0">@lang('main.select')</option>
              <option value="2020" data-badge="">2020</option>
              <option value="2019" data-badge="">2019</option>
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
            </select>
          </div>
        </div>


        <div class="form-group col-xl-12 col-sm-6" style="margin-bottom: 0px;">

          <label for="angarishebi">@lang('main.quarter')</label>

          <div class="multiple-selector" style="width: 100%; max-width: initial;">
            <select multiple id="quarter" name="quarter[]"
              params='{"deselect" : true, "multiContainer" : true, "multiShowCount": false,  "multiple": true}'>
              <option value="1">&#8544</option>
              <option value="2">&#8545</option>
              <option value="3">&#8546</option>
              <option value="4">&#8547</option>
            </select>
          </div>
        </div>



        <div class="form-group col-xl-12 col-sm-6">

          <label for="angarishebi">@lang('main.month')</label>

          <div class="multiple-selector" style="width: 100%; max-width: initial;">
            <select multiple id="month" name="month[]"
              params='{"deselect" : true, "multiContainer" : true, "multiShowCount": false, "multiple": true}'>

              @foreach(__('main.months') as $index => $month)
              <option value="{{$index + 1}}">{{$month}}</option>
              @endforeach
            </select>
          </div>
        </div>






        <div class="form-group col-xl-12 col-sm-6" style="margin-bottom: 0px;">
          <label for="angarishebi">@lang('main.country')</label>
          <div class="multiple-selector" style="width: 100%; max-width: initial;">
            <select multiple id="country" name="country[]"
              params='{"search" : true, "multiContainer" : true, "multiPinSelected": true, "deselect" : true, "multiShowCount": false,  "multiple": true}'></select>
          </div>
        </div>



        <div class="form-group col-xl-12 col-sm-6">
          <label for="angarishebi">@lang('main.country_group')</label>
          <div class="multiple-selector" style="width: 100%; max-width: initial;">
            <select multiple id="country_group" name="country_group[]"
              params='{ "deselect" : true, "multiContainer" : true, "multiShowCount": false,  "multiple": true}'></select>
          </div>
        </div>







        <div class="form-group col-xl-12 col-sm-6" style="margin-bottom: 0px;">
          <label for="angarishebi">@lang('main.hs4')</label>
          <div class="multiple-selector" style="width: 100%; max-width: initial;">
            <select multiple id="hs4" name="hs4[]"
              params='{"search" : true, "multiContainer" : true, "multiPinSelected": true, "deselect" : true, "multiShowCount": false,  "multiple": true}'></select>
          </div>
        </div>



        <div class="form-group col-xl-12 col-sm-6">
          <label for="angarishebi">@lang('main.bec1')</label>
          <div class="multiple-selector" style="width: 100%; max-width: initial;">
            <select multiple id="bec1" name="bec1[]"
              params='{"search" : true, "multiContainer" : true, "deselect" : true, "multiShowCount": false,  "multiple": true}'></select>
          </div>
        </div>




      </div>


    </form>



  </div>
</div>





<script type="text/javascript">

</script>


@stop