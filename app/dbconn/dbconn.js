const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Todo',
  password: '#mnisikamatla',
  port: 5432,
})



// const pool = new Pool({
//     connectionString: "postgres://fsvdjgdzujocfo:3e3f98aef21016c7127c9dc78e01bfcc143c0cb46469b3d6ed51b2343fb2329f@ec2-52-72-99-110.compute-1.amazonaws.com:5432/de161uql6dge0i",
//     ssl: {
//       rejectUnauthorized: false
//     }
//   });

pool
.connect((err,) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }else{
        console.log("Database connected");
    }
    // Do what you have to do with the pool client now
})

module.exports = pool;

