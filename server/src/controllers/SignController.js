const { Sign } = require("../models");

const { addSign } = require("../services/SignService");

const allowedCategories = {
  ZnakovizaVodenjePrometa: "ZnakovizaVodenjePrometa",
  ZnakoviObavijesti: "ZnakoviObavijesti",
  ZnakoviIzricitihNaredbi: "ZnakoviIzricitihNaredbi",
  ZnakoviOpasnosti: "ZnakoviOpasnosti",
};

module.exports = {
  async addSign(req, res) {
    const { id, imageUrl, title, text, category } = req.body;

    const categoryExists = Object.values(allowedCategories).find(
      (c) => c == category
    );
    if (!categoryExists) {
      return res
        .status(400)
        .json({ message: `You have sent a non-allowed category: ${category}` });
    }
    const sign = await addSign({ id, imageUrl, title, text, category });

    return res.status(201).json(sign);
  },
  async getSign(req, res) {
    const { id } = req.params;

    const sign = await Sign.findOne({
      where: {
        id: id,
      },
    });

    if (!sign) {
      return res.status(404).json({ message: `Sign by ID ${id} not found` });
    }

    return res.status(200).json(sign);
  },
  async getSigns(req, res) {
    const signs = await Sign.findAll({});

    return res.status(200).json(signs);
  },
  async deleteSign(req, res) {
    const { id } = req.params;
    const sign = await Sign.findByPk(id);
    if (!sign) {
      return res.status(404).json({ message: `Sign by ID ${id} not found` });
    }
    await sign.destroy();
    return res.status(200).json({ message: "sign successfully deleted" });
  },
};
