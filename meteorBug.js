Organizations = new Meteor.Collection('organizations');

if (Meteor.isClient) {
  Deps.autorun(function(){
    Meteor.subscribe('userData');
  });
}

if (Meteor.isServer) {
  Meteor.startup(function(){
    Meteor.publish('Organizations', function(){
      Organizations.find({$or: [{ 'ownerId': this.userId }, { 'users.userId': { $in: [this.userId] } }]});
    });
  });
}
