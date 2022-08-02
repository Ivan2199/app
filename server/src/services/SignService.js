const { Sign } = require("../models");

async function addSign(signParams, options) {
  const { id, imageUrl, title, text, category } = signParams;

  const sign = await Sign.create(
    { id, imageUrl, title, text, category },
    options
  );
  return sign;
}

module.exports = {
  addSign,
};
