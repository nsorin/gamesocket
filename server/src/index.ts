import Server from './core/Server'
import ChatModule from './chat/ChatModule'
import UserModule from './core/user/UserModule'

let server = new Server(8080)

// Register all modules
server.addModule(new ChatModule())
server.addModule(new UserModule())

// Start the server
server.listenForEvents()