(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        
        
        
        this.cancel = function () {
            $uibModalInstance.dismiss();
        };

        this.ok = function (roomName) {
            Room.add(roomName);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();