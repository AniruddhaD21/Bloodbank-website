const express = require("express");
const path = require("path");
const app = express();

require("./db/conn");
const Register = require("./models/registers");
const signup = require("./models/signup");
const { json } = require("express");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));

// Remove the routes that attempt to render HTML files
app.get("/", (req, res) => {
     res.render("index.html");
 });
app.route("/signup")
 .get( (req, res) => {
    res.render("profile.html");
 })

 .post( async(req, res) => {
    try {
        const newsignup = new signup({
            email: req.body.email,
            password: req.body.password
        });

        const signup1 = await newsignup.save();
        res.status(201).redirect("/profile.html"); // Redirect to profile page after successful signup
    } catch (error) {
        console.error(error);
        res.status(400).send("Registration failed");
    }
});

// app.get("/register", (req, res) => {
//     res.render("register");
// });

// get a new user in our database
app.post("/register", async(req, res) => {
    try {
        const newRegister = new Register({
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            guardianname: req.body.guardianname,
            phone: req.body.phone,
            email: req.body.email,
            medicalcontext: req.body.medicalcontext,
            bloodtype: req.body.bloodtype,
            address: req.body.address,
            district: req.body.district,
            state: req.body.state,
            pincode: req.body.pincode
        });

        const registered = await newRegister.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Registration failed" });
    }
});

// login check

app.get("/signin", (req, res) => {
    res.render("sign_in.html");
});

app.post("/signin", async(req, res) => {
    try{

        const email = req.body.email;
        const password = req.body.password;

        const useremail = await signup.findOne({email:email});

        if (!useremail) {
            res.status(401).send("User not found");
            return;
        }

        if (!password) {
            res.status(401).send("Password not found");
            return;
        }

        if(useremail.password === password) {
            res.status(201).render("/");
        } else {
            res.status(401).send("invalid login details");
        }

    } catch (error) {
        res.status(400).send("invalid login ");
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});
