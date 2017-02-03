/*This factory needs to search firebase for messages in this rooms id
    put it into a variable for the controller to access.
    add a function to add a message to firebase
*/
(function(){
    function Message($firebaseArray, Room){
        
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', 'Room', Message])
})();