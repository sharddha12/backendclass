const monogoose = require("mongoose");

const connectDB = async () => {
    try {
        await monogoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database  is connected successfully");
    } catch (error) {
        console.log('error on database,${error}');
        throw error;
    }
};

module.exports = connectDB;
        
        

    