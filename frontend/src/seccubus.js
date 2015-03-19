// All the Angular packages that we use in our app
import angular from 'angular';

import 'angular-ui-router';
import 'angular-aria';
import 'angular-animate';
import 'angular-resource';
import 'angular-material';

import 'luxyflux/ng-luxyflux';

// Helper methods that configure the App module's ui-router with our app routes
import routes from './config/routes';

// Application root components
import NavBarComponent from './components/nav-bar/nav-bar';
import NavMenuComponent from './components/nav-menu/nav-menu';
import StatusPageComponent from './components/status-page/status-page';
/* MARKER: insert components import here */

// Application Flux stores
import StatusStore from './stores/status-store'
import WorkspaceStore from './stores/workspace-store'
    /* MARKER: insert stores import here */

// Application Flux ActionCreators
import AppActions from './actions/app-actions';
import StatusActions from './actions/status-actions';
/* MARKER: insert actions import here */

// This is the angular module that contains all the defined services
import resourcesModule from './resources/_module';

import Annotations from 'anglue/annotations';

class Application {
    static get annotation() {
        return Annotations.getApplication('seccubus', Application);
    }

    static get dependencies() {
        return [
            'ngMaterial',
            resourcesModule.name
        ];
    }

    static get routes() {
        return routes;
    }

    static get components() {
        return [
            NavBarComponent,
            NavMenuComponent,
            StatusPageComponent
            /* MARKER: insert components here */
        ];
    }

    static get stores() {
        return [
            StatusStore,
            WorkspaceStore
            /* MARKER: insert stores here */
        ];
    }

    static get actions() {
        return [
            AppActions,
            StatusActions
            /* MARKER: insert actions here */
        ];
    }
}

var appModule = Application.annotation.module;

appModule.config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
        .iconSet('navigation', `icons/navigation-icons.svg`);
}]);

angular.element(document).ready(() => {
    angular.bootstrap(document.body, [
        appModule.name
    ], {
        strictDi: true
    });
});
