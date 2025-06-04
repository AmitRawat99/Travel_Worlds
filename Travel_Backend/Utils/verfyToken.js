import jwt from 'jsonwebtoken'

export const VerfyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({
      success : false,
      message: "Your Are Not Authorize",
    });
  }

  jwt.verify(token , process.env.JWT_SECRET_KEY , ( error , user)=>{
    if(error){
        return res.status(401).json({
            success  : false ,
            message : 'Token Is Invlid'
        })
    }
    req.user = user
    next()
  })
};


// export const  Verifyuser = (req , res) =>{
//     VerfyToken(req , res , next , ()=>{
//         if(req.user.id === req.params.id || req.user.role == 'admin'){
//             next()
//         }
//         else{
//          return res.status(401).json({
//                 succsess : false ,
//                 message : 'You Are Not Authenticated'
//             })
//         }
//     }
// )}

export const Verifyuser = (req, res, next) => {
    VerfyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.role === 'admin') {
            next();
        } else {
            return res.status(401).json({
                success: false,
                message: 'You Are Not Authenticated',
            });
        }
    });
};



export const  VerifyAdmin = (req , res , next) =>{
    VerfyToken(req , res , next , ()=>{
        if(req.user.role == 'admin'){
            next()
        }
        else{
            return  res.status(401).json({
                succsess : false ,
                message : 'You Are Not Autorized'
            })
        }
    }
)}