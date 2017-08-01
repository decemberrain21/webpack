var express = require('express');
var router = express.Router();

var session;

router.use("/admin*", function(req, res, next){
	//console.log("here in auth");
	var params = req.originalUrl.split('/');
	//console.log(params[2]);
	if (typeof params[2] != 'undefined')
	{
		switch(params[2].toLowerCase())
		{
			case "login" :
				next();
				break;

			case "user" :
				if(params[3] == "verify")
				{
					next();
					break;
				}
				else
				{
					verify(req, res, next);
					break;
				}
			default :
				verify(req, res, next);
		}
	}
	else
	{
		verify(req, res, next);
	}
});

function verify(req, res, next) {
	
    session = req.session;
	if(!session.user)
	{
		res.redirect("/admin/login");
		return;
	}
	else
    {	
		next();
        return;
    }
}

module.exports = router;