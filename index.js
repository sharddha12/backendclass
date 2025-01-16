const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
// make  a port listen on port 3300 
const connectDB = require('./configurtion/db');
connectDB();

app.use(express.json());
app.use('/api/user', require('./routes/user'));
const bookRoutes = require('./routes/book');
app.use('/api/book', bookRoutes);
const publicationRoutes=require('./routes/Publication');
app.use('/api/pub', publicationRoutes);

const adminRoutes=require("./routes/Admin");
app.use("/api/admin",adminRoutes);
const authenticationRoutes=require("./routes/Authentication");
app.use("/auth",authenticationRoutes);




const port = 4444;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
  