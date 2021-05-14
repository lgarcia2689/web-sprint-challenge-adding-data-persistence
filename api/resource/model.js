// build your `Resource` model here
const db = require('../../data/dbConfig');

function getResource() {
  return db.select('*').from('resource')
}

async function createResource(resource){
  const [resource_id] = await db('resource').insert(resource);
  return getResource().where({resource_id}).first();
}

module.exports = {
    getResource,
    createResource,
  };
