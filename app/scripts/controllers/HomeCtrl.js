(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        this.open = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
                size: 'sm'
            });
        }
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal' , HomeCtrl])
})();