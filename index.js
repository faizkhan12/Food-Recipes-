const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html")
})

app.post("/",function(req,res){
    res.sendFile(__dirname + "/chicken.html")
})

app.post('/',function(req,res){
    var email = req.body.email
    var password = req.body.password
    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed"
            }
        ]
    }
    var jsonData = JSON.stringify(data)
   

    var option = {
        url:'https://us4.api.mailchimp.com/3.0/lists/4dd1517d78',
        method: "POST",
        headers:{
            "Authorization":"faiz12 5b4c473a51ea618fe41d34d36a4e5134-us4"
        },
        body: jsonData
    }

    request(option,function(error,response,body){
        if(error){
            console.log(error)
        }else{
            console.log(response.statusCode)
            
        }

    })
    
})



app.listen(process.env.PORT || 3000,function(){
    console.log("Serving started at port 3000")
})
