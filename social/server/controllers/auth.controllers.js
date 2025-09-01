import User from "../models/user.model.js";

export const signUp = async (req, res) => {
  const { name, userName, email, password } = req.body;
    try {       
        // Validate user data
        if(!name || !userName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Validate email
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Validate for userName
        const existingUserName = await User.findOne({ userName });
        if(existingUserName) {
            return res.status(400).json({ message: "UserName already taken" });
        }   

        // Password length
        if(password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        // Create new user
        const newUser = await User.create({ name, userName, email, password });
        res.status(201).send("New user created successfully");
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }       
};