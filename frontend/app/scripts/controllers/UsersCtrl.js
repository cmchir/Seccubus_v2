define([
	'angular',
	'./_module'
], function(ng, module) {
	'use strict';

	/**
	 * @name seccubus.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of seccubus
	 */
	module.controller('UsersCtrl', [
		'$scope',
		'$state',
		function($scope, $state) {
			$scope.page.name = 'Manage Users';
		}
	]);
});