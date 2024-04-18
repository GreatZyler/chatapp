<?php

use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});


Broadcast::channel("private.playground.{id}",function ($user,$id) {
  return $user;

});

Broadcast::channel("public.sendMessage.{id}",function ($user) {
  return $user;
});

Broadcast::channel("presence.user.{id}",function ($user) {
  return $user;
});

Broadcast::channel("self.user.{id}",function ($user) {
  return $user;
});
