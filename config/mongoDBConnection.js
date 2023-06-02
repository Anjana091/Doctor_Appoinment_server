const mongoose = require('mongoose');


const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


exports.connect = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, mongooseOptions);
        console.log('Successfully connected to mongoDB');
    } catch (error) {
        console.log(error);
    }
}