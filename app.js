// var fs = require("fs")

// fs.readFile('input.txt', function (err, data) {
//     if (err) {
//         return console.error(err)
//     }
//     console.log(data.toString())
// })

// console.log("Program Ended")

// var http = require("http")
// http.createServer(function (request, response) {
//     // Send the HTTP header
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, {'ConContent-Typetr': 'text/plain'})

//     // Send the response body as "Hello World"
//     response.end('Hello World\n')
// }).listen(8081)

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/')

// Import events module

// var events = require('events')
// var fs = require('fs')

// // Create an eventEmitter object
// var eventEmitter = new events.EventEmitter()

// // Bind event and event handler as follows
// var connectHandler = function connected() {
//     console.log('connection succesful.')
//     // Fire the data_received event
//     eventEmitter.emit('data_received')
// }

// // Bind the connnection event with the handler
// eventEmitter.on('connection', connectHandler)

// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function () {
//     fs.readFile('input.txt', function (err, data) {
//         if (err) {
//             console.log(err.stack)
//             return
//         }
//         console.log(data.toString())
//     })
// })

// // Fire the connection event
// eventEmitter.emit('connection')
// console.log("Program Ended")

// var events = require('events')
// var eventEmitter = new events.EventEmitter()

// // listener #1
// var listener1 = function listener1() {
//     console.log('listener1 executed')
// }

// // listener #2
// var listener2 = function listener2() {
//     console.log('listener2 executed')
// }

// // Bind the connection event with the listener1 function
// eventEmitter.addListener('connection', listener1)

// // Bind the connection event with the listener2 function
// eventEmitter.on('connection', listener2)

// var evnetListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection')
// console.log(evnetListeners + " Listner(s) listening to connection event")

// // Fire the connection event
// eventEmitter.emit('connection')

// // Remove the binding of the listener1 function
// eventEmitter.removeListener('connection', listener1)
// console.log("Listener1 will not listen now")

// // Fire the connection event
// eventEmitter.emit('connection')

// evnetListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection')

// console.log(evnetListeners + " Listner(s) listening to connection event")
// console.log("Program Ended")

// var fs = require("fs")

// // Asynchronous read
// fs.readFile('input.txt', function (err, data) {
//    if (err) {
//       return console.error(err)
//    }
//    console.log("Asynchronous read: " + data.toString())
// })

// // Synchronous read
// var data = fs.readFileSync('input.txt')
// console.log("Synchronous read: " + data.toString())

// console.log("Program Ended")

// var fs = require('fs')

// fs.readFile('input.txt', function (err, data) {
//     if (err) {
//         return console.error(err)
//     }
//     console.log("Asynchronous read: " + data.toString())
// })


// console.log("Going to open file!")
// fs.open('input.txt', 'r+', function (err, fd) {
//     if (err) {
//         return console.error(err)
//     }
//     console.log("File opened successfully!")
// })

// console.log("Going to get file info!")

// fs.stat('input.txt', function (err, stats) {
//     if (err) {
//         return console.error(err)
//     }

//     console.log(stats)
//     console.log("Got file info successfully!")

//     // Check file type
//     console.log("isFile ? " + stats.isFile())
//     console.log("isDirectory ? " + stats.isDirectory())
// })

// console.log("Going to write into existing file")
// fs.writeFile('input.txt', 'Simply Easy Learning', function (err) {
//     if (err) {
//         return console.error(err)
//     }

//     console.log("Data written successfully!")
//     console.log("Let's read newly written data")
//     fs.readFile('input.txt', function (err, data) {
//         if (err) {
//             return console.error(err)
//         }
//         console.log("Asynchronous read: " + data.toString())
//     })
// })

// var buf = new Buffer(1024)
// console.log("Going to open an existing file")
// fs.open('input.txt', 'r+', function (err, fd) {
//     if (err) {
//         return console.error(err)
//     }
//     console.log("File opened successfully!")
//     console.log("Going to read the file")

//     fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//         if (err) {
//             console.error(err)
//         }
//         console.log(bytes + " bytes read")

//         // Print only read bytes to avoid junk.
//         if (bytes > 0) {
//             console.log(buf.slice(0, bytes).toString())
//         }

//         // Close the opened file.
//         fs.close(fd, function (err) {
//             if (err) {
//                 console.log(err)
//             }
//             console.log("File closed successfully.")
//         })
//     })
// })

// Shift Option F

// var buf = new Buffer(1024)

// console.log("Going to open an existing file")
// fs.open('input.txt', 'r+', function (err, fd) {
//     if (err) {
//         return console.error(err)
//     }

//     console.log("File opened successfully!")
//     console.log("Going to read the same file")

//     // Truncate the opened file.
//     fs.ftruncate(fd, 10, function (err) {
//         if (err) {
//             console.log(err)
//         }
//         console.log("File truncated successfully.")
//         console.log("Going to read the same file")

//         fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//             if (err) {
//                 console.log(err)
//             }
    
//             // Print only read bytes to avoid junk.
//             if (bytes > 0) {
//                 console.log(buf.slice(0, bytes).toString())
//             }
    
//             // Close the opened file
//             fs.close(fd, function (err) {
//                 if (err) {
//                     console.log(err)
//                 }
//                 console.log("File closed successfully.")
//             })
//         })
//     })

// })

// //Delete a File
// console.log("Going to delete an existing file")
// fs.unlink('input.txt', function(err) {
//    if (err) {
//       return console.error(err)
//    }
//    console.log("File deleted successfully!")
// })

// Create a Directory
// console.log("Going to create directory /tmp/test")
// fs.mkdir('/tmp/test', function (err) {
//     if (err) {
//         console.error(err)
//     }
//     console.log("Directory created successfully")
// })

// Read a Directory
// console.log("Going to read directory /tmp")
// fs.readdir("/tmp/", function (err, files) {
//     if (err) {
//         return console.error(err)
//     }
//     files.forEach( function (file) {
//         console.log( file )
//     })
// })

// Remove a Directory
// console.log("Going to delete directory /tmp/test")
// fs.rmdir("/tmp/test", function (err) {
//     if (err) {
//         return console.error(err)
//     }
//     console.log("Going to read directory /tmp")

//     fs.readdir("/tmp/", function (err, files) {
//         if (err) {
//             return console.error(err)
//         }
//         files.forEach( function (file) {
//             console.log(file)
//         })
//     })
// })

// console.log("Program Ended")

// function printHello() {
//     console.log( "Hello, World!")
//  }
 
// //  Now call above function after 2 seconds
//  var t = setTimeout(printHello, 2000)
 
//  // Now clear the timer
//  clearTimeout(t)

// var http = require('http')
// var fs = require('fs')
// var url = require('url')

// // Create a server
// http.createServer( function (request, response) {
//     // Parse the request containing file name
//     var pathname = url.parse(request.url).pathname

//     // Print the name of the file for which request is made.
//     console.log("Request for " + pathname + " received.")

//     // Read the requested file content from file system
//     fs.readFile(pathname.substr(1), function (err, data) {
//         if (err) {
//             console.log(err)
//             // HTTP Status: 404 : NOT FOUND
//             // Content Type: text/plain
//             response.writeHead(404, {'Content-Type': 'text/html'}) 
//         } else {
//             // Page found
//             // HTTP Status: 200 : OK
//             // Content Type: text/plain
//             response.writeHead(200, {'Content-Type': 'text/html'})

//             // Write the content of tne file to response body
//             response.write(data.toString())
//         }
//         // Send the response body
//         response.end()
//     })
// }).listen(8081)

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/')

// const express = require('express')
// var app = express()

// // This responds with "Hello World" on the homepage
// app.get('/', function (req, res) {
//     console.log("Got a GET request for the homepage")
//     res.send('Hello GET')
// })

// // This responds a POST request for the homepage
// app.post("/", function (req, res) {
//     console.log("Got a POST request for the homepage")
//     res.send('Hello POST')
// })

// // This responds a DELETE request for the /del_user page.
// app.delete('/del_user', function (req, res) {
//     console.log("Got a DELETE request for /del_user")
//     res.send('Hello DELETE')
// })

// // This responds a GET request for the /list_user page.
// app.get('/list_user', function (req, res) {
//     console.log("Got a GET request for /list_user")
//     res.send('Page Listing')
// })

// // This responds a GET request for abcd, abxcd, ab123cd, and so on
// app.get('/ab*cd', function (req, res) {
//     console.log("Got a GET request for /ac*cd")
//     res.send('Page Pattern Match')
// })

// var server = app.listen(8081, function () {
//     var host = server.address().address
//     var port = server.address().port
//     console.log("Example app listening at http://%s:%s", host, port)
// })

// const express = require('express')
// var app = express()
// var bodyParser = require('body-parser')

// // Create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(express.static('public'))

// app.get('/process_get', function (req, res) {
//     // Prepare output in JSON format
//     response = {
//         first_name:req.query.first_name,
//         last_name:req.query.last_name
//     }
//     console.log(response)
//     res.end(JSON.stringify(response))
// })

// app.post('/process_post', urlencodedParser, function (req, res) {

//     // Prepare output in JSON format
//     response = {
//         first_name:req.body.first_name,
//         last_name:req.body.last_name
//     }
//     console.log(response)
//     res.end(JSON.stringify(response))
// })

// var server = app.listen(8081, function () {
//     var host = server.address().address
//     var port = server.address().port
//     console.log("Example app listening at http://%s:%s", host, port)
// })


// File Upload
var express = require('express')
var app = express()
var fs = require('fs')

var bodyParser = require('body-parser')
var multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "-" + Date.now() + file.originalname)
    }
})
var upload = multer({ 
    storage: storage
}).single('avatar')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/file_upload', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file.")
        }
        res.end("File is uploaded")
    })
})

app.listen(8081)
console.log("Example app listening at http://127.0.0.1:8081")