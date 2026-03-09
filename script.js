let total = 0;

let categoryTotals = {
  Food: 0,
  Transport: 0,
  "Airtime/Data": 0,
  Bills: 0,
  Other: 0
};

const totalAmountDisplay = document.getElementById("totalAmount");

const expenseNameInput = document.getElementById("expenseName");
const expenseAmountInput = document.getElementById("expenseAmount");
const expenseCategoryInput = document.getElementById("expenseCategory");
const addExpenseBtn = document.getElementById("addExpenseBtn");
const expenseList = document.getElementById("expenseList");

const foodTotalDisplay = document.getElementById("foodTotal");
const transportTotalDisplay = document.getElementById("transportTotal");
const airtimeTotalDisplay = document.getElementById("airtimeTotal");
const billsTotalDisplay = document.getElementById("billsTotal");
const otherTotalDisplay = document.getElementById("otherTotal");

function updateTotalUI() {
  totalAmountDisplay.textContent = `KES ${total.toFixed(2)}`;
}

function updateCategoryTotalsUI() {
  foodTotalDisplay.textContent = `KES ${categoryTotals["Food"].toFixed(2)}`;
  transportTotalDisplay.textContent = `KES ${categoryTotals["Transport"].toFixed(2)}`;
  airtimeTotalDisplay.textContent = `KES ${categoryTotals["Airtime/Data"].toFixed(2)}`;
  billsTotalDisplay.textContent = `KES ${categoryTotals["Bills"].toFixed(2)}`;
  otherTotalDisplay.textContent = `KES ${categoryTotals["Other"].toFixed(2)}`;
}

function addExpense() {
  const expenseName = expenseNameInput.value.trim();
  const expenseAmount = Number(expenseAmountInput.value);
  const expenseCategory = expenseCategoryInput.value;

  if (
    expenseName === "" ||
    expenseAmountInput.value.trim() === "" ||
    expenseCategory === ""
  ) {
    alert("Please enter expense name, amount and category.");
    return;
  }

  if (isNaN(expenseAmount) || expenseAmount <= 0) {
    alert("Amount must be greater than zero.");
    return;
  }

  const listItem = document.createElement("li");

  const nameSpan = document.createElement("span");
  nameSpan.classList.add("name");
  nameSpan.textContent = expenseName;

  const categorySpan = document.createElement("span");
  categorySpan.classList.add("category");
  categorySpan.textContent = expenseCategory;

  const amountSpan = document.createElement("span");
  amountSpan.classList.add("amount");
  amountSpan.textContent = `KES ${expenseAmount.toFixed(2)}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function () {
    total -= expenseAmount;
    categoryTotals[expenseCategory] -= expenseAmount;

    updateTotalUI();
    updateCategoryTotalsUI();

    listItem.remove();
  });

  listItem.appendChild(nameSpan);
  listItem.appendChild(categorySpan);
  listItem.appendChild(amountSpan);
  listItem.appendChild(deleteBtn);

  expenseList.appendChild(listItem);

  total += expenseAmount;
  categoryTotals[expenseCategory] += expenseAmount;

  updateTotalUI();
  updateCategoryTotalsUI();

  expenseNameInput.value = "";
  expenseAmountInput.value = "";
  expenseCategoryInput.value = "";
}

addExpenseBtn.addEventListener("click", addExpense);