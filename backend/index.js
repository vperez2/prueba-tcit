import app from "./app.js";
import { sequelize } from "./database.js";
import "./models/Post.js";

const port = 4000

async function main() {
    try {
        await sequelize.sync();
        app.listen(port);
        console.log(`Server listening on port ${port}`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();