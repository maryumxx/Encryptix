document.getElementById('calculatorForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstnum = parseFloat(document.getElementById('firstnum').value);
  const secondnum = parseFloat(document.getElementById('secondnum').value);
  const operator = document.getElementById('operators').value;
  let result;

  switch(operator) {
    case 'Addition':
      result = firstnum + secondnum;
      break;
    case 'Subtraction':
      result = firstnum - secondnum;
      break;
    case 'Multiplication':
      result = firstnum * secondnum;
      break;
    case 'Division':
      result = firstnum / secondnum;
      break;
    case 'Modulus':
      result = firstnum % secondnum;
      break;
    default:
      result = 'Invalid Operator';
  }

  document.getElementById('result').textContent = `Your value is: ${result}`;
});
