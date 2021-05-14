// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req, res, next) => {
    try{
      const data = await Project.getProjects()
      res.json(data)
    } catch(err){
      next(err)
    }
  })

  router.post('/', (req,res, next) =>{
    Project.createProject(req.body)
      .then(project => {
        res.status(201).json(project)
      })
      .catch(next)
  })

router.use((err,req,res,next) =>{ //eslint-disable-line
    res.status(500).json({
        customerMessage: 'something went wrong inside the project router',
        message: err.message,
        stack: err.stack,
    })
})
module.exports = router