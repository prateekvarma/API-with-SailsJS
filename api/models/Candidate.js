module.exports = {

 tableName:"candidates",

  attributes: {

    first_name : { type: 'string', required: true },

    last_name : { type: 'string', required:true },

    age : { type  : 'integer'},

    resume: {
       collection: 'resume',
       via:'owner'

     }
  }
};