
const calculateSalesTax = function(salesData, taxRates) {
  const results = {};
  for (const company of salesData) {
    if (!results[company.name]) {
      results[company.name] = {
        totalSales: processSales(company.sales),
        totalTaxes: processSales(company.sales) * taxRates[company.province]
      };
    } else {
      results[company.name]["totalSales"] += processSales(company.sales);
      results[company.name]["totalTaxes"] += processSales(company.sales) * taxRates[company.province]
    }
    
  }
  return results;
};


const processSales = (sales) => sales.reduce((prevVal,currVal) => prevVal + currVal, 0);

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

console.log(calculateSalesTax(companySalesData, salesTaxRates));