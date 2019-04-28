const joi = require('joi');
const constants = require('../constants/constants');
let responseObj = {};
module.exports = {
    validateQueryParams: (schema)=>{
        return (req,res,next) => {
            const results = joi.validate(req.query,schema);
            if(results.error){
                console.log("joi validation error results.error",results.error);
                let detailedError = results.error.details.map((value)=>{
                    return {
                        error: value.message,
                        path: value.path
                    };
                });
                responseObj.status=400;
                responseObj.body=detailedError;
                responseObj.message=constants.controllerStatus.BAD_REQUEST;
                return res.status(responseObj.status).send(responseObj);
            }else{
                next();
            }
        };
    }
};