exports.seed = function(knex) {
  return knex('resource').insert([
    {resource_name: "foo", resource_description:""},
  ])    
};