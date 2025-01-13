import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { hashedPassword } from "../utils/password.js";

const register = async (req, res) => {
  try {
    const {
      name,
      email,
      phoneNumber,
      password,
      role,
      jobseeker,
      recruiter,
      resume,
    } = req.body;
    console.log(req.file);

    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const hashPassword = await hashedPassword(password);

    const userData = {
      name,
      email,
      phoneNumber,
      password: hashPassword,
      role,
    };

    if (role === "jobseeker") {
      const parsedJobseeker = JSON.parse(jobseeker);
      userData.jobseeker = {
        ...parsedJobseeker,
        resume: req.file ? req.file.path : null,
      };
    }

    if (role === "recruiter") {
      userData.recruiter = JSON.parse(recruiter);
    }

    console.log(userData);
    const newUser = await User.create(userData);

    res.status(201).json({
      message: "user registered successfull",
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export { register };
