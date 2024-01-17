import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import secrets from './data/secrets.js';
import User from './models/userModel.js';
import Secret from './models/secretModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
    try {

        await Secret.deleteMany();
        await User.deleteMany();
        
        const createdUsers = await User.insertMany(users);
        // console.log(createdUsers);
        console.log(secrets);
        const sampleSecrets = secrets.map((secret, index) => {
            return { ...secret, user: createdUsers[index]._id };
        });
        // console.log(sampleSecrets);
        await Secret.insertMany(sampleSecrets);

        console.log('Data Imported'.green.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Secret.deleteMany();
        await User.deleteMany();
        console.log('Data Destroyed'.red.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
}



if (process.argv[2] == '-d') {
    destroyData();
} else {
    importData();
}