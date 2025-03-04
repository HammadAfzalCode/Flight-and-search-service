const { StatusCodes } = require("http-status-codes");
const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "Api is working fine",
    error: {},
    data: {},
  });
};
module.exports = { info };
