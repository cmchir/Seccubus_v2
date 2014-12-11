define([
    'angular',
    'requirejs-domready',
    'angular-animate',
    'angular-cookies',
    'angular-resource',
    'angular-route',
    'angular-ui-router',

    // Require all the application classes
    './resources/_all',
    './controllers/_all',

    'connect-material/sidenav/sidenav',
    'connect-material/select/select'
], function(ng, domReady) {
    'use strict';

    /**
     * @ngdoc overview
     * @name seccubus
     * @description
     * # seccubus
     *
     * Main module of the application.
     */
    ng.module('seccubus', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',        
        'ui.router',
        'seccubus.resources',
        'seccubus.controllers',
        'connectMaterialDirectives'
    ])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/status/');

            $stateProvider
            .state('seccubus', {
                url: '/?workspace',
                templateUrl: '/views/main.html',
                controller: 'MainCtrl'
            })
            .state('seccubus.status', {
                url: 'status/',
                templateUrl: '/views/status.html',
                controller: 'StatusCtrl'
            })
            .state('seccubus.runs', {
                url: 'runs/',
                templateUrl: '/views/runs.html',
                controller: 'RunsCtrl'
            })
            .state('seccubus.findings', {
                url: 'findings/',
                templateUrl: '/views/findings.html',
                controller: 'FindingsCtrl'
            })
            .state('seccubus.workspaces', {
                url: 'workspaces/',
                templateUrl: '/views/workspaces.html',
                controller: 'WorkspacesCtrl'
            })
            .state('seccubus.scans', {
                url: 'scans/',
                templateUrl: '/views/scans.html',
                controller: 'ScansCtrl'
            });
        }
    ]);

    domReady(function() {
        ng.bootstrap(document, ['seccubus']);
    });
});