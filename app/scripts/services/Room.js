(function(){
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var room = $firebaseArray(ref);
        
        return {
            all:rooms
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room])
})