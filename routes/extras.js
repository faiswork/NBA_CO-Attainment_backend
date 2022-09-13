var express = require('express');
var router = express.Router();
var pool=require('./pool')




router.get('/displaytotalmidterm1attendance', function(req, res, next) {
  console.log(req.body,"1");
 pool.query("Select subcode,count(rollno) as p from midterm1_marks group by subcode",function(error,result){
  console.log(error);

   if (error){
     res.status(500).json([])
   }
   else{
     res.status(200).json(result)
   }

 })
});


router.get('/displaytotalmidterm2attendance', function(req, res, next) {
    console.log(req.body,"1");
   pool.query("Select subcode,count(rollno) as p from midterm2_marks group by subcode",function(error,result){
    console.log(error);
  
     if (error){
       res.status(500).json([])
     }
     else{
       res.status(200).json(result)
     }
  
   })
  });





  /////////////////////////////////////////////////////////////////////////////////////////////////////////

//[{subcode:cs401,q1a:2,q1b:6},{subcode:cs401,q1a:2,q1b:6}]
//[{subcode:cs401,q1a:2},{subcode:cs401,q1a:2},{subcode:cs401,q2a:2}]


router.get("/displaymidterm1attendance", function (req, res, next) {
  console.log(req.body);
  pool.query("select * from midterm1_marks", function (error, result) {
    if (error) {
      res.status(500).json([]);
    } else {
      result = result.map((v) => Object.assign({}, v));
      const subs = [];

      const findSub = (value) => {
        for (let i = 0; i < subs.length; i++) {
          if (subs[i].subcode === value) {
            return 1;
          }
        }
        return 0;
      };

      for (let i = 0; i < result.length; i++) {
        const marks = {
          mark_of_q1a: 0,
          mark_of_q1b: 0,
          mark_of_q1c: 0,
          mark_of_q1d: 0,
          mark_of_q1e: 0,
          mark_of_q2a: 0,
          mark_of_q2b: 0,
          mark_of_q2c: 0,
          mark_of_q3: 0,
          mark_of_q4: 0,
        };

        if (!findSub(result[i].subcode)) {
          for (let j = 0; j < result.length; j++) {
            if (result[i].subcode === result[j].subcode) {
              if (result[j].mark_of_q1a) {
                marks.mark_of_q1a++;
              }
              if (result[j].mark_of_q1b) {
                marks.mark_of_q1b++;
              }
              if (result[j].mark_of_q1c) {
                marks.mark_of_q1c++;
              }
              if (result[j].mark_of_q1d) {
                marks.mark_of_q1d++;
              }
              if (result[j].mark_of_q1e) {
                marks.mark_of_q1e++;
              }
              if (result[j].mark_of_q2a) {
                marks.mark_of_q2a++;
              }
              if (result[j].mark_of_q2b) {
                marks.mark_of_q2b++;
              }
              if (result[j].mark_of_q2c) {
                marks.mark_of_q2c++;
              }
              if (result[j].mark_of_q3) {
                marks.mark_of_q3++;
              }
              if (result[j].mark_of_q4) {
                marks.mark_of_q4++;
              }
            }
          }
          subs.push({ subcode: result[i].subcode, ...marks });
        }
      }
      res.status(200).json(subs);
    }
  });
});  
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get("/displaymidterm1attendance60", function (req, res, next) {
  console.log(req.body);
  pool.query("select * from midterm1_marks", function (error, result) {
    if (error) {
      res.status(500).json([]);
    } else {
      result = result.map((v) => Object.assign({}, v));
      const subs = [];

      const findSub = (value) => {
        for (let i = 0; i < subs.length; i++) {
          if (subs[i].subcode === value) {
            return 1;
          }
        }
        return 0;
      };

      for (let i = 0; i < result.length; i++) {
        const marks = {
          mark_of_q1a: 0,
          mark_of_q1b: 0,
          mark_of_q1c: 0,
          mark_of_q1d: 0,
          mark_of_q1e: 0,
          mark_of_q2a: 0,
          mark_of_q2b: 0,
          mark_of_q2c: 0,
          mark_of_q3: 0,
          mark_of_q4: 0,
        };

        if (!findSub(result[i].subcode)) {
          for (let j = 0; j < result.length; j++) {
            if (result[i].subcode === result[j].subcode) {
              if (result[j].mark_of_q1a>=0.6) {
                marks.mark_of_q1a++;
              }
              if (result[j].mark_of_q1b>=0.6) {
                marks.mark_of_q1b++;
              }
              if (result[j].mark_of_q1c>=0.6) {
                marks.mark_of_q1c++;
              }
              if (result[j].mark_of_q1d>=0.6) {
                marks.mark_of_q1d++;
              }
              if (result[j].mark_of_q1e>=0.6) {
                marks.mark_of_q1e++;
              }
              if (result[j].mark_of_q2a>=1.2) {
                marks.mark_of_q2a++;
              }
              if (result[j].mark_of_q2b>=1.2) {
                marks.mark_of_q2b++;
              }
              if (result[j].mark_of_q2c>=1.2) {
                marks.mark_of_q2c++;
              }
              if (result[j].mark_of_q3>=1.8) {
                marks.mark_of_q3++;
              }
              if (result[j].mark_of_q4 >=3.6) {
                marks.mark_of_q4++;
              }
            }
          }
          subs.push({ subcode: result[i].subcode, ...marks });
        }
      }
      res.status(200).json(subs);
    }
  });
});  


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get("/displayactivityattendance", function (req, res, next) {
  console.log(req.body);
  pool.query("select * from activity_marks", function (error, result) {
    if (error) {
      res.status(500).json([]);
    } else {
      result = result.map((v) => Object.assign({}, v));
      const subs = [];

      const findSub = (value) => {
        for (let i = 0; i < subs.length; i++) {
          if (subs[i].subcode === value) {
            return 1;
          }
        }
        return 0;
      };

      for (let i = 0; i < result.length; i++) {
        const marks = {
          mark_of_activity1: 0,
          mark_of_activity2: 0,
          mark_of_activity3: 0,
          mark_of_activity4: 0,
        };

        if (!findSub(result[i].subcode)) {
          for (let j = 0; j < result.length; j++) {
            if (result[i].subcode === result[j].subcode) {
              if (result[j].mark_of_activity1) {
                marks.mark_of_activity1++;
              }
              if (result[j].mark_of_activity2) {
                marks.mark_of_activity2++;
              }
              if (result[j].mark_of_activity3) {
                marks.mark_of_activity3++;
              }
              if (result[j].mark_of_activity4) {
                marks.mark_of_activity4++;
              }
              
            }
          }
          subs.push({ subcode: result[i].subcode, ...marks });
        }
      }
      res.status(200).json(subs);
    }
  });
});  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



 
module.exports = router;
