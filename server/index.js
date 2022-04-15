const app = require('./app');

const { API_PORT, PORT } = process.env;
const port = PORT || API_PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});