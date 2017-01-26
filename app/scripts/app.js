(function(){
    function config($stateProvider, $locationProvider) {
        
        $locationProvicer
            .html5mode({
                enabled: true,
                requireBase: false
            
        });
       
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
        });
            
        
    }
    angular
        .module( 'blocChat', ['ui-router', 'firebase'])
        
})();