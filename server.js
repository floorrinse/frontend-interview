// this file is used by json-server, feel free to edit it
const stockPrices = require('./top100.json');
// const portfolio = require('./portfolio.json');

module.exports = () => {
  return {
    portfolio: [],
    stockPrices: stockPrices
  };
};
