import moment from 'moment';

Template.Users.onCreated(function () {
   this.autorun(()=>{
     this.subscribe('allUsers');
   });
});

Template.Users.helpers({
   users:function () {
       return Meteor.users.find();
   },
   userEmail: function () {
       return this.emails[0].address;
   },
    isAdmin: function () {
        return Roles.userIsInRole(this._id,'admin') ? 'admin' : '';
    },
    dateFormat: function () {
        return moment(this.createdAt).format(' YYYY MMMM D');
    }
});
Template.Users.events({
   'click .user_id': function () {
       console.log(this);
       Session.set('currentUser',this);
   }
});