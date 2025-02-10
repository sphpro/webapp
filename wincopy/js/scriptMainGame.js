
// scriptMainGame.js
// Адаптирован для работы с куками вместо авторизации по токену
console.log("scriptsMainGame.js загружен");
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split('=');
    if (key === name) return value;
  }
  return null;
}

let bal = 0;

function updateBalance() {
  const balance = getCookie('user_balance');
  if (balance) {
    bal = Number(balance);
    return Promise.resolve(bal);
  } else {
    console.error("Balance cookie is not found");
    return Promise.reject("No balance in cookies");
  }
}

function saveBalance(newBalance) {
  setCookie('user_balance', newBalance, 7); // Сохраняем баланс на 7 дней
}


document.addEventListener('DOMContentLoaded', () => {
  updateBalanceFunction();
});

document.addEventListener('DOMContentLoaded', () => {
  // Находим кнопку "Пополнить"
  const depositButton = document.querySelector('.Button_root_eTUot');
  const balanceChangeDiv = document.querySelector('.HeaderUserMenu_balance_changes');

  if (depositButton && balanceChangeDiv) {
    // Добавляем обработчик на кнопку "Пополнить"
    depositButton.addEventListener('click', () => {
      // Переключаем видимость окна изменения баланса
      const isVisible = getComputedStyle(balanceChangeDiv).display === 'block';
      balanceChangeDiv.style.display = isVisible ? 'none' : 'block';
    });
  } else {
    console.error('Кнопка "Пополнить" или блок изменения баланса не найдены');
  }
});

function updateBalanceFunction() {
  updateBalance().then((updatedBal) => {
    const balanceElement = document.querySelector(".HeaderBalanceInfo_balance_Gw9TU");
    if (balanceElement) {
      balanceElement.innerHTML = updatedBal.toLocaleString('ru-RU', { useGrouping: true });
    }

    const iframe = document.getElementById('myIframe');
    if (iframe) {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      const walletElement = iframeDocument.getElementById('walletValue');
      if (walletElement) {
        walletElement.innerHTML = `${updatedBal.toFixed(2)} `;
      } else {
        console.warn("Элемент walletValue внутри iframe не найден.");
      }
    }
  });
}

document.getElementById('changeButtonValue').addEventListener('click', () => {
  const changeValue = document.getElementById('changeInputValue').value;
  const newBalance = Number(changeValue);

  if (!isNaN(newBalance) && newBalance >= 0) {
    saveBalance(newBalance); // Сохраняем баланс в куки
    updateBalanceFunction(); // Обновляем интерфейс

    // Скрываем поле ввода после изменения
    const depositButton = document.querySelector('.Button_root_eTUot');
    const balanceChangeDiv = document.querySelector('.HeaderUserMenu_balance_changes');
    if (depositButton && balanceChangeDiv) {
      balanceChangeDiv.style.display = 'none'; // Скрываем блок
    } else {
      console.warn('Блок изменения баланса не найден.');
    }
  } else {
    alert("Введите корректное значение.");
  }
});

//updateBalanceFunction();
