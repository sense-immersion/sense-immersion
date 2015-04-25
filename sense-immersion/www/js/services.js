angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Bold',
    lastText: 'Bold Innovation Group',
    face: 'http://boldinnovationgroup.net/_assets/img/boldlogo.png',
    pano: 'http://bitspacedevelopment.com/sv/panos/bold?html5=only'
  }, {
    id: 1,
    name: 'City',
    lastText: 'Here is a city',
    face: 'http://bitspacedevelopment.com/wp-content/uploads/2014/05/skyline_downtown.jpg',
    pano: 'http://bitspacedevelopment.com/sv/panos/city?html5=only'
  }, {
    id: 2,
    name: 'Assent Works',
    lastText: 'Come make some shit',
    face: 'http://bitspacedevelopment.com/wp-content/uploads/2015/04/Slide2.jpg',
    pano: 'http://bitspacedevelopment.com/sv/panos/bold?html5=only'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
