import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

// parser
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/')

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Assignment 3!')
})

export default app
