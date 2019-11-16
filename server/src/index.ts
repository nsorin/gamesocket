import Server from './core/Server'
import ChatModule from './chat/ChatModule'

let server = new Server(8080)

server.addModule(new ChatModule())
server.listenForEvents()