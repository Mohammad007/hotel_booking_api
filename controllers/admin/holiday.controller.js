const Holiday = require("../../models/holiday.model");

// Handler to check if the API is working
const checkData = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is working fine",
  });
};

const getHolidayList = async (req, res) => {
  try {
    const list = await Holiday.find();
    if (!list) {
      res.status(404).json({
        success: false,
        message: "Holiday list empty",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Get holiday list",
        lists:list
      });
    }
  } catch (error) {
    // Handle any errors that occur during the creation process
    res.status(500).json({
      success: false,
      message: "Error list holiday",
      error: error.message,
    });
  }
};

// Handler to add a holiday and calculate price
const addHoliday = async (req, res) => {
  const { adultPrice, childrenPrice, holidayType } = req.body;

  try {
    // Assuming the Holiday model has validation and proper setup
    const addedHoliday = await Holiday.create({
      adultPrice,
      childrenPrice,
      holidayType,
    });

    res.status(201).json({
      success: true,
      message: "Holiday added successfully",
      addedHoliday,
    });
  } catch (error) {
    // Handle any errors that occur during the creation process
    res.status(500).json({
      success: false,
      message: "Error adding holiday",
      error: error.message,
    });
  }
};

// Handler to add a holiday and calculate price
const updateHoliday = async (req, res) => {
  const { adultPrice, childrenPrice, holidayType, id } = req.body;
  // return console.log(req.body,"req.body data getting")
  try {
    // Assuming the Holiday model has validation and proper setup
    const addedHoliday = await Holiday.findByIdAndUpdate(
      { _id: id },
      {
        adultPrice,
        childrenPrice,
        holidayType,
      }
    );

    res.status(201).json({
      success: true,
      message: "Holiday update successfully",
      addedHoliday,
    });
  } catch (error) {
    // Handle any errors that occur during the creation process
    res.status(500).json({
      success: false,
      message: "Error adding holiday",
      error: error.message,
    });
  }
};

module.exports = {
  getHolidayList,
  addHoliday,
  updateHoliday,
  checkData,
};
