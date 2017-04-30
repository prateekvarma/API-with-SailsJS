module.exports = {

 tableName:"resumes",

  attributes: {

    education : { type: 'string', required: true },

    current_employer : { type: 'string', required:true },
    
    specialization : { type: 'string', required:true },

     owner: {
       model: 'candidate',
       unique: true

     }
  }
};