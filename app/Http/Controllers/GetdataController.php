<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Hs2;

use App\Hs6;
use App;

use App\Models\Trade;
use App\Models\Country;
use App\Models\Hs4;

use DB;

class GetdataController extends Controller
{
    public function getCountryByCode(Request $request){
        $inputLang='name_'.$request->lang;
        $code= $request->code;
        $str='';
        $namew='';
        $namec='';
        if($request->lang=='ka'){
           $namew='მსოფლიო, სულ';
           $namec='ყველა ქვეყანა';
        }else{
            $namew='World, total';
            $namec='All countries';
        }
         $str.='<option value="world" data-badge="" id="world">'.$namec.'</option>';
          foreach($code as $singleCode){
            $user = Country::where($singleCode, '=', 1)->get();
             foreach($user as $single){
          $str.='<option value='.$single->country_id.'>'.$single->{$inputLang}.'</option>';
         }
          }


    return response()->json(['status'=>'ok', 'html'=>$str]);
    }

    public function getAllCountry(Request $request){
        $inputLang='name_'.$request->lang;
        $code= $request->code;
        $str='';
        $namew='';
        $namec='';
        if($request->lang=='ka'){
           $namew='მსოფლიო, სულ';
           $namec='მთელი ქვეყანა';
        }else{
            $namew='World, total';
            $namec='All countries';
        }
        if(empty($code)){
            $country = Country::orderBy('country_id')->get();
            $str.='<option value="all" data-badge="" id="all">'.$namew.'</option>';
         $str.='<option value="world" data-badge="" id="world">'.$namec.'</option>';
         foreach($country as $single){
          $str.='<option value='.$single->country_id.'>'.$single->{$inputLang}.'</option>';
         }
        }else{
             $str.='<option value="world" data-badge="" id="world">'.$namec.'</option>';
          foreach($code as $singleCode){
            $user = Country::where($singleCode, '=', 1)->get();
             foreach($user as $single){
          $str.='<option value='.$single->country_id.'>'.$single->{$inputLang}.'</option>';
         }

        }
    }
    return response()->json(['status'=>'ok', 'html'=>$str]);
    }

    public function getDataHs2(Request $request){
        $inputLang='name_'.$request->lang;
        $hs2=Hs2::all();
        $str='';
        foreach($hs2 as $single){
         $str.='<option value='.$single->id.'>'.$single->{$inputLang}.'</option>';
        }
    return response()->json(['status'=>'ok', 'html'=>$str]);
    }

    public function getDataHs4(Request $request){
         $tableName= 'App\\'.$request->tableName;
         $inputLang='name_'.$request->lang;
         $inputColmn= $request->colmName;

         $hs4=$tableName::query()->where($inputLang, 'LIKE', "%{$request->val}%") ->get();
         $str='';
         if($hs4){
             foreach($hs4 as $single){
                  $str.='<option value='.$single->{$inputColmn}.'>'.$single->{$inputLang}.'</option>';
           }
              return response()->json(['status'=>'ok', 'html'=>$str]);
         }else{
              return response()->json(['status'=>'ok', 'html'=>'null','lang'=>$this->lang]);
         }
    }


    public function getAllHSData(Request $request){
        $inputLang='name_'.$request->lang;
        $keyCode=$request->codes;
        $length=$request->len;
        $strhs2='';
        $strhs4='';
        $strhs6='';

        if(empty($keyCode)){
            $hs2Data=Hs2::all()->take(50);
            $hs4Data=Hs4::all()->take(50);
            $hs6Data=Hs6::all()->take(50);
            foreach($hs2Data as $single){
                $strhs2.='<option value='.$single->id.'>'.$single->{$inputLang}.'</option>';
               }
      
               foreach($hs4Data as $singlehs4){
                  $strhs4.='<option value='.$singlehs4->hs4_id.'>'.$singlehs4->{$inputLang}.'</option>';
                 }
      
                 foreach($hs6Data as $singlehs6){
                  $strhs6.='<option value='.$singlehs6->hs6_id.'>'.$singlehs6->{$inputLang}.'</option>';
                 }
        }else{
        foreach($keyCode as $singleCode){
            $hs2Data=Hs2::where($inputLang, 'LIKE', "{$singleCode}%")->get();
            $hs4Data=Hs4::where($inputLang, 'LIKE', "{$singleCode}%")->get();
            $hs6Data=Hs6::where($inputLang, 'LIKE', "{$singleCode}%")->get();
             foreach($hs2Data as $single){
          $strhs2.='<option value='.$single->id.'>'.$single->{$inputLang}.'</option>';
         }

         foreach($hs4Data as $singlehs4){
            $strhs4.='<option value='.$singlehs4->hs4_id.'>'.$singlehs4->{$inputLang}.'</option>';
           }

           foreach($hs6Data as $singlehs6){
            $strhs6.='<option value='.$singlehs6->hs6_id.'>'.$singlehs6->{$inputLang}.'</option>';
           }
        }
          }
          return response()->json(['status'=>'ok', 'hs2'=>$strhs2,'hs4'=>$strhs4,'hs6'=>$strhs6,'length'=>$length]);
    }
    public function filterHSData(Request $request){
        $inputLang='name_'.$request->lang;
        $keyCode=$request->codes;
        $length=$request->len;
        $strhs2='';
        $strhs4='';
        $strhs6='';
    
         foreach($keyCode as $singleCode){
            $hs2Data=Hs2::where($inputLang, 'LIKE', "{$singleCode}%")->get();
            $hs4Data=Hs4::where($inputLang, 'LIKE', "{$singleCode}%")->get();
            $hs6Data=Hs6::where($inputLang, 'LIKE', "{$singleCode}%")->get();
             foreach($hs2Data as $single){
          $strhs2.='<option value='.$single->id.'>'.$single->{$inputLang}.'</option>';
         }

         foreach($hs4Data as $singlehs4){
            $strhs4.='<option value='.$singlehs4->hs4_id.'>'.$singlehs4->{$inputLang}.'</option>';
           }

           foreach($hs6Data as $singlehs6){
            $strhs6.='<option value='.$singlehs6->hs6_id.'>'.$singlehs6->{$inputLang}.'</option>';
           }

          }
          return response()->json(['status'=>'ok', 'hs2'=>$strhs2,'hs4'=>$strhs4,'hs6'=>$strhs6,'length'=>$length]);

    }

    public function reData(Request $request){

    	DB::enableQueryLog();


    	$map = (new Country)->query();
    	$lang = $request->lang;

        $filter = $request->except(['country', 'lang', 'country_group']);

     
        $callback = function($q) use ($filter) {
            $q->with(['hs4' => function($q){}])
                ->select(['country', DB::raw('sum(usd1000) as cost')])
                ->from(DB::raw('trade_data FORCE INDEX (t_c_c_c_f)'))
                ->groupBy('country')
                ->havingRaw('count(*) > 0 and sum(usd1000) > 0');
                foreach ($filter as $key => $value) {
    			    if(is_array($value)){
    				    $q->where(function($nq) use($key, $value) {
    				    	foreach ($value as $nKey => $nValue) {
                                $nq->orWhere($key, $nValue);
    					    }
    				    });

    			    }else{
                         $q->where($key, $value);
                         
    			 	}
                }
            
               
        
                
        };

       
    
        //config()->set('database.connections.mysql.strict', false);

        $map->when($request->has('country'), function($query) use($request) {

        	$countries = $request->country;
        	$query->where(function($nq) use($countries) {
    			foreach ($countries as $nKey => $nValue) {
    				$nq->orWhere('country_id', $nValue);
    			}

    		});

        });

        

    
        $country_group = $request->country_group;

       
    	$pp =  $map->with(['alpha', 'mapDatas' => $callback])->whereHas("mapDatas", function($q)use($filter,$country_group) {
            $q->select(DB::raw('1'));
           
            if ($country_group) {

                $q->whereHas('CountryGroup', function ($q) use ($country_group) {

                    $q->select(DB::raw('1'))->where(function ($query) use ($country_group) {

                        foreach ($country_group as $nesKey => $nesvalue) {
                            $query->orWhere($nesvalue, 1);
                        }
                       
                    });
                });
            }
            
    		foreach ($filter as $key => $value) {

    			if(is_array($value)){

                    if (count($value) > 1) {

    				$q->where(function($nq) use($key, $value) {
    					foreach ($value as $nKey => $nValue) {
                            $nq->orWhere($key, $nValue);
                         
    					}
                    });
                    

                }else{
                        $q->where($key, $value);
                        
                    }

    			}else{
                    $q->where($key, $value);
                   
                }
                

               
            }
          
            
    	})->get()->reduce(function ($carry, $item) use($lang){

            
            
    		$localArr = [];
    		$localArr['id'] =  $item->alpha->alpha2;

    		$splited = 'name_'.$lang;

    		$localArr['countryName'] = preg_replace("/^[0-9]+/", "", $item->{$splited});
    		$localArr['value'] =   $item->mapDatas->first(function($key, $item) {
    			//echo $item;
    			return $item === 0 ;
    		})['cost'];
    		$carry[] = $localArr;
    		return $carry;
        }, []);
       
       
        
       
       
        
    
    	return response()->json(['data' => $pp, "request" => $request->all(), 'sql' => DB::getQueryLog()]);

    }

    public function selectsData(Request $request){

    	$tableName =  $request->tableName;
    	$columnName =  $request->columnName;
    	$lang = $request->lang;

    	$className = 'App\\Models\\' . studly_case(str_singular($tableName));
    	if(class_exists($className)) {
    		$model = new $className;
    	}

        //CountryGroup
        $select = ($tableName  == false) ? 'name' :  'name_'.$lang.','.$columnName ;
        $pluckKey =  ($tableName  == false) ?  'name' : 'name_'.$lang;
        $pluckValue =  ($tableName  == false) ?  'name' : $columnName;

        $pp = $model->select(DB::raw($select))->get()->pluck($pluckKey, $pluckValue);
    	return response()->json(['data' => $pp, "request" => $request->all() ]);
    }


    public function lastTrade(){

        $data = Trade::select('year', 'month')->latest('id')->first();

        return response()->json(['data' => $data]);
    }
}