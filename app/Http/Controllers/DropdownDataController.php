<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Types;
use App\Hssec;
use App\Hs2;
use App\Hs4;
use App\Hs6;
use App\Country;
use App\CountryGroup;
use App\CountryGrp;
use App\BEC;
use App\SITC;
use DB;
use App;
class DropdownDataController extends Controller
{
    public function getdata(){

$types = Types::all();
$country = Country::orderBy('country_id')->get();
$transout = CountryGroup::all();
$bec = BEC::all();
$sitc = SITC::all();
$countrygrp = CountryGrp::all();
$hssecdatas = Hssec::all();
$hs2data = Hs2::all();
$hs4data = Hs4::all()->take(50);
$hs6data = Hs6::all()->take(50);
   return view('index')->with('types',$types)->with('hssecdatas',$hssecdatas)->with('country',$country)->with('transout',$transout)->with('bec',$bec)->with('sitc',$sitc)->with('hs2data',$hs2data)->with('hs4data',$hs4data)->with('hs6data',$hs6data)->with('grp',$countrygrp);
                     }
}