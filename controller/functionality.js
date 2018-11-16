const response= [{username:"Astha", age: 20}];
exports.postfunction = function(req,res){
    response.push({username:req.body.username,
                    age: req.body.age
                });
                res.json({message:"Posted"});
};

exports.getfunction = function(req, res){
    res.json(response);
}