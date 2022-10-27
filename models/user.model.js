import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    username: String,
    password: {
        type: String,
        select: false,
    },
    avatar: String,
});

const capitalize = function (string) {
    return string.substring(0, 1).toUpperCase() + string.substring(1);
};
// Select avatar randomly
userSchema.pre("save", function (next) {
    /* eslint-disable no-invalid-this */
    if (!this.isNew) return next();
    const randomAvatar = `/images/avatar-${Math.floor(Math.random() * 4)}.jpg`;
    this.avatar = randomAvatar;
    next();
});
// A virtual which return Full name of the user
userSchema.virtual("fullname").get(function () {
    const firstNameCapitalized = capitalize(this.fname);
    const lastNameCapitalized = capitalize(this.lname);
    return `${firstNameCapitalized} ${lastNameCapitalized}`;
});
// hash password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
});

const User = mongoose.model("User", userSchema);

export default User;
