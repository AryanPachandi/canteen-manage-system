const express = require("express")
const app = express()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const JWT_SECRET = "aryan_pachandi"

const {authforstudent , authforadmin} = require("./middleware/middleware.js")

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
app.post('/new-product',authforadmin,  async (req, res) => {
    try {
        const name = req.body.name;
        const price = req.body.price;
        const category = req.body.category;
        const available = req.body.available;

        const adminID = req.adminID;

        await fooditemModel.create({
            name,
            price,
            category,
            available,
            adminID,
        })
        res.json({
            msg: "product listed successfull",
        })
    }catch(err) {
        console.log(err)
     res.status(401).json({
         msg:"invalid input",
     })
    }
})
//
app.get("/update-product", authforadmin, async (req, res) => {
    try{
        const adminID = req.adminID;
            const products = await fooditemModel.find({adminID}).populate("adminID" , "name email role")

        res.json({
            products: products,
        })
    }catch(err) {
        res.status(401).json({
            msg:"backend or database crashed"

        })
    }
})
app.delete("/delete-product/:id", authforadmin, async (req, res) => {
    const deleteID = req.params.id;
    try{
        const result = await fooditemModel.deleteOne({_id:new mongoose.Types.ObjectId(deleteID)});
        if(result.deletedCount == 1){
            res.status(200).json({
                msg:"product deleted successfull",
            })


        }else {
            res.status(401).json({
                msg: "user not found or invalid food id"
            })
        }
    }catch (e) {
        console.log(e)
        res.status(400).json({
            msg:"error occurred while deleting product"
        })
    }
})

// app.post("/update-product/:id", authforadmin, async (req, res) => {
//     const updateID = req.params.id;
//     try {
//         const resul
//     }
// })

app.post("order/student", authforstudent, async (req, res) => {
    const studentID = req.studentID;
    const foodID = req.body.foodID;

    const product = await fooditemModel.findById(foodID);

    if(!product || !product.available){
        return res.status(404).json({
            msg:"product not found or unavailable"
        })
    }
    const price = product.price;
    const adminID = product.adminID;

    const order = await ordersInfoModel.create({
        studentID:studentID,

        items:[
            {
                foodID: foodID,
                name: product.name,
                quantity: product.quantity,
                price: price,
            }
        ],
        totalPrice:product.price,

    })
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})
