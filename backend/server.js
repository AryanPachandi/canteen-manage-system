const express = require("express")
const app = express()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const JWT_SECRET = "aryan_pachandi"

const {userInfoModel , fooditemModel ,ordersInfoModel} = require("./models/user")

mongoose.connect("mongodb+srv://pachandiaryan:kIYEHHvtlC5s09NT@aryanpachandi.bew7r.mongodb.net/canteen-management-system    ")

app.use(express.json());
app.use(cors());


app.post("/signup", async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name;
    const role = req.body.role;

try {
    await userInfoModel.create({
        email,
        name,
        password,
        role,
    })
    res.json({
        msg:"u r signup successfully"
    })

}catch(err) {
    console.log(err)
    res.status(400).json({
        msg: "Error",
    })
}
})
app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    const response = await userInfoModel.findOne({
        email:email,
    password:password,
    role:role
    })
    if(response){
        const token = jwt.sign({id:response._id.toString(),role:response.role},JWT_SECRET)
        res.json({
            authentication_token: token,
        });
    } else {
        res.send(403).json({
            msg: "email or password incorrect ",
        });
    }

})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})
