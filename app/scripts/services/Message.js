/*This factory needs to search firebase for messages in this rooms id
    put it into a variable for the controller to access.
    add a function to add a message to firebase
*/
(function(){
    function Message($firebaseArray, $filter, $cookies){
        
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
         
        return {
            
            getMessagesFor: function(id){
                return $firebaseArray(ref.orderByChild('roomId').equalTo(id));
            },
            send: function(newMessage, roomId) {
                var currentDate = new Date();
                messages.$add({
                    content: newMessage,
                    sentAt: $filter('date')(currentDate, 'medium'),
                    roomId: roomId,
                    username: $cookies.get('currentUser')
                    
                })
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$filter', '$cookies', Message])
})();