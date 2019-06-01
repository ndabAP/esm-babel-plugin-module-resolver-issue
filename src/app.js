import express from 'express'
import bodyParser from 'body-parser'
import './database'

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '10mb' }))

export default app
