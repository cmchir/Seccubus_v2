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
	module.controller('StatusCtrl', [
		'$scope',
		'$state',
		'Version',
		'ConfigTests',
		'Login',
		function($scope, $state, Version, ConfigTests, Login) {
			$scope.page.name = 'Status';

			$scope.versionTest = Version.get();
			$scope.configTests = ConfigTests.query();
			$scope.login = Login.get();
			$state.login = $scope.login;
		}
	]);
});