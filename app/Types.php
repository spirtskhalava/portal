<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Types extends Model
{
   protected $table = 'types';

       public function trade()
    {
        return $this->belongsTo('App\Trade','type_flow', 'types');
    }
}
