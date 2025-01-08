import User from "../models/userModel.js";

const register = async (req, res) => {
  try {
    const { name, email, phoneNumber, password, role, jobseeker, recruiter } =
      req.body;

    if (!name || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({ msg: `fill the all fields` });
    }

    if (role !== "jobseeker" || role !== "recruiter") {
      return res.status(400).json({ msg: `fill the correct role` });
    } else {
      if (role === "jobseeker") {
        const { education, experience, skills, resume } = jobseeker;
        if (!education || !experience || !skills || !resume) {
          return res.status(400).json({ msg: `fill the jobseeker fields` });
        }
      }
      if (role === "recruiter") {
        const { companyName, companyWebsite } = recruiter;
        if (!companyName || !companyWebsite) {
          return res.status(400).json({ msg: `fill the recruiter fields` });
        }
      }
    }

    const registeredUser = new User(req.body);

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
