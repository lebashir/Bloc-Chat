(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
                size: 'sm'
            });
        }
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room',HomeCtrl])
})();