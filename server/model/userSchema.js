import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

/*userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = bcrypt.hash(this.password, 8);
        this.cpassword = bcrypt.hash(this.cpassword, 8);
    }
});*/

export default User;
