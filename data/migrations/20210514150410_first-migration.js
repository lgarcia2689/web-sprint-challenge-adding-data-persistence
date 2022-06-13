exports.up = async function(knex) {
    await knex.schema
    .createTable('projects', table => {
        table.increments("project_id").notNullable()
        table.string('project_name ')
        table.string('project_description')
        table.boolean('project_completed')
    })
    .createTable('resource', table => {
        table.increments("resource_id ")
        table.string('resource_name').notNullable().unique();
        table.string('resource_description')
    })
    .createTable('task', table => {
        table.increments("task_id ")
        table.string('task_description').notNullable()
        table.string('task_notes')
        table.boolean('task_completed')
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT') // YOU WON'T NEED IT!!!!
    })
};
  
exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('projects')
};
