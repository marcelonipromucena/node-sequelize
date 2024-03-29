const Address = require("../model/Address");
const User = require("../model/User");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: "addresses" }
    });

    return res.json(user);
  },

  async store(req, res) {
    const { user_id } = req.params;

    const { zipcode, street, number } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const address = await Address.create({
      zipcode,
      street,
      number,
      user_id
    });

    return res.json(address);
  }
};
