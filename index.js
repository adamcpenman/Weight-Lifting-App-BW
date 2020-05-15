require('dotenv').config();
const server = require("./server.js");

const PORT = process.env.PORT || 4000;
if (!module.parent) {
server.listen(PORT, () => {
    console.log(`\n** Server running on port: http://localhost:${PORT} **\n`);
})
}