// build your `Project` model here
const db = require('../../data/dbConfig');

const getProjects = () => {
 
    return db.select('*').from('projects')
  }

module.exports = {
    getProjects,
  };