angular.module('starter.services', ['ngResource'])

.factory('Session', function ($resource) {
    return $resource('http://45.55.200.73:5000/sessions/:sessionId');
});
