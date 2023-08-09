/**
 * 单聊简单代码
 * {"userId": 1, "type":"online"}
 * {"userId": 2, "type":"online"}
 * {"type":"message","fromUserId":1,"toUserId":2,"text":"hello world"}
 */

const WebSocket = require("ws");

const server = new WebSocket.Server({port: 8080});

const clients = new Map();

server.on("connection", (ws) => {
    ws.on("message", (msg) => {
        const message = JSON.parse(msg);

        switch (message.type) {
            case "online": {
                clients.set(message.userId, ws);
                console.log(`用户（${message.userId}）已上线`);
                break;
            }
            case "message": {
                const record = {
                    type: "message",
                    fromUserId: message.fromUserId,
                    toUserId: message.toUserId,
                    text: message.text
                };

                console.log(record);
                
                // 存储消息至数据库 collection.insertOne(record);
                const target = clients.get(message.toUserId);
                if (target != null) {
                    // 若目标用户在线，则发送消息至目标用户
                    target.send(JSON.stringify(record));
                }

                break;
            }
        }
    });

    ws.on("close", () => {
        for (const [key, value] of clients.entries()) {
            if (value === ws) {
                clients.delete(key);
                console.log(`用户（${message.userId}）已下线`);
                break;
            }
        }
    })
})