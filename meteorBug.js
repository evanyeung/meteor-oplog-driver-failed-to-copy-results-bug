if (Meteor.isClient) {
  Deps.autorun(function(){
    Meteor.subscribe('userData');
  });
}

if (Meteor.isServer) {
  Meteor.publish('userData', function(){
    return Meteor.users.find({_id: Meteor.userId}, {fields: {extraField: 1}});
  });

  Accounts.onCreateUser(function(options, user){
    user.extraField = 'a';
    return user;
  });
}
