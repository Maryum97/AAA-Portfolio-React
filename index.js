const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(function (req, res) {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });

app.post('/api/forma', (req, res) => {
    let data = req.body;
    let smtpTransport = nodemailer.createTransport({
        // service: 'Gmail',
        // Asad's email, host, pass, on sendinblue
        host: "smtp-relay.sendinblue.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: data.email, // data.email
        to: `maryum@mayfairitconsultancy.com`,
        subject: `Message from ${data.name}`,
        html: `
        
        <h3>Information</h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
            </ul>

            <h4>Message:</h4>
            <p>${data.message}</p>

        `
    }

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            response.send(error);
            console.log(error);
        }

        else {
            response.send('Success!');
        }
    })

    smtpTransport.close();

});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});