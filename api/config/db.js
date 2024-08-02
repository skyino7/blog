const mongoose = require('mongoose');

const dbConnect = async () => {
    const db = process.env.MONGODB_URL
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to Database');
    }
    catch (err) {
        console.log('Failed to connect to Database', err);
    }
};

module.exports = dbConnect;
