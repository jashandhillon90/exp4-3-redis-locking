import express from 'express';
import { bookSeatController } from './booking.controller.js';

const router = express.Router();

// Booking seat route
router.post('/book/seat/:seatId', bookSeatController);

export default router;