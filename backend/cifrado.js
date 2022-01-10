const express = require("express");
const bcrypt = require("bcrypt");

function cifrado(req, res, next) {
  let usuario = req.body;
  usuario.password = bcrypt.hashSync(usuario.password, 10);
  req.body.usuario;
  next();
}

module.exports = cifrado;
