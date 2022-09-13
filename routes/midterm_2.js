var express = require('express');
var router = express.Router();
var pool=require('./pool')

/////////////////////////////////////////midterm 2 co part //////////////////////////////////////

router.post('/addmidterm2_co', function(req, res) {
  console.log(req.body)
  pool.query("insert into midterm2_co(subcode,co_a,co_b,co_c)values(?,?,?,?)",
  [req.body.subcode,req.body.co_a,req.body.co_b,req.body.co_c],
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

router.get('/displayallmidterm2_co', function(req, res, next) {
  console.log(req.body);
 pool.query("select * from midterm2_co",function(error,result){
  console.log(error);

   if (error){
     res.status(500).json([])
   }
   else{
     res.status(200).json(result)
   }

 })
});
/////////////////////////////////////////////////////////midterm2_co part end//////////////////////////////////////////////////////


/////////////////////////////////////////////////////////midterm2_marks part//////////////////////////////////////////////////////

router.post('/addmidterm2_marks', function(req, res) {
    console.log(req.body)
    pool.query("insert into midterm2_marks(subcode,rollno,totalmarks)values(?,?,?)",
    [req.body.subcode,req.body.rollno,req.body.totalmarks],
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
  
  router.get('/displayallmidterm2_marks', function(req, res, next) {
    console.log(req.body);
   pool.query("select * from midterm2_marks",function(error,result){
    console.log(error);
  
     if (error){
       res.status(500).json([])
     }
     else{
       res.status(200).json(result)
     }
  
   })
  });
  ///////////////////////////////////////////////midterm2 marks end////////////////////////////////////////
 
module.exports = router;
