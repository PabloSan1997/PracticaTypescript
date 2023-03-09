const boom = require('@hapi/boom');

function handleBooom(error, req, res, next){
    if(error.isBoom){
        const {statusCode,  message}=error.output.payload;
        res.json({statusCode, message});
    }
    next(error);
}
module.exports={handleBooom}