define([
	'angular',
	'./_module'
], function(ng, module) {
	'use strict';

	/**
	 * @name seccubus.controller:Groups
	 * @description
	 * # GroupsCtrl
	 * Controller of seccubus groups
	 */
	module.controller('GroupsCtrl', [
		'$scope',
		'$state',
		'Groups',
		function($scope, $state, Groups) {
			$scope.page.name = 'Manage Groups';

			$scope.groups = Groups.query();
		}
	]);
});