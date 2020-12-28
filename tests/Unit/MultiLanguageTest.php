<?php
namespace Tests\Unit;
use App\Lang;
use Illuminate\Support\Facades\App;
use Tests\TestCase;
class MultiLanguageTest extends TestCase
{
    /**
     * Test MutliLanguage Trait.
     *
     * @return void
     */
    public function testMultiLanguageAttribute()
    {
        $lang = new Lang;
        $lang->fill(['name_ka' => 'სათაური', 'name_en' => 'title']);
        App::setLocale('ka');
        $this->assertEquals($category->name, 'სათაური');
App::setLocale('en');
        $this->assertEquals($category->name, 'title');
    }
}