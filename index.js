   //require thu vien express
   var express = require("express");
   var app = express();
   app.use(express.static("public"));

   //
   app.set("view engine","ejs");
   app.set("views","./views");

   var server = require("http").Server(app);
   //cau hinh socket.io
   var io = require("socket.io")(server);
   server.listen(8888);

   //lang nghe xem co ai connect ko dung thuat ngu "on" cap socket
   io.on("connection",function(socket){
   	console.log('Co nguoi ket noi:' + socket.id ); 
      
      //server lắng nghe sự kiện (2)
      socket.on("Client-send_mau",function(data){
          console.log(data);
      //server gửi yêu cầu (emit) cho các trang(3)
          io.sockets.emit("Server-send-mau", data);
      });    
   });
   //tao route
   app.get('/',function(req , res){
   	res.render("trangchu");
   });




