import Joi from "joi";
import { User , RefreshToken} from '../../models';

import bcrypt from 'bcrypt';
import JwtService from "../../services/JwtService";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import { REFRESH_SECRET } from "../../config";

const registerController = {
    async register(req, res, next){
        
        //validate request
        const registerSchema = Joi.object({
            name : Joi.string().min(3).max(30).required(),
            email : Joi.string().email().required(),            
            password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            repeat_password : Joi.ref('password')
        })

        console.log(req.body)
        const {error} = registerSchema.validate(req.body);

        if(error) {
            return next(error)            
        }

        //validate user in db
        try{
            const exists = await User.exists({email : req.body.email}); 
            if(exists){
                return next (CustomErrorHandler.alreadyExits("This email already exits...!!!"));
            }
        } catch(err) {
            return next(err);
        }

        const {name , email, password } = req.body;
        //Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //console.log(hashedPassword);
        //prepare model        
        const user = new User({
            name,
            email,
            password : hashedPassword
        })

        let access_token;
        let refresh_token;
        try{
            const result = await user.save();
            console.log(result);
            //Token
            access_token = JwtService.sign({_id:result._id, role:result.role});
            refresh_token = JwtService.sign({_id:result._id, role:result.role}, '1y', REFRESH_SECRET);

            //database whitelist
            await RefreshToken.create({token : refresh_token})

        } catch (err) {
            return next(err);
        }

        res.json({access_token, refresh_token});
    }
}


export default registerController;