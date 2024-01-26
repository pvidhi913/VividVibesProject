const User = require("../model/users.model");
const bcrypt = require("bcrypt");

const userService = {
  async createUser(userData) {
    const user = new User(userData);
    await user.save();
    return user;
  },

  async authenticateUser(email, password) {
    const user = await User.findOne({ email: email });
    if (!user) return null;

    const isValid = await user.isValidPassword(password);
    return isValid ? user : null;
  },

  async editUser(email, updateData) {
    if (updateData.password) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(updateData.password, salt);
      updateData.password = hash;
    }

    const updatedUser = await User.findOneAndUpdate({ email: email }, updateData, {
      new: true,
      runValidators: true
    });

    return updatedUser;
  },

  async deleteUser(email) {
    const user = await User.findOneAndDelete({ email: email });
    return user;
  },

  async getAllUsers() {
    const users = await User.find();
    return users;
  },

  async getUserByEmail(email) {
    const user = await User.findOne({ email: email });
    return user;
  }
};

module.exports = userService;