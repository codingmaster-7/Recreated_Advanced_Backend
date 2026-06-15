import 'dotenv/config';
import connectionDb from "./db/index.js";
import app from "./app.js"

connectionDb().then(app.listen(process.env.PORT||8000,()=>{
 console.log(`Server is running at ${process.env.PORT}`);
})).catch((err)=>{
    console.log(`Not able to connect maybe due to no internet ${err}`);
})