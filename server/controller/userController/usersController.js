import { hashPassword } from "../../middleware/authHashing.js";
const hashedPassword = await hashPassword(password);
import User from "../../model/user.js";

export const UserRegistration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        error: "Fields empty",
      });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({
        error: "Email is already taken. Input a different email.  ",
      });
    }

    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and it should atleast 6 characters long",
      });
    }

    const user = await User.create({ name, email, password: hashedPassword });

    return res.status(201).json({
      message: "User registered successfully",
      user: { name: user.name, email: user.email },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
