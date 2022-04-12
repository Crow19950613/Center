<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CenterInfoController extends Controller
{
    public function __invoke()
    {
        return view('center_info.index');
    }
}
