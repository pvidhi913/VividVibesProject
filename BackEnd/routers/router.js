var express= require("express");
var router = express.Router();
const cors = require('cors');

const userController = require('../controllers/users.controllers'); // adjust the path as necessary
const adminController = require('../controllers/admin.controllers'); // adjust the path as necessary
const paymentController = require('../controllers/payment.controller'); // adjust the path as necessary

// Routes
router.use(cors());

router.post("/user/create", userController.createUser);

router.post("/user/authenticate", cors(), userController.authenticateUser);
router.put('/user/edit/:email', cors(), userController.editUser);
router.delete('/user/delete/:email', userController.deleteUser);
router.get('/user/getAll', userController.getAllUsers);
router.get('/user/get/:email', userController.getUserByEmail);

router.post("/admin/create", adminController.createAdmin);
router.post("/admin/authenticate", cors(), adminController.authenticateAdmin);
router.put('/admin/edit/:email', cors(), adminController.editAdmin);
router.delete('/admin/delete/:email', adminController.deleteAdmin);
router.get('/admin/getAll', adminController.getAllAdmins);
router.get('/admin/get/:email', adminController.getAdminByEmail);

router.post('/payment/checkout/:amount', paymentController.checkout)
router.post("/user/contactUs", userController.sendQuery);
router.post("/user/checkout", userController.sendBookingMail);

router.options('/admin/edit/:email', cors());

module.exports = router;
