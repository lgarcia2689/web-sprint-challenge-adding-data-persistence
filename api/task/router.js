// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/', async (req, res, next) => {
    try{
      const data = await Task.getTask()
      res.json(data)
    } catch(err){
      next(err)
    }
  })

router.post('/')

router.use((err,req,res,next) =>{ //eslint-disable-line
    res.status(500).json({
        customerMessage: 'something went wrong inside the task router',
        message: err.message,
        stack: err.stack,
    })
})
module.exports = router