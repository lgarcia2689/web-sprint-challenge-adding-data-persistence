exports.seed = function(knex) {
  return knex('task').insert([
    {task_description: "baz", task_notes:"", task_completed:false, project_id:"1"},
  ])    
};