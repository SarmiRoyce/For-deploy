// function LoginForm({ onLogin }) {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         onLogin(username, password);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Username:
//                 <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
//             </label>
//             <label>
//                 Password:
//                 <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
//             </label>
//             <button type="submit">Login</button>
//         </form>
//     );
// }


const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../Models/User.model");
const beauticianModel = require("../Models/Beautician.model");
const AdminModel = require('../Models/Admin')

const app = express();
exports.LoginUser = (req, res) => {
  const { email, password } = req.body;  
    userModel.findOne({ email })
    .then((user) => {
    if (user) {
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          const token = jwt.sign({ email: user.email }, process.env.JWT, {
            expiresIn: "1d",
          });
          res.cookie("token", token, { httpOnly: true });
          res.json("Success");
        } else {
          res.status(401).json("Password is incorrect.");
        }
      });
    } else {
      beauticianModel.findOne({ email }).then((beautician) => {
        if (beautician) {
          bcrypt.compare(password, beautician.password).then((isMatch) => {
            if (isMatch) {
              const token = jwt.sign(
                { email: beautician.email },
                process.env.JWT,
                { expiresIn: "1d" }
              );
              res.cookie("token", token, { httpOnly: true });
              res.json("Success beautuician");
            } else {
              res.status(401).json("Password is incorrect.");
            }
          });
        } else {
          AdminModel.findOne({ email }).then((admin) => {
            if (admin) {
              bcrypt.compare(Password, admin.Password).then((isMatch) => {
                if (isMatch) {
                  const token = jwt.sign({ Email: admin.Email }, process.env.JWT, {
                      expiresIn: "1d",
                  });
                  res.cookie("token", token, { httpOnly: true });
                  res.json("Admin_Success");
                } else {
                  res.status(401).json("Password is incorrect.");
                }
              });
            } else {
              res.status(404).json("User not found.");
            }
          });
        }
      });
    }
  });
};
// Middleware to verify user
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ error: "Authentication token is not available." });
  }
  jwt.verify(token, process.env.JWT, (err, decoded) => {
    if (err)
      return res.status(401).json({ error: "Invalid authentication token." });
    req.user = decoded;
    next();
  });
};
app.get("/", verifyUser, (req, res) => {
  res.json("Success");
});
app.get("/Profilebeauty", verifyUser, (req, res) => {
  res.json("Success beautuician");
});
app.get("/Admin", verifyUser, (req, res) => {
  res.json("Admin_Success");
});



// exports.loginBeauti = (req, res) => {
//     const { email, password } = req.body;
//     beauticianModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 if (user.password === password) {
//                     // console.log (user)
//                     const data = "Success"
//                     res.json(data)

//                 } else {
//                     res.json("the password is wrong")
//                 }
//             } else {
//                 res.json("no record")
//             }
//         })
// }