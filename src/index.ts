import express from 'express'
import { helooword } from './routes'

const app = express()

app.get('/', helooword)


app.listen(3333)