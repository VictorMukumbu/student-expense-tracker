let total = 0;
const totalAmountDisplay = document.getElementById("totalAmount");
// Select elements
const expenseNameInput = document.getElementById("expenseName");
const expenseAmountInput = document.getElementById("expenseAmount");
const addExpenseBtn = document.getElementById("addExpenseBtn");
const expenseList = document.getElementById("expenseList");

// 1. When the button is clicked
addExpenseBtn.addEventListener("click", function () {
  
  // 2. Get input values
  const expenseName = expenseNameInput.value;
  const expenseAmount = expenseAmountInput.value;

  // 3. Check if inputs are empty
  if (expenseName === "" || expenseAmount === "") {
    alert("Please enter both expense name and amount.");
    return;
  }

  // 4. Create a new list item
  const listItem = document.createElement("li");
  listItem.textContent = expenseName + " - KES " + expenseAmount;

  // 5. Append to the list
  expenseList.appendChild(listItem);
  // Update total
  total += parseFloat(expenseAmount);
  totalAmountDisplay.textContent = "KES " + total.toFixed(2);

  // 6. Clear input fields
  expenseNameInput.value = "";
  expenseAmountInput.value = "";
});
