import User from '../models/User.js';
import cloudinary from '../lib/cloudinary.js';
import fs from 'fs';
import jwt from 'jsonwebtoken';


export const registerUser = async (req, res) => {
    try {
        
        const { username, email, password } = req.body;


        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(409).json({ message: 'User already exists' });

        let profilePicUrl = '';
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'profile_pics',
            });

            profilePicUrl = result.secure_url;

            // Clean up local file
            fs.unlinkSync(req.file.path);
        }


        const newUser = new User({
            username,
            email,
            password,
            profilePic: profilePicUrl,
        });

        await newUser.save();
        return res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error in register' });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Check user
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'Invalid credentials' });

        // Compare password
        const isMatch = await user.matchPassword(password);

        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });

        // Set cookie with token
        res.cookie("jwt", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true, // prevent XSS attacks,
            sameSite: "strict", // prevent CSRF attacks
            secure: false,
        });

        // Return user info and token
        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                profilePic: user.profilePic,
                isAdmin: user.isAdmin,
            },
            token,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error in login' });
    }
};

export const logoutUser = (req, res) => {
    res.clearCookie("jwt");
    res.status(200).json({ success: true, message: "Logout successful" });
}
