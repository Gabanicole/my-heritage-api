const mongoose = require ("mongoose");

const connectDb = async () => {
 try{
   const connect = await mongoose.connect(
    process.env.CONNECTION_STRING,
    {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
    }
    );

   console.log("database connected:",
   connect.connection.host,
   connect.connection.name
   );

 }catch(err){
     console.log(err);
     process.exit(1);
 }
};
module.exports = connectDb;