let lastBettingTime = 0;
let tokenIndex = 0;
let isFixed = false;

const tokens = ["demo", "demo", "demo"];
const url = 'https://crash-gateway-orc-cr.gamedev-tech.cc/state?id_n=01961b11-d5d3-7ddc-a24c-0a358a2f2275&id_i=077dee8d-c923-4c02-9bee-757573662e69';

function getAuthorizationToken() {
    const token = tokens[tokenIndex];
    tokenIndex = (tokenIndex + 1) % tokens.length;
    return `Bearer ${token}`;
}

function getRandomCoefficient(min = 1.1, max = 5.0) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

async function updateGameState() {
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': getAuthorizationToken()
            }
        });
        const data = await response.json();
        const state = data.current_state;
        const kef = parseFloat(data.current_coefficients);

        const responseText = document.getElementById('responseText');
        const coefficientsDiv = document.getElementById('coefficients');

        if (!responseText || !coefficientsDiv) return;

        // Обновление коэффициентов
        if (kef !== 1) {
            coefficientsDiv.innerText = `x${kef}`;
            coefficientsDiv.classList.remove('smallt');
            coefficientsDiv.classList.add('kif');
        }

        // Отображение состояния игры
        if (state === "betting" && Date.now() - lastBettingTime > 5000) {
            const resultText = `${getRandomCoefficient()}x`;
            responseText.textContent = resultText;
            localStorage.setItem('resultText', resultText);
            responseText.className = 'text betting';
            lastBettingTime = Date.now();
        } else if (state === "ending") {
            responseText.textContent = "Waiting..";
            responseText.className = 'text fly';
        }

    } catch (error) {
        console.error('Error fetching game state:', error);
    }
}

function adjustIframeHeight() {
    const iframe = document.getElementById('responsive-iframe');
    const screenHeight = window.innerHeight;
    if (!iframe || isFixed) return;

    if (screenHeight < 820) {
        iframe.style.height = `${screenHeight}px`;
        isFixed = true;
        window.removeEventListener('resize', adjustIframeHeight);
    } else {
        iframe.style.height = screenHeight < 1200
            ? `${screenHeight * 0.8}px`
            : `${screenHeight - 500}px`;
    }
}

// Инициализация
adjustIframeHeight();
window.addEventListener('resize', adjustIframeHeight);
updateGameState();
setInterval(updateGameState, 1300);
