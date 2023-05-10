import express from 'express'

const helloWorldRouter = express.Router()

helloWorldRouter.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
    status: 200
  })
})

export default helloWorldRouter