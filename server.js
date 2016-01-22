// This works fine
// import express from 'express';

// This blows shit up:
// var app = (0, _express.express)();
// TypeError: (0 , _express.express) is not a function
import { express, Router } from 'express';

const app = express();

router.get('/', (request, response) => {
    response.send('Hello, world!');
});

app.listen(3000, () => {
    console.log('ES6 practice up and running on :3000');
});
