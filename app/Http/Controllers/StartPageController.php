<?php

namespace App\Http\Controllers;

use App;
use App\Trade;
use DB;
use Illuminate\Http\Request;
use Response;

class StartPageController extends Controller
{

    public function displayData(Request $request)
    {

        DB::connection()->enableQueryLog();
      //$req = $request->all();

            $sqlstr = '';
            $index = 0;
            $req = $request->only(['flow', 'year', 'quarter', 'month', 'hssec', 'hs2', 'hs4', 'hs6','bec1','sitc1','grp','transout','cost','country','sum','parameters']);
        $str = null;
        $strName = null;
        if ($request->has('cost')) {

            foreach ($request->cost as $key => $valu) {
                if($key!=='sum'){

                    $last = (count($request->cost) !== $key + 1) ? ',' : '';

                    if(in_array('RE', $request->flow) &&
                      in_array('DE', $request->flow) && in_array('I', $request->flow) && in_array('BA', $request->flow)  ){

                        $str.="ROUND(SUM(CASE WHEN flow in('I') then -".$valu." else ".$valu. " end)) as " . $valu . 'total'. $last;


                    }else{

                        $str .= ' ROUND(sum(' . $valu . '),2) as ' . $valu . 'total  ' . $last;

                    }

                }
            }
            if($request->has('sum')){
              $str.=',GROUP_CONCAT(DISTINCT(month) order by month SEPARATOR ",")  as month, GROUP_CONCAT(DISTINCT(quarter) order by quarter SEPARATOR ",")  as quarter';
            }

            if(!in_array('I', $request->flow)){


                //$str.=',GROUP_CONCAT(DISTINCT(flow) SEPARATOR ",")  as flow';
            }
        }


        //   if ($request->has('sum')) {
        //  $last = ($key == 0 && count($request->cost) !== $key + 1) ? ',' : '';
        //         $strMonth .= ' Round(concat(' . $valu . '),1) as ' . $valu . 'total  ' . $last;
        //   }
        $default = true;

        $inputLang = 'name_' . $request->lang;
        $inputUnit = 'unit_' . $request->lang;

        $filter = Trade::select(
           DB::raw('*'),
            DB::raw($str)

        )->with(['typeName:name_ka,name_en,type_flow','hs2_m', 'hssec_key', 'hs4_key', 'hs6_key', 'bec1_key', 'sitc1_key', 'transouts', 'countries'=>function($q) use($request){ },'month_key']);
//, 'hs2_m', 'hssec_key', 'hs4_key', 'hs6_key', 'bec1_key', 'sitc1_key', 'transouts', 'countries','month_key'

        foreach ($req as $key => $value) {
            if ($key !== 'grp' && $key !== 'cost' && $key !== 'sum' && $key !== 'parameters') {
                if (is_string($value) && $value) {
                    $filter->where($key, $value);
                } elseif($key=='quarter'){
                    $filter->where(function ($query) use ($value, $key) {
                        foreach ($value as $nesKey => $nesvalue ) {
                            if($nesvalue && $nesvalue!=='world' &&$nesvalue !== 'all' ){
                       
                                $query->orWhere($key, $nesvalue)->whereNotNull($key);
                                
                            }
                        }

                    });
                   
                }
                else{

                    $filter->where(function ($query) use ($value, $key) {
                        foreach ($value as $nesKey => $nesvalue ) {
                            if($nesvalue && $nesvalue!=='world' &&$nesvalue !== 'all' ){
                       
                                  $query->orWhere($key, $nesvalue);
                                 // $query->whereNotNull($key);
                                
                            }
                        }

                    });

                }
            }

        }


        if ($request->has('grp')) {

            $grp = $request->grp;

            $filter
                ->whereHas('countries', function ($q) use ($grp, $filter,$inputLang) {
                    $q->select(DB::raw('*'));
                    $q->where(function ($query) use ($grp) {
                        foreach ($grp as $nesKey => $nesvalue) {
                            $query->orWhere($nesvalue, 1);
                        }

                    });

                });


                //!$request->has('sum') ? $filter->groupBy('country') : false;


        }
        //print_r($req);

        if( ( in_array('I', $request->flow) &&  count($request->flow)  == 1 ) || ( in_array('DE', $request->flow) &&  count($request->flow)  == 1 ) ||  ( in_array('RE', $request->flow) &&  count($request->flow)  == 1 ) ) {
                $filter->groupBy('flow');
        }


        if($request->default =='true'){


            $filter->groupBy('year');


        }else if( $request->has('sum') && $request->country && in_array("all",$request->country) ){


            $filter->groupBy('year');

            $qm = ['hssec', 'hs2', 'hs4', 'hs6', 'bec1', 'sitc1'];

            foreach($qm as $key => $qmVal){

                if($request->{$qmVal}){
                    $filter->groupBy($qmVal);
                }

            }

            if($request->transout){

                $filter->groupBy('transout');

            }

        }else if(!$request->has('sum') && $request->country && in_array("all",$request->country) ){


            $filter->groupBy('year');

            $qm = ['quarter', 'month', 'hssec', 'hs2', 'hs4', 'hs6', 'bec1', 'sitc1'];

            foreach($qm as $key => $qmVal){

                if($request->{$qmVal}){
                    $filter->groupBy($qmVal);
                }

            }

            if($request->transout){

                $filter->groupBy('transout');

            }

        }elseif($request->has('sum') && ($request->country && in_array("world",$request->country))){

            $filter->groupBy('country','year');

            $qm = ['hssec', 'hs2', 'hs4', 'hs6', 'bec1', 'sitc1'];

            foreach($qm as $key => $qmVal){

                if($request->{$qmVal}){
                    $filter->groupBy($qmVal);
                }

            }

            if($request->transout){

                $filter->groupBy('transout');

            }


        }else if(!$request->has('sum') && ($request->country && in_array("world",$request->country))){

            $filter->groupBy('country','year');

            $qm = ['quarter', 'month', 'hssec', 'hs2', 'hs4', 'hs6', 'bec1', 'sitc1'];

            foreach($qm as $key => $qmVal){

                if($request->{$qmVal}){
                    $filter->groupBy($qmVal);
                }

            }

            if($request->transout){

                $filter->groupBy('transout');

            }

        }else if(!$request->has('sum')){

            foreach($req as $key => $val){
                if($key!=='cost' && $key!=='sumval' && $key !== 'grp' && $key !== 'parameters' && $key!=='sum' && $key !== 'flow'){

                    if($request->grp && $key == 'country'){
                        continue;
                    }else{
                        $filter->groupBy($key);
                    }


                }
            }

        }else if($request->has('parameters')){
            foreach($request->parameter as $key => $pmVal){

                $filter->groupBy($pmVal);

            }
        }else{


            foreach($req as $key => $val){
                if($key!=='cost' && $key!=='sumval' && $key !== 'grp' && $key !== 'parameters' && $key !== 'flow' && $key!=='sum' && $key!=='month' && $key!=='quarter'){
                 $filter->groupBy($key);

               }
            }


        }






        $sum = 0;
        
        $data = $filter->get()->map(function ($trade) use ($inputLang,$inputUnit, $request) {

             if ($request->has('country')) {

                foreach($request->country as $ckey => $cval){
                    if(in_array("world",$request->country)){
                         $splitQ=explode(',',$trade['quarter']);
                    $trade['quarter']='';
                    foreach($splitQ as $splitIndex => $splitQV){

                        $separator = '';

                        if($splitIndex+1 !== count($splitQ) ){
                            if($request->lang == 'ka'){
                                $separator = 'კვ,';
                            }else{
                                $separator = 'Q,';
                            }
                        }else{

                            if($request->lang == 'ka'){
                                $separator = 'კვ';
                            }else{
                                $separator = 'Q';
                            }

                        }

                        $trade['quarter'] .= $splitQV .$separator;
                    }

                        $trade['sitc1'] = $trade['sitc1_key'] ? $trade['sitc1_key']->{$inputLang} : '';
                        //$trade['transout'] = $trade['transouts']->{$inputLang};
                          $trade['transout'] = $trade['transouts'] ? $trade['transouts']->{$inputLang} : '';
                        $trade['bec1'] = $trade['bec1_key']->{$inputLang};
                        $trade['hssec'] = $trade['hssec_key']->{$inputLang};
                         $trade['hs2'] = $trade['hs2_m']->{$inputLang};
            $trade['hs4'] = $trade['hs4_key']->{$inputLang};
            $trade['hs6'] = $trade['hs6_key']->{$inputLang};
            $trade['flow'] = $trade['typeName']->{$inputLang};
            $trade['country'] ? $trade['country'] = $trade['countries']->{$inputLang} : '';


             if(in_array('RE', $request->flow) &&
                   in_array('DE', $request->flow) && in_array('I', $request->flow) && in_array('BA', $request->flow) ){

                    $trade['flow'] = $request->lang == 'ka' ? 'სალდო' : 'Balance';

                }
                else if(in_array('RE', $request->flow) &&
                   in_array('DE', $request->flow) && in_array('I', $request->flow)){

                    $trade['flow'] = $request->lang == 'ka' ? 'ბრუნვა' : 'Trade Turnover';

                }
                else if(in_array('RE', $request->flow) &&
                   in_array('DE', $request->flow)){

                    $trade['flow'] = $request->lang == 'ka' ? 'ექსპორტი' : 'Export';

                }else{

                    $trade['flow'] = $trade['typeName']->{$inputLang};
                }

            // if($request->default=='true' || $request->sum){
            //     if($request->lang=='ka'){
            //             $trade['country']='მსოფლიო, სულ';
            //             }else{
            //         $trade['country']='World, total';
            //             }
            //         }

            if($trade['month'] && $request->has('sum')){
                $split=explode(',',$trade['month']);
                $trade['month']='';
                foreach($split as $index => $month){
                    $monthName=DB::table('month')->where('id', $month)->first();
                    $separator = $index ==0 ? '' : ',';
                     $trade['month'] =$trade['month'] .$separator.$monthName->{$inputLang};
                //  if($index==0 || $index+1==count($split)){
                // $separator = $index ==0 ? '' : ',';
                //    $monthName=DB::table('month')->where('id', $month)->first();
                //    $trade['month'] =$trade['month'] .$separator.$monthName->{$inputLang};
                //    }
                }




           }else{
               $trade['month'] = $trade['month_key']->{$inputLang};
           }
            return $trade;
                    }else{

                    }

                }
                }

            $trade['hssec'] = $trade['hssec_key']->{$inputLang};
             $trade['hs2'] = $trade['hs2_m']->{$inputLang};
            $trade['hs4'] = $trade['hs4_key']->{$inputLang};
            $trade['hs6'] = $trade['hs6_key']->{$inputLang};
            $trade['bec1'] = $trade['bec1_key']->{$inputLang};
            $trade['sitc1'] = $trade['sitc1_key'] ? $trade['sitc1_key']->{$inputLang} : '';
            $trade['unit'] = $trade['hs4_key']->{$inputUnit};
                if(in_array('RE', $request->flow) &&
                   in_array('DE', $request->flow) && in_array('I', $request->flow) && in_array('BA', $request->flow) ){

                    $trade['flow'] = $request->lang == 'ka' ? 'სალდო' : 'Balance';

                }
                else if(in_array('RE', $request->flow) &&
                   in_array('DE', $request->flow) && in_array('I', $request->flow)){

                    $trade['flow'] = $request->lang == 'ka' ? 'ბრუნვა' : 'Trade Turnover';

                }
                else if(in_array('RE', $request->flow) &&
                   in_array('DE', $request->flow)){

                    $trade['flow'] = $request->lang == 'ka' ? 'ექსპორტი' : 'Export';

                }else{

                    $trade['flow'] = $trade['typeName']->{$inputLang};
                }




            $trade['transout'] ? $trade['transout'] = $trade['transouts']->{$inputLang} : '';
            $trade['country'] ? $trade['country'] = $trade['countries']->{$inputLang} : '';
             if($request->country && in_array("all",$request->country)){
                if($request->lang=='ka'){
                        $trade['country']='მსოფლიო, სულ';
                        }else{
                    $trade['country']='World, total';
                        }
                    }
            if($trade['month'] && $request->has('sum')){
                $split=explode(',',$trade['month']);
                $trade['month']='';
                foreach($split as $index => $month){
                    $monthName=DB::table('month')->where('id', $month)->first();
                    $separator = $index ==0 ? '' : ',';
                     $trade['month'] =$trade['month'] .$separator.$monthName->{$inputLang};
                //  if($index==0 || $index+1==count($split)){
                // $separator = $index ==0 ? '' : ',';
                //    $monthName=DB::table('month')->where('id', $month)->first();
                //    $trade['month'] =$trade['month'] .$separator.$monthName->{$inputLang};
                //    }
                }


           }else{
               $trade['month'] = $trade['month_key']->{$inputLang};
           }


            if($trade['quarter'] && $request->has('sum')){

                    $splitQ=explode(',',$trade['quarter']);
                    $trade['quarter']='';
                    foreach($splitQ as $splitIndex => $splitQV){

                        $separator = '';

                        if($splitIndex+1 !== count($splitQ) ){
                            if($request->lang == 'ka'){
                                $separator = 'კვ,';
                            }else{
                                $separator = 'Q,';
                            }
                        }else{

                            if($request->lang == 'ka'){
                                $separator = 'კვ';
                            }else{
                                $separator = 'Q';
                            }

                        }

                        $trade['quarter'] .= $splitQV .$separator;
                    }

            }

            if($trade['quarter'] && !$request->has('sum')){

                    $splitQ=explode(',',$trade['quarter']);
                    $trade['quarter']='';
                    foreach($splitQ as $splitIndex => $splitQV){

                        $separator = '';

                        if($splitIndex+1 !== count($splitQ) ){
                            if($request->lang == 'ka'){
                                $separator = 'კვ,';
                            }else{
                                $separator = 'Q,';
                            }
                        }else{

                            if($request->lang == 'ka'){
                                $separator = 'კვ';
                            }else{
                                $separator = 'Q';
                            }

                        }

                        $trade['quarter'] .= $splitQV .$separator;
                    }

            }

            if($request->grp){

                $trade['grp'] = $request->grp;
                $trade['country'] =  $trade['countries']->{$inputLang};

            }

            return $trade;
            });

             $myarr=[];
            if ($request->has('cost')) {

            foreach ($request->cost as $key => $valu) {
                $last = ($key == 0 && count($request->cost) !== $key + 1) ? ',' : '';
                $strName =$valu.'total';
                array_push($myarr, $data->sum($strName));
            }
        }

            $sum = $data->sum($strName);

            $data->toArray();



        //  echo '<pre>';
        //  print_r(DB::getQueryLog());
        //  print_r($data);
        //  echo '</pre>';
        //  exit;
        if ($data) {
            return response()->json(['status' => 'ok', 'data' => $data,'log'=> DB::getQueryLog(),'request'=>$request->all(),'sum'=> $myarr]);
        } else {
            return response()->json(['status' => 'ok', 'data' => null]);
        }

    }}