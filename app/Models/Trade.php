<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;


class Trade extends Model //implements HasMedia
{
    //use /*Previewable,*/ HasMediaTrait;

    protected $table = 'trade_data';

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


    public function hs4()
    {
        return $this->BelongsTo(Hs4::class);
    }


    public function CountryGroup()
    {
        return $this->BelongsTo(CountryGroup::class, 'transout');
    }





}