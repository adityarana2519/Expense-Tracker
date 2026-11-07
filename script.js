let expenses = [];

function addExpense() {

    let title = document.getElementById("title").value;
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;

    if (title === "" || amount <= 0 || category === "") {
        alert("Please fill all fields correctly");
        return;
    }

    let expense = {
        title: title,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";

    showExpenses();
}

function showExpenses() {

    let output = "";
    let total = 0;

    for (let expense of expenses) {

        output += `
            <div class="expense">
                <div>
                    <b>${expense.title}</b>
                    <p>${expense.category}</p>
                    <p>₹${expense.amount}</p>
                </div>

                <button class="delete-btn" onclick="deleteExpense(${expenses.indexOf(expense)})">
                    Delete
                </button>
            </div>
        `;

        total += expense.amount;
    }

    document.getElementById("expenseList").innerHTML = output;

    document.getElementById("total").innerText = "₹" + total;
}

function deleteExpense(index) {

    expenses.splice(index, 1);

    showExpenses();
}
