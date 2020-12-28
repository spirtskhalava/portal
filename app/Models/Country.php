<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;


class Country extends Model //implements HasMedia
{
    //use /*Previewable,*/ HasMediaTrait;

    protected $table = 'country';

    protected $primaryKey = 'id';


    protected $guarded = [];

    protected $booleans = [

    ];

    public $defVariables = [

    ];

    protected $fillable = [

    ];

    protected $localizable = [

    ];

    protected $dates = [
        '',
    ];


    public function mapDatas()
    {
        return $this->hasMany(Trade::class, 'country', 'country_id');
    }


    public function alpha()
    {
        return $this->BelongsTo(Alpha::class, 'country_id', 'countrycode');
    }






}