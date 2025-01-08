import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  // common fields for all roles
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "recruiter", "jobseeker"],
  },

  //   common fields end for all roles
  // now we have role based fields

  jobseeker: {
    education: [
      {
        degree: {
          type: String,
        },
        institution: {
          type: String,
        },
        year: {
          type: Number,
        },
      },
    ],
    experience: [
      {
        companyName: {
          type: String,
        },
        designation: {
          type: String,
        },
        duration: {
          type: String,
        },
      },
    ],
    skills: {
      type: [String],
    },
    resume: {
      type: String,
    },
  },

  recruiter: {
    companyName: {
      type: String,
    },
    companyWebsite: {
      type: String,
    },
  },
});

UserSchema.pre("save", async function (next) {
  if (this.role === "recruiter") {
    this.jobseeker = undefined;
    next();
  }
  if (this.role === "jobseeker") {
    this.recruiter = undefined;
    next();
  }
});

const User = mongoose.model("User", UserSchema);

export default User;

// jobseeker
// {
//   "name": "Rahul jangir",
//   "email": "rahuljangir@gmail.com",
//   "password": "password",
//   "phoneNumber": 9950108143,
//   "role": "jobseeker",
//   "jobseeker": {
//       "education": [
//           {
//               "degree": "12th",
//               "institution": "govt. school",
//               "year": "2023"
//           }
//       ],
//       "experience": [
//           {
//               "companyName": "grras solution pvt. ltd.",
//               "designation": "https://www.grrasssolution.com",
//               "duration": "6 month"
//           }
//       ],
//       "skills": [
//           "html",
//           "css",
//           "javaScript"
//       ],
//       "resume": "myresume"
//   }
// }

// recruiter
// {
//   "name": "Rahul jangir",
//   "email": "rahuljangir@gmail.com",
//   "phoneNumber": 9950108143,
//   "password": "password",
//   "role": "recruiter",
//   "recruiter": {
//       "companyName": "grras solution pvt ltd",
//       "companyWebsite": "https://www.grrassolution.com"
//   }
// }
