<?php

namespace App\Http\Middleware;

use App;
use Closure;

class RedirectToLocalized
{

    protected $excluded = [
        'elfinder*',
        '_debugbar*',
    ];

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        $local = $request->segment(1);
        if (in_array($local, array_pluck(config('app.locales'), 'code'))) {
            App::setLocale($local);
        } else {
            $_path = $request->path();

            foreach ($this->excluded as $path) {
                if (str_is($path, $_path)) {
                    return $next($request);
                }
            }

            return redirect('/ka/' . $request->path());
        }

        return $next($request);
    }
}
