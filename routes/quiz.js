var express = require('express');
var router = express.Router();
var pool=require('./pool')

/////////////////////////////////////////quiz co part //////////////////////////////////////

router.post('/addquiz_co', function(req, res) {
  console.log(req.body)
  pool.query("insert into quiz_co(subcode,co_of_quiz1,co_of_quiz2)values(?,?,?)",
  [req.body.subcode,req.body.co_of_q1,req.body.co_of_q2],
  function(error,result){
   console.log(error);
    if(error)
   { console.log(error)
     res.status(500).json({result:false})
   }  
  else
  {
    res.status(200).json({result:true})

  }

  })
 
});

router.get('/displayallquiz_co', function(req, res, next) {
  console.log(req.body);
 pool.query("select * from quiz_co",function(error,result){
  console.log(error);

   if (error){
     res.status(500).json([])
   }
   else{
     res.status(200).json(result)
   }

 })
});
/////////////////////////////////////////////////////////quiz co part end//////////////////////////////////////////////////////


/////////////////////////////////////////////////////////quiz marks part//////////////////////////////////////////////////////

router.post('/addquiz_marks', function(req, res) {
    console.log(req.body)
    pool.query("insert into quiz_marks(subcode,rollno,mark_of_quiz1,mark_of_quiz2)values(?,?,?,?)",
    [req.body.subcode,req.body.rollno,req.body.mark_of_q1,req.body.mark_of_q2],
    function(error,result){
     console.log(error);
      if(error)
     { console.log(error)
       res.status(500).json({result:false})
     }  
    else
    {
      res.status(200).json({result:true})
  
    }
  
    })
   
  });
  
  router.get('/displayallquiz_marks', function(req, res, next) {
    console.log(req.body);
   pool.query("select * from quiz_marks",function(error,result){
    console.log(error);
  
     if (error){
       res.status(500).json([])
     }
     else{
       res.status(200).json(result)
     }
  
   })
  });
  ///////////////////////////////////////////////quiz marks end////////////////////////////////////////
 
module.exports = router;
