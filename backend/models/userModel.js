import mogoose from 'mongoose';

const userSchema = new mogoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true }
}, {
    timestamps: true
}
);

const User = mogoose.model("User", userSchema);

export default User;