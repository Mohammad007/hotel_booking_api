const express = require('express')
const router = express.Router()
const HolidayController = require('../controllers/admin/holiday.controller')

/**
 * @swagger
 * tags:
 *   name: API Status
 *   description: Check API Status
 */

/**
 * @swagger
 * /api/check:
 *   get:
 *     summary: check status of api
 *     tags: [API Status]
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/check', HolidayController.checkData);

/**
 * @swagger
 * tags:
 *   name: Admin Holiday
 *   description: Holiday Api for Admin
 */

/**
 * @swagger
 * /api/getHolidayList:
 *   get:
 *     summary: Get list holiday
 *     tags: [Admin Holiday]
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/getHolidayList', HolidayController.getHolidayList);

/**
 * @swagger
 * /api/addHoliday:
 *   post:
 *     summary: Add holiday
 *     tags: [Admin Holiday]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               adultPrice:
 *                 type: number
 *               childrenPrice:
 *                 type: number
 *               holidayType:
 *                 type: string
 *             example:
 *               adultPrice: 4
 *               childrenPrice: 2
 *               holidayType: summer
 *     responses:
 *       200:
 *         description: Successful response
 */
router.post('/addHoliday', HolidayController.addHoliday);

/**
 * @swagger
 * /api/updateHoliday:
 *   put:
 *     summary: Update holiday
 *     tags: [Admin Holiday]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               adultPrice:
 *                 type: number
 *               childrenPrice:
 *                 type: number
 *               holidayType:
 *                 type: string
 *             example:
 *               id: 64f0d225b47f86ac5981465b
 *               adultPrice: 2
 *               childrenPrice: 1
 *               holidayType: winter
 *     responses:
 *       200:
 *         description: Successful response
 */
router.put('/updateHoliday', HolidayController.updateHoliday);



module.exports = router;
