<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/getDataHs2', 'GetdataController@getDataHs2');
Route::get('/getDataHs4', 'GetdataController@getDataHs4');
Route::get('/displayTable', 'StartPageController@displayData')->name('displayTable');
Route::get('/getCountry', 'GetdataController@getCountryByCode');
Route::get('/getAllCountry', 'GetdataController@getAllCountry');
Route::get('/filterHSData', 'GetdataController@filterHSData');
Route::get('/getAllHSData', 'GetdataController@getAllHSData');



//Map

Route::get("/mapData", "GetdataController@reData");
Route::get("/selectsData", "GetdataController@selectsData");
Route::get("/lastTrade", "GetdataController@lastTrade");