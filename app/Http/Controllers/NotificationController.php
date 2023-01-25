<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmailJob;
use Illuminate\Http\Request;
use Queue;

class NotificationController extends Controller
{
    function notify() {
        SendEmailJob::dispatch();
        return response([
            'status' => 'success',
            'queue_size' => Queue::size()
        ]);
    }
}
