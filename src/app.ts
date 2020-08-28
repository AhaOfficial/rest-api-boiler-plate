import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { RegisterRoutes } from '../build/routes'


const app = express()

app.use(cors({
  origin: '*',
  methods: 'GET,PUT,POST,DELETE',
  preflightContinue: false
}))
app.use(helmet())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(express.json())
app.use(cookieParser())

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  const errorHandler = require('errorhandler')

  app.use(errorHandler())
}


RegisterRoutes(app)

const port = process.env.PORT || 3000

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
