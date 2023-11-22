const express = require('express');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const userRouter = require('./router/userRoutes');
// const postRouter = require('./router/postRoutes');
// const commentRouter = require('./router/commentRoutes');

app.use('/api/v1/users', userRouter);
// app.use('/api/v1/posts', postRouter);
// app.use('/api/v1/comments', commentRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});