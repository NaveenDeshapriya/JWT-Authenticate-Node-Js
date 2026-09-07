import jwt from "jsonwebtoken";

export const login=(req,res)=>{

  

const user={
    email:"user@gmail.com",
    password:"12345"
}


const {email,password}=req.body;


if (password==user.password) {
    

  const token=  jwt.sign({id:1,email:"naveen@gmail.com"},process.env.JWT_TOKEN_KEY,{expiresIn:'1h',algorithm:"HS256"});

  res.send({
    token:token,
    email:email,
    Date:Date.now()
  });

  return;
}

res.status(404).send();


}