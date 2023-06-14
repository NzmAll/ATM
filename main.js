let balance = 1000;

function withdraw() {
  const amount = parseFloat(prompt("Enter the amount you want to withdraw:"));

  if (isNaN(amount) || amount <= 0) {
    alert("Holds invalid. Please enter a positive value.");
    return;
  }

  if (amount > balance) {
    alert("Insufficient balance.");
    return;
  }

  balance -= amount;
  alert(`${amount} money was withdrawn. Amount: ${balance} TL`);
}

function deposit() {
  const amount = parseFloat(prompt("Enter the amount you want to deposit:"));

  if (isNaN(amount) || amount <= 0) {
    alert("Holds invalid. Please enter a positive value.");
    return;
  }

  balance += amount;
  alert(`${amount} money was deposited. Amount: ${balance} TL`);
}

withdraw();
deposit();
