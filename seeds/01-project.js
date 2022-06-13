exports.seed = function(knex) {
  return knex('projects').insert([
    {project_name: "bar", project_description:"", project_completed:false},
  ])    
};