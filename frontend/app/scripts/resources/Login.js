define([
    './_module'
], function (module) {
    'use strict';
    return module.factory('Login', [
        '$resource',
        'Collection',
        function ($resource, Collection) {
            return Collection(
                'Login', 
                $resource(
                    '/json/getLogin.pl', 
                    {}, 
                    { get: { method: "GET", isArray: false } }
                )
        	);
        }
    ]);
});

