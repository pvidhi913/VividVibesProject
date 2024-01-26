const UserService = require('../service/userService'); // Update the path as necessary

const successMessage = "User created successfully";
const failureMessage = "User creation failure due to ";
const notFoundMessage = "User not found";
const nodemailer = require('nodemailer');

const VIVIDVIBES_GMAIL_USERNAME = process.env.VIVIDVIBES_GMAIL_USERNAME;
const VIVIDVIBES_GMAIL_PASSWORD = process.env.VIVIDVIBES_GMAIL_PASSWORD;

var transporter = nodemailer.createTransport({
    service: "gmail",
    host:   "smtp.gmail.com",
    auth: {
        user: VIVIDVIBES_GMAIL_USERNAME,
        pass: VIVIDVIBES_GMAIL_PASSWORD
    }
});
const UserController = {
    async createUser(req, res) {

        try {
            await UserService.createUser(req.body);
            res.send({ isSuccess: true, data: { message: successMessage } });
        } catch (e) {
            res.send({ isSuccess: false, data: { message: failureMessage, error: e.message } });

        }
    },

    async authenticateUser(req, res) {
        try {
            const { email, password } = req.body;
            const user = await UserService.authenticateUser(email, password);

            if (!user) {
                res.json({ authenticated: false });
            } else {
                res.json({ authenticated: true, user:user });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async editUser(req, res) {
        try {
            const { email } = req.params;

            if (req.body.email) {
                return res.status(400).send({ isSuccess: false, data: { message: "Updating the email is not allowed." } });
            }

            let updatedUser = await UserService.editUser(email, req.body);

            if (!updatedUser) {
                return res.status(404).send({ isSuccess: false, data: { message: notFoundMessage } });
            }

            res.json({ isSuccess: true, data: updatedUser });
        } catch (err) {
            res.status(500).send({ isSuccess: false, error: err.message });
        }
    },

    async deleteUser(req, res) {
        try {
            const { email } = req.params;
            const user = await UserService.deleteUser(email);

            if (!user) {
                return res.status(404).send({ isSuccess: false, data: { message: notFoundMessage } });
            }

            res.send('User deleted.');
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUsers();
            res.json(users);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    async getUserByEmail(req, res) {
        try {
            const { email } = req.params;
            const user = await UserService.getUserByEmail(email);

            if (!user) {
                return res.status(404).send({ isSuccess: false, data: { message: notFoundMessage } });
            }

            res.json(user);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    async sendQuery(req, res) {
        try {
            const mailOptions = {
                from: VIVIDVIBES_GMAIL_USERNAME,
                to: VIVIDVIBES_GMAIL_USERNAME,
                subject: "New Query Recieved",
                html: `<div><p>From: ${req.body.email}</p><p>${req.body.message}</p><br></br>
                <p>${req.body.fullName}</p></div>`
            };
        
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    console.log("Error while sending an email.");
                } else {
                    console.log("Email sent successfully!");
                }
            });
            res.send({ isSuccess: true, data: { message: "Email sent successfully!" } });
        } catch (e) {
            res.send({ isSuccess: false, data: { message: "Failed to send email.", error: e.message } });

        }
    },
async sendBookingMail(req, res) {
    try {
        const mailOptions = {
            from: VIVIDVIBES_GMAIL_USERNAME,
            to: req.body.email,
            subject: "Booking Success Confirmation",
            html: `<div><p>Hello ${req.body.fullName}, </p>
            <p>${req.body.message}</p>
            <br></br>
            <p>From, Vivid Vibes Team</p></div>`
        };
    
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log("Error while sending an email.");
            } else {
                console.log("Email sent successfully!");
            }
        });
        res.send({ isSuccess: true, data: { message: "Email sent successfully!" } });
    } catch (e) {
        res.send({ isSuccess: false, data: { message: "Failed to send email.", error: e.message } });

        }
    }
};

module.exports = UserController;
