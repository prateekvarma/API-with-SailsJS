
module.exports = {
  
  create: function (req, res) {

    let positionName = req.param('position_name'),
        company = req.param('company'),
        description = req.param('description');

     if(!positionName){
       return res.badRequest({err:'Invalid positionName'});
     }

     if(!company){
       return res.badRequest({err:'Invlaid company'});
     }
     
     if(!description){
       return res.badRequest({err:'Invlaid description'});
     }

    Job.create({
     position_name : positionName,
     company : company,
     description:description
    })
    .then(_job => {
      if(!_job) return res.serverError({err:'Unable to create job'});

       return res.ok(_job); //to learn more about responses check api/responses folder
    })
    .catch(err => res.serverError(err.message));
  }
};