import jwt from "jsonwebtoken";
export const authenticate = (req, res, next) => {


  const auth=req.headers['authorization'];

 
  if (!auth||!auth.startsWith("Bearer ")) {
    res.status(403).send("UnAuthoriztion...");
    return;
  }

  const token = auth.subString(7);

  try {
    const decode = jwt.verify(token, process.env.JWT_TOKEN_KEY);


  } catch (error) {

    res.send({
      message:"Token expire.."
    });

  }finally{

    console.log("moved login");
    return;
    
  }


}