(function() {
    'use strict';
    alert("this");
    angular
        .module('ngDemo')
        .config(config);


    function config($locationProvider) {
        alert("location");
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    }
})();