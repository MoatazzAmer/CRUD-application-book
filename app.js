import express from 'express';
import { dbConnection } from './detabase/dbConnection.js';
import autherRouter from './src/modules/auther/auther.router.js';
import bookRouter from './src/modules/Books/book.router.js';






const port = 5000;
const app = express();
app.use(express.json());

app.use('/auther' , autherRouter)
app.use('/book' , bookRouter)




app.listen(port , ()=>{
    console.log(`Server Running In Port ${port} `);
})