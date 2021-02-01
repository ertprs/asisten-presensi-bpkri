import Express from 'express'
import Cors from 'cors'
import Api from './src/api'
import { PORT } from './src/variables'

const server = Express()
const port = PORT || 9600

server.use(Cors())
server.use(Api)
server.use(Express.static(`${__dirname}/public`))
server.get('*', (_, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

server.listen(port, async () => {
  console.info('> Bot served at port:', port)
})
