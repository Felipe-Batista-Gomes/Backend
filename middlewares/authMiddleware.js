const User = require("../models/User");
const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).send("Não autorizado! Faça login para continuar.");
    }

    const verified = jwt.verify(token, process.env.SECRET);

    const user = await User.findById(verified.id).select("-password");

    if (!user) {
      return res.status(401).send("Usuário não encontrado!");
    }

    req.user = user;

    next();
  } catch (error) {
    return res
      .status(401)
      .send("Não autorizado! Por favor, faça login para continuar.");
  }
};

module.exports = protect;
