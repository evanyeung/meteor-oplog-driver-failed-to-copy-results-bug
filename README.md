meteor-oplog-driver-failed-to-copy-results-bug
==============================================

Using to try to diagnose this issue https://github.com/meteor/meteor/issues/2033

To run:
git clone https://github.com/evanyeung/meteor-oplog-driver-failed-to-copy-results-bug.git
cd meteor-oplog-driver-failed-to-copy-results-bug
meteor add accounts-base
meteor add accounts-ui
meteor add accounts-password
meteor

Open a browser and navigate to localhost:3000
Create a new user and sign in
This should produce the error message
