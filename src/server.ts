import { app } from "./app";
require('dotenv').config({path:__dirname+'/./.env'})

const PORT = process.env.API_PORT;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));