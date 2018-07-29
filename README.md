# Firstview UI Developers Test
Basic test for UI Devs.

# Usage
- Download or Fork the repo.
- Run an `npm install`.
- Serve up the app by running `node app.js` inside the root directory it will be running here - `http://localhost:3000/`.

# Stack
Developed with the following:
- Node js
- Bootstrap V4
- Nodemailer
- Express
- Body Parser

The form is functional, but it requires smpt settings in order to function - for now i have left those settings as generic and will need to be replaced.

# NB!!
- The SMTP details are required in order for this app to function.
- The following setting in the nodemailer.createTransport function `tls` is a security concern and is only used here for testing purposes.
- For Production please make use of the nodemailer docs for more details - https://nodemailer.com
