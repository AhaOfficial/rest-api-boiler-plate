import express from 'express'
import bodyParser from 'body-parser'
import { RegisterRoutes } from '../build/routes'

const app = express()

// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())

RegisterRoutes(app)

const port = process.env.PORT || 3000

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
