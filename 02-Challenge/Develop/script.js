// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

addEmployeesBtn.addEventListener(`click`, function(event) {
  event.preventDefault();

  trackEmployeeData();
});



// Collect employee data
const collectEmployees = function() {
  const employeesArray = [];

  let addAnotherEmployee = true;

  while (addAnotherEmployee) {
    const firstName = prompt(`Enter the first name of employee:`);
    const lastName = prompt(`Enter the last name of employee:`);
    const salary = parseFloat(prompt(`Enter the salary of employee:`));

    if (firstName && lastName && !isNaN(salary)) {
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employeesArray.push(employee);
  }else {
    alert('Invalid input. Please enter valid employee data.')
  }
    const addMore = confirm(`Do you wnat to add another employee?`);
    addAnotherEmployee = addMore;
  }
  return employeesArray;
  // TODO: Get user input to create and return an array of employee objects
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  if (employeesArray.length ===0) {
    console.log(`No employees added.`);
    return;
  }

  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;
  console.log(`Average Salary: ${averageSalary.toLocaleString("en-US", { style: "currency", currency: "USD" })}`);
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
    if (employeesArray.length === 0) {
      console.log('No employees added.');
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
    
    console.log('Random Employee:');
    console.log('First Name:', randomEmployee.firstName);
    console.log('Last Name:', randomEmployee.lastName);
    console.log('Salary:', randomEmployee.salary.toLocaleString("en-US", { style: "currency", currency: "USD" }));
  }


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
