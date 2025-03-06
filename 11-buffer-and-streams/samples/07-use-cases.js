// // Compressing API responses for faster times
// import { createServer } from 'node:http';
// import { createGzip } from 'node:zlib';
// import { Readable } from 'node:stream';

// const server = createServer((req, res) => {
//   const readable = Readable.from(['Hello, ', 'this ', 'response ', 'is ', 'compressed!']);

//   res.writeHead(200, { 'Content-Encoding': 'gzip' });

//   readable.pipe(createGzip()).pipe(res);
// });

// server.listen(3000, () => console.log('Server with gzip running on port 3000'));

// // Process CSV files in real time
// import fs from 'node:fs';
// import { parse } from 'csv-parse';

// const stream = fs.createReadStream('./big-data.csv').pipe(parse({ columns: true }));

// stream.on('data', (row) => {
//   console.log('Processing row:', row);
// });

// stream.on('end', () => {
//   console.log('CSV processing complete');
// });

// Server-Side Events 

// import { createServer } from 'node:http';

// const server = createServer((req, res) => {
// 	res.writeHead(200, { 'Content-Type': 'text/event-stream' });

// 	let counter = 0;
// 	const interval = setInterval(() => {
// 		res.write(`data: Server time: ${new Date().toISOString()}\n\n`);
// 		counter++;

// 		if (counter > 5) {
// 			clearInterval(interval);
// 			res.end();
// 		}
// 	}, 1000);
// });

// server.listen(3000, () => console.log('SSE server running on port 3000'));

// Real-Time Chat with WebSockets and Streams
import { createServer } from 'node:http';
import { WebSocketServer } from 'ws';
import { Readable } from 'node:stream';

const server = createServer();
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
	console.log('Client connected');

	// Send a welcome message immediately
	ws.send('Welcome to the chat!');

	// Create a Readable stream to send data periodically
	const stream = new Readable({
		read() {
			let count = 0;
			const interval = setInterval(() => {
				if (count < 5) {
					const message = `Message ${count + 1}`;
					console.log(`Sending: ${message}`);
					ws.send(message);
					count++;
				} else {
					clearInterval(interval);
					ws.close();
				}
			}, 1000);
		}
	});

	// Listen for messages from the client
	ws.on('message', (msg) => {
		console.log('Received:', msg.toString());
		ws.send(`Echo: ${msg.toString()}`); // Echo back the message
	});

	// Handle connection close
	ws.on('close', () => {
		console.log('Client disconnected');
	});
});

server.listen(3000, () => console.log('WebSocket server running on port 3000'));
