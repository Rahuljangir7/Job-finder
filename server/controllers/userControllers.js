import User from "../models/userModel.js";

const register = async (req, res) => {
  try {
    const user = req.body;
    const registeredUser = new User(user);

    registeredUser.save();
    console.log(registeredUser);
    if (!registeredUser) {
      return res.status(400).json(`Bad request`);
    }

     res.status(201).json(`Registered Created Successfully`);
  } catch (err) {
    res.status(500).json({ msg: `Internal server error` });
  }
};

export { register };
