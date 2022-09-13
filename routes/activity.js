var express = require('express');
var router = express.Router();
var pool=require('./pool')

/////////////////////////////////////////activity co part //////////////////////////////////////

router.post('/addactivity_co', function(req, res) {
  console.log(req.body)
  pool.query("insert into activity_co(subcode,co_of_act1,co_of_act2,co_of_act3,co_of_act4)values(?,?,?,?,?)",
  [req.body.subcode,req.body.co_of_act1,req.body.co_of_act2,req.body.co_of_act3,req.body.co_of_act4],
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

router.get('/displayallactivity_co', function(req, res, next) {
  console.log(req.body);
 pool.query("select * from activity_co",function(error,result){
  console.log(error);

   if (error){
     res.status(500).json([])
   }
   else{
     res.status(200).json(result)
   }

 })
});
/////////////////////////////////////////////////////////activity co part end//////////////////////////////////////////////////////


/////////////////////////////////////////////////////////activity marks part//////////////////////////////////////////////////////

router.post('/addactivity_marks', function(req, res) {
    console.log(req.body)
    pool.query("insert into activity_marks(subcode,rollno,mark_of_activity1,mark_of_activity2,mark_of_activity3,mark_of_activity4)values(?,?,?,?,?,?)",
    [req.body.subcode,req.body.rollno,req.body.mark_of_act1,req.body.mark_of_act2,req.body.mark_of_act3,req.body.mark_of_act4],
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
  
  router.get('/displayallactivity_marks', function(req, res, next) {
    console.log(req.body);
   pool.query("select * from activity_marks",function(error,result){
    console.log(error);
  
     if (error){
       res.status(500).json([])
     }
     else{
       res.status(200).json(result)
     }
  
   })
  });
  ///////////////////////////////////////////////activity marks end////////////////////////////////////////
 
module.exports = router;
