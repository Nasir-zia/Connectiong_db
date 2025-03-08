import mongoose from 'mongoose';

const user1Schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: false },
    createdAt: { type: Date, default: Date.now }
});

const User1 = mongoose.models.User1 || mongoose.model('User1', user1Schema);

export default User1;
