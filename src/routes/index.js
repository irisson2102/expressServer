import helloWorldRouter from './appRoutes/helloWorld.js'
import userRouter from './appRoutes/users.js'
import Validator from '../validators/index.js'


// Include all your route files here
const registerRoutes = (app) => {
  app.use('/helloWorld', helloWorldRouter)
  app.use('/user', userRouter, respHandler)
}

export default registerRoutes

const respHandler = (req, res) => {
  const { status, message, details } = res.locals.response
  res.status(status).json({
    message,
    details
  })
}
