// COMANDOS EN LA TERMINAL
// npm init -y
// npm i express express-session mongodb passport passport-local bcrypt

console.log("servidor ENCENDIDO"); //simplemente para que se muestre en la consola cuando se ha encendido el servidor

const express = require("express"); //utilizar el paquete express
const session = require("express-session"); //iniciar la sesión
const MongoClient = require("mongodb").MongoClient; //conectar con la base de datos
const passport = require("passport"); // mantener la sesión mientras se mueve por las páginas (passport + LocalStragety)
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt"); //encriptar las contraseñas

const app = express();

var db;

//--------CONEXIÓN A LA BASE DE DATOS
MongoClient.connect(
  "mongodb+srv://cluster0.c15y7.mongodb.net/yoiYvibLDIlYsrYn",
  { useUnifiedTopology: true },
  (err, client) => {
    if (err !== undefined) {
      res.send(err);
      return;
    } else {
      app.locals.db = client.db("equipo62");
    }
  }
);

//-------------hasta el final, rutas para la SESIÓN del cliente
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  //llega la petición de inicio de sesión
  new LocalStrategy({ usernameField: "email" }, function (
    email,
    password,
    done
  ) {
    db.collection("usuarios")
      .find({ email })
      .toArray(function (err, users) {
        if (users.length === 0) {
          //se compreuba se existe algún usuario
          return done(null, false);
        }
        const user = users[0];
        if (password === user.password) {
          //se comprueba si la contraseña es correcta
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
  })
);

passport.serializeUser(function (user, done) {
  //inicia la sesión
  done(null, user.email);
});
passport.deserializeUser(function (email, done) {
  //cierra la sesión
  db.collection("usuarios")
    .find({ email })
    .toArray(function (err, users) {
      if (users.length === 0) {
        done(null, null);
      }
      done(null, users[0]);
    });
});

app.use(function (req, res, next) {
  next();
}, express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.post("/signup", cifrado, function (req, res) {
  //ruta para registrar usuarios
  let email = req.body.email;
  let password = req.body.password;

  db.collection("usuarios").insertOne({ email, password }, (err, info) => {
    if (err !== undefined) {
      res.send(err);
    } else {
      res.send(info);
    }
  });
});

app.post(
  // ruta que solicita el inicio de sesión a Passport y recibe la respuesta
  "login",
  passport.authenticate("local", {
    successRedirect: "/api",
    failureRedirect: "/api/fail",
  })
);
app.get("/api", (req, res) => {
  //si Passport comprueba que el inicio es correcto
  res.send({ user: req.user });
});
app.get("/api/fail", (req, res) => {
  //si el inicio de sesión no es correcto
  res.send("usuario o contraseña incorrecto");
});

app.listen(3001); //normalmente se usa el 3000, he puesto 3001 para que no coincida con React
