// build your `Project` model here
const db = require('../../data/dbConfig');

const getProjects = () => {
 
    return db.select('*').from('projects')
  }

async function createProject(project){
    const [project_id] = await db('projects').insert(project);
    return getProjects().where({project_id}).first();
  }

module.exports = {
    getProjects,
    createProject
  };