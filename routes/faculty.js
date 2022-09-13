const express = require("express");
var pool=require('./pool.js')
var router = express.Router();



const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());




app.post("/register", (req, res) => {
  const useremail = req.body.useremail;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    pool.query(
      "INSERT INTO faculty (useremail, password) VALUES (?,?)",
      [useremail, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.get("/login", (req, res) => {

app.post("/login", (req, res) => {
  const useremail = req.body.useremail;
  const password = req.body.password;

  pool.query(
    "SELECT * FROM faculty WHERE useremail = ?;",
    useremail,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            res.send(result);
          } else {
            res.send({ message: "Wrong useremail/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

})
module.exports = router;
