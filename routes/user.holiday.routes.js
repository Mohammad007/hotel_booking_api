const express = require('express');
const router = express.Router();
const HolidayController = require('../controllers/user/userHoliday.controller');

/**
 * @swagger
 * tags:
 *   name: User Booking
 *   description: User Booking Api
 */

/**
 * @swagger
 * /api/addNewBooking:
 *   post:
 *     summary: Add holiday
 *     tags: [User Booking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               adults:
 *                 type: number
 *               days:
 *                 type: number
 *               children:
 *                 type: number
 *               holidayType:
 *                 type: string
 *             example:
 *               adults: 4
 *               children: 2
 *               days: 1
 *               holidayType: summer
 *     responses:
 *       200:
 *         description: Successful response
 */
router.post('/addNewBooking', HolidayController.addUserHolidayPlan);

/**
 * @swagger
 * /api/getBooking:
 *   get:
 *     summary: Get Booking List
 *     tags: [User Booking]
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/getBooking', HolidayController.getAllBooking);



module.exports = router
