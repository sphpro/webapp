let lastBettingTime = 0; 
let tokenIndex = 0;



const tokens = [
    "demo",
    "demo",
    "demo"
];

function getAuthorizationToken() {
    const token = tokens[tokenIndex];
    tokenIndex = (tokenIndex + 1) % tokens.length;
    return `Bearer ${token}`;
}

function getRan(min, max) {
    return Math.random() * (max - min) + min;
}

async function checkSignal() {
    let randomNumber1 = getRan(1.1, 5.0).toFixed(2);
    const url = 'https://crash-gateway-orc-cr.gamedev-tech.cc/state?id_n=01961b11-d5d3-7ddc-a24c-0a358a2f2275&id_i=1';
    const response = await fetch(url, {
        headers: {
            'Authorization': getAuthorizationToken()
        }
    });
    const data = await response.json();
    const state = data.current_state;


    let responseText = document.getElementById('responseText');
    if (!responseText) {
        // console.error('Element with ID responseText not found.');
        return;
    }

    if (state === "betting" && Date.now() - lastBettingTime > 5000) {
        let resultText = `${randomNumber1}x`;
        document.getElementById("responseText").textContent = resultText;
        localStorage.setItem('resultText', resultText);
        responseText.className = 'text betting';        
        lastBettingTime = Date.now();
    } else if (state === "ending") {
        responseText.textContent = "Waiting..";
        responseText.className = 'text fly';
    } 
}

function fetchDataAndUpdate() {
    const url = 'https://crash-gateway-orc-cr.gamedev-tech.cc/state?id_n=01961b11-d5d3-7ddc-a24c-0a358a2f2275&id_i=1';
    fetch(url, {
        headers: {
            'Authorization': getAuthorizationToken()
        }
    })
        .then(response => response.json())
        .then(data => {
            const kef = parseFloat(data.current_coefficients);
            updateCoefficients(kef);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function updateCoefficients(coefficients) {
    const coefficientsDiv = document.getElementById('coefficients');
    if (!coefficientsDiv) {
        // console.error('Element with ID coefficients not found.');
        return;
    }

    if (coefficients !== 1) {
        coefficientsDiv.innerText = `x${coefficients}`; 
        coefficientsDiv.classList.remove('smallt');
        coefficientsDiv.classList.add('kif');
    } 
}

fetchDataAndUpdate();
setInterval(fetchDataAndUpdate, 800);
let intervalId = setInterval(checkSignal, 800);
checkSignal();

let isFixed = false; // Флаг для блокировки изменения высоты

function adjustIframeHeight() {
    const iframe = document.getElementById('responsive-iframe');
    const screenHeight = window.innerHeight;

    // Если высота экрана меньше 800, фиксируем высоту и блокируем изменения
    if (screenHeight < 820 && !isFixed) {
        iframe.style.height = `${screenHeight}px`; // Устанавливаем высоту равной экрану
        isFixed = true; // Блокируем дальнейшие изменения
        window.removeEventListener('resize', adjustIframeHeight); // Отключаем обработчик
    } else if (screenHeight >= 820 && !isFixed) {
        // Разблокируем при больших размерах экрана и применяем адаптивную высоту
        if (screenHeight < 1200) {
            iframe.style.height = `${screenHeight * 0.8}px`; // Пропорциональная высота
        } else {
            iframe.style.height = `${screenHeight - 500}px`; // Высота с корректировкой
        }
        // Высота будет адаптивной до изменения экрана обратно на < 800px
    }
}

// Инициализация при загрузке страницы
adjustIframeHeight();

// Слушатель изменения размера окна
window.addEventListener('resize', adjustIframeHeight);
