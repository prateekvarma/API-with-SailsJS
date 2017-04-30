module.exports = {

 
  create: function (req, res) {

    let education = req.param('education'),
      currentEmployer = req.param('current_employer'),
      specialization = req.param('specialization'),
      candidateId = req.param('candidate_id'); //original user_id from mongodb candidate model
     

    if (!education) return res.badRequest({ err: 'Invalid education field' });
    if (!currentEmployer) return res.badRequest({ err: 'Invalid currentEmployer field' });
    if (!specialization) return res.badRequest({ err: 'Invalid specialization field' });
    if (!candidateId) return res.badRequest({ err: 'Invalid candidateId field' });
     

        return Resume.create({
          education : education,
          current_employer : currentEmployer,
          specialization : specialization,
          candidate_id : candidateId
        })
         .then(_resume => {
        if (!_resume) throw new Error('Unable to create new resume');
        return res.json({ resume: _resume });
      })
      .catch(err => res.serverError(err.message));
  }
};