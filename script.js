let total = 0;

const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const addButton = document.getElementById("add-btn");
const expenseList = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total");

addButton.addEventListener("click", function () {
  const name = expenseNameInput.value.trim();
  const amount = Number(expenseAmountInput.value);

  if (name === "" || amount <= 0) {
    alert("Please enter valid expense details.");
    return;
  }

  // Create list item
  const listItem = document.createElement("li");

  // Create text span
  const textSpan = document.createElement("span");
  textSpan.textContent = `${name} - KES ${amount}`;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  // Delete action
  deleteBtn.addEventListener("click", function () {
    expenseList.removeChild(listItem);
    total -= amount;
    totalDisplay.textContent = total;
  });

  // Add elements to list item
  listItem.appendChild(textSpan);
  listItem.appendChild(deleteBtn);

  // Add list item to list
  expenseList.appendChild(listItem);

  // Update total
  total += amount;
  totalDisplay.textContent = total;

  // Clear inputs
  expenseNameInput.value = "";
  expenseAmountInput.value = "";
});
