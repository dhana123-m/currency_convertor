function redirectToConverter() {
  window.location.href = 'converter.html';
}

function redirectToLogin() {
  window.location.href = 'index.html';
}

const apiUrl = 'https://api.frankfurter.app/latest';

function getFlagUrl(code) {
  return `https://flagcdn.com/24x18/${code.slice(0, 2).toLowerCase()}.png`;
}

async function fetchCurrencies() {
  const res = await fetch(`${apiUrl}`);
  const data = await res.json();
  const currencies = Object.keys(data.rates).sort();
  currencies.push('EUR'); // add EUR explicitly as it's base and may be missing

  const fromSelect = document.getElementById('from-currency');
  const toSelect = document.getElementById('to-currency');

  fromSelect.innerHTML = '';
  toSelect.innerHTML = '';

  currencies.forEach(code => {
    const flagUrl = getFlagUrl(code);
    const option1 = document.createElement('option');
    option1.value = code;
    option1.textContent = code;
    option1.style.backgroundImage = `url('${flagUrl}')`;

    const option2 = option1.cloneNode(true);

    fromSelect.appendChild(option1);
    toSelect.appendChild(option2);
  });

  fromSelect.value = 'USD';
  toSelect.value = 'INR';
}

async function convertCurrency() {
  const amount = document.getElementById('amount').value;
  const from = document.getElementById('from-currency').value;
  const to = document.getElementById('to-currency').value;
  const resultBox = document.getElementById('result');

  if (!amount || from === to) {
    resultBox.textContent = 'Enter valid amount and different currencies';
    return;
  }

  try {
    const res = await fetch(`${apiUrl}?amount=${amount}&from=${from}&to=${to}`);
    const data = await res.json();
    resultBox.textContent = `${amount} ${from} = ${data.rates[to].toFixed(2)} ${to}`;
  } catch (err) {
    resultBox.textContent = 'Error fetching conversion.';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const amountInput = document.getElementById('amount');
  const fromSelect = document.getElementById('from-currency');
  const toSelect = document.getElementById('to-currency');

  fetchCurrencies().then(() => {
    amountInput.addEventListener('input', convertCurrency);
    fromSelect.addEventListener('change', convertCurrency);
    toSelect.addEventListener('change', convertCurrency);
  });

  document.querySelector('.switch-btn')?.addEventListener('click', () => {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    convertCurrency();
  });
});
