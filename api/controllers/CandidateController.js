
module.exports = {
  
  create: function (req, res) {

    let firstName = req.param('first_name'),
        lastName = req.param('last_name'),
        age = req.param('age');

     if(!firstName){
       return res.badRequest({err:'Invalid first_name'});
     }

     if(!lastName){
       return res.badRequest({err:'Invlaid last_name'});
     }

    Candidate.create({
     first_name : firstName,
     last_name : lastName,
     age:age
    })
    .then(_candidate => {
      if(!_candidate) return res.serverError({err:'Unable to create user'});

       return res.ok(_candidate); //to learn more about responses check api/responses folder
    })
    .catch(err => res.serverError(err.message));
  }
};