const stream = require("stream");
var reader = new stream.Readable();

reader.push("a-z");
reader.push(null);
reader.pipe(process.stdout);