
const BookingModal = require("../../models/booking.model");

/**
 * Function to add a new user holiday plan
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Next middleware function
 */
const addUserHolidayPlan = async (req, res, next) => {
    const { adults = 0, children = 0, days, holidayType } = req.body;
    
    // Removed the unnecessary return and added comments
    // Calculate prices based on holidayType
    let adultPrice, childPrice;

    if (holidayType === 'winter') {
        adultPrice = 6;
        childPrice = 2;
    } else if (holidayType === 'summer') {
        adultPrice = 4;
        childPrice = 2;
    } else {
        return res.status(400).json({ statusCode: 400, message: 'Invalid holiday type' });
    }
    
    // Calculate prices
    const adultsPrice = adultPrice * adults * days;
    const childrenPrice = childPrice * children * days;
    const totalPrice = adultsPrice + childrenPrice;

    // Check for valid input
    if (adults <= 0 || children <= 0 || days <= 0) {
        return res.status(400).json({ statusCode: 400, message: 'Invalid input values' });
    }

    // Create booking data in the database
    const bookingData = await BookingModal.create({
        adults, children, days, price: { totalPrice, adultsPrice, childrenPrice }, holidayType
    });

    // Respond with success and calculated prices
    res.json({ statusCode: 201, message: 'Price added and calculated', totalPrice, bookingData });
};

const getAllBooking = async (req,res,next) =>{
  const allBooking = await BookingModal.find();

  res.status(200).json({
    success: true,
    message: "Get All Booking list successfully",
    allBooking
});
}

module.exports = {
    addUserHolidayPlan,
    getAllBooking
};