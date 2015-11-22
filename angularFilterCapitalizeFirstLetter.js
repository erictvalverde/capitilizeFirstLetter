'use strict';
angular.module('shared.filters.capitalizeFirst', [])
    .filter('capitalizeFirstFilter',  function() {
        return function(input) {
            return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
        }
    });
