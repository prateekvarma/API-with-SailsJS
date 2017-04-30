
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
     description : description
    })
    .then(_job => {
      if(!_job) return res.serverError({err:'Unable to create job'});

       return res.ok(_job); //to learn more about responses check api/responses folder
    })
    .catch(err => res.serverError(err.message));
  },
  
  update: function (req, res) {

    let positionName = req.param('position_name'),
        company = req.param('company'),
        description = req.param('description'),
        jobId = req.params.id;;

    if (!positionName) return res.badRequest({ err: 'positionName is missing' });

    let job = {};

    if (positionName) {
      job.positionName = positionName;
    }
    if (company) {
      job.company = company;
    }
    if (description) {
      job.description = description;
    }
   
    Job.update({ id: jobId }, job)
      .then(_job => {

        if (!_job[0] || _job[0].length === 0) return res.notFound({ err: 'No job found' });

        return res.ok(_job);

      }).catch(err => res.serverError(err));
  },
  
   delete: function (req, res) {
    let jobId = req.params.id;

    if (!jobId) return res.badRequest({ err: 'missing job_id field' });

    Job.destroy({ id: jobId })
      .then(_job => {
        if (!_job || _job.length === 0) return res.notFound({ err: 'No job found in our record' });
        return res.ok(`Job is deleted with id ${jobId}`);
      })
      .catch(err => res.serverError(err));
  },
  
};