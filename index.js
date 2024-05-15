const jsonServer = require('json-server')

const CDServer = jsonServer.create()

const middleware = jsonServer.defaults()

const route = jsonServer.router('db.json')

const PORT = 3000 || process.env.PORT


CDServer.use(middleware)
CDServer.use(route)
CDServer.listen(PORT,()=>{
  console.log(`Emp App Server Started at port ${PORT} and waiting for client request`);
})