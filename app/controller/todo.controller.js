require("dotenv").config();
// const { rows } = require('pg/lib/defaults');
const poolConnection = require("../dbconn/dbconn");
const pool = poolConnection;

module.exports.todoController = {
  // INSERT A TASK
  todo: async (req, res) => {
    try {
      // CHECK IF THERE IS AN INPUT ERROR, ELSE CONTINUE WITH THE CONDE BLOCK
      if (req.authErrMessage) throw new Error(req.authErrMessage);

      query = {
        text: 'INSERT INTO todolists (task, dateOfTask, completed)  VALUES ($1, $2, $3) RETURNING (task, dateOfTask, completed)',
        value: [req.body.task, req.body.dateOfTask, req.body.completed]
    }


    pool.query(query.text, query.value)
        .then(data => {
            console.log(data);
            res.status(200).json({ error: null, success: true, todoList: data, message:"Task inserted"});
          
        })
        .catch(err => {
            throw new Error(err);
        })
     
      
   
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message, success: false, task: null, message:"error found" });
    }
  },

  todoList: async (req, res) => {

    try{

        pool.query("SELECT * FROM todolists")
        .then(data => {
            console.log(data);
            res.status(200).json({ error: null, success: true, todoList: data, message:"Successfully called"});
          
        })
        .catch(err => {
            throw new Error(err);
        })


    } catch(error) {
      console.log(error.message)
        res.status(400).json({ error: error.message, todoList: null })
    }
 
  },
  updateList: async (req, res)=>
  {

  

    try{
      
      query = {
        text: `UPDATE todolists SET task = $1, dateoftask = $2, completed = $3 WHERE task_id = $4`
       , 
          value: [req.body.task, req.body.dateOfTask, req.body.completed,parseInt(req.params.id)]
      }

      pool.query(query.text, query.value)
      .then(data => {
          console.log(data);
          res.status(200).json({ error: null, success: true, todoList: data, message:"Task Updated"});
        
      })
      .catch(err => {
          throw new Error(err);
      })

    }catch(error){
        res.status(400).json({ error: error.message, todoList: null })
    }
  }
}


module.exports.mavimbela = {
  addData : async (req,res) => {

    try{
      
    }catch(error)
    {

    }
  }
}