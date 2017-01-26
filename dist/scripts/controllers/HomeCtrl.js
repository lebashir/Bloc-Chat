(function() {
    function HomeCtrl(Room) {
        return Room;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room',HomeCtrl])
})();