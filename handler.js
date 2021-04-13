'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      "Hello from serverless"
    ),
  };
};

module.exports.greet = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      "greetings from serverless"
    ),
  };
};
