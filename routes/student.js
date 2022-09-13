var express = require('express');
var router = express.Router();
var pool=require('./pool')



router.post('/addnewstudent', function(req, res) {
  console.log("branch------------------------>",req.body.branch)
  pool.query("insert into students(rollno, name, batch, branch) values(?,?,?,?)",
  [req.body.rollno, req.body.name,req.body.batch,req.body.branch],
  function(error,result){
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

router.get('/displayallstudents', function(req, res, next) {
  console.log(req.body,"1");
 pool.query("select * from students",function(error,result){
  console.log(error);

   if (error){
     res.status(500).json([])
   }
   else{
     res.status(200).json(result)
   }

 })
});



 
module.exports = router;
