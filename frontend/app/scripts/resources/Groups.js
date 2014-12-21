define([
    './_module'
], function (module) {
    'use strict';
    return module.factory('Groups', [
        '$resource',
        'Collection',
        function ($resource, Collection) {
        	return Collection('Groups', $resource('/json/getGroups.pl'));
        }
    ]);
});

