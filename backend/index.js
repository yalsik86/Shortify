import { app } from "./app.js";
import connectDB from "./config/connectDB.js";

const port = process.env.PORT || 4000;

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server Running on port: ${port}`);
    });
})
.catch((error) => {
    console.error(`Server connection failed:`, error.message);
});