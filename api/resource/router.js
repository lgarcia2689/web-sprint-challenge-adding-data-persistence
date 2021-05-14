// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', async (req, res, next) => {
    try{
      const data = await Resource.getResource()
      res.json(data)
    } catch(err){
      next(err)
    }
  })

router.post('/', (req,res, next) =>{
  Resource.createResource(req.body)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(next)
})

router.use((err,req,res,next) =>{ //eslint-disable-line
    res.status(500).json({
        customerMessage: 'something went wrong inside the resource router',
        message: err.message,
        stack: err.stack,
    })
})
module.exports = router