import Server from './core/Server'
import ChatModule from './chat/ChatModule'
import UserModule from './core/user/UserModule'

let server = new Server(8080)

server.addModule(new ChatModule())
server.addModule(new UserModule())

server.listenForEvents()