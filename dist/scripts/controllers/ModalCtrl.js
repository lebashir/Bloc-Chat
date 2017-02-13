(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        
        
        
        this.cancel = function () {
            $uibModalInstance.dismiss();
        };

        this.ok= function (roomName) {
            Room.add(roomName);
            $uibModalInstance.close();
        };
        
        this.createUserName = function (newUser) {
            $cookies.put('currentUser', newUser);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();