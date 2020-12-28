<?php

namespace App;

use App\I18n\LocalizableModel;

class Lang extends LocalizableModel
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name_en', 'name_ka','unit_ka','unit_en'
    ];

    /**
     * Localized attributes.
     *
     * @var array
     */
    protected $localizable = [
        'name',
    ];

}