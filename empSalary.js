let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  function employeeSalary(salaries) {
    let sum = 0;
    let min = Infinity;
    let max = 0;
  
    for (const salary of Object.values(salaries)) {
      sum = sum+salary;
      min = Math.min(min, salary);
      max = Math.max(max, salary);
    }
  
    return {
      sum: sum,
      avg: sum / Object.keys(salaries).length,
      min: min,
      max: max
    };
  }
  
  let result = employeeSalary(salaries);
  console.log(result);