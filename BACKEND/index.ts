import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './utils/connectDatabase';
import userRouter from './routes/userRouter';
import { errorHandler, notFoundErr } from './middleware/errorHandler';
import { protect, restricTo } from './controllers/userController';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
dotenv.config();

connectDatabase('TriNit');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:5173', process.env.FRONTEND_URL as string],
    credentials: true,
  })
);

const port = process.env.PORT || 3000;
app.use('/public', express.static(path.join(__dirname, 'public')));
// app.use("/api/users", userRouter);
// app.use("/api/parties", partyRouter);
// app.use("/api/products", productRouter);
// app.use("/api/timeOffice", timeOfficeRouter);
// app.use("/api/weights", weightsRouter);
// app.use("/api/vouchers", voucherRouter);
// app.use("/api/payments", accountantRouter);
// app.use("/api/report", reportRouter);
app.use('/api/users', userRouter);

app.use('/test', protect, restricTo('ADMIN'), (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Protected route',
  });
});

app.use(notFoundErr);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
