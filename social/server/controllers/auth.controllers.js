import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import genToken from "../config/token.js";

// SignUp Controller
export const signUp = async (req, res) => {
    console.log(req.body)
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

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = await User.create({ name, userName, email, password: hashedPassword });
        const token =  await genToken(newUser._id);
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: true,
            maxAge: 30*24*60*60*1000 // 30 days (in secs)
        });
        res.status(201).send("New user created successfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }       
};

// SignIn Controller
export const signIn = async (req, res) => {
    const {userName, password} = req.body;
    try {
        // Validate user data
        if(!userName || !password) {
            return res.status(400).json({message: "All fields are required"});
        }  
        
        // Check if user exists
        const user = await User.findOne({userName});
        if(!user) {
            return res.status(400).json({message: "User does not exist"});
        }

        // Compare password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        // Allow the user to login
        const token =  await genToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: true,
            maxAge: 30*24*60*60*1000 // 30 days (in secs)
        });
        res.status(200).json({message: "User signed in successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};