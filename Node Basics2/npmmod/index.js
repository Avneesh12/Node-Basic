const c = require("color-console");
const validator = require("email-validator");

// c.red("This is red");


const email = validator.validate("avnish@gmail");
{email ? c.green(email) : c.red(email)};
