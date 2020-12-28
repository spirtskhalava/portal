const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js/app.js')
    .js('resources/js/vendor.js', 'public/js/vendor.js')
    .sass('resources/sass/app.scss', 'public/css/app.css')
    .sass('resources/sass/vendor.scss', 'public/css/vendor.css').version();