// Ensure the document is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", function () {
  // Class definition for budget items (income and expenses)
  class BudgetItem {
    constructor(name, amount, recurring) {
      this.name = name; // Name of the item
      this.amount = amount; // Amount as a number
      this.recurring = recurring; // Boolean indicating if it's recurring
    }
  }

  // Initial set of income sources
  const initialIncomes = [
    new BudgetItem("Salary", 4000, true),
    new BudgetItem("Freelancing", 1500, false),
    new BudgetItem("Investment Returns", 300, true),
    new BudgetItem("Rental Income", 2500, true),
    new BudgetItem("Part-Time Job", 1200, false),
  ];

  // Function to display income and expense items and calculate disposable income
  function displayItems() {
    // Retrieve items from session storage and parse them into JavaScript objects
    let incomeItems =
      JSON.parse(sessionStorage.getItem("incomes")) || initialIncomes;
    let expenseItems = JSON.parse(sessionStorage.getItem("expenses")) || [];

    // Accessing HTML elements to display the items
    let incomeList = document.getElementById("incomeList");
    let expenseList = document.getElementById("expenseList");

    // Resetting inner HTML for fresh display
    incomeList.innerHTML = "<h2>Incomes</h2>";
    expenseList.innerHTML = "<h2>Expenses</h2>";

    // Loop through each item in incomes and expenses to display them
    incomeItems.forEach((item) => {
      incomeList.innerHTML += `<p>${item.name}: $${item.amount} - Recurring: ${item.recurring}</p>`;
    });
    expenseItems.forEach((item) => {
      expenseList.innerHTML += `<p>${item.name}: $${item.amount} - Recurring: ${item.recurring}</p>`;
    });

    // Calculate total income and expenses
    let totalIncome = incomeItems.reduce((sum, item) => sum + item.amount, 0);
    let totalExpenses = expenseItems.reduce(
      (sum, item) => sum + item.amount,
      0
    );
    let disposableIncome = totalIncome - totalExpenses;

    // Display summary of disposable income
    document.getElementById(
      "summary"
    ).innerHTML = `<h2>Disposable Income: $${disposableIncome}</h2>`;

    // Prompt for user to decide how much to save from the disposable income
    let savings = prompt(
      "How much of your disposable income would you like to save?"
    );
    if (savings) {
      disposableIncome -= parseFloat(savings);
      alert(`Total disposable income after savings: $${disposableIncome}`);
    }
  }

  // Function to add new income or expense item
  function addItem(type) {
    let name = prompt(`Enter the name of the ${type}:`);
    let amount = prompt(`Enter the amount of the ${type}:`);
    let recurring = confirm("Is this a recurring " + type + "?");

    let newItem = new BudgetItem(name, parseInt(amount), recurring);
    let items = JSON.parse(sessionStorage.getItem(type + "s")) || [];
    items.push(newItem);
    sessionStorage.setItem(type + "s", JSON.stringify(items));
    displayItems();
  }

  // Initial display of budget items and summary
  displayItems();

  // Delayed prompts for adding new items to allow the initial display to render first
  setTimeout(() => {
    if (confirm("Do you want to add an income?")) {
      addItem("income");
      if (confirm("Do you want to add an expense?")) {
        addItem("expense");
      }
    } else if (confirm("Do you want to add an expense?")) {
      addItem("expense");
      if (confirm("Do you want to add an income?")) {
        addItem("income");
      }
    }
  }, 500);
});
