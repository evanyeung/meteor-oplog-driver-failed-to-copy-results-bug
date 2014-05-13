if (Meteor.isClient) {
  Deps.autorun(function(){
    Meteor.subscribe('userData');
  });
}

if (Meteor.isServer) {
  Meteor.publish('userData', function(){
    return Meteor.users.find({_id: Meteor.userId});
  });
}
