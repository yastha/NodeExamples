const response= [{username:"Astha", age: 20}];
exports.postfunction = function(request,response){
    response.push({username:req.body.username,
                    age: req.body.age
                });
                response.json({message:"Posted"});
};

exports.getfunction = function(request, response){
    response.json(response)
}