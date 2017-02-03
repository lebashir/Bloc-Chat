(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        this.rooms = Room.all;
        this.room = null;
        this.messages = null;
        this.open = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
                size: 'sm'
            });
        }
        this.setRoom = function(room){
            this.room = room;
            this.messages = Message.getMessagesFor(room.$id)
            console.log(this.messages);
        }
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal' , 'Message', HomeCtrl])
})();