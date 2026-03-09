let total = 0;
const totalAmountDisplay = document.getElementById("totalAmount");
// Select elements
const expenseNameInput = document.getElementById("expenseName");
const expenseAmountInput = document.getElementById("expenseAmount");
const addExpenseBtn = document.getElementById("addExpenseBtn");
const expenseList = document.getElementById("expenseList");
const expenseCategoryInput = document.getElementById("expenseCategory");

// 1. When the button is clicked -add expense function
const addExpense = () => {
  // 2. Get input values
  const expenseName = expenseNameInput.value.trim();
  const expenseAmount = expenseAmountInput.value.trim();
  const expenseCategory = expenseCategoryInput.value;

  // 3. Check if inputs are empty
  if (expenseName === "" || expenseAmount === ""|| expenseCategory === "") {
    alert("Please enter expense name , amount and category.");
    return;
  }
  if (expenseAmount <= 0) {
    alert("Amount must be greater than zero.");
    return;
  }

  // 4. Create a new list item
  const listItem = document.createElement("li");
  listItem.textContent = `${expenseName} - KES ${expenseAmount} (${expenseCategory})`;

  // 5. Append to the list
  expenseList.appendChild(listItem);
  // Update total
  total += parseFloat(expenseAmount);
  totalAmountDisplay.textContent = "KES " + total.toFixed(2);

  // 6. Clear input fields
  expenseNameInput.value = "";
  expenseAmountInput.value = "";
  expenseCategoryInput.value = "";

}
// 7. Add event listener to the button-call the addExpense function when clicked
addExpenseBtn.addEventListener("click", addExpense);
