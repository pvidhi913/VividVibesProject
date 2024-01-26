const Admin = require("../model/admins.model"); // Importing the Admin model
const bcrypt = require("bcrypt");

const successMessage = "Admin operation successful";
const failureMessage = "Admin operation failed due to ";
const notFoundMessage = "Admin not found";

const AdminController = {
    async createAdmin(req, res) {
        try {
            const admin = new Admin(req.body);
            await admin.save();
            res.send({ isSuccess: true, data: { message: successMessage } });
        } catch (e) {
            res.send({ isSuccess: false, data: { message: failureMessage, error: e.message } });
        }
    },

    async authenticateAdmin(req, res) {
        try {
            const { email, password } = req.body;
            const admin = await Admin.findOne({ email: email });
            if (!admin) {
                return res.json({ authenticated: false });
            }

            const isValid = await admin.isValidPassword(password);
            res.json({ authenticated: !!isValid });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async editAdmin(req, res) {
        try {
            const { email } = req.params;

            if (req.body.email) {
                return res.status(400).send({ isSuccess: false, data: { message: "Updating the email is not allowed." } });
            }

            if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                const hash = await bcrypt.hash(req.body.password, salt);
                req.body.password = hash;
            }

            let updatedAdmin = await Admin.findOneAndUpdate({ email: email }, req.body, {
                new: true,
                runValidators: true
            });

            if (!updatedAdmin) {
                return res.status(404).send({ isSuccess: false, data: { message: notFoundMessage } });
            }

            res.json({ isSuccess: true, data: updatedAdmin });
        } catch (err) {
            res.status(500).send({ isSuccess: false, error: err.message });
        }
    },

    async deleteAdmin(req, res) {
        try {
            const { email } = req.params;
            const admin = await Admin.findOneAndDelete({ email: email });

            if (!admin) {
                return res.status(404).send({ isSuccess: false, data: { message: notFoundMessage } });
            }

            res.send('Admin deleted.');
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    async getAllAdmins(req, res) {
        try {
            const admins = await Admin.find();
            res.json(admins);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    async getAdminByEmail(req, res) {
        try {
            const { email } = req.params;
            const admin = await Admin.findOne({ email: email });

            if (!admin) {
                return res.status(404).send({ isSuccess: false, data: { message: notFoundMessage } });
            }

            res.json(admin);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
};

module.exports = AdminController;
