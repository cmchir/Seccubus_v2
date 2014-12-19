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
	module.controller('MainCtrl', [
		'$scope',
		'$rootScope',
		'$state',
		'Workspaces',
		'Login',
		function($scope, $rootScope, $state, Workspaces, Login) {
			$scope.workspaces = Workspaces.query();
			$scope.state = $state;
			
			$rootScope.page = {
				key: $state.current.name.split('.')[1],
				name: ''
			};

			if (ng.isDefined($state.params.workspace)) {
				$rootScope.activeWorkspace = Workspaces.get($state.params.workspace);
			}
			
			$state.login = Login.get();
		}
	]);
});