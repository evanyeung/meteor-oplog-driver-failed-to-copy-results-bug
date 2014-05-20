meteor-oplog-driver-failed-to-copy-results-bug
==============================================

Using to try to diagnose this issue https://github.com/meteor/meteor/issues/2033

NOTE: This error message is only the same as given by the @kidovate in the issue report. In publish functions, one should use `this.userId` instead of `Meteor.userId()` as per http://docs.meteor.com/#meteor_userid

NOTE 2: The branch alprestedge-bug tries to reproduce the error reported by @alprestedge but I do not produce an error with the current code

1. git clone https://github.com/evanyeung/meteor-oplog-driver-failed-to-copy-results-bug.git
2. cd meteor-oplog-driver-failed-to-copy-results-bug
3. meteor add accounts-base
4. meteor add accounts-ui
5. meteor add accounts-password
6. meteor
7. Open a browser and navigate to localhost:3000
8. Create a new user and sign in

This should produce the error message
