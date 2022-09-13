var express = require("express");
var router = express.Router();
var pool = require("./pool");

/////////////////////////////////////////midterm 1 co part //////////////////////////////////////

router.post("/addmidterm1_co", function (req, res) {
  console.log(req.body);
  pool.query(
    "insert into midterm1_co(subcode,co_of_q1a,co_of_q1b,co_of_q1c,co_of_q1d,co_of_q1e,co_of_q2a,co_of_q2b,co_of_q2c,co_of_q3,co_of_q4)values(?,?,?,?,?,?,?,?,?,?,?)",
    [
      req.body.subcode,
      req.body.co_of_q1a,
      req.body.co_of_q1b,
      req.body.co_of_q1c,
      req.body.co_of_q1d,
      req.body.co_of_q1e,
      req.body.co_of_q2a,
      req.body.co_of_q2b,
      req.body.co_of_q2c,
      req.body.co_of_q3,
      req.body.co_of_q4,
    ],
    function (error, result) {
      console.log(error);
      if (error) {
        console.log(error);
        res.status(500).json({ result: false });
      } else {
        res.status(200).json({ result: true });
      }
    }
  );
});

router.get("/displayallmidterm1_co", function (req, res, next) {
  console.log(req.body);
  pool.query("select * from midterm1_co", function (error, result) {
    console.log(error);

    if (error) {
      res.status(500).json([]);
    } else {
      res.status(200).json(result);
    }
  });
});
/////////////////////////////////////////////////////////midterm1_co part end//////////////////////////////////////////////////////

/////////////////////////////////////////////////////////midterm1_marks part//////////////////////////////////////////////////////

router.post("/addmidterm1_marks", function (req, res) {
  console.log(req.body);
  pool.query(
    "insert into midterm1_marks(subcode,rollno,mark_of_q1a,mark_of_q1b,mark_of_q1c,mark_of_q1d,mark_of_q1e,mark_of_q2a,mark_of_q2b,mark_of_q2c,mark_of_q3,mark_of_q4)values(?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      req.body.subcode,
      req.body.rollno,
      req.body.mark_of_q1a,
      req.body.mark_of_q1b,
      req.body.mark_of_q1c,
      req.body.mark_of_q1d,
      req.body.mark_of_q1e,
      req.body.mark_of_q2a,
      req.body.mark_of_q2b,
      req.body.mark_of_q2c,
      req.body.mark_of_q3,
      req.body.mark_of_q4,
    ],
    function (error, result) {
      console.log(error);
      if (error) {
        console.log(error);
        res.status(500).json({ result: false });
      } else {
        res.status(200).json({ result: true });
      }
    }
  );
});

router.get("/displayallmidterm1_marks", function (req, res, next) {
  console.log(req.body);
  pool.query("select * from midterm1_marks", function (error, result) {
    console.log(error);

    if (error) {
      res.status(500).json([]);
    } else {
      res.status(200).json(result);
    }
  });
});



///////////////////////////////////////////////midterm1 marks end////////////////////////////////////////

module.exports = router;
