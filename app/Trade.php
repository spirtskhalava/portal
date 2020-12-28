<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trade extends Model
{
    protected $table = 'trade_data';

    public function typeName()
    {
        return $this->belongsTo('App\Types', 'flow', 'type_flow');
    }
    public function countries()
    {
        return $this->belongsTo('App\Country','country','country_id' );
    }
    public function hssec_key()
    {
        return $this->belongsTo('App\Hssec', 'hssec','id' );
    }

    public function hs2_m()
    {
        return $this->belongsTo('App\Hs2', 'hs2', 'id');
    }
    public function hs4_key()
    {
        return $this->belongsTo('App\Hs4', 'hs4', 'hs4_id');
    }
    public function hs6_key()
    {
        return $this->belongsTo('App\Hs6', 'hs6', 'hs6_id');
    }

    public function bec1_key()
    {
        return $this->belongsTo('App\BEC', 'bec1', 'id');
    }
    public function sitc1_key()
    {
        return $this->belongsTo('App\SITC', 'sitc1', 'sitc1_id');
    }
    public function transouts()
    {
        return $this->belongsTo('App\Transout', 'transout', 'transout_id');
    }
      public function month_key()
    {
        return $this->belongsTo('App\Month', 'month', 'id');
    }

}