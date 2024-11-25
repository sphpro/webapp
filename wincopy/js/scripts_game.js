
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name, defaultValue = null) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split('=');
    if (key === name) return value;
  }
  
  // Если кука отсутствует, вернуть значение по умолчанию (если задано)
  if (defaultValue !== null) {
    const initialBalance = prompt("Кука отсутствует. Введите начальный баланс:", defaultValue);
    if (initialBalance !== null && !isNaN(Number(initialBalance)) && Number(initialBalance) >= 0) {
      setCookie(name, initialBalance, 7); // Устанавливаем куку с введенным значением
      alert(`Баланс установлен: ${Number(initialBalance).toFixed(2)} ₽`);
      return initialBalance;
    } else {
      alert("Неверный ввод. Установлен баланс по умолчанию: 0.");
      setCookie(name, 0, 7); // Устанавливаем куку с нулевым значением
      return 0;
    }
  }

  return null; // Возвращаем null, если defaultValue не задан
}

//import {updateBalanceFunction} from "./scriptMainGame.js";

console.log("scripts_game.js загружен");
// Использование
const balance = getCookie('user_balance', 1000); // Задать 1000 как значение по умолчанию, если кука отсутствует
console.log(`Текущий баланс: ${balance} ₽`);

const container = document.querySelector(".history-panel__list-wrapper");
const userCount = 400; 
        const mobileWindow = window.innerWidth > 1034? 100: 122.6;
        const scrollSpeed = mobileWindow; 
        let index = 0;

        
const names = [
    'Mohammad', 'Sofia', 'Ahmed', 'Elena', 'Ivan', 'Rajesh', 'Anna', 'Victor', 'Maria', 'John',
    'Александр', 'Ольга', 'Дмитрий', 'Наталья', 'Сергей', 'Татьяна', 'Андрей', 'Екатерина',
    'QwErTy', 'AbCdEf', 'XyZkLm', 'PqRsTu', 'MnBvCx', 'HjKlPo', 'WsXcDe', 'NmKjHg',
    '1win', 'Player123', 'GameMaster', 'Lucky777', 'Winner21', 'ProGamer', 'Master99',
    'Olivia', 'Liam', 'Sophia', 'Jackson', 'Amelia', 'Mason', 'Isabella', 'Ethan', 'Avery',
    'Sebastian', 'Harper', 'Henry', 'Ella', 'Alexander', 'Mia', 'Jacob', 'Charlotte', 'Michael',
    'Zachary', 'Charlotte', 'Grace', 'Benjamin', 'Samuel', 'Lily', 'Ella', 'David', 'William',
    'Alice', 'Emma', 'James', 'Luca', 'Emma', 'Max', 'Scarlett', 'Jasper', 'Nora', 'Eliza',
    'Hazel', 'Leo', 'Chloe', 'Luca', 'Mila', 'Elijah', 'Anna', 'Emma', 'Emily', 'Archer',
    'Владимир', 'Иван', 'Мария', 'Светлана', 'Юлия', 'Анастасия', 'Максим', 'Ксения', 'Тимофей',
    'Семен', 'Григорий', 'Никита', 'Евгения', 'Кирилл', 'Михаил', 'Даниил', 'Дарина', 'Алиса',
    'Ярослав', 'Николай', 'Федор', 'Полина', 'София', 'Артур', 'Марат', 'Роман', 'Анатолий',
    'Екатерина', 'Милана', 'Илья', 'Даниил', 'Маргарита', 'Тимур', 'Вероника', 'Людмила',
    'Станислав', 'Зоя', 'Лариса', 'Денис', 'Алексей', 'Ксения', 'Анна', 'Валентина', 'Дина',
    'Раиса', 'Ирина', 'Андрей', 'Дарина', 'Юрий', 'Лев', 'Геннадий', 'Евгений', 'Милена',
    'Александра', 'Людмила', 'Ирина', 'Евгений', 'Татьяна', 'Мария', 'Вячеслав', 'Валерий',
    'Grace', 'John', 'Jack', 'William', 'Emily', 'Charlotte', 'Lily', 'Amelia', 'Sophia',
    'Mason', 'Oliver', 'Leo', 'Isaac', 'James', 'George', 'Benjamin', 'Alexander', 'Harper',
    'Charlotte', 'Victoria', 'Mila', 'Eli', 'Hudson', 'Zoe', 'Ella', 'Lucas', 'Ava', 'Noah',
    'Charlotte', 'Hannah', 'Maddox', 'Mila', 'Scarlett', 'Oliver', 'Henry', 'Luca', 'Maxwell',
    'Nathan', 'Freya', 'Elijah', 'Ezra', 'Chloe', 'Ruby', 'Isabelle', 'Sophia', 'Oliver', 'Max',
    'Aiden', 'Levi', 'Evelyn', 'Landon', 'Nora', 'Harvey', 'Ellie', 'Mason', 'Violet', 'Cora',
    'Matilda', 'Liam', 'Emerson', 'Jaxon', 'Riley', 'Grayson', 'Sophie', 'Mia', 'Jackson',
    'Amos', 'Winston', 'Grace', 'Maggie', 'Daisy', 'Beau', 'Harold', 'Tessa', 'Hazel', 'Felicity'
];


const currencies = [
    '₽', '₹', 'GH₵', '₣', 'N', 'S', '€', '¥', '$', '₣', '£', '₡', '₲', '₤', '₼', '₴', '₳',
    '₵', '₲', '₹', '₱', '៛', '៛', '₡', '₯', '₠', '₣', '₥', '₽', '₹', '₴', '₿', '₶',
    '৳', '฿', '₯', '₳', '₨', '₲', '₹', '₶', '₩', '₿', '₸', '₤', '₯', '₳', '₱', '₺'
];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function addUser() {
    const userDiv = document.createElement('div');
    

    const startSum = Math.floor(Math.random() * 1500);
    

    const coef = (Math.random() * 3.5 + 1.01).toFixed(2);
    

    const winAmount = (startSum * coef).toFixed(2);
    
    userDiv.innerHTML += `<div class="history-element-container">
                <div class="collapsable-header history-live">
                  <div class="user"><img width="28" height="28"
                      alt="user icon"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAP1UlEQVR4XrVYCXhW1ZnOM9bighJcGNtxLNN2ZJF9M4CyFi2CrILIGgEBkSUINOwEEREIslYEHHArtUBAoBA0y599JSSBEJJA9hUChEKL8N9zvrfvOTfS8tfO+Oj0PM/Jvf+9537n/d5vPfHz+wEDe3/eCIkBgYjrtEFi24epxO5pEt+9EKl9iiWhe4rEd4zWx1uuR3LABGT2aur7/b90wNPOH5FtZiO9r0dnjxGVOw1O8VtwqjfCqQiFrnkfTvkGztXQVXxWGALn9OtKzoyGRHVKU8dbjIcnoKmv3P+3gYNN/fHHJ4IlrudFVRgMb+m7kKvboS5tAf68B6p6O5yyUKjKLQS8mZPX8jVQF7bBW7YG+uJmqKpQOHmzlU4fDmT02o2wex/33ecHDYQ16U42zjlng6BrCaLsbW66nte1UGRRla+FvvQJWd0NVbgeuLwP6uKnnB9Bbhwk4HVUYD3XbIJTEgJdsRbO+QVahzfLhqfjBN/9vtfQR5qHqOQXRJetIEtkqPxd6OrVcIqWQSo2QacvgI6bA/HMgERMhcTOA+IXQ8J5f3wSdPQU6LS5QCGVurgVTimBXnyPLkJFK96Byhjh1Qd+shp7Gzfy3fs7Dx32Hx+ojDHKKX+HTCwheyto8lVQ2QQVPgr6897QXwyHxBBo1gpIbigkn65QtANSsBVyYjkkeRHkyKtcOxB6L9enTqaib0NfoBuUUVb5SkjZUsprlYSDzZv6Yvg/hz7S+iOngAAu0Wzlq2i+VZDipdwwAHpHa27aB5JJV6haC7lMYH8+CLl+CHLtMOcR6D/tpw9/yvkRlFEu43XoQ0OgPmgG9WFbmp/uU2mAroK+shG6ZLHIsQ6F2N3U3xfLPx3688fWOidGK2/pcgIMgbcoGE5yINRvn4Tazo3inocqm0nTLWawkMEbWYBzGdB/ASC4PeQacDOPYA/atbpqLlTSIKgdLaA2tYaKeonMrqGiJghXQJcvBQ43i/TF860D+38xS6UMFS9N7ZQspKmXwXt0AJw1baAOd4aTS1ZKxgPXyNaNU4C6QkSqHpgD0dc5r9l7C1pu8vVV4Osc4v4DzT6HAfcynMOd4IS2gooYxvS2AN7CeVSELpE5BnpPk7W+uO4Y2On3uEQ+W+dUvwVvwUzoSubHiOHwrm4B/VUvmmcUo3UUQe7nxqk0dQI3jyKjidB1R8ncl/a5rjvClBXL50mQumN2jb4aDn15P+dncApehi4cyiB8Dt51ZPbYcAbZYubcOZxvQuL6eZ1PGz/ri+/20B89slMql9AcK6nlPEj5MmrdnEzSL88zaGqm0d/m0kRLIFfWQZcxUC7vAq4T5BXjnx6CPWYBybVIprI99PHfce6EKuZ3ZWStnIBKfgNVwGAsGAInviec1f8FxzMSXlrQKWPQls9nALbJ9MVnB37ftCk1oWkYqZdX0wcXwUs/0sf7QucNhs7nrGC6yScT58dCFU2ElC7kM6aryo0EGsZ5lIFxzLKoLx9i3uSzGoIsWwldyjRWNJMAR0AXvwQnn0DPDeP9SLpBZ3gNIQVz6cskp/Q3kIyXBeFt/jHH4nDLXep8ELUJ5gY0+ZEB8L73C6i8/tBn6aNn+rMU/opAGQx5w6DOMeUUv0kAS1ygBKRrdvHbfWTwC7L5Ga8f890WCKNbKNfJH0dwo6HODoTKfYGTKStvILMJ2fxdezh7fmWrnVNFVmuWAQeaee4Eufnex9XRpx2pXkrq58F7eiq8G5pBZ/SDyiHI08/ByeoJxas2gE/xmj+Sm04m4OlM/Kzr1Zsg1cydVe9Daj+BXCBwU/tNFTvH1FQ8m4yNp4xfU3ED8EXe93cVzx3AZ+PgXduBvk0lL2ymvAWQ1MHA7sd63QaqPvQfp06Ogbc4iEE0Bd6oV6A+bktwTNA5FGyB9mZCH0A2KfTM85yDGBCTIYXT6QqzGGhkoZAmq9zgAixaBFPNpJTXAvr2mRGcdB+jOGWpzB6UQVkFAyiDSudPBuoSmCGq6T7MDlVMVxXzgR0PvXcbqGz336/KmDZK5zBNTIezqyNUqgFJn83ubc2jzxBwVl9WpX5wTrqbmI3VqQGWWSli8j/HWTCbwFkoihbQxK+SNfp0Pq9nh1DR/vY7KXoJcn4oJG8QhAxL0av8PQvyJ2aRuhIC/Yxllo1MFZX8/L8L/8bovlZ1TsWbdGQ6c+EsJuSWBNjX1TiXAHPIYE5/qJO9XJPxqk72JKihBE1FTlGRkhkENZyMM+BKKCNnFBVhGsojW7kEm/OctY4UDLIuJGdfZLkd5JJwtj+BsrTmcUYwQHOZw0maU07Fv+oGbGcfYP5oTx92QwRayeDImgC1p60NIHWih50GnJPeHZpMSsFg3j/LxGyygVlD3zVgz7zIOYSbcJ4ZxnWjLduSS9YIxqwTyhH6uM7gPVOTzqLFMvhtdh9LhkrvBv0lr/HMBOcnMVsEQRIHAhvvb+OHfc17qePd2A3R4S8tgPMlNzweYIWqtO6uIJpMGXAZBH2KALMZ/dm9ILyKUSiLdZ+Mi4nk9B4uWyZo+I1lzShl7smkkWPlGhKMZdID7B6SRZlZtFgC3+9/moxOg/c8XSbjJeAD//F+2OLfy4npTZoZELXzocJp0pjO/JAACUAz2iWzj8sEBVufMm6Q2t0+E5MBuLEwksUoldbNKmCeqdSuBPiMaxUqoNPM/TP2mRjA5j1/q+TOVKaPZdqwK8d7WwvLFfp5Nivhjn+f7Ydtjwaq6B5MS28wpbBpYF2XjD6WAZ36tA0gndKF92TZ3JureWcCihuJ8VuzWcozFog+Yb4z7/gsqQO/DXCfG2tQidty0ntaxbVxKa4RExNUwK4Pa8fsw5xbM4cZZzQQ+uNlflj7QKAyPnrB1FlSfbQLNyczKWTVmogfJz/N3pKC6UMqiSykdKvfwLzjs8T2vHZxn5v1BKPJkpWT5rqMGFaTKMdYKZWsG0VT3G/NOmMNldjJvT9OtsumWfPL6VeAbQ8t90Owfw8dzbRTwRclk9ihvwCd2IUfkc1kamrMk0QASQF0cgaZEZZsWOrmgkvib2OylO6uSQ17iQZkL5epjGetHJ1AQAwYy6aRQcVhsolRinuJYTilowWqvurLNDkBuMpqlvoCsMmfpg+5v50+1J6lczL9lIk5icER8RQkvgMjzpjcAO3Ejfjb+Jlh1PghWdHxHV2mDVMmYo1yVEZO97N+rY0MuglO9XOViqcCyWYdLUAfN9+ruPbue7M2lWu5h4rsTZDzWZ3egI6kQmsfZDBtaOove5oxhzL/1TLpklkJ72g/lmQKS+gCpNF0CYbhrtaEEk9GklwlDJsS1wY61piQwZZEELHtuDHXGLaSOluGrRJ0IcOsiqVl4syajlYRoRsJZVsLxnaFk8aet2oqEz6r3ie/JFD/njbhY+NDdapwPKvBDMusjuhqTShxhtVO9T5KgbGtmBHaumATuZmHAOO4mQk2sy6hI2c9sPh2UDFGAbOmg2uRxA4uIHNvrGDWUWExVvK0BFJ4PdaRLshcXj7Jkidbn1AI8nePJ3jr3jCdxd6wii9LuSiaTEa3pKb0t2g2J9Gt6lkkGA9bP5pLyJQk8HdcW/verNcx7dx3BCn0aSFrxn3EMBfP53GUEVv/zLBnlI41SnSyaw3DTjhPEaXjWUpns2MbCay87+TtEoo1D8+SzzqIt4hlr3IiO50J4DGZbLS1YAyzOoYAIwkmsrllUsw7M82mZM1d194Fws3Fw3fGJ817s95jlDDP29h1xietHJPq7FpaI7wNnBweU4pZ1arZP8TSVxc2WP83oCF+/ljzqOMUjSHtoxlxLGFxZDWqlSuYIC2jnlauOxgmYtzNJZrvjPkNUMN8lFnfvv65CaAAFwh9XZt3NK9E82pkU3H7rYn6qNbs8rmm+lU4Na/R7DyXbXwYmO9zJEHwfRE41E10DWts6StklYesWAqhqV1ABqQxIQFFPVUPqJ27oTVh/b1RJJr3GSyjCawyCSyz8QyyVBaSdNbtZGaJiOaAqf1GlrGKYZiyHXb86sJkEsWW8GgAENzw3B0gLdAZTbpj5f2i89mC1Uxkh00XYAOiI550AUYaQO0suzqytWXAmtokdoLWEc1sMODEcy6g0zyqZDIXng0CzvFsdSIQyGZwJPQlOGYSU2Yjn3IVO8GUdWYgm6LxBMkjdDW/W/+EYNk9/3gUMUOW3ndAtjYh7eNYUl/hUXkMW7Lnvx2QqS6MdJigIZtgZkCGYa+PCyiTjXDOXKByO3uCxUB+CFC4jClsAtllXxBjgqw+E/BI4pTQitWBvPIstZ9MB99d5Ivv9vh6SuMnsLRxrRzrRM2G84A2hU3sNNvy3QHIpC6CBlORdQlOmNIYTeYz2ESc5zEibzkb4s08D+0Aynex31xHoOupwBRWp0Cauqt1GWUKQxWDt5KuVsPnif1Fz2ug8Ibfz3zx3TF00L8FycKGWk4N5kGL3T5Z1Rfot6YAfAPo70xm3cEk+2j6WipLYjrbsoIQtneryObnPNR9yskzVMUfgJIdbD7Y/JyeQaU6sDP6NfuL4dbUcmEiz2Jk+r1HgEUPLvfF9a1Dv9lgg4Q2ESfjeaD2NTI7lb0AD1/sM5WJYFN5vnqSgFvU+217C157eE0bRVPPI4Nkr5wn0dL/4fX3vO6GlOykAu+wI6KVSk1bOZMN8jCW7jFspEdA3n0IMuPHB3zx/K9DTb5np4Q0FieCTWzRSAvUOLthwGGVUkwxOroFAbIgeEzCf8oGimFUchfS5Nstm6jaB1z4Iw99e8kq2a3cBlW7jnmStbzmDVagsTR/f2A1iZl+bxqC/L77P8m+GbfGP/CuntXgpoR1EYfR6JSOItAR1vGdIp6Pzg1ll97XNhwmT8oJHuAyx5HRYID+CcNozQHgcjh9/QhdKYzW2U6QdI26EJ56mdi/oIVWNoQz/UeZCPweIL8ZOrDxAj29ocg7jXiQYwtYxY7m6jr67WI2DkFkmmf1irHWfLr6dSrDU2g1zVu7jaA+AW5EQtcd4AyD/MUDucb7S3SLIvrq5sehZjTwOlPuD/Xd93sNTGcr+Fqjs3rOXSIf0zdP8iRZHQx9PQpMDwRwEnLdQzA07/Uv+Swd8nUqcLMAuMX3qhb6Zj7EGwNUb4SEsTSGPCZqTqM6NemuIb77/eDhHXfXOHn9wUJnyt1eWfUAwD5WzjIwLn8MuRnHeYYzB7Q3ZwXkRob9D58Uf0jXmA7Zy9TzNv161k8v6Rn+y293Rf+qoWY9PME79u5IzHtUsLQJZOZdghUPirz/n5D3fy6y9Wciv2Vh2EpFtrBnCO2q1YJfKrWoXaxe9szsuiE/wBe/z0Cgv/+t0X6Db428Z4kztdFBNbFh9K0xP8pwxj2QryY8dswJvC/sZuAj678e+fDYa6EvMkHibl8Z33X8FZe52loyH0WEAAAAAElFTkSuQmCC">
                    <div class="ml-[8px]">${getRandomElement(names)}</div>
                  </div>
                  <div class="start-sum">${startSum} <span>${getRandomElement(currencies)}</span></div>
                  <div class="coef">x${coef}</div>
                  <div class="game-amount">
                    <div class="win-amount">${winAmount} ${getRandomElement(currencies)}</div>
                  </div>
                </div>
              </div>
              <div class="history-element-container">
                <div class="collapsable-header history-live">
                  <div class="user"><img width="28" height="28"
                      alt="user icon"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAP1UlEQVR4XrVYCXhW1ZnOM9bighJcGNtxLNN2ZJF9M4CyFi2CrILIGgEBkSUINOwEEREIslYEHHArtUBAoBA0y599JSSBEJJA9hUChEKL8N9zvrfvOTfS8tfO+Oj0PM/Jvf+9537n/d5vPfHz+wEDe3/eCIkBgYjrtEFi24epxO5pEt+9EKl9iiWhe4rEd4zWx1uuR3LABGT2aur7/b90wNPOH5FtZiO9r0dnjxGVOw1O8VtwqjfCqQiFrnkfTvkGztXQVXxWGALn9OtKzoyGRHVKU8dbjIcnoKmv3P+3gYNN/fHHJ4IlrudFVRgMb+m7kKvboS5tAf68B6p6O5yyUKjKLQS8mZPX8jVQF7bBW7YG+uJmqKpQOHmzlU4fDmT02o2wex/33ecHDYQ16U42zjlng6BrCaLsbW66nte1UGRRla+FvvQJWd0NVbgeuLwP6uKnnB9Bbhwk4HVUYD3XbIJTEgJdsRbO+QVahzfLhqfjBN/9vtfQR5qHqOQXRJetIEtkqPxd6OrVcIqWQSo2QacvgI6bA/HMgERMhcTOA+IXQ8J5f3wSdPQU6LS5QCGVurgVTimBXnyPLkJFK96Byhjh1Qd+shp7Gzfy3fs7Dx32Hx+ojDHKKX+HTCwheyto8lVQ2QQVPgr6897QXwyHxBBo1gpIbigkn65QtANSsBVyYjkkeRHkyKtcOxB6L9enTqaib0NfoBuUUVb5SkjZUsprlYSDzZv6Yvg/hz7S+iOngAAu0Wzlq2i+VZDipdwwAHpHa27aB5JJV6haC7lMYH8+CLl+CHLtMOcR6D/tpw9/yvkRlFEu43XoQ0OgPmgG9WFbmp/uU2mAroK+shG6ZLHIsQ6F2N3U3xfLPx3688fWOidGK2/pcgIMgbcoGE5yINRvn4Tazo3inocqm0nTLWawkMEbWYBzGdB/ASC4PeQacDOPYA/atbpqLlTSIKgdLaA2tYaKeonMrqGiJghXQJcvBQ43i/TF860D+38xS6UMFS9N7ZQspKmXwXt0AJw1baAOd4aTS1ZKxgPXyNaNU4C6QkSqHpgD0dc5r9l7C1pu8vVV4Osc4v4DzT6HAfcynMOd4IS2gooYxvS2AN7CeVSELpE5BnpPk7W+uO4Y2On3uEQ+W+dUvwVvwUzoSubHiOHwrm4B/VUvmmcUo3UUQe7nxqk0dQI3jyKjidB1R8ncl/a5rjvClBXL50mQumN2jb4aDn15P+dncApehi4cyiB8Dt51ZPbYcAbZYubcOZxvQuL6eZ1PGz/ri+/20B89slMql9AcK6nlPEj5MmrdnEzSL88zaGqm0d/m0kRLIFfWQZcxUC7vAq4T5BXjnx6CPWYBybVIprI99PHfce6EKuZ3ZWStnIBKfgNVwGAsGAInviec1f8FxzMSXlrQKWPQls9nALbJ9MVnB37ftCk1oWkYqZdX0wcXwUs/0sf7QucNhs7nrGC6yScT58dCFU2ElC7kM6aryo0EGsZ5lIFxzLKoLx9i3uSzGoIsWwldyjRWNJMAR0AXvwQnn0DPDeP9SLpBZ3gNIQVz6cskp/Q3kIyXBeFt/jHH4nDLXep8ELUJ5gY0+ZEB8L73C6i8/tBn6aNn+rMU/opAGQx5w6DOMeUUv0kAS1ygBKRrdvHbfWTwC7L5Ga8f890WCKNbKNfJH0dwo6HODoTKfYGTKStvILMJ2fxdezh7fmWrnVNFVmuWAQeaee4Eufnex9XRpx2pXkrq58F7eiq8G5pBZ/SDyiHI08/ByeoJxas2gE/xmj+Sm04m4OlM/Kzr1Zsg1cydVe9Daj+BXCBwU/tNFTvH1FQ8m4yNp4xfU3ED8EXe93cVzx3AZ+PgXduBvk0lL2ymvAWQ1MHA7sd63QaqPvQfp06Ogbc4iEE0Bd6oV6A+bktwTNA5FGyB9mZCH0A2KfTM85yDGBCTIYXT6QqzGGhkoZAmq9zgAixaBFPNpJTXAvr2mRGcdB+jOGWpzB6UQVkFAyiDSudPBuoSmCGq6T7MDlVMVxXzgR0PvXcbqGz336/KmDZK5zBNTIezqyNUqgFJn83ubc2jzxBwVl9WpX5wTrqbmI3VqQGWWSli8j/HWTCbwFkoihbQxK+SNfp0Pq9nh1DR/vY7KXoJcn4oJG8QhAxL0av8PQvyJ2aRuhIC/Yxllo1MFZX8/L8L/8bovlZ1TsWbdGQ6c+EsJuSWBNjX1TiXAHPIYE5/qJO9XJPxqk72JKihBE1FTlGRkhkENZyMM+BKKCNnFBVhGsojW7kEm/OctY4UDLIuJGdfZLkd5JJwtj+BsrTmcUYwQHOZw0maU07Fv+oGbGcfYP5oTx92QwRayeDImgC1p60NIHWih50GnJPeHZpMSsFg3j/LxGyygVlD3zVgz7zIOYSbcJ4ZxnWjLduSS9YIxqwTyhH6uM7gPVOTzqLFMvhtdh9LhkrvBv0lr/HMBOcnMVsEQRIHAhvvb+OHfc17qePd2A3R4S8tgPMlNzweYIWqtO6uIJpMGXAZBH2KALMZ/dm9ILyKUSiLdZ+Mi4nk9B4uWyZo+I1lzShl7smkkWPlGhKMZdID7B6SRZlZtFgC3+9/moxOg/c8XSbjJeAD//F+2OLfy4npTZoZELXzocJp0pjO/JAACUAz2iWzj8sEBVufMm6Q2t0+E5MBuLEwksUoldbNKmCeqdSuBPiMaxUqoNPM/TP2mRjA5j1/q+TOVKaPZdqwK8d7WwvLFfp5Nivhjn+f7Ydtjwaq6B5MS28wpbBpYF2XjD6WAZ36tA0gndKF92TZ3JureWcCihuJ8VuzWcozFog+Yb4z7/gsqQO/DXCfG2tQidty0ntaxbVxKa4RExNUwK4Pa8fsw5xbM4cZZzQQ+uNlflj7QKAyPnrB1FlSfbQLNyczKWTVmogfJz/N3pKC6UMqiSykdKvfwLzjs8T2vHZxn5v1BKPJkpWT5rqMGFaTKMdYKZWsG0VT3G/NOmMNldjJvT9OtsumWfPL6VeAbQ8t90Owfw8dzbRTwRclk9ihvwCd2IUfkc1kamrMk0QASQF0cgaZEZZsWOrmgkvib2OylO6uSQ17iQZkL5epjGetHJ1AQAwYy6aRQcVhsolRinuJYTilowWqvurLNDkBuMpqlvoCsMmfpg+5v50+1J6lczL9lIk5icER8RQkvgMjzpjcAO3Ejfjb+Jlh1PghWdHxHV2mDVMmYo1yVEZO97N+rY0MuglO9XOViqcCyWYdLUAfN9+ruPbue7M2lWu5h4rsTZDzWZ3egI6kQmsfZDBtaOove5oxhzL/1TLpklkJ72g/lmQKS+gCpNF0CYbhrtaEEk9GklwlDJsS1wY61piQwZZEELHtuDHXGLaSOluGrRJ0IcOsiqVl4syajlYRoRsJZVsLxnaFk8aet2oqEz6r3ie/JFD/njbhY+NDdapwPKvBDMusjuhqTShxhtVO9T5KgbGtmBHaumATuZmHAOO4mQk2sy6hI2c9sPh2UDFGAbOmg2uRxA4uIHNvrGDWUWExVvK0BFJ4PdaRLshcXj7Jkidbn1AI8nePJ3jr3jCdxd6wii9LuSiaTEa3pKb0t2g2J9Gt6lkkGA9bP5pLyJQk8HdcW/verNcx7dx3BCn0aSFrxn3EMBfP53GUEVv/zLBnlI41SnSyaw3DTjhPEaXjWUpns2MbCay87+TtEoo1D8+SzzqIt4hlr3IiO50J4DGZbLS1YAyzOoYAIwkmsrllUsw7M82mZM1d194Fws3Fw3fGJ817s95jlDDP29h1xietHJPq7FpaI7wNnBweU4pZ1arZP8TSVxc2WP83oCF+/ljzqOMUjSHtoxlxLGFxZDWqlSuYIC2jnlauOxgmYtzNJZrvjPkNUMN8lFnfvv65CaAAFwh9XZt3NK9E82pkU3H7rYn6qNbs8rmm+lU4Na/R7DyXbXwYmO9zJEHwfRE41E10DWts6StklYesWAqhqV1ABqQxIQFFPVUPqJ27oTVh/b1RJJr3GSyjCawyCSyz8QyyVBaSdNbtZGaJiOaAqf1GlrGKYZiyHXb86sJkEsWW8GgAENzw3B0gLdAZTbpj5f2i89mC1Uxkh00XYAOiI550AUYaQO0suzqytWXAmtokdoLWEc1sMODEcy6g0zyqZDIXng0CzvFsdSIQyGZwJPQlOGYSU2Yjn3IVO8GUdWYgm6LxBMkjdDW/W/+EYNk9/3gUMUOW3ndAtjYh7eNYUl/hUXkMW7Lnvx2QqS6MdJigIZtgZkCGYa+PCyiTjXDOXKByO3uCxUB+CFC4jClsAtllXxBjgqw+E/BI4pTQitWBvPIstZ9MB99d5Ivv9vh6SuMnsLRxrRzrRM2G84A2hU3sNNvy3QHIpC6CBlORdQlOmNIYTeYz2ESc5zEibzkb4s08D+0Aynex31xHoOupwBRWp0Cauqt1GWUKQxWDt5KuVsPnif1Fz2ug8Ibfz3zx3TF00L8FycKGWk4N5kGL3T5Z1Rfot6YAfAPo70xm3cEk+2j6WipLYjrbsoIQtneryObnPNR9yskzVMUfgJIdbD7Y/JyeQaU6sDP6NfuL4dbUcmEiz2Jk+r1HgEUPLvfF9a1Dv9lgg4Q2ESfjeaD2NTI7lb0AD1/sM5WJYFN5vnqSgFvU+217C157eE0bRVPPI4Nkr5wn0dL/4fX3vO6GlOykAu+wI6KVSk1bOZMN8jCW7jFspEdA3n0IMuPHB3zx/K9DTb5np4Q0FieCTWzRSAvUOLthwGGVUkwxOroFAbIgeEzCf8oGimFUchfS5Nstm6jaB1z4Iw99e8kq2a3cBlW7jnmStbzmDVagsTR/f2A1iZl+bxqC/L77P8m+GbfGP/CuntXgpoR1EYfR6JSOItAR1vGdIp6Pzg1ll97XNhwmT8oJHuAyx5HRYID+CcNozQHgcjh9/QhdKYzW2U6QdI26EJ56mdi/oIVWNoQz/UeZCPweIL8ZOrDxAj29ocg7jXiQYwtYxY7m6jr67WI2DkFkmmf1irHWfLr6dSrDU2g1zVu7jaA+AW5EQtcd4AyD/MUDucb7S3SLIvrq5sehZjTwOlPuD/Xd93sNTGcr+Fqjs3rOXSIf0zdP8iRZHQx9PQpMDwRwEnLdQzA07/Uv+Swd8nUqcLMAuMX3qhb6Zj7EGwNUb4SEsTSGPCZqTqM6NemuIb77/eDhHXfXOHn9wUJnyt1eWfUAwD5WzjIwLn8MuRnHeYYzB7Q3ZwXkRob9D58Uf0jXmA7Zy9TzNv161k8v6Rn+y293Rf+qoWY9PME79u5IzHtUsLQJZOZdghUPirz/n5D3fy6y9Wciv2Vh2EpFtrBnCO2q1YJfKrWoXaxe9szsuiE/wBe/z0Cgv/+t0X6Db428Z4kztdFBNbFh9K0xP8pwxj2QryY8dswJvC/sZuAj678e+fDYa6EvMkHibl8Z33X8FZe52loyH0WEAAAAAElFTkSuQmCC">
                    <div class="ml-[8px]">${getRandomElement(names)}</div>
                  </div>
                  <div class="start-sum">${startSum} <span>${getRandomElement(currencies)}</span></div>
                  <div class="coef">x${coef}</div>
                  <div class="game-amount">
                    <div class="win-amount">${winAmount} ${getRandomElement(currencies)}</div>
                  </div>
                </div>
              </div>`;
    
    container.appendChild(userDiv);
    index++;
}


        for (let i = 0; i < userCount; i++) {
            addUser();
        }

        function autoScroll() {
            let position = container.scrollTop; 
            setInterval(() => {
                
                position += scrollSpeed;
                container.scrollTop = position;

                
                if (position >= container.scrollHeight - container.clientHeight) {
                    container.scrollTop = 0; 
                    position = 0;
                    for (let i = 0; i < 5; i++) {
                        addUser();
                    }
                }
            }, 180); 
        }

        autoScroll();
const originalHTML = document.querySelector(".game__content").outerHTML;

let trapsAmount = 1;
let transformCurrent = 0;
let bet_amount_value = 5;
let possiblleMaxWin = 5 *0.99;
let prepossiblleMaxWin = 5 * 0.99;
let preMassiv = 0;


const changeBetValue = (bet_amount_value) => {
  if (trapsAmount == 1) {
    possiblleMaxWin = bet_amount_value * 0.99;
    prepossiblleMaxWin = bet_amount_value * 0.99;
  }
  else if (trapsAmount == 3) {
    possiblleMaxWin = bet_amount_value * 1.09;
    prepossiblleMaxWin = bet_amount_value * 1.09;
}
else if (trapsAmount == 5) {
  possiblleMaxWin = bet_amount_value * 1.19;
    prepossiblleMaxWin = bet_amount_value * 1.19;
}
else if (trapsAmount == 7) {
  possiblleMaxWin = bet_amount_value * 1.32;
    prepossiblleMaxWin = bet_amount_value * 1.32;
}
}

let indexCurrent = 0;

var contbalance;
async function updateBalance() {
  const balance = getCookie('user_balance');
  if (balance) {
    contbalance = Number(balance);
    document.querySelector("#walletValue").innerHTML = `${contbalance.toFixed(2)} ₽`;
    try {
      const parentDocument = window.parent.document;
      const changeableElement = parentDocument.querySelector('.HeaderBalanceInfo_balance_Gw9TU');
      changeableElement.innerHTML = contbalance.toLocaleString('ru-RU', { useGrouping: true });
    } catch (error) {
      console.error("Failed to update balance in parent document:", error);
    }
  } else {
    console.error("Balance cookie not found!");
  }
}
updateBalance()


export async function playGame() {
  if (bet_amount_value >= 5 && bet_amount_value <= 9999) {
    
  
  document.querySelector('.status-bar__status-title').innerText = 'Следующий шаг';
  if (bet_amount_value <= contbalance) {
    
  
  await updateBalance()
  changeBetValue(bet_amount_value)
  //changeInfo({ authentication_token: localStorage.authentication_token, balance: Number(contbalance)-Number(bet_amount_value)}).then((response) => {updateBalance()})

  // Рассчитываем новый баланс
  const newBalance = Number(contbalance) - Number(bet_amount_value);

  // Сохраняем новый баланс в куки
  setCookie('user_balance', newBalance, 7); // Сохраняем на 7 дней

  // Обновляем отображение баланса
  updateBalance();


  document.querySelector('.cells-board').classList.add('slideme');
    console.log(trapsAmount)
  if (trapsAmount == 1) {
    document.querySelector(".status-bar").innerHTML = `
  
                    <div class="status-bar__status">
                      <div class="status-bar__icon"><svg width="32" height="32" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.2752 2.2285C12.6529 1.48818 13.7108 1.48818 14.0885 2.2285L16.735 7.41481C16.8829 7.70466 17.1604 7.90633 17.4818 7.95743L23.2321 8.87169C24.0529 9.0022 24.3798 10.0082 23.7924 10.5963L19.6778 14.7159C19.4478 14.9461 19.3418 15.2724 19.3925 15.5938L20.2999 21.3452C20.4294 22.1662 19.5736 22.7879 18.8329 22.4111L13.6434 19.7708C13.3534 19.6232 13.0103 19.6232 12.7203 19.7708L7.53081 22.4111C6.79004 22.7879 5.93424 22.1662 6.06377 21.3452L6.97119 15.5938C7.0219 15.2724 6.91588 14.9461 6.68592 14.7159L2.57124 10.5963C1.98389 10.0082 2.31077 9.0022 3.1316 8.87169L8.88187 7.95743C9.20324 7.90633 9.48081 7.70466 9.62872 7.41481L12.2752 2.2285Z" fill="#C22A20"></path>
                          <path d="M12.2752 2.2285C12.6529 1.48818 13.7108 1.48818 14.0885 2.2285L16.735 7.41481C16.8829 7.70466 17.1604 7.90633 17.4818 7.95743L23.2321 8.87169C24.0529 9.0022 24.3798 10.0082 23.7924 10.5963L19.6778 14.7159C19.4478 14.9461 19.3418 15.2724 19.3925 15.5938L20.2999 21.3452C20.4294 22.1662 19.5736 22.7879 18.8329 22.4111L13.6434 19.7708C13.3534 19.6232 13.0103 19.6232 12.7203 19.7708L7.53081 22.4111C6.79004 22.7879 5.93424 22.1662 6.06377 21.3452L6.97119 15.5938C7.0219 15.2724 6.91588 14.9461 6.68592 14.7159L2.57124 10.5963C1.98389 10.0082 2.31077 9.0022 3.1316 8.87169L8.88187 7.95743C9.20324 7.90633 9.48081 7.70466 9.62872 7.41481L12.2752 2.2285Z" fill="url(#paint0_linear_448_8887status)"></path>
                          <path d="M12.2754 2.22809C12.6531 1.48777 13.711 1.48777 14.0887 2.22809L16.7352 7.4144C16.8831 7.70426 17.1607 7.90592 17.482 7.95702L23.2323 8.87128C24.0531 9.00179 24.38 10.0078 23.7927 10.5959L19.678 14.7155C19.448 14.9457 19.342 15.272 19.3927 15.5934L20.3001 21.3448C20.4297 22.1658 19.5739 22.7875 18.8331 22.4107L13.6436 19.7704C13.3536 19.6228 13.0105 19.6228 12.7205 19.7704L7.53102 22.4107C6.79025 22.7875 5.93445 22.1658 6.06398 21.3448L6.9714 15.5934C7.02211 15.272 6.91609 14.9457 6.68613 14.7155L2.57145 10.5959C1.9841 10.0078 2.31098 9.00179 3.13181 8.87128L8.88208 7.95702C9.20345 7.90592 9.48102 7.70426 9.62893 7.4144L12.2754 2.22809Z" fill="url(#paint1_linear_448_8887status)"></path>
                          <path d="M12.2754 2.22809C12.6531 1.48777 13.711 1.48777 14.0887 2.22809L16.7352 7.4144C16.8831 7.70426 17.1607 7.90592 17.482 7.95702L23.2323 8.87128C24.0531 9.00179 24.38 10.0078 23.7927 10.5959L19.678 14.7155C19.448 14.9457 19.342 15.272 19.3927 15.5934L20.3001 21.3448C20.4297 22.1658 19.5739 22.7875 18.8331 22.4107L13.6436 19.7704C13.3536 19.6228 13.0105 19.6228 12.7205 19.7704L7.53102 22.4107C6.79025 22.7875 5.93445 22.1658 6.06398 21.3448L6.9714 15.5934C7.02211 15.272 6.91609 14.9457 6.68613 14.7155L2.57145 10.5959C1.9841 10.0078 2.31098 9.00179 3.13181 8.87128L8.88208 7.95702C9.20345 7.90592 9.48102 7.70426 9.62893 7.4144L12.2754 2.22809Z" fill="url(#paint2_radial_448_8887status)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.433 7.56862L13.7865 2.38231C13.5347 1.88876 12.8294 1.88876 12.5776 2.38231L9.93115 7.56862C9.73395 7.95509 9.36385 8.22398 8.93536 8.29211L3.18509 9.20637C2.63787 9.29338 2.41995 9.96407 2.81151 10.3561L6.92619 14.4757C7.23281 14.7827 7.37417 15.2177 7.30655 15.6463L6.39914 21.3977C6.31278 21.945 6.88331 22.3595 7.37716 22.1082L12.5666 19.468C12.9533 19.2712 13.4108 19.2712 13.7975 19.468L18.9869 22.1082C19.4808 22.3595 20.0513 21.945 19.965 21.3977L19.0576 15.6463C18.9899 15.2177 19.1313 14.7827 19.4379 14.4757L23.5526 10.3561C23.9442 9.96407 23.7262 9.29338 23.179 9.20637L17.4287 8.29211C17.0003 8.22398 16.6302 7.95509 16.433 7.56862ZM14.0887 2.22809C13.711 1.48777 12.6531 1.48777 12.2754 2.22809L9.62893 7.4144C9.48102 7.70426 9.20345 7.90592 8.88208 7.95702L3.13181 8.87128C2.31098 9.00179 1.9841 10.0078 2.57145 10.5959L6.68613 14.7155C6.91609 14.9457 7.02211 15.272 6.9714 15.5934L6.06398 21.3448C5.93445 22.1658 6.79025 22.7875 7.53102 22.4107L12.7205 19.7704C13.0105 19.6228 13.3536 19.6228 13.6436 19.7704L18.8331 22.4107C19.5739 22.7875 20.4297 22.1658 20.3001 21.3448L19.3927 15.5934C19.342 15.272 19.448 14.9457 19.678 14.7155L23.7927 10.5959C24.38 10.0078 24.0531 9.00179 23.2323 8.87128L17.482 7.95702C17.1607 7.90592 16.8831 7.70426 16.7352 7.4144L14.0887 2.22809Z" fill="url(#paint3_linear_448_8887status)"></path>
                          <path d="M12.741 7.3195C12.937 6.98075 13.4261 6.98075 13.6221 7.3195L15.1721 9.99846C15.2442 10.123 15.3656 10.2113 15.5063 10.2413L18.5331 10.8876C18.9159 10.9693 19.067 11.4344 18.8054 11.7255L16.7365 14.0275C16.6403 14.1345 16.594 14.2773 16.6089 14.4204L16.9296 17.4988C16.9701 17.8881 16.5745 18.1755 16.2168 18.0167L13.3882 16.7604C13.2566 16.702 13.1065 16.702 12.975 16.7604L10.1464 18.0167C9.7887 18.1755 9.39305 17.8881 9.4336 17.4988L9.75428 14.4204C9.7692 14.2773 9.72281 14.1345 9.62661 14.0275L7.55775 11.7255C7.29613 11.4344 7.44726 10.9693 7.83001 10.8876L10.8568 10.2413C10.9976 10.2113 11.119 10.123 11.1911 9.99846L12.741 7.3195Z" fill="url(#paint4_linear_448_8887status)"></path>
                          <path d="M19.6431 11.3076C13.5027 17.1102 8.01855 14.5437 6.04404 12.5351C3.04056 8.07161 9.63153 11.6424 15.4716 10.0802C20.1437 8.83037 20.1993 10.3777 19.6431 11.3076Z" fill="url(#paint5_linear_448_8887status)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.486 3.38311C12.6114 3.44656 12.6616 3.59966 12.5981 3.72506L11.8786 5.14712C11.8152 5.27252 11.6621 5.32275 11.5367 5.2593C11.4113 5.19585 11.3611 5.04275 11.4245 4.91735L12.144 3.49529C12.2075 3.36989 12.3606 3.31966 12.486 3.38311Z" fill="#F9BE76"></path>
                          <circle cx="3.68131" cy="9.52742" r="0.254474" fill="#F9BE76"></circle>
                          <circle cx="11.3155" cy="5.62557" r="0.254474" fill="#F9BE76"></circle>
                          <path d="M10.7514 8.25268C8.82111 10.9869 9.51093 12.4755 10.0971 12.8781C11.8774 13.6816 15.1214 8.94033 15.3409 7.68564C15.5604 6.43095 13.1642 4.83492 10.7514 8.25268Z" fill="url(#paint6_linear_448_8887status)" fill-opacity="0.6"></path>
                          <defs>
                            <linearGradient id="paint0_linear_448_8887status" x1="13.1818" y1="0.45166" x2="18.8651" y2="22.4213" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FBA416" stop-opacity="0"></stop>
                              <stop offset="1" stop-color="#FDBB4E" stop-opacity="0.63"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_448_8887status" x1="13.182" y1="0.451259" x2="18.8653" y2="22.4209" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FDBB4E" stop-opacity="0"></stop>
                              <stop offset="1" stop-color="#FDBB4E" stop-opacity="0.63"></stop>
                            </linearGradient>
                            <radialGradient id="paint2_radial_448_8887status" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.2132 9.86681) rotate(52.6712) scale(14.8278)">
                              <stop offset="0.738765" stop-color="#9CB6DD" stop-opacity="0"></stop>
                              <stop offset="0.89825" stop-color="#C6F1FF" stop-opacity="0.37"></stop>
                              <stop offset="1" stop-color="#EFFBFF" stop-opacity="0.7"></stop>
                            </radialGradient>
                            <linearGradient id="paint3_linear_448_8887status" x1="20.3073" y1="17.4162" x2="8.6015" y2="6.81312" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FEFFD3" stop-opacity="0.63"></stop>
                              <stop offset="0.218803" stop-color="#FAFD4E" stop-opacity="0"></stop>
                              <stop offset="0.491108" stop-color="#FDFF8B" stop-opacity="0.56"></stop>
                              <stop offset="0.733041" stop-color="#F7F990"></stop>
                              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                              <stop offset="1" stop-color="#FEFFB7" stop-opacity="0"></stop>
                            </linearGradient>
                            <linearGradient id="paint4_linear_448_8887status" x1="13.1816" y1="6.55811" x2="13.0119" y2="17.8398" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FEFFB0"></stop>
                              <stop offset="0.277442" stop-color="white" stop-opacity="0.51"></stop>
                              <stop offset="1" stop-color="#FAFD4E" stop-opacity="0.15"></stop>
                            </linearGradient>
                            <linearGradient id="paint5_linear_448_8887status" x1="12.635" y1="10.8612" x2="12.551" y2="14.8707" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FAFD4E" stop-opacity="0"></stop>
                              <stop offset="0.731853" stop-color="#FAFD4E" stop-opacity="0.46"></stop>
                            </linearGradient>
                            <linearGradient id="paint6_linear_448_8887status" x1="11.5105" y1="8.61842" x2="13.7636" y2="10.7449" gradientUnits="userSpaceOnUse">
                              <stop offset="0.223958" stop-color="#FAFD4E" stop-opacity="0.35"></stop>
                              <stop offset="1" stop-color="#FAFD4E" stop-opacity="0"></stop>
                            </linearGradient>
                          </defs>
                        </svg></div>
                      <div class="status-bar__status-content"><span class="status-bar__status-title">Следующий шаг</span>
                        <div class="status-bar__status-text"><span class="status-bar__status-text-amount possiblleMaxWin" id="possibleMaxWinAmount">${possiblleMaxWin.toFixed(2).toLocaleString('ru-RU', { useGrouping: true })}</span><span class="text-sm leading-4">&nbsp;</span><span class="status-bar__status-text-currency">₽</span></div>
                      </div>
                    </div>
                    <div class="multiplier-list">
                    
                      <div class="multiplier-list-inner overflow-visible" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);">
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text multiplier-list__item-text_active">X0.99</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.04</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.09</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.14</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.19</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.26</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.33</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.4</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.49</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.59</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.71</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.84</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.99</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X2.17</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X2.39</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X2.65</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X2.98</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X3.41</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X3.98</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X4.78</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X5.97</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X7.96</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X11.94</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X23.88</span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div>
                        <div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div>
                      </div>
                    </div>
                  
    `;
  }
  else if (trapsAmount == 3) {
    document.querySelector(".status-bar").innerHTML = `
  
    <div class="status-bar__status">
      <div class="status-bar__icon"><svg width="32" height="32" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.2752 2.2285C12.6529 1.48818 13.7108 1.48818 14.0885 2.2285L16.735 7.41481C16.8829 7.70466 17.1604 7.90633 17.4818 7.95743L23.2321 8.87169C24.0529 9.0022 24.3798 10.0082 23.7924 10.5963L19.6778 14.7159C19.4478 14.9461 19.3418 15.2724 19.3925 15.5938L20.2999 21.3452C20.4294 22.1662 19.5736 22.7879 18.8329 22.4111L13.6434 19.7708C13.3534 19.6232 13.0103 19.6232 12.7203 19.7708L7.53081 22.4111C6.79004 22.7879 5.93424 22.1662 6.06377 21.3452L6.97119 15.5938C7.0219 15.2724 6.91588 14.9461 6.68592 14.7159L2.57124 10.5963C1.98389 10.0082 2.31077 9.0022 3.1316 8.87169L8.88187 7.95743C9.20324 7.90633 9.48081 7.70466 9.62872 7.41481L12.2752 2.2285Z" fill="#C22A20"></path>
          <path d="M12.2752 2.2285C12.6529 1.48818 13.7108 1.48818 14.0885 2.2285L16.735 7.41481C16.8829 7.70466 17.1604 7.90633 17.4818 7.95743L23.2321 8.87169C24.0529 9.0022 24.3798 10.0082 23.7924 10.5963L19.6778 14.7159C19.4478 14.9461 19.3418 15.2724 19.3925 15.5938L20.2999 21.3452C20.4294 22.1662 19.5736 22.7879 18.8329 22.4111L13.6434 19.7708C13.3534 19.6232 13.0103 19.6232 12.7203 19.7708L7.53081 22.4111C6.79004 22.7879 5.93424 22.1662 6.06377 21.3452L6.97119 15.5938C7.0219 15.2724 6.91588 14.9461 6.68592 14.7159L2.57124 10.5963C1.98389 10.0082 2.31077 9.0022 3.1316 8.87169L8.88187 7.95743C9.20324 7.90633 9.48081 7.70466 9.62872 7.41481L12.2752 2.2285Z" fill="url(#paint0_linear_448_8887status)"></path>
          <path d="M12.2754 2.22809C12.6531 1.48777 13.711 1.48777 14.0887 2.22809L16.7352 7.4144C16.8831 7.70426 17.1607 7.90592 17.482 7.95702L23.2323 8.87128C24.0531 9.00179 24.38 10.0078 23.7927 10.5959L19.678 14.7155C19.448 14.9457 19.342 15.272 19.3927 15.5934L20.3001 21.3448C20.4297 22.1658 19.5739 22.7875 18.8331 22.4107L13.6436 19.7704C13.3536 19.6228 13.0105 19.6228 12.7205 19.7704L7.53102 22.4107C6.79025 22.7875 5.93445 22.1658 6.06398 21.3448L6.9714 15.5934C7.02211 15.272 6.91609 14.9457 6.68613 14.7155L2.57145 10.5959C1.9841 10.0078 2.31098 9.00179 3.13181 8.87128L8.88208 7.95702C9.20345 7.90592 9.48102 7.70426 9.62893 7.4144L12.2754 2.22809Z" fill="url(#paint1_linear_448_8887status)"></path>
          <path d="M12.2754 2.22809C12.6531 1.48777 13.711 1.48777 14.0887 2.22809L16.7352 7.4144C16.8831 7.70426 17.1607 7.90592 17.482 7.95702L23.2323 8.87128C24.0531 9.00179 24.38 10.0078 23.7927 10.5959L19.678 14.7155C19.448 14.9457 19.342 15.272 19.3927 15.5934L20.3001 21.3448C20.4297 22.1658 19.5739 22.7875 18.8331 22.4107L13.6436 19.7704C13.3536 19.6228 13.0105 19.6228 12.7205 19.7704L7.53102 22.4107C6.79025 22.7875 5.93445 22.1658 6.06398 21.3448L6.9714 15.5934C7.02211 15.272 6.91609 14.9457 6.68613 14.7155L2.57145 10.5959C1.9841 10.0078 2.31098 9.00179 3.13181 8.87128L8.88208 7.95702C9.20345 7.90592 9.48102 7.70426 9.62893 7.4144L12.2754 2.22809Z" fill="url(#paint2_radial_448_8887status)"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.433 7.56862L13.7865 2.38231C13.5347 1.88876 12.8294 1.88876 12.5776 2.38231L9.93115 7.56862C9.73395 7.95509 9.36385 8.22398 8.93536 8.29211L3.18509 9.20637C2.63787 9.29338 2.41995 9.96407 2.81151 10.3561L6.92619 14.4757C7.23281 14.7827 7.37417 15.2177 7.30655 15.6463L6.39914 21.3977C6.31278 21.945 6.88331 22.3595 7.37716 22.1082L12.5666 19.468C12.9533 19.2712 13.4108 19.2712 13.7975 19.468L18.9869 22.1082C19.4808 22.3595 20.0513 21.945 19.965 21.3977L19.0576 15.6463C18.9899 15.2177 19.1313 14.7827 19.4379 14.4757L23.5526 10.3561C23.9442 9.96407 23.7262 9.29338 23.179 9.20637L17.4287 8.29211C17.0003 8.22398 16.6302 7.95509 16.433 7.56862ZM14.0887 2.22809C13.711 1.48777 12.6531 1.48777 12.2754 2.22809L9.62893 7.4144C9.48102 7.70426 9.20345 7.90592 8.88208 7.95702L3.13181 8.87128C2.31098 9.00179 1.9841 10.0078 2.57145 10.5959L6.68613 14.7155C6.91609 14.9457 7.02211 15.272 6.9714 15.5934L6.06398 21.3448C5.93445 22.1658 6.79025 22.7875 7.53102 22.4107L12.7205 19.7704C13.0105 19.6228 13.3536 19.6228 13.6436 19.7704L18.8331 22.4107C19.5739 22.7875 20.4297 22.1658 20.3001 21.3448L19.3927 15.5934C19.342 15.272 19.448 14.9457 19.678 14.7155L23.7927 10.5959C24.38 10.0078 24.0531 9.00179 23.2323 8.87128L17.482 7.95702C17.1607 7.90592 16.8831 7.70426 16.7352 7.4144L14.0887 2.22809Z" fill="url(#paint3_linear_448_8887status)"></path>
          <path d="M12.741 7.3195C12.937 6.98075 13.4261 6.98075 13.6221 7.3195L15.1721 9.99846C15.2442 10.123 15.3656 10.2113 15.5063 10.2413L18.5331 10.8876C18.9159 10.9693 19.067 11.4344 18.8054 11.7255L16.7365 14.0275C16.6403 14.1345 16.594 14.2773 16.6089 14.4204L16.9296 17.4988C16.9701 17.8881 16.5745 18.1755 16.2168 18.0167L13.3882 16.7604C13.2566 16.702 13.1065 16.702 12.975 16.7604L10.1464 18.0167C9.7887 18.1755 9.39305 17.8881 9.4336 17.4988L9.75428 14.4204C9.7692 14.2773 9.72281 14.1345 9.62661 14.0275L7.55775 11.7255C7.29613 11.4344 7.44726 10.9693 7.83001 10.8876L10.8568 10.2413C10.9976 10.2113 11.119 10.123 11.1911 9.99846L12.741 7.3195Z" fill="url(#paint4_linear_448_8887status)"></path>
          <path d="M19.6431 11.3076C13.5027 17.1102 8.01855 14.5437 6.04404 12.5351C3.04056 8.07161 9.63153 11.6424 15.4716 10.0802C20.1437 8.83037 20.1993 10.3777 19.6431 11.3076Z" fill="url(#paint5_linear_448_8887status)"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.486 3.38311C12.6114 3.44656 12.6616 3.59966 12.5981 3.72506L11.8786 5.14712C11.8152 5.27252 11.6621 5.32275 11.5367 5.2593C11.4113 5.19585 11.3611 5.04275 11.4245 4.91735L12.144 3.49529C12.2075 3.36989 12.3606 3.31966 12.486 3.38311Z" fill="#F9BE76"></path>
          <circle cx="3.68131" cy="9.52742" r="0.254474" fill="#F9BE76"></circle>
          <circle cx="11.3155" cy="5.62557" r="0.254474" fill="#F9BE76"></circle>
          <path d="M10.7514 8.25268C8.82111 10.9869 9.51093 12.4755 10.0971 12.8781C11.8774 13.6816 15.1214 8.94033 15.3409 7.68564C15.5604 6.43095 13.1642 4.83492 10.7514 8.25268Z" fill="url(#paint6_linear_448_8887status)" fill-opacity="0.6"></path>
          <defs>
            <linearGradient id="paint0_linear_448_8887status" x1="13.1818" y1="0.45166" x2="18.8651" y2="22.4213" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FBA416" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#FDBB4E" stop-opacity="0.63"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear_448_8887status" x1="13.182" y1="0.451259" x2="18.8653" y2="22.4209" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FDBB4E" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#FDBB4E" stop-opacity="0.63"></stop>
            </linearGradient>
            <radialGradient id="paint2_radial_448_8887status" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.2132 9.86681) rotate(52.6712) scale(14.8278)">
              <stop offset="0.738765" stop-color="#9CB6DD" stop-opacity="0"></stop>
              <stop offset="0.89825" stop-color="#C6F1FF" stop-opacity="0.37"></stop>
              <stop offset="1" stop-color="#EFFBFF" stop-opacity="0.7"></stop>
            </radialGradient>
            <linearGradient id="paint3_linear_448_8887status" x1="20.3073" y1="17.4162" x2="8.6015" y2="6.81312" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FEFFD3" stop-opacity="0.63"></stop>
              <stop offset="0.218803" stop-color="#FAFD4E" stop-opacity="0"></stop>
              <stop offset="0.491108" stop-color="#FDFF8B" stop-opacity="0.56"></stop>
              <stop offset="0.733041" stop-color="#F7F990"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#FEFFB7" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint4_linear_448_8887status" x1="13.1816" y1="6.55811" x2="13.0119" y2="17.8398" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FEFFB0"></stop>
              <stop offset="0.277442" stop-color="white" stop-opacity="0.51"></stop>
              <stop offset="1" stop-color="#FAFD4E" stop-opacity="0.15"></stop>
            </linearGradient>
            <linearGradient id="paint5_linear_448_8887status" x1="12.635" y1="10.8612" x2="12.551" y2="14.8707" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FAFD4E" stop-opacity="0"></stop>
              <stop offset="0.731853" stop-color="#FAFD4E" stop-opacity="0.46"></stop>
            </linearGradient>
            <linearGradient id="paint6_linear_448_8887status" x1="11.5105" y1="8.61842" x2="13.7636" y2="10.7449" gradientUnits="userSpaceOnUse">
              <stop offset="0.223958" stop-color="#FAFD4E" stop-opacity="0.35"></stop>
              <stop offset="1" stop-color="#FAFD4E" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg></div>
      <div class="status-bar__status-content"><span class="status-bar__status-title">Следующий шаг</span>
        <div class="status-bar__status-text"><span class="status-bar__status-text-amount possiblleMaxWin" id="possibleMaxWinAmount">${possiblleMaxWin.toFixed(2).toLocaleString('ru-RU', { useGrouping: true })}</span><span class="text-sm leading-4">&nbsp;</span><span class="status-bar__status-text-currency">₽</span></div>
      </div>
    </div>
    <div class="multiplier-list">
      <div class="multiplier-list-inner overflow-visible" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text multiplier-list__item-text_active">X1.09</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.24</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.43</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.65</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.93</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X2.27</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X2.69</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X3.23</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X3.92</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X4.83</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X6.03</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X7.68</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X9.98</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X13.31</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X18.3</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X26.15</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X39.22</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X62.76</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X109.83</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X219.65</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X549.13</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X2196.5</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div></div>
    </div>
  
`;
  }
  else if (trapsAmount == 5) {
    document.querySelector(".status-bar").innerHTML = `
  
    <div class="status-bar__status">
      <div class="status-bar__icon"><svg width="32" height="32" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.2752 2.2285C12.6529 1.48818 13.7108 1.48818 14.0885 2.2285L16.735 7.41481C16.8829 7.70466 17.1604 7.90633 17.4818 7.95743L23.2321 8.87169C24.0529 9.0022 24.3798 10.0082 23.7924 10.5963L19.6778 14.7159C19.4478 14.9461 19.3418 15.2724 19.3925 15.5938L20.2999 21.3452C20.4294 22.1662 19.5736 22.7879 18.8329 22.4111L13.6434 19.7708C13.3534 19.6232 13.0103 19.6232 12.7203 19.7708L7.53081 22.4111C6.79004 22.7879 5.93424 22.1662 6.06377 21.3452L6.97119 15.5938C7.0219 15.2724 6.91588 14.9461 6.68592 14.7159L2.57124 10.5963C1.98389 10.0082 2.31077 9.0022 3.1316 8.87169L8.88187 7.95743C9.20324 7.90633 9.48081 7.70466 9.62872 7.41481L12.2752 2.2285Z" fill="#C22A20"></path>
          <path d="M12.2752 2.2285C12.6529 1.48818 13.7108 1.48818 14.0885 2.2285L16.735 7.41481C16.8829 7.70466 17.1604 7.90633 17.4818 7.95743L23.2321 8.87169C24.0529 9.0022 24.3798 10.0082 23.7924 10.5963L19.6778 14.7159C19.4478 14.9461 19.3418 15.2724 19.3925 15.5938L20.2999 21.3452C20.4294 22.1662 19.5736 22.7879 18.8329 22.4111L13.6434 19.7708C13.3534 19.6232 13.0103 19.6232 12.7203 19.7708L7.53081 22.4111C6.79004 22.7879 5.93424 22.1662 6.06377 21.3452L6.97119 15.5938C7.0219 15.2724 6.91588 14.9461 6.68592 14.7159L2.57124 10.5963C1.98389 10.0082 2.31077 9.0022 3.1316 8.87169L8.88187 7.95743C9.20324 7.90633 9.48081 7.70466 9.62872 7.41481L12.2752 2.2285Z" fill="url(#paint0_linear_448_8887status)"></path>
          <path d="M12.2754 2.22809C12.6531 1.48777 13.711 1.48777 14.0887 2.22809L16.7352 7.4144C16.8831 7.70426 17.1607 7.90592 17.482 7.95702L23.2323 8.87128C24.0531 9.00179 24.38 10.0078 23.7927 10.5959L19.678 14.7155C19.448 14.9457 19.342 15.272 19.3927 15.5934L20.3001 21.3448C20.4297 22.1658 19.5739 22.7875 18.8331 22.4107L13.6436 19.7704C13.3536 19.6228 13.0105 19.6228 12.7205 19.7704L7.53102 22.4107C6.79025 22.7875 5.93445 22.1658 6.06398 21.3448L6.9714 15.5934C7.02211 15.272 6.91609 14.9457 6.68613 14.7155L2.57145 10.5959C1.9841 10.0078 2.31098 9.00179 3.13181 8.87128L8.88208 7.95702C9.20345 7.90592 9.48102 7.70426 9.62893 7.4144L12.2754 2.22809Z" fill="url(#paint1_linear_448_8887status)"></path>
          <path d="M12.2754 2.22809C12.6531 1.48777 13.711 1.48777 14.0887 2.22809L16.7352 7.4144C16.8831 7.70426 17.1607 7.90592 17.482 7.95702L23.2323 8.87128C24.0531 9.00179 24.38 10.0078 23.7927 10.5959L19.678 14.7155C19.448 14.9457 19.342 15.272 19.3927 15.5934L20.3001 21.3448C20.4297 22.1658 19.5739 22.7875 18.8331 22.4107L13.6436 19.7704C13.3536 19.6228 13.0105 19.6228 12.7205 19.7704L7.53102 22.4107C6.79025 22.7875 5.93445 22.1658 6.06398 21.3448L6.9714 15.5934C7.02211 15.272 6.91609 14.9457 6.68613 14.7155L2.57145 10.5959C1.9841 10.0078 2.31098 9.00179 3.13181 8.87128L8.88208 7.95702C9.20345 7.90592 9.48102 7.70426 9.62893 7.4144L12.2754 2.22809Z" fill="url(#paint2_radial_448_8887status)"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.433 7.56862L13.7865 2.38231C13.5347 1.88876 12.8294 1.88876 12.5776 2.38231L9.93115 7.56862C9.73395 7.95509 9.36385 8.22398 8.93536 8.29211L3.18509 9.20637C2.63787 9.29338 2.41995 9.96407 2.81151 10.3561L6.92619 14.4757C7.23281 14.7827 7.37417 15.2177 7.30655 15.6463L6.39914 21.3977C6.31278 21.945 6.88331 22.3595 7.37716 22.1082L12.5666 19.468C12.9533 19.2712 13.4108 19.2712 13.7975 19.468L18.9869 22.1082C19.4808 22.3595 20.0513 21.945 19.965 21.3977L19.0576 15.6463C18.9899 15.2177 19.1313 14.7827 19.4379 14.4757L23.5526 10.3561C23.9442 9.96407 23.7262 9.29338 23.179 9.20637L17.4287 8.29211C17.0003 8.22398 16.6302 7.95509 16.433 7.56862ZM14.0887 2.22809C13.711 1.48777 12.6531 1.48777 12.2754 2.22809L9.62893 7.4144C9.48102 7.70426 9.20345 7.90592 8.88208 7.95702L3.13181 8.87128C2.31098 9.00179 1.9841 10.0078 2.57145 10.5959L6.68613 14.7155C6.91609 14.9457 7.02211 15.272 6.9714 15.5934L6.06398 21.3448C5.93445 22.1658 6.79025 22.7875 7.53102 22.4107L12.7205 19.7704C13.0105 19.6228 13.3536 19.6228 13.6436 19.7704L18.8331 22.4107C19.5739 22.7875 20.4297 22.1658 20.3001 21.3448L19.3927 15.5934C19.342 15.272 19.448 14.9457 19.678 14.7155L23.7927 10.5959C24.38 10.0078 24.0531 9.00179 23.2323 8.87128L17.482 7.95702C17.1607 7.90592 16.8831 7.70426 16.7352 7.4144L14.0887 2.22809Z" fill="url(#paint3_linear_448_8887status)"></path>
          <path d="M12.741 7.3195C12.937 6.98075 13.4261 6.98075 13.6221 7.3195L15.1721 9.99846C15.2442 10.123 15.3656 10.2113 15.5063 10.2413L18.5331 10.8876C18.9159 10.9693 19.067 11.4344 18.8054 11.7255L16.7365 14.0275C16.6403 14.1345 16.594 14.2773 16.6089 14.4204L16.9296 17.4988C16.9701 17.8881 16.5745 18.1755 16.2168 18.0167L13.3882 16.7604C13.2566 16.702 13.1065 16.702 12.975 16.7604L10.1464 18.0167C9.7887 18.1755 9.39305 17.8881 9.4336 17.4988L9.75428 14.4204C9.7692 14.2773 9.72281 14.1345 9.62661 14.0275L7.55775 11.7255C7.29613 11.4344 7.44726 10.9693 7.83001 10.8876L10.8568 10.2413C10.9976 10.2113 11.119 10.123 11.1911 9.99846L12.741 7.3195Z" fill="url(#paint4_linear_448_8887status)"></path>
          <path d="M19.6431 11.3076C13.5027 17.1102 8.01855 14.5437 6.04404 12.5351C3.04056 8.07161 9.63153 11.6424 15.4716 10.0802C20.1437 8.83037 20.1993 10.3777 19.6431 11.3076Z" fill="url(#paint5_linear_448_8887status)"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.486 3.38311C12.6114 3.44656 12.6616 3.59966 12.5981 3.72506L11.8786 5.14712C11.8152 5.27252 11.6621 5.32275 11.5367 5.2593C11.4113 5.19585 11.3611 5.04275 11.4245 4.91735L12.144 3.49529C12.2075 3.36989 12.3606 3.31966 12.486 3.38311Z" fill="#F9BE76"></path>
          <circle cx="3.68131" cy="9.52742" r="0.254474" fill="#F9BE76"></circle>
          <circle cx="11.3155" cy="5.62557" r="0.254474" fill="#F9BE76"></circle>
          <path d="M10.7514 8.25268C8.82111 10.9869 9.51093 12.4755 10.0971 12.8781C11.8774 13.6816 15.1214 8.94033 15.3409 7.68564C15.5604 6.43095 13.1642 4.83492 10.7514 8.25268Z" fill="url(#paint6_linear_448_8887status)" fill-opacity="0.6"></path>
          <defs>
            <linearGradient id="paint0_linear_448_8887status" x1="13.1818" y1="0.45166" x2="18.8651" y2="22.4213" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FBA416" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#FDBB4E" stop-opacity="0.63"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear_448_8887status" x1="13.182" y1="0.451259" x2="18.8653" y2="22.4209" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FDBB4E" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#FDBB4E" stop-opacity="0.63"></stop>
            </linearGradient>
            <radialGradient id="paint2_radial_448_8887status" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.2132 9.86681) rotate(52.6712) scale(14.8278)">
              <stop offset="0.738765" stop-color="#9CB6DD" stop-opacity="0"></stop>
              <stop offset="0.89825" stop-color="#C6F1FF" stop-opacity="0.37"></stop>
              <stop offset="1" stop-color="#EFFBFF" stop-opacity="0.7"></stop>
            </radialGradient>
            <linearGradient id="paint3_linear_448_8887status" x1="20.3073" y1="17.4162" x2="8.6015" y2="6.81312" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FEFFD3" stop-opacity="0.63"></stop>
              <stop offset="0.218803" stop-color="#FAFD4E" stop-opacity="0"></stop>
              <stop offset="0.491108" stop-color="#FDFF8B" stop-opacity="0.56"></stop>
              <stop offset="0.733041" stop-color="#F7F990"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#FEFFB7" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint4_linear_448_8887status" x1="13.1816" y1="6.55811" x2="13.0119" y2="17.8398" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FEFFB0"></stop>
              <stop offset="0.277442" stop-color="white" stop-opacity="0.51"></stop>
              <stop offset="1" stop-color="#FAFD4E" stop-opacity="0.15"></stop>
            </linearGradient>
            <linearGradient id="paint5_linear_448_8887status" x1="12.635" y1="10.8612" x2="12.551" y2="14.8707" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FAFD4E" stop-opacity="0"></stop>
              <stop offset="0.731853" stop-color="#FAFD4E" stop-opacity="0.46"></stop>
            </linearGradient>
            <linearGradient id="paint6_linear_448_8887status" x1="11.5105" y1="8.61842" x2="13.7636" y2="10.7449" gradientUnits="userSpaceOnUse">
              <stop offset="0.223958" stop-color="#FAFD4E" stop-opacity="0.35"></stop>
              <stop offset="1" stop-color="#FAFD4E" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg></div>
      <div class="status-bar__status-content"><span class="status-bar__status-title">Следующий шаг</span>
        <div class="status-bar__status-text"><span class="status-bar__status-text-amount possiblleMaxWin" id="possibleMaxWinAmount">${possiblleMaxWin.toFixed(2).toLocaleString('ru-RU', { useGrouping: true })}</span><span class="text-sm leading-4">&nbsp;</span><span class="status-bar__status-text-currency">₽</span></div>
      </div>
    </div>
    <div class="multiplier-list">
      <div class="multiplier-list-inner overflow-visible" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text multiplier-list__item-text_active">X1.19</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.51</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.93</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X2.49</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X3.27</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X4.36</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X5.92</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X8.2</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X11.62</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X16.9</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X25.34</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X39.42</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X64.06</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X109.83</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X201.35</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X402.69</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X906.06</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1937.37</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X2968.69</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X4000</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div></div>
    </div>
  
`;
  }
  else if (trapsAmount == 7) {
    document.querySelector(".status-bar").innerHTML = `
  
    <div class="status-bar__status">
      <div class="status-bar__icon"><svg width="32" height="32" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.2752 2.2285C12.6529 1.48818 13.7108 1.48818 14.0885 2.2285L16.735 7.41481C16.8829 7.70466 17.1604 7.90633 17.4818 7.95743L23.2321 8.87169C24.0529 9.0022 24.3798 10.0082 23.7924 10.5963L19.6778 14.7159C19.4478 14.9461 19.3418 15.2724 19.3925 15.5938L20.2999 21.3452C20.4294 22.1662 19.5736 22.7879 18.8329 22.4111L13.6434 19.7708C13.3534 19.6232 13.0103 19.6232 12.7203 19.7708L7.53081 22.4111C6.79004 22.7879 5.93424 22.1662 6.06377 21.3452L6.97119 15.5938C7.0219 15.2724 6.91588 14.9461 6.68592 14.7159L2.57124 10.5963C1.98389 10.0082 2.31077 9.0022 3.1316 8.87169L8.88187 7.95743C9.20324 7.90633 9.48081 7.70466 9.62872 7.41481L12.2752 2.2285Z" fill="#C22A20"></path>
          <path d="M12.2752 2.2285C12.6529 1.48818 13.7108 1.48818 14.0885 2.2285L16.735 7.41481C16.8829 7.70466 17.1604 7.90633 17.4818 7.95743L23.2321 8.87169C24.0529 9.0022 24.3798 10.0082 23.7924 10.5963L19.6778 14.7159C19.4478 14.9461 19.3418 15.2724 19.3925 15.5938L20.2999 21.3452C20.4294 22.1662 19.5736 22.7879 18.8329 22.4111L13.6434 19.7708C13.3534 19.6232 13.0103 19.6232 12.7203 19.7708L7.53081 22.4111C6.79004 22.7879 5.93424 22.1662 6.06377 21.3452L6.97119 15.5938C7.0219 15.2724 6.91588 14.9461 6.68592 14.7159L2.57124 10.5963C1.98389 10.0082 2.31077 9.0022 3.1316 8.87169L8.88187 7.95743C9.20324 7.90633 9.48081 7.70466 9.62872 7.41481L12.2752 2.2285Z" fill="url(#paint0_linear_448_8887status)"></path>
          <path d="M12.2754 2.22809C12.6531 1.48777 13.711 1.48777 14.0887 2.22809L16.7352 7.4144C16.8831 7.70426 17.1607 7.90592 17.482 7.95702L23.2323 8.87128C24.0531 9.00179 24.38 10.0078 23.7927 10.5959L19.678 14.7155C19.448 14.9457 19.342 15.272 19.3927 15.5934L20.3001 21.3448C20.4297 22.1658 19.5739 22.7875 18.8331 22.4107L13.6436 19.7704C13.3536 19.6228 13.0105 19.6228 12.7205 19.7704L7.53102 22.4107C6.79025 22.7875 5.93445 22.1658 6.06398 21.3448L6.9714 15.5934C7.02211 15.272 6.91609 14.9457 6.68613 14.7155L2.57145 10.5959C1.9841 10.0078 2.31098 9.00179 3.13181 8.87128L8.88208 7.95702C9.20345 7.90592 9.48102 7.70426 9.62893 7.4144L12.2754 2.22809Z" fill="url(#paint1_linear_448_8887status)"></path>
          <path d="M12.2754 2.22809C12.6531 1.48777 13.711 1.48777 14.0887 2.22809L16.7352 7.4144C16.8831 7.70426 17.1607 7.90592 17.482 7.95702L23.2323 8.87128C24.0531 9.00179 24.38 10.0078 23.7927 10.5959L19.678 14.7155C19.448 14.9457 19.342 15.272 19.3927 15.5934L20.3001 21.3448C20.4297 22.1658 19.5739 22.7875 18.8331 22.4107L13.6436 19.7704C13.3536 19.6228 13.0105 19.6228 12.7205 19.7704L7.53102 22.4107C6.79025 22.7875 5.93445 22.1658 6.06398 21.3448L6.9714 15.5934C7.02211 15.272 6.91609 14.9457 6.68613 14.7155L2.57145 10.5959C1.9841 10.0078 2.31098 9.00179 3.13181 8.87128L8.88208 7.95702C9.20345 7.90592 9.48102 7.70426 9.62893 7.4144L12.2754 2.22809Z" fill="url(#paint2_radial_448_8887status)"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.433 7.56862L13.7865 2.38231C13.5347 1.88876 12.8294 1.88876 12.5776 2.38231L9.93115 7.56862C9.73395 7.95509 9.36385 8.22398 8.93536 8.29211L3.18509 9.20637C2.63787 9.29338 2.41995 9.96407 2.81151 10.3561L6.92619 14.4757C7.23281 14.7827 7.37417 15.2177 7.30655 15.6463L6.39914 21.3977C6.31278 21.945 6.88331 22.3595 7.37716 22.1082L12.5666 19.468C12.9533 19.2712 13.4108 19.2712 13.7975 19.468L18.9869 22.1082C19.4808 22.3595 20.0513 21.945 19.965 21.3977L19.0576 15.6463C18.9899 15.2177 19.1313 14.7827 19.4379 14.4757L23.5526 10.3561C23.9442 9.96407 23.7262 9.29338 23.179 9.20637L17.4287 8.29211C17.0003 8.22398 16.6302 7.95509 16.433 7.56862ZM14.0887 2.22809C13.711 1.48777 12.6531 1.48777 12.2754 2.22809L9.62893 7.4144C9.48102 7.70426 9.20345 7.90592 8.88208 7.95702L3.13181 8.87128C2.31098 9.00179 1.9841 10.0078 2.57145 10.5959L6.68613 14.7155C6.91609 14.9457 7.02211 15.272 6.9714 15.5934L6.06398 21.3448C5.93445 22.1658 6.79025 22.7875 7.53102 22.4107L12.7205 19.7704C13.0105 19.6228 13.3536 19.6228 13.6436 19.7704L18.8331 22.4107C19.5739 22.7875 20.4297 22.1658 20.3001 21.3448L19.3927 15.5934C19.342 15.272 19.448 14.9457 19.678 14.7155L23.7927 10.5959C24.38 10.0078 24.0531 9.00179 23.2323 8.87128L17.482 7.95702C17.1607 7.90592 16.8831 7.70426 16.7352 7.4144L14.0887 2.22809Z" fill="url(#paint3_linear_448_8887status)"></path>
          <path d="M12.741 7.3195C12.937 6.98075 13.4261 6.98075 13.6221 7.3195L15.1721 9.99846C15.2442 10.123 15.3656 10.2113 15.5063 10.2413L18.5331 10.8876C18.9159 10.9693 19.067 11.4344 18.8054 11.7255L16.7365 14.0275C16.6403 14.1345 16.594 14.2773 16.6089 14.4204L16.9296 17.4988C16.9701 17.8881 16.5745 18.1755 16.2168 18.0167L13.3882 16.7604C13.2566 16.702 13.1065 16.702 12.975 16.7604L10.1464 18.0167C9.7887 18.1755 9.39305 17.8881 9.4336 17.4988L9.75428 14.4204C9.7692 14.2773 9.72281 14.1345 9.62661 14.0275L7.55775 11.7255C7.29613 11.4344 7.44726 10.9693 7.83001 10.8876L10.8568 10.2413C10.9976 10.2113 11.119 10.123 11.1911 9.99846L12.741 7.3195Z" fill="url(#paint4_linear_448_8887status)"></path>
          <path d="M19.6431 11.3076C13.5027 17.1102 8.01855 14.5437 6.04404 12.5351C3.04056 8.07161 9.63153 11.6424 15.4716 10.0802C20.1437 8.83037 20.1993 10.3777 19.6431 11.3076Z" fill="url(#paint5_linear_448_8887status)"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.486 3.38311C12.6114 3.44656 12.6616 3.59966 12.5981 3.72506L11.8786 5.14712C11.8152 5.27252 11.6621 5.32275 11.5367 5.2593C11.4113 5.19585 11.3611 5.04275 11.4245 4.91735L12.144 3.49529C12.2075 3.36989 12.3606 3.31966 12.486 3.38311Z" fill="#F9BE76"></path>
          <circle cx="3.68131" cy="9.52742" r="0.254474" fill="#F9BE76"></circle>
          <circle cx="11.3155" cy="5.62557" r="0.254474" fill="#F9BE76"></circle>
          <path d="M10.7514 8.25268C8.82111 10.9869 9.51093 12.4755 10.0971 12.8781C11.8774 13.6816 15.1214 8.94033 15.3409 7.68564C15.5604 6.43095 13.1642 4.83492 10.7514 8.25268Z" fill="url(#paint6_linear_448_8887status)" fill-opacity="0.6"></path>
          <defs>
            <linearGradient id="paint0_linear_448_8887status" x1="13.1818" y1="0.45166" x2="18.8651" y2="22.4213" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FBA416" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#FDBB4E" stop-opacity="0.63"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear_448_8887status" x1="13.182" y1="0.451259" x2="18.8653" y2="22.4209" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FDBB4E" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#FDBB4E" stop-opacity="0.63"></stop>
            </linearGradient>
            <radialGradient id="paint2_radial_448_8887status" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.2132 9.86681) rotate(52.6712) scale(14.8278)">
              <stop offset="0.738765" stop-color="#9CB6DD" stop-opacity="0"></stop>
              <stop offset="0.89825" stop-color="#C6F1FF" stop-opacity="0.37"></stop>
              <stop offset="1" stop-color="#EFFBFF" stop-opacity="0.7"></stop>
            </radialGradient>
            <linearGradient id="paint3_linear_448_8887status" x1="20.3073" y1="17.4162" x2="8.6015" y2="6.81312" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FEFFD3" stop-opacity="0.63"></stop>
              <stop offset="0.218803" stop-color="#FAFD4E" stop-opacity="0"></stop>
              <stop offset="0.491108" stop-color="#FDFF8B" stop-opacity="0.56"></stop>
              <stop offset="0.733041" stop-color="#F7F990"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#FEFFB7" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint4_linear_448_8887status" x1="13.1816" y1="6.55811" x2="13.0119" y2="17.8398" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FEFFB0"></stop>
              <stop offset="0.277442" stop-color="white" stop-opacity="0.51"></stop>
              <stop offset="1" stop-color="#FAFD4E" stop-opacity="0.15"></stop>
            </linearGradient>
            <linearGradient id="paint5_linear_448_8887status" x1="12.635" y1="10.8612" x2="12.551" y2="14.8707" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FAFD4E" stop-opacity="0"></stop>
              <stop offset="0.731853" stop-color="#FAFD4E" stop-opacity="0.46"></stop>
            </linearGradient>
            <linearGradient id="paint6_linear_448_8887status" x1="11.5105" y1="8.61842" x2="13.7636" y2="10.7449" gradientUnits="userSpaceOnUse">
              <stop offset="0.223958" stop-color="#FAFD4E" stop-opacity="0.35"></stop>
              <stop offset="1" stop-color="#FAFD4E" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg></div>
      <div class="status-bar__status-content"><span class="status-bar__status-title">Следующий шаг</span>
        <div class="status-bar__status-text"><span class="status-bar__status-text-amount possiblleMaxWin" id="possibleMaxWinAmount">${possiblleMaxWin.toFixed(2).toLocaleString('ru-RU', { useGrouping: true })}</span><span class="text-sm leading-4">&nbsp;</span><span class="status-bar__status-text-currency">₽</span></div>
      </div>
    </div>
    <div class="multiplier-list">
      <div class="multiplier-list-inner overflow-visible" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text multiplier-list__item-text_active">X1.32</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1.86</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X2.68</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X3.93</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X5.89</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X9.11</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X14.43</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X23.6</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X40.13</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X71.34</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X133.76</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X267.52</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X579.63</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X1463.71</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X2347.78</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X3231.85</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X4115.93</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text">X5000</span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div><div class="multiplier-list__item" id="coefMultiplier"><span class="multiplier-list__item-text"></span></div></div>
    </div>
  
`;
  }
  document.querySelector(".bet-panel").innerHTML = `

                  <div class="bet-panel__actions">
                    <div class="flex flex-wrap flex-row mobile:flex-col mobile:gap-y-3">
                      <div class="basis-2/3">
                        <div class="input-state-panel base-input">
                          <div class="flex w-full"><button type="button" class="bet-panel__control" disabled="">
                              <div class="bet-panel__control-border right"></div><span class="bet-panel__control-icon">-</span>
                            </button>
                            <div class="state amount session-bet-amount flex-1">
                              <div class="bet-amount flex items-center justify-center"><span style="font-family: 'Halvar';">${bet_amount_value}</span>
                                <div class="currency-label" style="font-family: 'Halvar';">₽</div>
                              </div>
                              <div class="bet-amount-label">Ваша ставка:</div>
                            </div><button type="button" class="bet-panel__control" disabled="">
                              <div class="bet-panel__control-border left"></div><span class="bet-panel__control-icon">+</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="basis-1/3 pl-2 mobile:pl-0 mobile:basis-auto mobile:h-[3.25rem]"><button type="button" disabled="" class="app-button btn-waiting big games-blue-bg text-white cursor-not-allowed block h-full w-full"><span>Ожидание</span></button>
                      </div>
                    </div>
                  </div>

	`;


  document.querySelectorAll("#cellButton").forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transition = "transform 0.2s ease-in-out";
      button.style.transform = "scale(1.1)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
    });
    // button.classList.add('cell_active');
    button.disabled = false;
    button.classList.remove("activeCellButton");
    const cellButton = document.querySelectorAll("#cellButton");
    transformCurrent = 0;


    clickCellButton(cellButton);
  
  
  });
}
else{
  document.querySelector('.Toastify').innerHTML = `
  <div class="Toastify__toast-container Toastify__toast-container--top-center app-popup"><div id="12" class="Toastify__toast Toastify__toast-theme--dark Toastify__toast--error Toastify__toast--close-on-click app-popup__toast" style="--nth: 1; --len: 1;"><div role="alert" class="Toastify__toast-body app-popup__toast-body"><div class="Toastify__toast-icon Toastify--animate-icon Toastify__zoom-enter"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="28" rx="14" fill="#13F36C" fill-opacity="0.2"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0001 12.7501C17.8661 12.7501 21.0002 11.6308 21.0002 10.25C21.0002 8.8693 17.8661 7.75 14.0001 7.75C10.134 7.75 7 8.8693 7 10.25C7 11.6308 10.134 12.7501 14.0001 12.7501ZM14.0001 18.5838C17.0483 18.5838 19.6415 17.888 20.6022 16.9168C20.8599 17.1773 21.0002 17.4577 21.0002 17.7498C21.0002 19.1305 17.8661 20.2498 14.0001 20.2498C10.134 20.2498 7 19.1305 7 17.7498C7 17.4577 7.14024 17.1773 7.39799 16.9168C8.35868 17.888 10.9519 18.5838 14.0001 18.5838ZM20.6022 14.4168C19.6415 15.3879 17.0483 16.0838 14.0001 16.0838C10.9519 16.0838 8.35868 15.3879 7.39799 14.4168C7.14024 14.6773 7 14.9577 7 15.2498C7 16.6305 10.134 17.7498 14.0001 17.7498C17.8661 17.7498 21.0002 16.6305 21.0002 15.2498C21.0002 14.9577 20.8599 14.6773 20.6022 14.4168ZM14.0001 13.584C17.0483 13.584 19.6415 12.8882 20.6022 11.917C20.8599 12.1775 21.0002 12.4579 21.0002 12.75C21.0002 14.1307 17.8661 15.25 14.0001 15.25C10.134 15.25 7 14.1307 7 12.75C7 12.4579 7.14024 12.1775 7.39799 11.917C8.35868 12.8882 10.9519 13.584 14.0001 13.584Z" fill="#13F36C"></path></svg></div><div><div class="app-popup__toast-body__wrapper" id="popUp"><h4 class="app-popup__toast-body__header">Недостаточно средств</h4><p class="app-popup__toast-body__body">Для совершения ставки, пополните баланс.</p></div></div></div><div role="progressbar" aria-hidden="true" aria-label="notification timer" class="Toastify__progress-bar Toastify__progress-bar--animated Toastify__progress-bar-theme--dark Toastify__progress-bar--error" style="animation-duration: 3000ms; animation-play-state: running; opacity: 0;"></div></div></div>
  `;

  document.querySelector(".alert-popup").style.animation =
    "popup 1s forwards";
  document.querySelector(".alert-popup").style.display = "flex";

  setTimeout(() => {
    document.querySelector(".alert-popup").style.animation =
      "popupOut 1s forwards";
    document.querySelector(".alert-popup").style.display = "none";
  }, 2000);
}} else {
  document.querySelector('.Toastify').innerHTML = `
  <div class="Toastify__toast-container Toastify__toast-container--top-center app-popup"><div id="12" class="Toastify__toast Toastify__toast-theme--dark Toastify__toast--error Toastify__toast--close-on-click app-popup__toast" style="--nth: 1; --len: 1;"><div role="alert" class="Toastify__toast-body app-popup__toast-body"><div class="Toastify__toast-icon Toastify--animate-icon Toastify__zoom-enter"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="28" rx="14" fill="#13F36C" fill-opacity="0.2"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0001 12.7501C17.8661 12.7501 21.0002 11.6308 21.0002 10.25C21.0002 8.8693 17.8661 7.75 14.0001 7.75C10.134 7.75 7 8.8693 7 10.25C7 11.6308 10.134 12.7501 14.0001 12.7501ZM14.0001 18.5838C17.0483 18.5838 19.6415 17.888 20.6022 16.9168C20.8599 17.1773 21.0002 17.4577 21.0002 17.7498C21.0002 19.1305 17.8661 20.2498 14.0001 20.2498C10.134 20.2498 7 19.1305 7 17.7498C7 17.4577 7.14024 17.1773 7.39799 16.9168C8.35868 17.888 10.9519 18.5838 14.0001 18.5838ZM20.6022 14.4168C19.6415 15.3879 17.0483 16.0838 14.0001 16.0838C10.9519 16.0838 8.35868 15.3879 7.39799 14.4168C7.14024 14.6773 7 14.9577 7 15.2498C7 16.6305 10.134 17.7498 14.0001 17.7498C17.8661 17.7498 21.0002 16.6305 21.0002 15.2498C21.0002 14.9577 20.8599 14.6773 20.6022 14.4168ZM14.0001 13.584C17.0483 13.584 19.6415 12.8882 20.6022 11.917C20.8599 12.1775 21.0002 12.4579 21.0002 12.75C21.0002 14.1307 17.8661 15.25 14.0001 15.25C10.134 15.25 7 14.1307 7 12.75C7 12.4579 7.14024 12.1775 7.39799 11.917C8.35868 12.8882 10.9519 13.584 14.0001 13.584Z" fill="#13F36C"></path></svg></div><div><div class="app-popup__toast-body__wrapper" id="popUp"><h4 class="app-popup__toast-body__header">Попробуйте сделать ставку больше</h4><p class="app-popup__toast-body__body">Ваша ставка меньше минимальной.</p></div></div></div><div role="progressbar" aria-hidden="true" aria-label="notification timer" class="Toastify__progress-bar Toastify__progress-bar--animated Toastify__progress-bar-theme--dark Toastify__progress-bar--error" style="animation-duration: 3000ms; animation-play-state: running; opacity: 0;"></div></div></div>
  `;

  document.querySelector(".alert-popup").style.animation =
    "popup 1s forwards";
  document.querySelector(".alert-popup").style.display = "flex";

  setTimeout(() => {
    document.querySelector(".alert-popup").style.animation =
      "popupOut 1s forwards";
    document.querySelector(".alert-popup").style.display = "none";
  }, 2000);
}
}

let act
let act2 = 5*23.88;
export function overlayAnimation() {

  document.querySelector('.winJackpotAmountclass').innerHTML = `${prepossiblleMaxWin.toLocaleString('ru-RU', { useGrouping: false }).replace(/,/g, '.')} ₽`;
  console.log(prepossiblleMaxWin.toFixed(2))
  act = prepossiblleMaxWin.toFixed(2)
  indexCurrent = 0;
  
  // document.querySelector(".show").style.animation = "fadeIn 0.8s;"

  document.querySelector(".overlay").classList.add("show");



}
export function takePrize() {
  console.log(act2)
  const inactiveButtons = Array.from(document.querySelectorAll('.cell')).filter(button => !button.disabled);

  const shuffledButtons = inactiveButtons.sort(() => 0.5 - Math.random());

const buttonsToChange = shuffledButtons.slice(0, trapsAmount);

buttonsToChange.forEach(button => {
    button.outerHTML = `
        <button id="cellButton" type="button" class="cell" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" style="background: 0px 0px;"><defs><linearGradient id="Gradient-0_cr_i" x1="36.273" y1="22.811" x2="36.273" y2="42.259" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#708fbe" stop-opacity="0"></stop><stop offset="1" stop-color="#72ddff" stop-opacity="0.63"></stop></linearGradient><linearGradient id="Gradient-1_cr_i" x1="37.616" y1="25.294" x2="38.093" y2="46.992" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#708fbe" stop-opacity="0"></stop><stop offset="1" stop-color="#72ddff" stop-opacity="0.63"></stop></linearGradient><linearGradient id="Gradient-3_cr_i" x1="40.728" y1="38.449" x2="18.636" y2="19.326" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8f6ff" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0d2ff" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dc8ff" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9adbf8"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#baeaff" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-4_cr_i" x1="14.418" y1="36.947" x2="17.329" y2="39.593" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c4c4c4" stop-opacity="0"></stop><stop offset="0.732" stop-color="#dbf6ff" stop-opacity="0.46"></stop></linearGradient><linearGradient id="Gradient-5_cr_i" x1="19.496" y1="20.081" x2="16.218" y2="17.456" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c4c4c4" stop-opacity="0"></stop><stop offset="1" stop-color="#dbf6ff" stop-opacity="0.45"></stop></linearGradient><linearGradient id="Gradient-6_cr_i" x1="40.013" y1="20.668" x2="36.906" y2="18.258" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c4c4c4" stop-opacity="0"></stop><stop offset="1" stop-color="#dbf6ff" stop-opacity="0.45"></stop></linearGradient><linearGradient id="Gradient-7_cr_i" x1="28.827" y1="29.033" x2="36.075" y2="28.323" gradientUnits="userSpaceOnUse"><stop offset="0.224" stop-color="#dbf6ff" stop-opacity="0.35"></stop><stop offset="1" stop-color="#c4c4c4" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-8_cr_i" x1="37.08" y1="34.836" x2="12.044" y2="13.755" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8f6ff" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0d2ff" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dc8ff" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9adbf8"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#baeaff" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-9_cr_i" x1="0" y1="-2.48" x2="-0.638" y2="1.785" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#94d9f6"></stop><stop offset="1" stop-color="#94d9f6" stop-opacity="0"></stop></linearGradient><radialGradient id="Gradient-2_cr_i" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(15.5197 21.2962 -21.0221 15.3199 22.682 24.327)"><stop offset="0.739" stop-color="#9cb6dd" stop-opacity="0"></stop><stop offset="0.898" stop-color="#c6f1ff" stop-opacity="0.37"></stop><stop offset="1" stop-color="#effbff" stop-opacity="0.7"></stop></radialGradient></defs><style>@keyframes a0_t_cr_i{0%{transform:translate(28px,28px) rotate(180deg);animation-timing-function:cubic-bezier(0,0,.58,1)}71.4285%{transform:translate(28px,28px) rotate(-5deg)}to{transform:translate(28px,28px) rotate(0deg)}}@keyframes krest_t_cr_i{0%{transform:scale(0,0) translate(-28px,-28px)}42.8571%,to{transform:scale(1,1) translate(-28px,-28px)}71.4285%{transform:scale(1.15,1.15) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}}@keyframes a1_t_cr_i{0%{transform:translate(17.3511px,39px) rotate(0deg) scale(.438128,.423532) translate(-14.3863px,-37.0446px)}to{transform:translate(14.3863px,37.0446px) rotate(0deg) scale(1,1) translate(-14.3863px,-37.0446px)}}@keyframes a2_t_cr_i{0%{transform:translate(15.8726px,16.8036px) rotate(0deg) scale(.440469,.440469) translate(-19.2722px,-19.7496px)}to{transform:translate(19.2722px,19.7496px) rotate(0deg) scale(1,1) translate(-19.2722px,-19.7496px)}}@keyframes a3_t_cr_i{0%{transform:translate(37px,18.2131px) rotate(0deg) scale(.461347,.461347) translate(-40.0446px,-20.5702px)}to{transform:translate(40.0446px,20.5702px) rotate(0deg) scale(1,1) translate(-40.0446px,-20.5702px)}}@keyframes a4_t_cr_i{0%{transform:translate(29.3877px,32.5041px) rotate(-45.565409deg) scale(.403058,.403058) translate(-31.3472px,-29.0394px)}to{transform:translate(31.3472px,29.0394px) rotate(0deg) scale(1,1) translate(-31.3472px,-29.0394px)}}@keyframes a5_t_cr_i{0%{transform:translate(27.9335px,28.2933px) rotate(0deg) scale(1.122601,1.122601) translate(-27.9335px,-28.2933px)}28.5714%{transform:translate(27.9335px,28.2933px) rotate(-4.682578deg) scale(1.087572,1.087572) translate(-27.9335px,-28.2933px)}71.4285%{transform:translate(27.9335px,28.2933px) rotate(0deg) scale(1.035029,1.035029) translate(-27.9335px,-28.2933px)}to{transform:translate(27.9335px,28.2933px) rotate(0deg) scale(1,1) translate(-27.9335px,-28.2933px)}}</style><g style="animation: 0.7s linear 0s 1 normal both running a0_t_cr_i;"><g transform="matrix(0 0 0 0 28 28)" id="krest" style="animation: 0.7s linear 0s 1 normal both running krest_t_cr_i;"><path fill-rule="evenodd" clip-rule="evenodd" d="M43.408 10.226a2.385 2.385 0 0 0-3.373 0L29.388 20.872a2.237 2.237 0 0 1-3.163 0L15.578 10.226a2.385 2.385 0 0 0-3.373 0l-2.53 2.53a2.385 2.385 0 0 0 0 3.373L20.32 26.776c.874.873.874 2.29 0 3.163L9.675 40.585a2.385 2.385 0 0 0 0 3.374l2.53 2.53a2.385 2.385 0 0 0 3.373 0l10.647-10.647a2.236 2.236 0 0 1 3.163 0l10.646 10.647a2.385 2.385 0 0 0 3.374 0l2.53-2.53a2.385 2.385 0 0 0 0-3.374L35.29 29.94a2.237 2.237 0 0 1 0-3.163l10.647-10.647a2.385 2.385 0 0 0 0-3.373l-2.53-2.53Z" fill="#43628F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.408 10.226a2.385 2.385 0 0 0-3.373 0L29.388 20.872a2.237 2.237 0 0 1-3.163 0L15.578 10.226a2.385 2.385 0 0 0-3.373 0l-2.53 2.53a2.385 2.385 0 0 0 0 3.373L20.32 26.776c.874.873.874 2.29 0 3.163L9.675 40.585a2.385 2.385 0 0 0 0 3.374l2.53 2.53a2.385 2.385 0 0 0 3.373 0l10.647-10.647a2.236 2.236 0 0 1 3.163 0l10.646 10.647a2.385 2.385 0 0 0 3.374 0l2.53-2.53a2.385 2.385 0 0 0 0-3.374L35.29 29.94a2.237 2.237 0 0 1 0-3.163l10.647-10.647a2.385 2.385 0 0 0 0-3.373l-2.53-2.53Z" fill="url(#Gradient-0_cr_i)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.408 10.226a2.385 2.385 0 0 0-3.373 0L27.806 22.454 15.578 10.226a2.385 2.385 0 0 0-3.373 0l-2.53 2.53a2.385 2.385 0 0 0 0 3.373l12.228 12.228L9.675 40.585a2.385 2.385 0 0 0 0 3.374l2.53 2.53a2.385 2.385 0 0 0 3.373 0L27.806 34.26 40.035 46.49a2.385 2.385 0 0 0 3.373 0l2.53-2.53a2.385 2.385 0 0 0 0-3.374L33.709 28.357 45.938 16.13a2.385 2.385 0 0 0 0-3.373l-2.53-2.53Z" fill="url(#Gradient-1_cr_i)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.408 10.226a2.385 2.385 0 0 0-3.373 0L27.806 22.454 15.578 10.226a2.385 2.385 0 0 0-3.373 0l-2.53 2.53a2.385 2.385 0 0 0 0 3.373l12.228 12.228L9.675 40.585a2.385 2.385 0 0 0 0 3.374l2.53 2.53a2.385 2.385 0 0 0 3.373 0L27.806 34.26 40.035 46.49a2.385 2.385 0 0 0 3.373 0l2.53-2.53a2.385 2.385 0 0 0 0-3.374L33.71 28.357l12.228-12.228a2.385 2.385 0 0 0 0-3.373l-2.53-2.53Z" fill="url(#Gradient-2_cr_i)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M39.36 9.551a3.34 3.34 0 0 1 4.723 0l2.53 2.53a3.34 3.34 0 0 1 0 4.723L35.227 28.188a.239.239 0 0 0 0 .338L46.613 39.91a3.34 3.34 0 0 1 0 4.722l-2.53 2.53a3.34 3.34 0 0 1-4.723 0L27.975 35.778a.239.239 0 0 0-.337 0L16.253 47.163a3.34 3.34 0 0 1-4.723 0L9 44.633a3.34 3.34 0 0 1 0-4.722l11.385-11.385a.239.239 0 0 0 0-.338L9 16.804a3.34 3.34 0 0 1 0-4.723l2.53-2.53a3.34 3.34 0 0 1 4.723 0l11.385 11.385a.239.239 0 0 0 .337 0L39.36 9.55Zm.675.675a2.385 2.385 0 0 1 3.373 0l2.53 2.53a2.385 2.385 0 0 1 0 3.373L34.553 27.514a1.193 1.193 0 0 0 0 1.686l11.385 11.385a2.385 2.385 0 0 1 0 3.374l-2.53 2.53a2.385 2.385 0 0 1-3.373 0L28.65 35.104a1.193 1.193 0 0 0-1.687 0L15.578 46.489a2.385 2.385 0 0 1-3.373 0l-2.53-2.53a2.385 2.385 0 0 1 0-3.374L21.06 29.2a1.193 1.193 0 0 0 0-1.686L9.675 16.129a2.385 2.385 0 0 1 0-3.373l2.53-2.53a2.385 2.385 0 0 1 3.373 0L26.963 21.61c.466.466 1.221.466 1.687 0l11.385-11.384Z" fill="#E2E2E2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M39.36 9.551a3.34 3.34 0 0 1 4.723 0l2.53 2.53a3.34 3.34 0 0 1 0 4.723L35.227 28.188a.239.239 0 0 0 0 .338L46.613 39.91a3.34 3.34 0 0 1 0 4.722l-2.53 2.53a3.34 3.34 0 0 1-4.723 0L27.975 35.778a.239.239 0 0 0-.337 0L16.253 47.163a3.34 3.34 0 0 1-4.723 0L9 44.633a3.34 3.34 0 0 1 0-4.722l11.385-11.385a.239.239 0 0 0 0-.338L9 16.804a3.34 3.34 0 0 1 0-4.723l2.53-2.53a3.34 3.34 0 0 1 4.723 0l11.385 11.385a.239.239 0 0 0 .337 0L39.36 9.55Zm.675.675a2.385 2.385 0 0 1 3.373 0l2.53 2.53a2.385 2.385 0 0 1 0 3.373L34.553 27.514a1.193 1.193 0 0 0 0 1.686l11.385 11.385a2.385 2.385 0 0 1 0 3.374l-2.53 2.53a2.385 2.385 0 0 1-3.373 0L28.65 35.104a1.193 1.193 0 0 0-1.687 0L15.578 46.489a2.385 2.385 0 0 1-3.373 0l-2.53-2.53a2.385 2.385 0 0 1 0-3.374L21.06 29.2a1.193 1.193 0 0 0 0-1.686L9.675 16.129a2.385 2.385 0 0 1 0-3.373l2.53-2.53a2.385 2.385 0 0 1 3.373 0L26.963 21.61c.466.466 1.221.466 1.687 0l11.385-11.384Z" fill="url(#Gradient-3_cr_i)"></path><path d="M19.263 32.051c.336 8.28-5.096 10.683-7.854 10.85-5.237-.655 1.651-3.229 4.258-8.555 2.086-4.261 3.267-3.305 3.596-2.295Z" fill="url(#Gradient-4_cr_i)" transform="matrix(.43813 0 0 .42353 11.048 23.31)" style="animation: 0.7s linear 0s 1 normal both running a1_t_cr_i;"></path><path d="M16.417 22.512c-1.922-6.724 2.141-6.982 4.413-6.27 4.507 2.126-.74 2.076-1.863 5.536-.898 2.769-2.074 1.643-2.55.734Z" fill="url(#Gradient-5_cr_i)" fill-opacity="0.6" transform="matrix(.44047 0 0 .44047 7.384 8.105)" style="animation: 0.7s linear 0s 1 normal both running a2_t_cr_i;"></path><path d="M35.168 25.564c-.336-8.281 5.096-10.684 7.854-10.85 5.237.654-1.651 3.229-4.258 8.555-2.086 4.26-3.267 3.305-3.596 2.295Z" fill="url(#Gradient-6_cr_i)" fill-opacity="0.6" transform="matrix(.46135 0 0 .46135 18.526 8.723)" style="animation: 0.7s linear 0s 1 normal both running a3_t_cr_i;"></path><path d="M27.007 29.814c1.866 7.643 5.57 8.719 7.188 8.301 4.173-1.915.778-14.985-1.107-17.311-1.885-2.326-8.414-.543-6.081 9.01Z" fill="url(#Gradient-7_cr_i)" fill-opacity="0.6" transform="rotate(-45.566 45.772 2.16) scale(.40306)" style="animation: 0.7s linear 0s 1 normal both running a4_t_cr_i;"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.948 13.266a.894.894 0 0 1 1.265.002l9.498 9.524a5.963 5.963 0 0 0 8.445 0l9.498-9.524a.894.894 0 1 1 1.267 1.263l-9.525 9.552a5.963 5.963 0 0 0 0 8.421l9.525 9.552a.894.894 0 1 1-1.267 1.263l-9.498-9.525a5.963 5.963 0 0 0-8.445 0l-9.498 9.525a.895.895 0 0 1-1.267-1.263l9.525-9.552a5.963 5.963 0 0 0 0-8.421l-9.525-9.552a.894.894 0 0 1 .002-1.265Z" fill="url(#Gradient-8_cr_i)" transform="translate(-3.425 -3.469) scale(1.1226)" style="animation: 0.7s linear 0s 1 normal both running a5_t_cr_i;"></path><circle fill="#94D9F6" transform="translate(26.508 27.06)" r="0.54"></circle><circle opacity="0.2" fill="url(#Gradient-9_cr_i)" transform="translate(26.509 27.06)" r="2.48"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M12.052 16.59a.54.54 0 0 1 .764.022l2.322 2.46a.54.54 0 0 1-.785.742l-2.323-2.46a.54.54 0 0 1 .022-.764Z" fill="#94D9F6"></path><circle fill="#94D9F6" transform="rotate(-70.181 22.464 -.895)" r="0.54"></circle></g></g></svg></button>
        `;
});

shuffledButtons.slice(trapsAmount).forEach(button => {
  button.outerHTML = `
  <button id="cellButton" type="button" class="cell" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" style="background: 0px 0px;"><defs><linearGradient id="Gradient-0_s_i" x1="28.392" y1="0.972" x2="40.632" y2="48.291" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fba416" stop-opacity="0"></stop><stop offset="1" stop-color="#fdbb4e" stop-opacity="0.63"></stop></linearGradient><linearGradient id="Gradient-1_s_i" x1="28.392" y1="0.972" x2="40.633" y2="48.291" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fdbb4e" stop-opacity="0"></stop><stop offset="1" stop-color="#fdbb4e" stop-opacity="0.63"></stop></linearGradient><linearGradient id="Gradient-3_s_i" x1="43.739" y1="37.512" x2="18.526" y2="14.674" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feffd3" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#fafd4e" stop-opacity="0"></stop><stop offset="0.491" stop-color="#fdff8b" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#f7f990"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#feffb7" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-4_s_i" x1="28.391" y1="14.126" x2="28.026" y2="38.425" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feffb0"></stop><stop offset="0.277" stop-color="#fff" stop-opacity="0.51"></stop><stop offset="1" stop-color="#fafd4e" stop-opacity="0.15"></stop></linearGradient><linearGradient id="Gradient-5_s_i" x1="27.214" y1="23.393" x2="27.033" y2="32.029" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafd4e" stop-opacity="0"></stop><stop offset="0.732" stop-color="#fafd4e" stop-opacity="0.46"></stop></linearGradient><linearGradient id="Gradient-6_s_i" x1="24.792" y1="18.563" x2="29.645" y2="23.143" gradientUnits="userSpaceOnUse"><stop offset="0.224" stop-color="#fafd4e" stop-opacity="0.35"></stop><stop offset="1" stop-color="#fafd4e" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-7_s_i" x1="0.016" y1="26.376" x2="16.573" y2="26.055" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><radialGradient id="Gradient-2_s_i" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="rotate(52.671 -10.467 32.845) scale(31.9369)"><stop offset="0.739" stop-color="#9cb6dd" stop-opacity="0"></stop><stop offset="0.898" stop-color="#c6f1ff" stop-opacity="0.37"></stop><stop offset="1" stop-color="#effbff" stop-opacity="0.7"></stop></radialGradient><mask id="Mask-1_s_i"><path fill="url(#Gradient-7_s_i)" transform="rotate(30 31.002 3.397)" d="M0 0h16.959v56H0z" style="animation: 0.7s linear 0s 1 normal both running a4_t_s_i;"></path></mask></defs><style>@keyframes star_t_s_i{0%{transform:translate(28.3918px,26.0576px) scale(0,0) translate(-23.4974px,-22.4547px);animation-timing-function:cubic-bezier(0,0,.58,1)}42.8571%{transform:translate(28.3918px,26.0576px) scale(1,1) translate(-23.4974px,-22.4547px);animation-timing-function:cubic-bezier(0,0,.58,1)}71.4285%{transform:translate(28.3918px,26.0576px) scale(1.15,1.15) translate(-23.4974px,-22.4547px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28.3918px,26.0576px) scale(1,1) translate(-23.4974px,-22.4547px)}}@keyframes a1_t_s_i{0%,to{transform:translate(23.4966px,22.4549px)}}@keyframes a0_t_s_i{0%{transform:scale(1.889498,1.889498) translate(-28.3911px,-27.0603px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:scale(1,1) translate(-28.3911px,-27.0603px)}}@keyframes a2_t_s_i{0%{transform:translate(22.2182px,22.7642px) rotate(145.526246deg) scale(.462454,.462454) translate(-27.1127px,-26.3671px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(22.2182px,22.7642px) rotate(0deg) scale(1,1) translate(-27.1127px,-26.3671px)}}@keyframes a2_o_s_i{0%{opacity:0;animation-timing-function:cubic-bezier(0,0,.58,1)}to{opacity:1}}@keyframes a3_t_s_i{0%{transform:translate(18.9293px,24.3971px) rotate(-53.127557deg) scale(.322292,.322292) translate(-26.7458px,-20.6401px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(21.8514px,17.0372px) rotate(0deg) scale(1,1) translate(-26.7458px,-20.6401px)}}@keyframes a3_o_s_i{0%{opacity:0;animation-timing-function:cubic-bezier(0,0,.58,1)}to{opacity:1}}@keyframes a4_t_s_i{0%{transform:translate(-.804393px,13.4424px) rotate(30deg) translate(-8.47967px,-28px)}28.5714%{transform:translate(-.804393px,13.4424px) rotate(30deg) translate(-8.47967px,-28px);animation-timing-function:cubic-bezier(.42,0,.58,1)}85.7142%,to{transform:translate(58.8824px,41.1538px) rotate(30deg) translate(-8.47967px,-28px)}}</style><g id="star" transform="matrix(0 0 0 0 28.392 26.058)" style="animation: 0.7s linear 0s 1 normal both running star_t_s_i;"><path d="M26.439 4.8c.813-1.595 3.092-1.595 3.905 0l5.7 11.17a2.192 2.192 0 0 0 1.609 1.168l12.385 1.97c1.768.28 2.472 2.448 1.207 3.714l-8.862 8.873a2.193 2.193 0 0 0-.615 1.891l1.955 12.388c.279 1.768-1.565 3.107-3.16 2.295l-11.177-5.686a2.192 2.192 0 0 0-1.989 0L16.22 48.269c-1.595.812-3.439-.527-3.16-2.295l1.955-12.388a2.192 2.192 0 0 0-.615-1.89l-8.862-8.874c-1.265-1.266-.561-3.433 1.207-3.714l12.385-1.97a2.192 2.192 0 0 0 1.609-1.168l5.7-11.17Z" fill="#C22A20" transform="translate(-4.894 -3.603)"></path><path d="M26.439 4.8c.813-1.595 3.092-1.595 3.905 0l5.7 11.17a2.192 2.192 0 0 0 1.609 1.168l12.385 1.97c1.768.28 2.472 2.448 1.207 3.714l-8.862 8.873a2.193 2.193 0 0 0-.615 1.891l1.955 12.388c.279 1.768-1.565 3.107-3.16 2.295l-11.177-5.686a2.192 2.192 0 0 0-1.989 0L16.22 48.269c-1.595.812-3.439-.527-3.16-2.295l1.955-12.388a2.192 2.192 0 0 0-.615-1.89l-8.862-8.874c-1.265-1.266-.561-3.433 1.207-3.714l12.385-1.97a2.192 2.192 0 0 0 1.609-1.168l5.7-11.17Z" fill="url(#Gradient-0_s_i)" transform="translate(-4.894 -3.603)"></path><path d="M26.44 4.799c.813-1.595 3.091-1.595 3.905 0l5.7 11.17a2.192 2.192 0 0 0 1.609 1.169l12.385 1.97c1.768.28 2.472 2.447 1.207 3.714l-8.863 8.873a2.192 2.192 0 0 0-.614 1.89l1.954 12.388c.28 1.769-1.564 3.108-3.16 2.296l-11.177-5.687a2.193 2.193 0 0 0-1.988 0L16.22 48.27c-1.596.812-3.44-.527-3.16-2.296l1.954-12.387a2.192 2.192 0 0 0-.614-1.891l-8.863-8.873c-1.265-1.267-.56-3.434 1.207-3.715l12.386-1.969a2.192 2.192 0 0 0 1.608-1.169l5.7-11.17Z" fill="url(#Gradient-1_s_i)" transform="translate(-4.894 -3.603)"></path><path d="M26.44 4.799c.813-1.595 3.091-1.595 3.905 0l5.7 11.17a2.192 2.192 0 0 0 1.609 1.169l12.385 1.97c1.768.28 2.472 2.447 1.207 3.714l-8.863 8.873a2.192 2.192 0 0 0-.614 1.89l1.954 12.388c.28 1.769-1.564 3.108-3.16 2.296l-11.177-5.687a2.193 2.193 0 0 0-1.988 0L16.22 48.27c-1.596.812-3.44-.527-3.16-2.296l1.954-12.387a2.192 2.192 0 0 0-.614-1.891l-8.863-8.873c-1.265-1.267-.56-3.434 1.207-3.715l12.386-1.969a2.192 2.192 0 0 0 1.608-1.169l5.7-11.17Z" fill="url(#Gradient-2_s_i)" transform="translate(-4.894 -3.603)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m35.394 16.302-5.7-11.171c-.542-1.063-2.061-1.063-2.604 0l-5.7 11.17a2.923 2.923 0 0 1-2.145 1.559L6.86 19.829c-1.178.187-1.648 1.632-.804 2.476l8.862 8.873c.66.661.965 1.598.82 2.522l-1.955 12.387c-.186 1.179 1.043 2.072 2.106 1.53l11.178-5.686a2.923 2.923 0 0 1 2.65 0l11.178 5.687c1.064.54 2.292-.352 2.106-1.53L41.047 33.7a2.923 2.923 0 0 1 .82-2.522l8.862-8.873c.843-.844.374-2.289-.805-2.476l-12.385-1.97a2.923 2.923 0 0 1-2.145-1.558ZM30.345 4.799c-.814-1.595-3.092-1.595-3.906 0l-5.7 11.17a2.192 2.192 0 0 1-1.608 1.169l-12.386 1.97c-1.768.28-2.472 2.447-1.207 3.714l8.863 8.873c.495.496.723 1.198.614 1.89l-1.954 12.388c-.28 1.769 1.564 3.108 3.16 2.296l11.177-5.687a2.193 2.193 0 0 1 1.988 0l11.178 5.687c1.595.812 3.438-.527 3.16-2.296l-1.955-12.387c-.11-.693.119-1.395.614-1.891l8.863-8.873c1.265-1.267.56-3.434-1.207-3.715l-12.385-1.969a2.192 2.192 0 0 1-1.609-1.169l-5.7-11.17Z" fill="url(#Gradient-3_s_i)" transform="translate(-4.894 -3.603)"></path><g style="animation: 0.7s linear 0s 1 normal both running a1_t_s_i;"><path d="M27.442 15.766a1.096 1.096 0 0 1 1.898 0l3.338 5.77c.156.268.417.458.72.523l6.52 1.392a1.096 1.096 0 0 1 .586 1.805l-4.456 4.958c-.207.23-.307.538-.275.846l.69 6.63a1.096 1.096 0 0 1-1.535 1.116L28.836 36.1a1.095 1.095 0 0 0-.89 0l-6.092 2.706a1.096 1.096 0 0 1-1.535-1.115l.69-6.63a1.096 1.096 0 0 0-.275-.847l-4.456-4.958a1.096 1.096 0 0 1 .587-1.805l6.519-1.392c.303-.065.565-.255.72-.523l3.338-5.77Z" fill="url(#Gradient-4_s_i)" transform="translate(-30.148 -28.676) scale(1.8895)" style="animation: 0.7s linear 0s 1 normal both running a0_t_s_i;"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M26.893 7.286c.27.137.378.467.241.737l-1.55 3.063a.548.548 0 1 1-.977-.495l1.55-3.063a.548.548 0 0 1 .736-.242Z" fill="#F9BE76" transform="translate(-4.895 -3.603)"></path><circle fill="#F9BE76" transform="translate(3.035 16.918)" r="0.548"></circle><circle fill="#F9BE76" transform="translate(19.477 8.514)" r="0.548"></circle><path id="mask-flex_s_i" d="M26.439 4.8c.813-1.595 3.092-1.595 3.905 0l5.7 11.17a2.192 2.192 0 0 0 1.609 1.168l12.385 1.97c1.768.28 2.472 2.448 1.207 3.714l-8.862 8.873a2.193 2.193 0 0 0-.615 1.891l1.955 12.388c.279 1.768-1.565 3.107-3.16 2.295l-11.177-5.686a2.192 2.192 0 0 0-1.989 0L16.22 48.269c-1.595.812-3.439-.527-3.16-2.295l1.955-12.388a2.192 2.192 0 0 0-.615-1.89l-8.862-8.874c-1.265-1.266-.561-3.433 1.207-3.714l12.385-1.97a2.192 2.192 0 0 0 1.609-1.168l5.7-11.17Z" fill="#fff3bf" mask="url(#Mask-1_s_i)" transform="translate(-4.894 -3.603)"></path></g></svg></button>
  `;
});



  
    indexCurrent = 0;
    // trapsAmount = 1;
    const newBalance = Number(contbalance) + Number(prepossiblleMaxWin.toFixed(2));

    // Сохраняем новый баланс в куки
    setCookie('user_balance', newBalance, 7); // Сохраняем на 7 дней

    // Обновляем интерфейс
    updateBalance();

    document.querySelector(".Toastify").innerHTML = `
    <div class="Toastify__toast-container Toastify__toast-container--top-center app-popup alert-win-popup"><div id="1" class="Toastify__toast Toastify__toast-theme--dark Toastify__toast--default Toastify__toast--close-on-click app-popup__toast win Toastify--animate Toastify__bounce-enter--top-center" style="--nth: 1; --len: 1;"><div role="alert" class="Toastify__toast-body app-popup__toast-body"><div><div class="app-popup__toast-body__win"><div class="left-side"><div class="left-side__label">Ваш выигрыш</div><p class="left-side__lightgreen" id="winValuePopup">${prepossiblleMaxWin.toFixed(2)}&nbsp;<span class="left-side__small-gray" id="winCurrencyPopup">₽</span></p></div><div class="right-side" id="winCoefPopup">x${preMassiv}</div></div></div></div><div role="progressbar" aria-hidden="true" aria-label="notification timer" class="Toastify__progress-bar Toastify__progress-bar--animated Toastify__progress-bar-theme--dark Toastify__progress-bar--default" style="animation-duration: 3000ms; animation-play-state: paused; opacity: 0;"></div></div></div>
    `;
     

    document.querySelector(".alert-popup").style.animation =
      "popup 1s forwards";
    document.querySelector(".alert-popup").style.display = "flex";

    setTimeout(() => {
      document.querySelector(".alert-popup").style.animation =
        "popupOut 1s forwards";
      document.querySelector(".alert-popup").style.display = "none";
    }, 2000);

    document.querySelector(".bet-panel").outerHTML = `
<div class="bet-panel "><div class="bet-panel__actions"><div class="flex flex-wrap flex-row mobile:flex-col mobile:gap-y-3"><div class="basis-2/3"><div class="input-state-panel base-input"><div class="state win-lose w-full win"><div class="round-result-state-animate game-state-animate" id="loseMessage">Вы выиграли</div></div></div></div><div class="basis-1/3 pl-2 mobile:pl-0 mobile:basis-auto mobile:h-[3.25rem]"><button id="takePrizeButton" type="button" class="app-button big games-orange-bg main-light-text cashout cursor-not-allowed block h-full w-full" disabled=""><span><div><div class="cashout-amount"><span class="font-bold" id="prizeValue">${prepossiblleMaxWin.toFixed(2)}&nbsp;</span><span class="font-normal" id="prizeCurrency" style="margin-left: 0.1rem;">₽</span></div><div><span>Забрать</span></div></div></span></button></div></div></div></div>
`;
    setTimeout(() => {
      document.querySelector(".cells-board").outerHTML = 
      `<div class="cells-board">
                      <button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_2_r2" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_2_r2" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_2_r2" x1="58.152" y1="24.257"
                              x2="-3.614" y2="28.984"
                              gradientUnits="userSpaceOnUse"><stop offset="0"
                                stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.219"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.491"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.733"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_2_r2" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="clip0_366_7284_c_2_r"><rect width="56"
                                height="56" rx="7.593"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#clip0_366_7284_c_2_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect
                              opacity="0.7" width="56" height="56" rx="12"
                              fill="#151C2E"></rect><rect opacity="0.6"
                              width="52" height="52" rx="10"
                              fill="url(#Gradient-0_c_2_r2)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="8" fill="url(#Gradient-1_c_2_r2)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z"
                              fill="url(#Gradient-2_c_2_r2)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z"
                              fill="url(#Gradient-3_c_2_r2)"></path><rect
                              opacity="0.6" width="56" height="56" rx="12"
                              fill="#151C2E"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button>
                        <button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_1_r1" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_1_r1" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_1_r1" x1="52" y1="52" x2="-2.3"
                              y2="1" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.2"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.5"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.7"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_1_r1" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="ClipPath-1_c_1_r"><rect width="56" height="56"
                                rx="8"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#ClipPath-1_c_1_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect
                              opacity="0.7" width="56" height="56" rx="8"
                              fill="#151c2e"></rect><path opacity="0.2"
                              fill-rule="evenodd" clip-rule="evenodd"
                              d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z"
                              fill="#1c2130"></path><rect opacity="0.6"
                              width="52" height="52" rx="6"
                              fill="url(#Gradient-0_c_1_r1)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="4" fill="url(#Gradient-1_c_1_r1)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z"
                              fill="url(#Gradient-2_c_1_r1)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z"
                              fill="url(#Gradient-3_c_1_r1)"></path><rect
                              opacity="0.6" width="56" height="56" rx="8"
                              fill="#151c2e"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg>
                            </button>
                            <button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_2_r2" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_2_r2" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_2_r2" x1="58.152" y1="24.257"
                              x2="-3.614" y2="28.984"
                              gradientUnits="userSpaceOnUse"><stop offset="0"
                                stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.219"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.491"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.733"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_2_r2" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="clip0_366_7284_c_2_r"><rect width="56"
                                height="56" rx="7.593"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#clip0_366_7284_c_2_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect
                              opacity="0.7" width="56" height="56" rx="12"
                              fill="#151C2E"></rect><rect opacity="0.6"
                              width="52" height="52" rx="10"
                              fill="url(#Gradient-0_c_2_r2)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="8" fill="url(#Gradient-1_c_2_r2)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z"
                              fill="url(#Gradient-2_c_2_r2)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z"
                              fill="url(#Gradient-3_c_2_r2)"></path><rect
                              opacity="0.6" width="56" height="56" rx="12"
                              fill="#151C2E"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button>
                              <button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_1_r3" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_1_r3" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_1_r3" x1="52" y1="52" x2="-2.3"
                              y2="1" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.2"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.5"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.7"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_1_r3" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="ClipPath-1_c_1_r"><rect width="56" height="56"
                                rx="8"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#ClipPath-1_c_1_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect
                              opacity="0.7" width="56" height="56" rx="8"
                              fill="#151c2e"></rect><path opacity="0.2"
                              fill-rule="evenodd" clip-rule="evenodd"
                              d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z"
                              fill="#1c2130"></path><rect opacity="0.6"
                              width="52" height="52" rx="6"
                              fill="url(#Gradient-0_c_1_r3)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="4" fill="url(#Gradient-1_c_1_r3)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z"
                              fill="url(#Gradient-2_c_1_r3)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z"
                              fill="url(#Gradient-3_c_1_r3)"></path><rect
                              opacity="0.6" width="56" height="56" rx="8"
                              fill="#151c2e"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_2_r4" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_2_r4" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_2_r4" x1="58.152" y1="24.257"
                              x2="-3.614" y2="28.984"
                              gradientUnits="userSpaceOnUse"><stop offset="0"
                                stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.219"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.491"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.733"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_2_r4" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="clip0_366_7284_c_2_r"><rect width="56"
                                height="56" rx="7.593"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#clip0_366_7284_c_2_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect
                              opacity="0.7" width="56" height="56" rx="12"
                              fill="#151C2E"></rect><rect opacity="0.6"
                              width="52" height="52" rx="10"
                              fill="url(#Gradient-0_c_2_r4)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="8" fill="url(#Gradient-1_c_2_r4)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z"
                              fill="url(#Gradient-2_c_2_r4)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z"
                              fill="url(#Gradient-3_c_2_r4)"></path><rect
                              opacity="0.6" width="56" height="56" rx="12"
                              fill="#151C2E"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_1_r5" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_1_r5" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_1_r5" x1="52" y1="52" x2="-2.3"
                              y2="1" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.2"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.5"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.7"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_1_r5" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="ClipPath-1_c_1_r"><rect width="56" height="56"
                                rx="8"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#ClipPath-1_c_1_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect
                              opacity="0.7" width="56" height="56" rx="8"
                              fill="#151c2e"></rect><path opacity="0.2"
                              fill-rule="evenodd" clip-rule="evenodd"
                              d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z"
                              fill="#1c2130"></path><rect opacity="0.6"
                              width="52" height="52" rx="6"
                              fill="url(#Gradient-0_c_1_r5)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="4" fill="url(#Gradient-1_c_1_r5)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z"
                              fill="url(#Gradient-2_c_1_r5)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z"
                              fill="url(#Gradient-3_c_1_r5)"></path><rect
                              opacity="0.6" width="56" height="56" rx="8"
                              fill="#151c2e"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_2_r6" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_2_r6" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_2_r6" x1="58.152" y1="24.257"
                              x2="-3.614" y2="28.984"
                              gradientUnits="userSpaceOnUse"><stop offset="0"
                                stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.219"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.491"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.733"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_2_r6" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="clip0_366_7284_c_2_r"><rect width="56"
                                height="56" rx="7.593"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#clip0_366_7284_c_2_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect
                              opacity="0.7" width="56" height="56" rx="12"
                              fill="#151C2E"></rect><rect opacity="0.6"
                              width="52" height="52" rx="10"
                              fill="url(#Gradient-0_c_2_r6)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="8" fill="url(#Gradient-1_c_2_r6)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z"
                              fill="url(#Gradient-2_c_2_r6)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z"
                              fill="url(#Gradient-3_c_2_r6)"></path><rect
                              opacity="0.6" width="56" height="56" rx="12"
                              fill="#151C2E"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_1_r7" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_1_r7" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_1_r7" x1="52" y1="52" x2="-2.3"
                              y2="1" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.2"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.5"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.7"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_1_r7" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="ClipPath-1_c_1_r"><rect width="56" height="56"
                                rx="8"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#ClipPath-1_c_1_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect
                              opacity="0.7" width="56" height="56" rx="8"
                              fill="#151c2e"></rect><path opacity="0.2"
                              fill-rule="evenodd" clip-rule="evenodd"
                              d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z"
                              fill="#1c2130"></path><rect opacity="0.6"
                              width="52" height="52" rx="6"
                              fill="url(#Gradient-0_c_1_r7)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="4" fill="url(#Gradient-1_c_1_r7)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z"
                              fill="url(#Gradient-2_c_1_r7)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z"
                              fill="url(#Gradient-3_c_1_r7)"></path><rect
                              opacity="0.6" width="56" height="56" rx="8"
                              fill="#151c2e"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_2_r8" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_2_r8" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_2_r8" x1="58.152" y1="24.257"
                              x2="-3.614" y2="28.984"
                              gradientUnits="userSpaceOnUse"><stop offset="0"
                                stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.219"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.491"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.733"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_2_r8" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="clip0_366_7284_c_2_r"><rect width="56"
                                height="56" rx="7.593"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#clip0_366_7284_c_2_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect
                              opacity="0.7" width="56" height="56" rx="12"
                              fill="#151C2E"></rect><rect opacity="0.6"
                              width="52" height="52" rx="10"
                              fill="url(#Gradient-0_c_2_r8)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="8" fill="url(#Gradient-1_c_2_r8)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z"
                              fill="url(#Gradient-2_c_2_r8)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z"
                              fill="url(#Gradient-3_c_2_r8)"></path><rect
                              opacity="0.6" width="56" height="56" rx="12"
                              fill="#151C2E"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_1_r9" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_1_r9" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_1_r9" x1="52" y1="52" x2="-2.3"
                              y2="1" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.2"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.5"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.7"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_1_r9" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="ClipPath-1_c_1_r"><rect width="56" height="56"
                                rx="8"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#ClipPath-1_c_1_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect
                              opacity="0.7" width="56" height="56" rx="8"
                              fill="#151c2e"></rect><path opacity="0.2"
                              fill-rule="evenodd" clip-rule="evenodd"
                              d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z"
                              fill="#1c2130"></path><rect opacity="0.6"
                              width="52" height="52" rx="6"
                              fill="url(#Gradient-0_c_1_r9)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="4" fill="url(#Gradient-1_c_1_r9)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z"
                              fill="url(#Gradient-2_c_1_r9)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z"
                              fill="url(#Gradient-3_c_1_r9)"></path><rect
                              opacity="0.6" width="56" height="56" rx="8"
                              fill="#151c2e"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_2_r10" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_2_r10" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_2_r10" x1="58.152" y1="24.257"
                              x2="-3.614" y2="28.984"
                              gradientUnits="userSpaceOnUse"><stop offset="0"
                                stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.219"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.491"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.733"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_2_r10" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="clip0_366_7284_c_2_r"><rect width="56"
                                height="56" rx="7.593"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#clip0_366_7284_c_2_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect
                              opacity="0.7" width="56" height="56" rx="12"
                              fill="#151C2E"></rect><rect opacity="0.6"
                              width="52" height="52" rx="10"
                              fill="url(#Gradient-0_c_2_r10)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="8" fill="url(#Gradient-1_c_2_r10)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z"
                              fill="url(#Gradient-2_c_2_r10)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z"
                              fill="url(#Gradient-3_c_2_r10)"></path><rect
                              opacity="0.6" width="56" height="56" rx="12"
                              fill="#151C2E"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_1_r11" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_1_r11" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_1_r11" x1="52" y1="52" x2="-2.3"
                              y2="1" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.2"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.5"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.7"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_1_r11" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="ClipPath-1_c_1_r"><rect width="56" height="56"
                                rx="8"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#ClipPath-1_c_1_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect
                              opacity="0.7" width="56" height="56" rx="8"
                              fill="#151c2e"></rect><path opacity="0.2"
                              fill-rule="evenodd" clip-rule="evenodd"
                              d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z"
                              fill="#1c2130"></path><rect opacity="0.6"
                              width="52" height="52" rx="6"
                              fill="url(#Gradient-0_c_1_r11)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="4" fill="url(#Gradient-1_c_1_r11)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z"
                              fill="url(#Gradient-2_c_1_r11)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z"
                              fill="url(#Gradient-3_c_1_r11)"></path><rect
                              opacity="0.6" width="56" height="56" rx="8"
                              fill="#151c2e"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_2_r12" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_2_r12" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_2_r12" x1="58.152" y1="24.257"
                              x2="-3.614" y2="28.984"
                              gradientUnits="userSpaceOnUse"><stop offset="0"
                                stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.219"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.491"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.733"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_2_r12" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="clip0_366_7284_c_2_r"><rect width="56"
                                height="56" rx="7.593"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#clip0_366_7284_c_2_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect
                              opacity="0.7" width="56" height="56" rx="12"
                              fill="#151C2E"></rect><rect opacity="0.6"
                              width="52" height="52" rx="10"
                              fill="url(#Gradient-0_c_2_r12)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="8" fill="url(#Gradient-1_c_2_r12)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z"
                              fill="url(#Gradient-2_c_2_r12)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z"
                              fill="url(#Gradient-3_c_2_r12)"></path><rect
                              opacity="0.6" width="56" height="56" rx="12"
                              fill="#151C2E"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_1_r13" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_1_r13" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_1_r13" x1="52" y1="52" x2="-2.3"
                              y2="1" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.2"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.5"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.7"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_1_r13" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="ClipPath-1_c_1_r"><rect width="56" height="56"
                                rx="8"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#ClipPath-1_c_1_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect
                              opacity="0.7" width="56" height="56" rx="8"
                              fill="#151c2e"></rect><path opacity="0.2"
                              fill-rule="evenodd" clip-rule="evenodd"
                              d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z"
                              fill="#1c2130"></path><rect opacity="0.6"
                              width="52" height="52" rx="6"
                              fill="url(#Gradient-0_c_1_r13)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="4" fill="url(#Gradient-1_c_1_r13)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z"
                              fill="url(#Gradient-2_c_1_r13)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z"
                              fill="url(#Gradient-3_c_1_r13)"></path><rect
                              opacity="0.6" width="56" height="56" rx="8"
                              fill="#151c2e"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_2_r14" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_2_r14" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_2_r14" x1="58.152" y1="24.257"
                              x2="-3.614" y2="28.984"
                              gradientUnits="userSpaceOnUse"><stop offset="0"
                                stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.219"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.491"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.733"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_2_r14" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="clip0_366_7284_c_2_r"><rect width="56"
                                height="56" rx="7.593"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#clip0_366_7284_c_2_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect
                              opacity="0.7" width="56" height="56" rx="12"
                              fill="#151C2E"></rect><rect opacity="0.6"
                              width="52" height="52" rx="10"
                              fill="url(#Gradient-0_c_2_r14)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="8" fill="url(#Gradient-1_c_2_r14)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z"
                              fill="url(#Gradient-2_c_2_r14)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z"
                              fill="url(#Gradient-3_c_2_r14)"></path><rect
                              opacity="0.6" width="56" height="56" rx="12"
                              fill="#151C2E"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_1_r15" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_1_r15" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_1_r15" x1="52" y1="52" x2="-2.3"
                              y2="1" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.2"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.5"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.7"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_1_r15" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="ClipPath-1_c_1_r"><rect width="56" height="56"
                                rx="8"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#ClipPath-1_c_1_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect
                              opacity="0.7" width="56" height="56" rx="8"
                              fill="#151c2e"></rect><path opacity="0.2"
                              fill-rule="evenodd" clip-rule="evenodd"
                              d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z"
                              fill="#1c2130"></path><rect opacity="0.6"
                              width="52" height="52" rx="6"
                              fill="url(#Gradient-0_c_1_r15)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="4" fill="url(#Gradient-1_c_1_r15)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z"
                              fill="url(#Gradient-2_c_1_r15)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z"
                              fill="url(#Gradient-3_c_1_r15)"></path><rect
                              opacity="0.6" width="56" height="56" rx="8"
                              fill="#151c2e"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_2_r16" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_2_r16" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_2_r16" x1="58.152" y1="24.257"
                              x2="-3.614" y2="28.984"
                              gradientUnits="userSpaceOnUse"><stop offset="0"
                                stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.219"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.491"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.733"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_2_r16" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="clip0_366_7284_c_2_r"><rect width="56"
                                height="56" rx="7.593"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#clip0_366_7284_c_2_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect
                              opacity="0.7" width="56" height="56" rx="12"
                              fill="#151C2E"></rect><rect opacity="0.6"
                              width="52" height="52" rx="10"
                              fill="url(#Gradient-0_c_2_r16)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="8" fill="url(#Gradient-1_c_2_r16)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z"
                              fill="url(#Gradient-2_c_2_r16)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z"
                              fill="url(#Gradient-3_c_2_r16)"></path><rect
                              opacity="0.6" width="56" height="56" rx="12"
                              fill="#151C2E"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_1_r17" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_1_r17" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_1_r17" x1="52" y1="52" x2="-2.3"
                              y2="1" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.2"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.5"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.7"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_1_r17" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="ClipPath-1_c_1_r"><rect width="56" height="56"
                                rx="8"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#ClipPath-1_c_1_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect
                              opacity="0.7" width="56" height="56" rx="8"
                              fill="#151c2e"></rect><path opacity="0.2"
                              fill-rule="evenodd" clip-rule="evenodd"
                              d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z"
                              fill="#1c2130"></path><rect opacity="0.6"
                              width="52" height="52" rx="6"
                              fill="url(#Gradient-0_c_1_r17)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="4" fill="url(#Gradient-1_c_1_r17)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z"
                              fill="url(#Gradient-2_c_1_r17)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z"
                              fill="url(#Gradient-3_c_1_r17)"></path><rect
                              opacity="0.6" width="56" height="56" rx="8"
                              fill="#151c2e"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_2_r18" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_2_r18" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_2_r18" x1="58.152" y1="24.257"
                              x2="-3.614" y2="28.984"
                              gradientUnits="userSpaceOnUse"><stop offset="0"
                                stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.219"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.491"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.733"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_2_r18" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="clip0_366_7284_c_2_r"><rect width="56"
                                height="56" rx="7.593"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#clip0_366_7284_c_2_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect
                              opacity="0.7" width="56" height="56" rx="12"
                              fill="#151C2E"></rect><rect opacity="0.6"
                              width="52" height="52" rx="10"
                              fill="url(#Gradient-0_c_2_r18)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="8" fill="url(#Gradient-1_c_2_r18)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z"
                              fill="url(#Gradient-2_c_2_r18)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z"
                              fill="url(#Gradient-3_c_2_r18)"></path><rect
                              opacity="0.6" width="56" height="56" rx="12"
                              fill="#151C2E"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_1_r19" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_1_r19" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_1_r19" x1="52" y1="52" x2="-2.3"
                              y2="1" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.2"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.5"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.7"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_1_r19" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="ClipPath-1_c_1_r"><rect width="56" height="56"
                                rx="8"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#ClipPath-1_c_1_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect
                              opacity="0.7" width="56" height="56" rx="8"
                              fill="#151c2e"></rect><path opacity="0.2"
                              fill-rule="evenodd" clip-rule="evenodd"
                              d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z"
                              fill="#1c2130"></path><rect opacity="0.6"
                              width="52" height="52" rx="6"
                              fill="url(#Gradient-0_c_1_r19)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="4" fill="url(#Gradient-1_c_1_r19)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z"
                              fill="url(#Gradient-2_c_1_r19)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z"
                              fill="url(#Gradient-3_c_1_r19)"></path><rect
                              opacity="0.6" width="56" height="56" rx="8"
                              fill="#151c2e"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_2_r20" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_2_r20" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_2_r20" x1="58.152" y1="24.257"
                              x2="-3.614" y2="28.984"
                              gradientUnits="userSpaceOnUse"><stop offset="0"
                                stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.219"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.491"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.733"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_2_r20" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="clip0_366_7284_c_2_r"><rect width="56"
                                height="56" rx="7.593"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#clip0_366_7284_c_2_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect
                              opacity="0.7" width="56" height="56" rx="12"
                              fill="#151C2E"></rect><rect opacity="0.6"
                              width="52" height="52" rx="10"
                              fill="url(#Gradient-0_c_2_r20)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="8" fill="url(#Gradient-1_c_2_r20)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z"
                              fill="url(#Gradient-2_c_2_r20)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z"
                              fill="url(#Gradient-3_c_2_r20)"></path><rect
                              opacity="0.6" width="56" height="56" rx="12"
                              fill="#151C2E"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_1_r21" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_1_r21" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_1_r21" x1="52" y1="52" x2="-2.3"
                              y2="1" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.2"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.5"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.7"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_1_r21" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="ClipPath-1_c_1_r"><rect width="56" height="56"
                                rx="8"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#ClipPath-1_c_1_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect
                              opacity="0.7" width="56" height="56" rx="8"
                              fill="#151c2e"></rect><path opacity="0.2"
                              fill-rule="evenodd" clip-rule="evenodd"
                              d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z"
                              fill="#1c2130"></path><rect opacity="0.6"
                              width="52" height="52" rx="6"
                              fill="url(#Gradient-0_c_1_r21)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="4" fill="url(#Gradient-1_c_1_r21)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z"
                              fill="url(#Gradient-2_c_1_r21)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z"
                              fill="url(#Gradient-3_c_1_r21)"></path><rect
                              opacity="0.6" width="56" height="56" rx="8"
                              fill="#151c2e"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_2_r22" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_2_r22" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_2_r22" x1="58.152" y1="24.257"
                              x2="-3.614" y2="28.984"
                              gradientUnits="userSpaceOnUse"><stop offset="0"
                                stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.219"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.491"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.733"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_2_r22" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="clip0_366_7284_c_2_r"><rect width="56"
                                height="56" rx="7.593"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#clip0_366_7284_c_2_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect
                              opacity="0.7" width="56" height="56" rx="12"
                              fill="#151C2E"></rect><rect opacity="0.6"
                              width="52" height="52" rx="10"
                              fill="url(#Gradient-0_c_2_r22)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="8" fill="url(#Gradient-1_c_2_r22)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z"
                              fill="url(#Gradient-2_c_2_r22)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z"
                              fill="url(#Gradient-3_c_2_r22)"></path><rect
                              opacity="0.6" width="56" height="56" rx="12"
                              fill="#151C2E"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_1_r23" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_1_r23" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_1_r23" x1="52" y1="52" x2="-2.3"
                              y2="1" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.2"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.5"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.7"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_1_r23" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="ClipPath-1_c_1_r"><rect width="56" height="56"
                                rx="8"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#ClipPath-1_c_1_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect
                              opacity="0.7" width="56" height="56" rx="8"
                              fill="#151c2e"></rect><path opacity="0.2"
                              fill-rule="evenodd" clip-rule="evenodd"
                              d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z"
                              fill="#1c2130"></path><rect opacity="0.6"
                              width="52" height="52" rx="6"
                              fill="url(#Gradient-0_c_1_r23)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="4" fill="url(#Gradient-1_c_1_r23)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z"
                              fill="url(#Gradient-2_c_1_r23)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z"
                              fill="url(#Gradient-3_c_1_r23)"></path><rect
                              opacity="0.6" width="56" height="56" rx="8"
                              fill="#151c2e"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button
                        id="cellButton" type="button"
                        class="cell "><svg
                          xmlns="http://www.w3.org/2000/svg" width="56"
                          height="56" fill="none"
                          viewBox="0 0 54 54"><defs><radialgradient
                              id="Gradient-2_c_2_r24" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><radialgradient
                              id="Gradient-3_c_2_r24" cx="0" cy="0" r="1" fx="0"
                              fy="0" gradientUnits="userSpaceOnUse"
                              gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop
                                offset="0" stop-color="#1c2130"></stop><stop
                                offset="1" stop-color="#1c2130"
                                stop-opacity="0"></stop></radialgradient><lineargradient
                              id="Gradient-0_c_2_r24" x1="58.152" y1="24.257"
                              x2="-3.614" y2="28.984"
                              gradientUnits="userSpaceOnUse"><stop offset="0"
                                stop-color="#d8fffc"
                                stop-opacity="0.63"></stop><stop offset="0.219"
                                stop-color="#a0fff7"
                                stop-opacity="0"></stop><stop offset="0.491"
                                stop-color="#8dfff6"
                                stop-opacity="0.56"></stop><stop offset="0.733"
                                stop-color="#9af8f0"></stop><stop offset="1"
                                stop-color="#fff" stop-opacity="0"></stop><stop
                                offset="1" stop-color="#bafff9"
                                stop-opacity="0"></stop></lineargradient><lineargradient
                              id="Gradient-1_c_2_r24" x1="24" y1="0" x2="24"
                              y2="48" gradientUnits="userSpaceOnUse"><stop
                                offset="0" stop-color="#37b0ce"></stop><stop
                                offset="1"
                                stop-color="#01586b"></stop></lineargradient><clippath
                              id="clip0_366_7284_c_2_r"><rect width="56"
                                height="56" rx="7.593"
                                fill="#fff"></rect></clippath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g
                            clip-path="url(#clip0_366_7284_c_2_r)"
                            transform="matrix(0 0 0 0 28 28)"
                            style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect
                              opacity="0.7" width="56" height="56" rx="12"
                              fill="#151C2E"></rect><rect opacity="0.6"
                              width="52" height="52" rx="10"
                              fill="url(#Gradient-0_c_2_r24)"
                              transform="translate(2 2)"></rect><rect width="48"
                              height="48" rx="8" fill="url(#Gradient-1_c_2_r24)"
                              transform="translate(4 4)"></rect><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z"
                              fill="url(#Gradient-2_c_2_r24)"></path><path
                              opacity="0.1" fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z"
                              fill="url(#Gradient-3_c_2_r24)"></path><rect
                              opacity="0.6" width="56" height="56" rx="12"
                              fill="#151C2E"
                              style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><div
                        class="cells-board-mask"
                        style="z-index: 0; display: none;"><div
                          class="animated-highlight"
                          style="translate: none; rotate: none; scale: none; transform: translate(550px, 150px) rotate(-59.9999deg) skew(0.000286479deg, 0deg);"></div></div></div>`;
      document.querySelector(".status-bar").outerHTML = `
      <div class="status-bar">
          <div class="status-bar__status">
            <div class="status-bar__icon"><svg width="32" height="32" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2752 2.2285C12.6529 1.48818 13.7108 1.48818 14.0885 2.2285L16.735 7.41481C16.8829 7.70466 17.1604 7.90633 17.4818 7.95743L23.2321 8.87169C24.0529 9.0022 24.3798 10.0082 23.7924 10.5963L19.6778 14.7159C19.4478 14.9461 19.3418 15.2724 19.3925 15.5938L20.2999 21.3452C20.4294 22.1662 19.5736 22.7879 18.8329 22.4111L13.6434 19.7708C13.3534 19.6232 13.0103 19.6232 12.7203 19.7708L7.53081 22.4111C6.79004 22.7879 5.93424 22.1662 6.06377 21.3452L6.97119 15.5938C7.0219 15.2724 6.91588 14.9461 6.68592 14.7159L2.57124 10.5963C1.98389 10.0082 2.31077 9.0022 3.1316 8.87169L8.88187 7.95743C9.20324 7.90633 9.48081 7.70466 9.62872 7.41481L12.2752 2.2285Z" fill="#C22A20"></path>
                <path d="M12.2752 2.2285C12.6529 1.48818 13.7108 1.48818 14.0885 2.2285L16.735 7.41481C16.8829 7.70466 17.1604 7.90633 17.4818 7.95743L23.2321 8.87169C24.0529 9.0022 24.3798 10.0082 23.7924 10.5963L19.6778 14.7159C19.4478 14.9461 19.3418 15.2724 19.3925 15.5938L20.2999 21.3452C20.4294 22.1662 19.5736 22.7879 18.8329 22.4111L13.6434 19.7708C13.3534 19.6232 13.0103 19.6232 12.7203 19.7708L7.53081 22.4111C6.79004 22.7879 5.93424 22.1662 6.06377 21.3452L6.97119 15.5938C7.0219 15.2724 6.91588 14.9461 6.68592 14.7159L2.57124 10.5963C1.98389 10.0082 2.31077 9.0022 3.1316 8.87169L8.88187 7.95743C9.20324 7.90633 9.48081 7.70466 9.62872 7.41481L12.2752 2.2285Z" fill="url(#paint0_linear_448_8887status)"></path>
                <path d="M12.2754 2.22809C12.6531 1.48777 13.711 1.48777 14.0887 2.22809L16.7352 7.4144C16.8831 7.70426 17.1607 7.90592 17.482 7.95702L23.2323 8.87128C24.0531 9.00179 24.38 10.0078 23.7927 10.5959L19.678 14.7155C19.448 14.9457 19.342 15.272 19.3927 15.5934L20.3001 21.3448C20.4297 22.1658 19.5739 22.7875 18.8331 22.4107L13.6436 19.7704C13.3536 19.6228 13.0105 19.6228 12.7205 19.7704L7.53102 22.4107C6.79025 22.7875 5.93445 22.1658 6.06398 21.3448L6.9714 15.5934C7.02211 15.272 6.91609 14.9457 6.68613 14.7155L2.57145 10.5959C1.9841 10.0078 2.31098 9.00179 3.13181 8.87128L8.88208 7.95702C9.20345 7.90592 9.48102 7.70426 9.62893 7.4144L12.2754 2.22809Z" fill="url(#paint1_linear_448_8887status)"></path>
                <path d="M12.2754 2.22809C12.6531 1.48777 13.711 1.48777 14.0887 2.22809L16.7352 7.4144C16.8831 7.70426 17.1607 7.90592 17.482 7.95702L23.2323 8.87128C24.0531 9.00179 24.38 10.0078 23.7927 10.5959L19.678 14.7155C19.448 14.9457 19.342 15.272 19.3927 15.5934L20.3001 21.3448C20.4297 22.1658 19.5739 22.7875 18.8331 22.4107L13.6436 19.7704C13.3536 19.6228 13.0105 19.6228 12.7205 19.7704L7.53102 22.4107C6.79025 22.7875 5.93445 22.1658 6.06398 21.3448L6.9714 15.5934C7.02211 15.272 6.91609 14.9457 6.68613 14.7155L2.57145 10.5959C1.9841 10.0078 2.31098 9.00179 3.13181 8.87128L8.88208 7.95702C9.20345 7.90592 9.48102 7.70426 9.62893 7.4144L12.2754 2.22809Z" fill="url(#paint2_radial_448_8887status)"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.433 7.56862L13.7865 2.38231C13.5347 1.88876 12.8294 1.88876 12.5776 2.38231L9.93115 7.56862C9.73395 7.95509 9.36385 8.22398 8.93536 8.29211L3.18509 9.20637C2.63787 9.29338 2.41995 9.96407 2.81151 10.3561L6.92619 14.4757C7.23281 14.7827 7.37417 15.2177 7.30655 15.6463L6.39914 21.3977C6.31278 21.945 6.88331 22.3595 7.37716 22.1082L12.5666 19.468C12.9533 19.2712 13.4108 19.2712 13.7975 19.468L18.9869 22.1082C19.4808 22.3595 20.0513 21.945 19.965 21.3977L19.0576 15.6463C18.9899 15.2177 19.1313 14.7827 19.4379 14.4757L23.5526 10.3561C23.9442 9.96407 23.7262 9.29338 23.179 9.20637L17.4287 8.29211C17.0003 8.22398 16.6302 7.95509 16.433 7.56862ZM14.0887 2.22809C13.711 1.48777 12.6531 1.48777 12.2754 2.22809L9.62893 7.4144C9.48102 7.70426 9.20345 7.90592 8.88208 7.95702L3.13181 8.87128C2.31098 9.00179 1.9841 10.0078 2.57145 10.5959L6.68613 14.7155C6.91609 14.9457 7.02211 15.272 6.9714 15.5934L6.06398 21.3448C5.93445 22.1658 6.79025 22.7875 7.53102 22.4107L12.7205 19.7704C13.0105 19.6228 13.3536 19.6228 13.6436 19.7704L18.8331 22.4107C19.5739 22.7875 20.4297 22.1658 20.3001 21.3448L19.3927 15.5934C19.342 15.272 19.448 14.9457 19.678 14.7155L23.7927 10.5959C24.38 10.0078 24.0531 9.00179 23.2323 8.87128L17.482 7.95702C17.1607 7.90592 16.8831 7.70426 16.7352 7.4144L14.0887 2.22809Z" fill="url(#paint3_linear_448_8887status)"></path>
                <path d="M12.741 7.3195C12.937 6.98075 13.4261 6.98075 13.6221 7.3195L15.1721 9.99846C15.2442 10.123 15.3656 10.2113 15.5063 10.2413L18.5331 10.8876C18.9159 10.9693 19.067 11.4344 18.8054 11.7255L16.7365 14.0275C16.6403 14.1345 16.594 14.2773 16.6089 14.4204L16.9296 17.4988C16.9701 17.8881 16.5745 18.1755 16.2168 18.0167L13.3882 16.7604C13.2566 16.702 13.1065 16.702 12.975 16.7604L10.1464 18.0167C9.7887 18.1755 9.39305 17.8881 9.4336 17.4988L9.75428 14.4204C9.7692 14.2773 9.72281 14.1345 9.62661 14.0275L7.55775 11.7255C7.29613 11.4344 7.44726 10.9693 7.83001 10.8876L10.8568 10.2413C10.9976 10.2113 11.119 10.123 11.1911 9.99846L12.741 7.3195Z" fill="url(#paint4_linear_448_8887status)"></path>
                <path d="M19.6431 11.3076C13.5027 17.1102 8.01855 14.5437 6.04404 12.5351C3.04056 8.07161 9.63153 11.6424 15.4716 10.0802C20.1437 8.83037 20.1993 10.3777 19.6431 11.3076Z" fill="url(#paint5_linear_448_8887status)"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.486 3.38311C12.6114 3.44656 12.6616 3.59966 12.5981 3.72506L11.8786 5.14712C11.8152 5.27252 11.6621 5.32275 11.5367 5.2593C11.4113 5.19585 11.3611 5.04275 11.4245 4.91735L12.144 3.49529C12.2075 3.36989 12.3606 3.31966 12.486 3.38311Z" fill="#F9BE76"></path>
                <circle cx="3.68131" cy="9.52742" r="0.254474" fill="#F9BE76"></circle>
                <circle cx="11.3155" cy="5.62557" r="0.254474" fill="#F9BE76"></circle>
                <path d="M10.7514 8.25268C8.82111 10.9869 9.51093 12.4755 10.0971 12.8781C11.8774 13.6816 15.1214 8.94033 15.3409 7.68564C15.5604 6.43095 13.1642 4.83492 10.7514 8.25268Z" fill="url(#paint6_linear_448_8887status)" fill-opacity="0.6"></path>
                <defs>
                  <linearGradient id="paint0_linear_448_8887status" x1="13.1818" y1="0.45166" x2="18.8651" y2="22.4213" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FBA416" stop-opacity="0"></stop>
                    <stop offset="1" stop-color="#FDBB4E" stop-opacity="0.63"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_448_8887status" x1="13.182" y1="0.451259" x2="18.8653" y2="22.4209" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FDBB4E" stop-opacity="0"></stop>
                    <stop offset="1" stop-color="#FDBB4E" stop-opacity="0.63"></stop>
                  </linearGradient>
                  <radialGradient id="paint2_radial_448_8887status" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.2132 9.86681) rotate(52.6712) scale(14.8278)">
                    <stop offset="0.738765" stop-color="#9CB6DD" stop-opacity="0"></stop>
                    <stop offset="0.89825" stop-color="#C6F1FF" stop-opacity="0.37"></stop>
                    <stop offset="1" stop-color="#EFFBFF" stop-opacity="0.7"></stop>
                  </radialGradient>
                  <linearGradient id="paint3_linear_448_8887status" x1="20.3073" y1="17.4162" x2="8.6015" y2="6.81312" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FEFFD3" stop-opacity="0.63"></stop>
                    <stop offset="0.218803" stop-color="#FAFD4E" stop-opacity="0"></stop>
                    <stop offset="0.491108" stop-color="#FDFF8B" stop-opacity="0.56"></stop>
                    <stop offset="0.733041" stop-color="#F7F990"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                    <stop offset="1" stop-color="#FEFFB7" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint4_linear_448_8887status" x1="13.1816" y1="6.55811" x2="13.0119" y2="17.8398" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FEFFB0"></stop>
                    <stop offset="0.277442" stop-color="white" stop-opacity="0.51"></stop>
                    <stop offset="1" stop-color="#FAFD4E" stop-opacity="0.15"></stop>
                  </linearGradient>
                  <linearGradient id="paint5_linear_448_8887status" x1="12.635" y1="10.8612" x2="12.551" y2="14.8707" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FAFD4E" stop-opacity="0"></stop>
                    <stop offset="0.731853" stop-color="#FAFD4E" stop-opacity="0.46"></stop>
                  </linearGradient>
                  <linearGradient id="paint6_linear_448_8887status" x1="11.5105" y1="8.61842" x2="13.7636" y2="10.7449" gradientUnits="userSpaceOnUse">
                    <stop offset="0.223958" stop-color="#FAFD4E" stop-opacity="0.35"></stop>
                    <stop offset="1" stop-color="#FAFD4E" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg></div>
            <div class="status-bar__status-content"><span class="status-bar__status-title">Макс. выигрыш</span>
              <div class="status-bar__status-text"><span class="status-bar__status-text-amount" id="possibleMaxWinAmount">${act2.toLocaleString('ru-RU', { useGrouping: true }).replace(/,/g, '.')}</span><span class="text-sm leading-4">&nbsp;</span><span class="status-bar__status-text-currency">₽</span></div>
            </div>
          </div>
          <div class="select-traps status-bar__select-traps"><button class="select-traps__prev-arrow-btn disabled:opacity-50" type="button" id="prev_preset_btn" onclick="prevPreset()"><svg class="select-traps__arrow-icon select-traps__arrow-icon_prev" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.92616 20.0002L10.7906 12.082L12.8584 10.0001L10.7906 7.91821L2.92616 0L0.858398 2.0819L8.72287 10.0001L0.858398 17.9183L2.92616 20.0002Z">
                </path>
              </svg></button>
            <div class="select-traps__content"><span class="select-traps__traps_amount" id="trapsAmount">${trapsAmount}</span><span class="select-traps__title">ловушек</span></div><button class="select-traps__next-arrow-btn disabled:opacity-50" type="button" id="next_preset_btn" onclick="nextPreset()"><svg class="select-traps__arrow-icon" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.92616 20.0002L10.7906 12.082L12.8584 10.0001L10.7906 7.91821L2.92616 0L0.858398 2.0819L8.72287 10.0001L0.858398 17.9183L2.92616 20.0002Z">
                </path>
              </svg></button>
          </div>
        </div>

      `;
      document.querySelector(".bet-panel ").outerHTML = `
      <div class="bet-panel ">
          <div class="bet-panel__actions">
            <div class="flex flex-wrap flex-row mobile:flex-col mobile:gap-y-3">
              <div class="basis-2/3">
                <div class="input-state-panel base-input">
                  <div class="flex w-full">
                    <!-- decrement button -->
                    <button type="button" id="decrease_bet_btn" class="bet-panel__control" onclick="decrementValue(&quot;amount_field&quot;)">
                      <div class="bet-panel__control-border right"></div><span class="bet-panel__control-icon">-</span>
                    </button>
                    <!-- value -->
                    <div class="app-input flex flex-1 justify-center"><input oninput='onInput("amount_field")' id="amount_field" maxlength="8" autocomplete="off" value="${bet_amount_value}" type='number' max='9999' min='5' style="width: 70px;"><div class="ml-1 my-auto"><div id="currentBetCurrency" class="app-input__currency">₽</div></div></div>

                    <!-- increment button  -->
                    <button type="button" id="increase_bet_btn" class="bet-panel__control" onclick="incrementValue(&quot;amount_field&quot;)">
                      <div class="bet-panel__control-border left"></div><span class="bet-panel__control-icon">+</span>
                    </button>
                  </div>
                </div>
              </div>
              <!-- кнопкка в ожидании -->
              <div class="basis-1/3 pl-2 mobile:pl-0 mobile:basis-auto mobile:h-[3.25rem]">
                <button id="play_btn" type="button" class="app-button big games-blue-bg text-white cursor-pointer block h-full w-full" onclick="playGame()"><span>Играть</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

    }, 2000);
    console.log(trapsAmount);
};



export function clickCellButton(cellButton) {
  cellButton.forEach((button) => {
    button.onclick = async () => {

      cellButton.forEach((btn) => btn.disabled = true);

      button.style.transition = "transform 0.1s ease-in-out";
      button.style.transform = "scale(0.95)"; 


      await new Promise(resolve => setTimeout(resolve, 300));


      button.style.transition = "transform 0.3s ease-in-out, opacity 0.2s ease-in-out";
      button.style.transform = "translateY(-100px)"; 
      button.style.opacity = "0";

      async function tteror() {
        button.disabled = true;

        button.className = "cell activeCellButton";

        preMassiv = document.querySelectorAll('.multiplier-list__item-text_active');
        preMassiv = preMassiv[preMassiv.length -1].innerText.replace(/X/g, ""); 

        transformCurrent -= Number(document.querySelector('.multiplier-list__item-text_active').parentElement.offsetWidth) + parseFloat(getComputedStyle(document.documentElement).fontSize) / 2;

        console.log(transformCurrent, parseFloat(getComputedStyle(document.documentElement).fontSize));

        document.querySelector('.multiplier-list-inner').style.transform = `translate(${transformCurrent}px, 0px)`;

        prepossiblleMaxWin = Number(preMassiv) * bet_amount_value;
        
        indexCurrent++;
        if (document.querySelector('.multiplier-list-inner').children[indexCurrent] == (document.querySelector('.multiplier-list-inner').children[24-trapsAmount])) {
          document.querySelector('.status-bar__status-title').innerText = 'Последний шаг';
        }
        try {
          document.querySelector('.multiplier-list-inner').children[indexCurrent].firstChild.classList.add('multiplier-list__item-text_active');
          document.querySelector('.multiplier-list-inner').children[(indexCurrent)-1].firstChild.classList.remove('multiplier-list__item-text_active');
        } catch (e) {}

        let massiv = document.querySelectorAll('.multiplier-list__item-text_active');
        massiv = massiv[massiv.length -1].innerText.replace(/X/g, "");

        possiblleMaxWin = Number(massiv) * bet_amount_value;
        
        document.querySelector('.possiblleMaxWin').innerHTML = `${possiblleMaxWin.toFixed(2)}`;

        if (document.querySelector(".btn-waiting")) {
          document.querySelector(".btn-waiting").outerHTML = `
            <button onclick="takePrize()" id="takePrizeButton" type="button" class="app-button big games-orange-bg main-light-text cashout cursor-pointer block h-full w-full">
              <span>
                <div>
                  <div class="cashout-amount">
                    <span class="font-bold" id="prizeValue">${prepossiblleMaxWin.toFixed(2)}</span>
                    <span class="font-normal" id="prizeCurrency" style="margin-left: 0.1rem;">₽</span>
                  </div>
                  <div><span>Забрать</span></div>
                </div>
              </span>
            </button>
          `;
        }
        document.getElementById('prizeValue').innerText = prepossiblleMaxWin.toFixed(2);

        const notPressedButtons = Array.from(cellButton).reduce(
          (acc, button, idx) => {
            if (!button.classList.contains("activeCellButton")) {
              acc.push(idx);
            }
            return acc;
          },
          []
        );
        
        if (notPressedButtons.length === trapsAmount) {
          notPressedButtons.forEach((index) => {
            cellButton[index].outerHTML = `
              <button id="cellButton" type="button" class="cell" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" style="background: 0px 0px;"><defs><linearGradient id="Gradient-0_cr_i" x1="36.273" y1="22.811" x2="36.273" y2="42.259" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#708fbe" stop-opacity="0"></stop><stop offset="1" stop-color="#72ddff" stop-opacity="0.63"></stop></linearGradient><linearGradient id="Gradient-1_cr_i" x1="37.616" y1="25.294" x2="38.093" y2="46.992" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#708fbe" stop-opacity="0"></stop><stop offset="1" stop-color="#72ddff" stop-opacity="0.63"></stop></linearGradient><linearGradient id="Gradient-3_cr_i" x1="40.728" y1="38.449" x2="18.636" y2="19.326" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8f6ff" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0d2ff" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dc8ff" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9adbf8"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#baeaff" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-4_cr_i" x1="14.418" y1="36.947" x2="17.329" y2="39.593" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c4c4c4" stop-opacity="0"></stop><stop offset="0.732" stop-color="#dbf6ff" stop-opacity="0.46"></stop></linearGradient><linearGradient id="Gradient-5_cr_i" x1="19.496" y1="20.081" x2="16.218" y2="17.456" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c4c4c4" stop-opacity="0"></stop><stop offset="1" stop-color="#dbf6ff" stop-opacity="0.45"></stop></linearGradient><linearGradient id="Gradient-6_cr_i" x1="40.013" y1="20.668" x2="36.906" y2="18.258" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c4c4c4" stop-opacity="0"></stop><stop offset="1" stop-color="#dbf6ff" stop-opacity="0.45"></stop></linearGradient><linearGradient id="Gradient-7_cr_i" x1="28.827" y1="29.033" x2="36.075" y2="28.323" gradientUnits="userSpaceOnUse"><stop offset="0.224" stop-color="#dbf6ff" stop-opacity="0.35"></stop><stop offset="1" stop-color="#c4c4c4" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-8_cr_i" x1="37.08" y1="34.836" x2="12.044" y2="13.755" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8f6ff" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0d2ff" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dc8ff" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9adbf8"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#baeaff" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-9_cr_i" x1="0" y1="-2.48" x2="-0.638" y2="1.785" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#94d9f6"></stop><stop offset="1" stop-color="#94d9f6" stop-opacity="0"></stop></linearGradient><radialGradient id="Gradient-2_cr_i" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(15.5197 21.2962 -21.0221 15.3199 22.682 24.327)"><stop offset="0.739" stop-color="#9cb6dd" stop-opacity="0"></stop><stop offset="0.898" stop-color="#c6f1ff" stop-opacity="0.37"></stop><stop offset="1" stop-color="#effbff" stop-opacity="0.7"></stop></radialGradient></defs><style>@keyframes a0_t_cr_i{0%{transform:translate(28px,28px) rotate(180deg);animation-timing-function:cubic-bezier(0,0,.58,1)}71.4285%{transform:translate(28px,28px) rotate(-5deg)}to{transform:translate(28px,28px) rotate(0deg)}}@keyframes krest_t_cr_i{0%{transform:scale(0,0) translate(-28px,-28px)}42.8571%,to{transform:scale(1,1) translate(-28px,-28px)}71.4285%{transform:scale(1.15,1.15) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}}@keyframes a1_t_cr_i{0%{transform:translate(17.3511px,39px) rotate(0deg) scale(.438128,.423532) translate(-14.3863px,-37.0446px)}to{transform:translate(14.3863px,37.0446px) rotate(0deg) scale(1,1) translate(-14.3863px,-37.0446px)}}@keyframes a2_t_cr_i{0%{transform:translate(15.8726px,16.8036px) rotate(0deg) scale(.440469,.440469) translate(-19.2722px,-19.7496px)}to{transform:translate(19.2722px,19.7496px) rotate(0deg) scale(1,1) translate(-19.2722px,-19.7496px)}}@keyframes a3_t_cr_i{0%{transform:translate(37px,18.2131px) rotate(0deg) scale(.461347,.461347) translate(-40.0446px,-20.5702px)}to{transform:translate(40.0446px,20.5702px) rotate(0deg) scale(1,1) translate(-40.0446px,-20.5702px)}}@keyframes a4_t_cr_i{0%{transform:translate(29.3877px,32.5041px) rotate(-45.565409deg) scale(.403058,.403058) translate(-31.3472px,-29.0394px)}to{transform:translate(31.3472px,29.0394px) rotate(0deg) scale(1,1) translate(-31.3472px,-29.0394px)}}@keyframes a5_t_cr_i{0%{transform:translate(27.9335px,28.2933px) rotate(0deg) scale(1.122601,1.122601) translate(-27.9335px,-28.2933px)}28.5714%{transform:translate(27.9335px,28.2933px) rotate(-4.682578deg) scale(1.087572,1.087572) translate(-27.9335px,-28.2933px)}71.4285%{transform:translate(27.9335px,28.2933px) rotate(0deg) scale(1.035029,1.035029) translate(-27.9335px,-28.2933px)}to{transform:translate(27.9335px,28.2933px) rotate(0deg) scale(1,1) translate(-27.9335px,-28.2933px)}}</style><g style="animation: 0.7s linear 0s 1 normal both running a0_t_cr_i;"><g transform="matrix(0 0 0 0 28 28)" id="krest" style="animation: 0.7s linear 0s 1 normal both running krest_t_cr_i;"><path fill-rule="evenodd" clip-rule="evenodd" d="M43.408 10.226a2.385 2.385 0 0 0-3.373 0L29.388 20.872a2.237 2.237 0 0 1-3.163 0L15.578 10.226a2.385 2.385 0 0 0-3.373 0l-2.53 2.53a2.385 2.385 0 0 0 0 3.373L20.32 26.776c.874.873.874 2.29 0 3.163L9.675 40.585a2.385 2.385 0 0 0 0 3.374l2.53 2.53a2.385 2.385 0 0 0 3.373 0l10.647-10.647a2.236 2.236 0 0 1 3.163 0l10.646 10.647a2.385 2.385 0 0 0 3.374 0l2.53-2.53a2.385 2.385 0 0 0 0-3.374L35.29 29.94a2.237 2.237 0 0 1 0-3.163l10.647-10.647a2.385 2.385 0 0 0 0-3.373l-2.53-2.53Z" fill="#43628F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.408 10.226a2.385 2.385 0 0 0-3.373 0L29.388 20.872a2.237 2.237 0 0 1-3.163 0L15.578 10.226a2.385 2.385 0 0 0-3.373 0l-2.53 2.53a2.385 2.385 0 0 0 0 3.373L20.32 26.776c.874.873.874 2.29 0 3.163L9.675 40.585a2.385 2.385 0 0 0 0 3.374l2.53 2.53a2.385 2.385 0 0 0 3.373 0l10.647-10.647a2.236 2.236 0 0 1 3.163 0l10.646 10.647a2.385 2.385 0 0 0 3.374 0l2.53-2.53a2.385 2.385 0 0 0 0-3.374L35.29 29.94a2.237 2.237 0 0 1 0-3.163l10.647-10.647a2.385 2.385 0 0 0 0-3.373l-2.53-2.53Z" fill="url(#Gradient-0_cr_i)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.408 10.226a2.385 2.385 0 0 0-3.373 0L27.806 22.454 15.578 10.226a2.385 2.385 0 0 0-3.373 0l-2.53 2.53a2.385 2.385 0 0 0 0 3.373l12.228 12.228L9.675 40.585a2.385 2.385 0 0 0 0 3.374l2.53 2.53a2.385 2.385 0 0 0 3.373 0L27.806 34.26 40.035 46.49a2.385 2.385 0 0 0 3.373 0l2.53-2.53a2.385 2.385 0 0 0 0-3.374L33.709 28.357 45.938 16.13a2.385 2.385 0 0 0 0-3.373l-2.53-2.53Z" fill="url(#Gradient-1_cr_i)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.408 10.226a2.385 2.385 0 0 0-3.373 0L27.806 22.454 15.578 10.226a2.385 2.385 0 0 0-3.373 0l-2.53 2.53a2.385 2.385 0 0 0 0 3.373l12.228 12.228L9.675 40.585a2.385 2.385 0 0 0 0 3.374l2.53 2.53a2.385 2.385 0 0 0 3.373 0L27.806 34.26 40.035 46.49a2.385 2.385 0 0 0 3.373 0l2.53-2.53a2.385 2.385 0 0 0 0-3.374L33.71 28.357l12.228-12.228a2.385 2.385 0 0 0 0-3.373l-2.53-2.53Z" fill="url(#Gradient-2_cr_i)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M39.36 9.551a3.34 3.34 0 0 1 4.723 0l2.53 2.53a3.34 3.34 0 0 1 0 4.723L35.227 28.188a.239.239 0 0 0 0 .338L46.613 39.91a3.34 3.34 0 0 1 0 4.722l-2.53 2.53a3.34 3.34 0 0 1-4.723 0L27.975 35.778a.239.239 0 0 0-.337 0L16.253 47.163a3.34 3.34 0 0 1-4.723 0L9 44.633a3.34 3.34 0 0 1 0-4.722l11.385-11.385a.239.239 0 0 0 0-.338L9 16.804a3.34 3.34 0 0 1 0-4.723l2.53-2.53a3.34 3.34 0 0 1 4.723 0l11.385 11.385a.239.239 0 0 0 .337 0L39.36 9.55Zm.675.675a2.385 2.385 0 0 1 3.373 0l2.53 2.53a2.385 2.385 0 0 1 0 3.373L34.553 27.514a1.193 1.193 0 0 0 0 1.686l11.385 11.385a2.385 2.385 0 0 1 0 3.374l-2.53 2.53a2.385 2.385 0 0 1-3.373 0L28.65 35.104a1.193 1.193 0 0 0-1.687 0L15.578 46.489a2.385 2.385 0 0 1-3.373 0l-2.53-2.53a2.385 2.385 0 0 1 0-3.374L21.06 29.2a1.193 1.193 0 0 0 0-1.686L9.675 16.129a2.385 2.385 0 0 1 0-3.373l2.53-2.53a2.385 2.385 0 0 1 3.373 0L26.963 21.61c.466.466 1.221.466 1.687 0l11.385-11.384Z" fill="#E2E2E2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M39.36 9.551a3.34 3.34 0 0 1 4.723 0l2.53 2.53a3.34 3.34 0 0 1 0 4.723L35.227 28.188a.239.239 0 0 0 0 .338L46.613 39.91a3.34 3.34 0 0 1 0 4.722l-2.53 2.53a3.34 3.34 0 0 1-4.723 0L27.975 35.778a.239.239 0 0 0-.337 0L16.253 47.163a3.34 3.34 0 0 1-4.723 0L9 44.633a3.34 3.34 0 0 1 0-4.722l11.385-11.385a.239.239 0 0 0 0-.338L9 16.804a3.34 3.34 0 0 1 0-4.723l2.53-2.53a3.34 3.34 0 0 1 4.723 0l11.385 11.385a.239.239 0 0 0 .337 0L39.36 9.55Zm.675.675a2.385 2.385 0 0 1 3.373 0l2.53 2.53a2.385 2.385 0 0 1 0 3.373L34.553 27.514a1.193 1.193 0 0 0 0 1.686l11.385 11.385a2.385 2.385 0 0 1 0 3.374l-2.53 2.53a2.385 2.385 0 0 1-3.373 0L28.65 35.104a1.193 1.193 0 0 0-1.687 0L15.578 46.489a2.385 2.385 0 0 1-3.373 0l-2.53-2.53a2.385 2.385 0 0 1 0-3.374L21.06 29.2a1.193 1.193 0 0 0 0-1.686L9.675 16.129a2.385 2.385 0 0 1 0-3.373l2.53-2.53a2.385 2.385 0 0 1 3.373 0L26.963 21.61c.466.466 1.221.466 1.687 0l11.385-11.384Z" fill="url(#Gradient-3_cr_i)"></path><path d="M19.263 32.051c.336 8.28-5.096 10.683-7.854 10.85-5.237-.655 1.651-3.229 4.258-8.555 2.086-4.261 3.267-3.305 3.596-2.295Z" fill="url(#Gradient-4_cr_i)" transform="matrix(.43813 0 0 .42353 11.048 23.31)" style="animation: 0.7s linear 0s 1 normal both running a1_t_cr_i;"></path><path d="M16.417 22.512c-1.922-6.724 2.141-6.982 4.413-6.27 4.507 2.126-.74 2.076-1.863 5.536-.898 2.769-2.074 1.643-2.55.734Z" fill="url(#Gradient-5_cr_i)" fill-opacity="0.6" transform="matrix(.44047 0 0 .44047 7.384 8.105)" style="animation: 0.7s linear 0s 1 normal both running a2_t_cr_i;"></path><path d="M35.168 25.564c-.336-8.281 5.096-10.684 7.854-10.85 5.237.654-1.651 3.229-4.258 8.555-2.086 4.26-3.267 3.305-3.596 2.295Z" fill="url(#Gradient-6_cr_i)" fill-opacity="0.6" transform="matrix(.46135 0 0 .46135 18.526 8.723)" style="animation: 0.7s linear 0s 1 normal both running a3_t_cr_i;"></path><path d="M27.007 29.814c1.866 7.643 5.57 8.719 7.188 8.301 4.173-1.915.778-14.985-1.107-17.311-1.885-2.326-8.414-.543-6.081 9.01Z" fill="url(#Gradient-7_cr_i)" fill-opacity="0.6" transform="rotate(-45.566 45.772 2.16) scale(.40306)" style="animation: 0.7s linear 0s 1 normal both running a4_t_cr_i;"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.948 13.266a.894.894 0 0 1 1.265.002l9.498 9.524a5.963 5.963 0 0 0 8.445 0l9.498-9.524a.894.894 0 1 1 1.267 1.263l-9.525 9.552a5.963 5.963 0 0 0 0 8.421l9.525 9.552a.894.894 0 1 1-1.267 1.263l-9.498-9.525a5.963 5.963 0 0 0-8.445 0l-9.498 9.525a.895.895 0 0 1-1.267-1.263l9.525-9.552a5.963 5.963 0 0 0 0-8.421l-9.525-9.552a.894.894 0 0 1 .002-1.265Z" fill="url(#Gradient-8_cr_i)" transform="translate(-3.425 -3.469) scale(1.1226)" style="animation: 0.7s linear 0s 1 normal both running a5_t_cr_i;"></path><circle fill="#94D9F6" transform="translate(26.508 27.06)" r="0.54"></circle><circle opacity="0.2" fill="url(#Gradient-9_cr_i)" transform="translate(26.509 27.06)" r="2.48"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M12.052 16.59a.54.54 0 0 1 .764.022l2.322 2.46a.54.54 0 0 1-.785.742l-2.323-2.46a.54.54 0 0 1 .022-.764Z" fill="#94D9F6"></path><circle fill="#94D9F6" transform="rotate(-70.181 22.464 -.895)" r="0.54"></circle></g></g></svg></button>
          `;
          });
          overlayAnimation();
        }

        setTimeout(() => {
          try {
            button.outerHTML = `
              <button id="cellButton" type="button" class="cell" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" style="background: 0px 0px;"><defs><linearGradient id="Gradient-0_s_i" x1="28.392" y1="0.972" x2="40.632" y2="48.291" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fba416" stop-opacity="0"></stop><stop offset="1" stop-color="#fdbb4e" stop-opacity="0.63"></stop></linearGradient><linearGradient id="Gradient-1_s_i" x1="28.392" y1="0.972" x2="40.633" y2="48.291" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fdbb4e" stop-opacity="0"></stop><stop offset="1" stop-color="#fdbb4e" stop-opacity="0.63"></stop></linearGradient><linearGradient id="Gradient-3_s_i" x1="43.739" y1="37.512" x2="18.526" y2="14.674" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feffd3" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#fafd4e" stop-opacity="0"></stop><stop offset="0.491" stop-color="#fdff8b" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#f7f990"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#feffb7" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-4_s_i" x1="28.391" y1="14.126" x2="28.026" y2="38.425" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feffb0"></stop><stop offset="0.277" stop-color="#fff" stop-opacity="0.51"></stop><stop offset="1" stop-color="#fafd4e" stop-opacity="0.15"></stop></linearGradient><linearGradient id="Gradient-5_s_i" x1="27.214" y1="23.393" x2="27.033" y2="32.029" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafd4e" stop-opacity="0"></stop><stop offset="0.732" stop-color="#fafd4e" stop-opacity="0.46"></stop></linearGradient><linearGradient id="Gradient-6_s_i" x1="24.792" y1="18.563" x2="29.645" y2="23.143" gradientUnits="userSpaceOnUse"><stop offset="0.224" stop-color="#fafd4e" stop-opacity="0.35"></stop><stop offset="1" stop-color="#fafd4e" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-7_s_i" x1="0.016" y1="26.376" x2="16.573" y2="26.055" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><radialGradient id="Gradient-2_s_i" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="rotate(52.671 -10.467 32.845) scale(31.9369)"><stop offset="0.739" stop-color="#9cb6dd" stop-opacity="0"></stop><stop offset="0.898" stop-color="#c6f1ff" stop-opacity="0.37"></stop><stop offset="1" stop-color="#effbff" stop-opacity="0.7"></stop></radialGradient><mask id="Mask-1_s_i"><path fill="url(#Gradient-7_s_i)" transform="rotate(30 31.002 3.397)" d="M0 0h16.959v56H0z" style="animation: 0.7s linear 0s 1 normal both running a4_t_s_i;"></path></mask></defs><style>@keyframes star_t_s_i{0%{transform:translate(28.3918px,26.0576px) scale(0,0) translate(-23.4974px,-22.4547px);animation-timing-function:cubic-bezier(0,0,.58,1)}42.8571%{transform:translate(28.3918px,26.0576px) scale(1,1) translate(-23.4974px,-22.4547px);animation-timing-function:cubic-bezier(0,0,.58,1)}71.4285%{transform:translate(28.3918px,26.0576px) scale(1.15,1.15) translate(-23.4974px,-22.4547px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28.3918px,26.0576px) scale(1,1) translate(-23.4974px,-22.4547px)}}@keyframes a1_t_s_i{0%,to{transform:translate(23.4966px,22.4549px)}}@keyframes a0_t_s_i{0%{transform:scale(1.889498,1.889498) translate(-28.3911px,-27.0603px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:scale(1,1) translate(-28.3911px,-27.0603px)}}@keyframes a2_t_s_i{0%{transform:translate(22.2182px,22.7642px) rotate(145.526246deg) scale(.462454,.462454) translate(-27.1127px,-26.3671px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(22.2182px,22.7642px) rotate(0deg) scale(1,1) translate(-27.1127px,-26.3671px)}}@keyframes a2_o_s_i{0%{opacity:0;animation-timing-function:cubic-bezier(0,0,.58,1)}to{opacity:1}}@keyframes a3_t_s_i{0%{transform:translate(18.9293px,24.3971px) rotate(-53.127557deg) scale(.322292,.322292) translate(-26.7458px,-20.6401px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(21.8514px,17.0372px) rotate(0deg) scale(1,1) translate(-26.7458px,-20.6401px)}}@keyframes a3_o_s_i{0%{opacity:0;animation-timing-function:cubic-bezier(0,0,.58,1)}to{opacity:1}}@keyframes a4_t_s_i{0%{transform:translate(-.804393px,13.4424px) rotate(30deg) translate(-8.47967px,-28px)}28.5714%{transform:translate(-.804393px,13.4424px) rotate(30deg) translate(-8.47967px,-28px);animation-timing-function:cubic-bezier(.42,0,.58,1)}85.7142%,to{transform:translate(58.8824px,41.1538px) rotate(30deg) translate(-8.47967px,-28px)}}</style><g id="star" transform="matrix(0 0 0 0 28.392 26.058)" style="animation: 0.7s linear 0s 1 normal both running star_t_s_i;"><path d="M26.439 4.8c.813-1.595 3.092-1.595 3.905 0l5.7 11.17a2.192 2.192 0 0 0 1.609 1.168l12.385 1.97c1.768.28 2.472 2.448 1.207 3.714l-8.862 8.873a2.193 2.193 0 0 0-.615 1.891l1.955 12.388c.279 1.768-1.565 3.107-3.16 2.295l-11.177-5.686a2.192 2.192 0 0 0-1.989 0L16.22 48.269c-1.595.812-3.439-.527-3.16-2.295l1.955-12.388a2.192 2.192 0 0 0-.615-1.89l-8.862-8.874c-1.265-1.266-.561-3.433 1.207-3.714l12.385-1.97a2.192 2.192 0 0 0 1.609-1.168l5.7-11.17Z" fill="#C22A20" transform="translate(-4.894 -3.603)"></path><path d="M26.439 4.8c.813-1.595 3.092-1.595 3.905 0l5.7 11.17a2.192 2.192 0 0 0 1.609 1.168l12.385 1.97c1.768.28 2.472 2.448 1.207 3.714l-8.862 8.873a2.193 2.193 0 0 0-.615 1.891l1.955 12.388c.279 1.768-1.565 3.107-3.16 2.295l-11.177-5.686a2.192 2.192 0 0 0-1.989 0L16.22 48.269c-1.595.812-3.439-.527-3.16-2.295l1.955-12.388a2.192 2.192 0 0 0-.615-1.89l-8.862-8.874c-1.265-1.266-.561-3.433 1.207-3.714l12.385-1.97a2.192 2.192 0 0 0 1.609-1.168l5.7-11.17Z" fill="url(#Gradient-0_s_i)" transform="translate(-4.894 -3.603)"></path><path d="M26.44 4.799c.813-1.595 3.091-1.595 3.905 0l5.7 11.17a2.192 2.192 0 0 0 1.609 1.169l12.385 1.97c1.768.28 2.472 2.447 1.207 3.714l-8.863 8.873a2.192 2.192 0 0 0-.614 1.89l1.954 12.388c.28 1.769-1.564 3.108-3.16 2.296l-11.177-5.687a2.193 2.193 0 0 0-1.988 0L16.22 48.27c-1.596.812-3.44-.527-3.16-2.296l1.954-12.387a2.192 2.192 0 0 0-.614-1.891l-8.863-8.873c-1.265-1.267-.56-3.434 1.207-3.715l12.386-1.969a2.192 2.192 0 0 0 1.608-1.169l5.7-11.17Z" fill="url(#Gradient-1_s_i)" transform="translate(-4.894 -3.603)"></path><path d="M26.44 4.799c.813-1.595 3.091-1.595 3.905 0l5.7 11.17a2.192 2.192 0 0 0 1.609 1.169l12.385 1.97c1.768.28 2.472 2.447 1.207 3.714l-8.863 8.873a2.192 2.192 0 0 0-.614 1.89l1.954 12.388c.28 1.769-1.564 3.108-3.16 2.296l-11.177-5.687a2.193 2.193 0 0 0-1.988 0L16.22 48.27c-1.596.812-3.44-.527-3.16-2.296l1.954-12.387a2.192 2.192 0 0 0-.614-1.891l-8.863-8.873c-1.265-1.267-.56-3.434 1.207-3.715l12.386-1.969a2.192 2.192 0 0 0 1.608-1.169l5.7-11.17Z" fill="url(#Gradient-2_s_i)" transform="translate(-4.894 -3.603)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m35.394 16.302-5.7-11.171c-.542-1.063-2.061-1.063-2.604 0l-5.7 11.17a2.923 2.923 0 0 1-2.145 1.559L6.86 19.829c-1.178.187-1.648 1.632-.804 2.476l8.862 8.873c.66.661.965 1.598.82 2.522l-1.955 12.387c-.186 1.179 1.043 2.072 2.106 1.53l11.178-5.686a2.923 2.923 0 0 1 2.65 0l11.178 5.687c1.064.54 2.292-.352 2.106-1.53L41.047 33.7a2.923 2.923 0 0 1 .82-2.522l8.862-8.873c.843-.844.374-2.289-.805-2.476l-12.385-1.97a2.923 2.923 0 0 1-2.145-1.558ZM30.345 4.799c-.814-1.595-3.092-1.595-3.906 0l-5.7 11.17a2.192 2.192 0 0 1-1.608 1.169l-12.386 1.97c-1.768.28-2.472 2.447-1.207 3.714l8.863 8.873c.495.496.723 1.198.614 1.89l-1.954 12.388c-.28 1.769 1.564 3.108 3.16 2.296l11.177-5.687a2.193 2.193 0 0 1 1.988 0l11.178 5.687c1.595.812 3.438-.527 3.16-2.296l-1.955-12.387c-.11-.693.119-1.395.614-1.891l8.863-8.873c1.265-1.267.56-3.434-1.207-3.715l-12.385-1.969a2.192 2.192 0 0 1-1.609-1.169l-5.7-11.17Z" fill="url(#Gradient-3_s_i)" transform="translate(-4.894 -3.603)"></path><g style="animation: 0.7s linear 0s 1 normal both running a1_t_s_i;"><path d="M27.442 15.766a1.096 1.096 0 0 1 1.898 0l3.338 5.77c.156.268.417.458.72.523l6.52 1.392a1.096 1.096 0 0 1 .586 1.805l-4.456 4.958c-.207.23-.307.538-.275.846l.69 6.63a1.096 1.096 0 0 1-1.535 1.116L28.836 36.1a1.095 1.095 0 0 0-.89 0l-6.092 2.706a1.096 1.096 0 0 1-1.535-1.115l.69-6.63a1.096 1.096 0 0 0-.275-.847l-4.456-4.958a1.096 1.096 0 0 1 .587-1.805l6.519-1.392c.303-.065.565-.255.72-.523l3.338-5.77Z" fill="url(#Gradient-4_s_i)" transform="translate(-30.148 -28.676) scale(1.8895)" style="animation: 0.7s linear 0s 1 normal both running a0_t_s_i;"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M26.893 7.286c.27.137.378.467.241.737l-1.55 3.063a.548.548 0 1 1-.977-.495l1.55-3.063a.548.548 0 0 1 .736-.242Z" fill="#F9BE76" transform="translate(-4.895 -3.603)"></path><circle fill="#F9BE76" transform="translate(3.035 16.918)" r="0.548"></circle><circle fill="#F9BE76" transform="translate(19.477 8.514)" r="0.548"></circle><path id="mask-flex_s_i" d="M26.439 4.8c.813-1.595 3.092-1.595 3.905 0l5.7 11.17a2.192 2.192 0 0 0 1.609 1.168l12.385 1.97c1.768.28 2.472 2.448 1.207 3.714l-8.862 8.873a2.193 2.193 0 0 0-.615 1.891l1.955 12.388c.279 1.768-1.565 3.107-3.16 2.295l-11.177-5.686a2.192 2.192 0 0 0-1.989 0L16.22 48.269c-1.595.812-3.439-.527-3.16-2.295l1.955-12.388a2.192 2.192 0 0 0-.615-1.89l-8.862-8.874c-1.265-1.266-.561-3.433 1.207-3.714l12.385-1.97a2.192 2.192 0 0 0 1.609-1.168l5.7-11.17Z" fill="#fff3bf" mask="url(#Mask-1_s_i)" transform="translate(-4.894 -3.603)"></path></g></svg></button>
            `;
          } catch (e) {}
        }, 300);
      }


      await tteror();


      cellButton.forEach((btn) => {
        if (!btn.classList.contains("activeCellButton")) {
          btn.disabled = false;
        }
      });
    };
  });
}






export function overlayClick() {
  indexCurrent = 0;
  // trapsAmount = 1;
  const dd = Number(act);
  console.log(dd, prepossiblleMaxWin.toFixed(2), act);

  // Рассчитываем новый баланс
  const res = Number(Number(contbalance) + Number(dd));

  // Сохраняем новый баланс в куки
  setCookie('user_balance', res, 7); // Сохраняем на 7 дней

  // Обновляем отображение баланса
  updateBalance();
  
  document.querySelector(".cells-board").outerHTML = `
  <div class="cells-board"><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_2_r0" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_2_r0" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_2_r0" x1="58.152" y1="24.257" x2="-3.614" y2="28.984" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_2_r0" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="clip0_366_7284_c_2_r"><rect width="56" height="56" rx="7.593" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#clip0_366_7284_c_2_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect opacity="0.7" width="56" height="56" rx="12" fill="#151C2E"></rect><rect opacity="0.6" width="52" height="52" rx="10" fill="url(#Gradient-0_c_2_r0)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="8" fill="url(#Gradient-1_c_2_r0)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z" fill="url(#Gradient-2_c_2_r0)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z" fill="url(#Gradient-3_c_2_r0)"></path><rect opacity="0.6" width="56" height="56" rx="12" fill="#151C2E" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_1_r1" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_1_r1" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_1_r1" x1="52" y1="52" x2="-2.3" y2="1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.2" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.5" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.7" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_1_r1" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="ClipPath-1_c_1_r"><rect width="56" height="56" rx="8" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#ClipPath-1_c_1_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect opacity="0.7" width="56" height="56" rx="8" fill="#151c2e"></rect><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z" fill="#1c2130"></path><rect opacity="0.6" width="52" height="52" rx="6" fill="url(#Gradient-0_c_1_r1)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="4" fill="url(#Gradient-1_c_1_r1)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z" fill="url(#Gradient-2_c_1_r1)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z" fill="url(#Gradient-3_c_1_r1)"></path><rect opacity="0.6" width="56" height="56" rx="8" fill="#151c2e" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_2_r2" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_2_r2" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_2_r2" x1="58.152" y1="24.257" x2="-3.614" y2="28.984" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_2_r2" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="clip0_366_7284_c_2_r"><rect width="56" height="56" rx="7.593" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#clip0_366_7284_c_2_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect opacity="0.7" width="56" height="56" rx="12" fill="#151C2E"></rect><rect opacity="0.6" width="52" height="52" rx="10" fill="url(#Gradient-0_c_2_r2)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="8" fill="url(#Gradient-1_c_2_r2)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z" fill="url(#Gradient-2_c_2_r2)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z" fill="url(#Gradient-3_c_2_r2)"></path><rect opacity="0.6" width="56" height="56" rx="12" fill="#151C2E" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_1_r3" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_1_r3" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_1_r3" x1="52" y1="52" x2="-2.3" y2="1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.2" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.5" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.7" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_1_r3" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="ClipPath-1_c_1_r"><rect width="56" height="56" rx="8" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#ClipPath-1_c_1_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect opacity="0.7" width="56" height="56" rx="8" fill="#151c2e"></rect><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z" fill="#1c2130"></path><rect opacity="0.6" width="52" height="52" rx="6" fill="url(#Gradient-0_c_1_r3)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="4" fill="url(#Gradient-1_c_1_r3)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z" fill="url(#Gradient-2_c_1_r3)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z" fill="url(#Gradient-3_c_1_r3)"></path><rect opacity="0.6" width="56" height="56" rx="8" fill="#151c2e" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_2_r4" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_2_r4" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_2_r4" x1="58.152" y1="24.257" x2="-3.614" y2="28.984" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_2_r4" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="clip0_366_7284_c_2_r"><rect width="56" height="56" rx="7.593" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#clip0_366_7284_c_2_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect opacity="0.7" width="56" height="56" rx="12" fill="#151C2E"></rect><rect opacity="0.6" width="52" height="52" rx="10" fill="url(#Gradient-0_c_2_r4)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="8" fill="url(#Gradient-1_c_2_r4)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z" fill="url(#Gradient-2_c_2_r4)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z" fill="url(#Gradient-3_c_2_r4)"></path><rect opacity="0.6" width="56" height="56" rx="12" fill="#151C2E" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_1_r5" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_1_r5" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_1_r5" x1="52" y1="52" x2="-2.3" y2="1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.2" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.5" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.7" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_1_r5" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="ClipPath-1_c_1_r"><rect width="56" height="56" rx="8" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#ClipPath-1_c_1_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect opacity="0.7" width="56" height="56" rx="8" fill="#151c2e"></rect><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z" fill="#1c2130"></path><rect opacity="0.6" width="52" height="52" rx="6" fill="url(#Gradient-0_c_1_r5)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="4" fill="url(#Gradient-1_c_1_r5)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z" fill="url(#Gradient-2_c_1_r5)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z" fill="url(#Gradient-3_c_1_r5)"></path><rect opacity="0.6" width="56" height="56" rx="8" fill="#151c2e" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_2_r6" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_2_r6" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_2_r6" x1="58.152" y1="24.257" x2="-3.614" y2="28.984" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_2_r6" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="clip0_366_7284_c_2_r"><rect width="56" height="56" rx="7.593" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#clip0_366_7284_c_2_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect opacity="0.7" width="56" height="56" rx="12" fill="#151C2E"></rect><rect opacity="0.6" width="52" height="52" rx="10" fill="url(#Gradient-0_c_2_r6)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="8" fill="url(#Gradient-1_c_2_r6)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z" fill="url(#Gradient-2_c_2_r6)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z" fill="url(#Gradient-3_c_2_r6)"></path><rect opacity="0.6" width="56" height="56" rx="12" fill="#151C2E" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_1_r7" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_1_r7" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_1_r7" x1="52" y1="52" x2="-2.3" y2="1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.2" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.5" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.7" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_1_r7" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="ClipPath-1_c_1_r"><rect width="56" height="56" rx="8" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#ClipPath-1_c_1_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect opacity="0.7" width="56" height="56" rx="8" fill="#151c2e"></rect><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z" fill="#1c2130"></path><rect opacity="0.6" width="52" height="52" rx="6" fill="url(#Gradient-0_c_1_r7)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="4" fill="url(#Gradient-1_c_1_r7)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z" fill="url(#Gradient-2_c_1_r7)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z" fill="url(#Gradient-3_c_1_r7)"></path><rect opacity="0.6" width="56" height="56" rx="8" fill="#151c2e" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_2_r8" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_2_r8" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_2_r8" x1="58.152" y1="24.257" x2="-3.614" y2="28.984" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_2_r8" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="clip0_366_7284_c_2_r"><rect width="56" height="56" rx="7.593" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#clip0_366_7284_c_2_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect opacity="0.7" width="56" height="56" rx="12" fill="#151C2E"></rect><rect opacity="0.6" width="52" height="52" rx="10" fill="url(#Gradient-0_c_2_r8)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="8" fill="url(#Gradient-1_c_2_r8)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z" fill="url(#Gradient-2_c_2_r8)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z" fill="url(#Gradient-3_c_2_r8)"></path><rect opacity="0.6" width="56" height="56" rx="12" fill="#151C2E" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_1_r9" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_1_r9" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_1_r9" x1="52" y1="52" x2="-2.3" y2="1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.2" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.5" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.7" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_1_r9" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="ClipPath-1_c_1_r"><rect width="56" height="56" rx="8" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#ClipPath-1_c_1_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect opacity="0.7" width="56" height="56" rx="8" fill="#151c2e"></rect><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z" fill="#1c2130"></path><rect opacity="0.6" width="52" height="52" rx="6" fill="url(#Gradient-0_c_1_r9)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="4" fill="url(#Gradient-1_c_1_r9)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z" fill="url(#Gradient-2_c_1_r9)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z" fill="url(#Gradient-3_c_1_r9)"></path><rect opacity="0.6" width="56" height="56" rx="8" fill="#151c2e" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_2_r10" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_2_r10" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_2_r10" x1="58.152" y1="24.257" x2="-3.614" y2="28.984" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_2_r10" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="clip0_366_7284_c_2_r"><rect width="56" height="56" rx="7.593" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#clip0_366_7284_c_2_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect opacity="0.7" width="56" height="56" rx="12" fill="#151C2E"></rect><rect opacity="0.6" width="52" height="52" rx="10" fill="url(#Gradient-0_c_2_r10)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="8" fill="url(#Gradient-1_c_2_r10)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z" fill="url(#Gradient-2_c_2_r10)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z" fill="url(#Gradient-3_c_2_r10)"></path><rect opacity="0.6" width="56" height="56" rx="12" fill="#151C2E" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_1_r11" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_1_r11" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_1_r11" x1="52" y1="52" x2="-2.3" y2="1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.2" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.5" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.7" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_1_r11" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="ClipPath-1_c_1_r"><rect width="56" height="56" rx="8" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#ClipPath-1_c_1_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect opacity="0.7" width="56" height="56" rx="8" fill="#151c2e"></rect><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z" fill="#1c2130"></path><rect opacity="0.6" width="52" height="52" rx="6" fill="url(#Gradient-0_c_1_r11)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="4" fill="url(#Gradient-1_c_1_r11)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z" fill="url(#Gradient-2_c_1_r11)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z" fill="url(#Gradient-3_c_1_r11)"></path><rect opacity="0.6" width="56" height="56" rx="8" fill="#151c2e" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_2_r12" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_2_r12" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_2_r12" x1="58.152" y1="24.257" x2="-3.614" y2="28.984" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_2_r12" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="clip0_366_7284_c_2_r"><rect width="56" height="56" rx="7.593" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#clip0_366_7284_c_2_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect opacity="0.7" width="56" height="56" rx="12" fill="#151C2E"></rect><rect opacity="0.6" width="52" height="52" rx="10" fill="url(#Gradient-0_c_2_r12)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="8" fill="url(#Gradient-1_c_2_r12)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z" fill="url(#Gradient-2_c_2_r12)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z" fill="url(#Gradient-3_c_2_r12)"></path><rect opacity="0.6" width="56" height="56" rx="12" fill="#151C2E" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_1_r13" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_1_r13" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_1_r13" x1="52" y1="52" x2="-2.3" y2="1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.2" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.5" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.7" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_1_r13" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="ClipPath-1_c_1_r"><rect width="56" height="56" rx="8" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#ClipPath-1_c_1_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect opacity="0.7" width="56" height="56" rx="8" fill="#151c2e"></rect><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z" fill="#1c2130"></path><rect opacity="0.6" width="52" height="52" rx="6" fill="url(#Gradient-0_c_1_r13)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="4" fill="url(#Gradient-1_c_1_r13)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z" fill="url(#Gradient-2_c_1_r13)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z" fill="url(#Gradient-3_c_1_r13)"></path><rect opacity="0.6" width="56" height="56" rx="8" fill="#151c2e" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_2_r14" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_2_r14" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_2_r14" x1="58.152" y1="24.257" x2="-3.614" y2="28.984" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_2_r14" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="clip0_366_7284_c_2_r"><rect width="56" height="56" rx="7.593" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#clip0_366_7284_c_2_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect opacity="0.7" width="56" height="56" rx="12" fill="#151C2E"></rect><rect opacity="0.6" width="52" height="52" rx="10" fill="url(#Gradient-0_c_2_r14)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="8" fill="url(#Gradient-1_c_2_r14)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z" fill="url(#Gradient-2_c_2_r14)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z" fill="url(#Gradient-3_c_2_r14)"></path><rect opacity="0.6" width="56" height="56" rx="12" fill="#151C2E" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_1_r15" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_1_r15" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_1_r15" x1="52" y1="52" x2="-2.3" y2="1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.2" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.5" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.7" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_1_r15" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="ClipPath-1_c_1_r"><rect width="56" height="56" rx="8" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#ClipPath-1_c_1_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect opacity="0.7" width="56" height="56" rx="8" fill="#151c2e"></rect><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z" fill="#1c2130"></path><rect opacity="0.6" width="52" height="52" rx="6" fill="url(#Gradient-0_c_1_r15)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="4" fill="url(#Gradient-1_c_1_r15)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z" fill="url(#Gradient-2_c_1_r15)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z" fill="url(#Gradient-3_c_1_r15)"></path><rect opacity="0.6" width="56" height="56" rx="8" fill="#151c2e" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_2_r16" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_2_r16" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_2_r16" x1="58.152" y1="24.257" x2="-3.614" y2="28.984" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_2_r16" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="clip0_366_7284_c_2_r"><rect width="56" height="56" rx="7.593" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#clip0_366_7284_c_2_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect opacity="0.7" width="56" height="56" rx="12" fill="#151C2E"></rect><rect opacity="0.6" width="52" height="52" rx="10" fill="url(#Gradient-0_c_2_r16)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="8" fill="url(#Gradient-1_c_2_r16)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z" fill="url(#Gradient-2_c_2_r16)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z" fill="url(#Gradient-3_c_2_r16)"></path><rect opacity="0.6" width="56" height="56" rx="12" fill="#151C2E" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_1_r17" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_1_r17" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_1_r17" x1="52" y1="52" x2="-2.3" y2="1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.2" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.5" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.7" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_1_r17" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="ClipPath-1_c_1_r"><rect width="56" height="56" rx="8" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#ClipPath-1_c_1_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect opacity="0.7" width="56" height="56" rx="8" fill="#151c2e"></rect><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z" fill="#1c2130"></path><rect opacity="0.6" width="52" height="52" rx="6" fill="url(#Gradient-0_c_1_r17)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="4" fill="url(#Gradient-1_c_1_r17)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z" fill="url(#Gradient-2_c_1_r17)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z" fill="url(#Gradient-3_c_1_r17)"></path><rect opacity="0.6" width="56" height="56" rx="8" fill="#151c2e" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_2_r18" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_2_r18" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_2_r18" x1="58.152" y1="24.257" x2="-3.614" y2="28.984" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_2_r18" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="clip0_366_7284_c_2_r"><rect width="56" height="56" rx="7.593" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#clip0_366_7284_c_2_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect opacity="0.7" width="56" height="56" rx="12" fill="#151C2E"></rect><rect opacity="0.6" width="52" height="52" rx="10" fill="url(#Gradient-0_c_2_r18)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="8" fill="url(#Gradient-1_c_2_r18)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z" fill="url(#Gradient-2_c_2_r18)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z" fill="url(#Gradient-3_c_2_r18)"></path><rect opacity="0.6" width="56" height="56" rx="12" fill="#151C2E" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_1_r19" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_1_r19" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_1_r19" x1="52" y1="52" x2="-2.3" y2="1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.2" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.5" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.7" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_1_r19" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="ClipPath-1_c_1_r"><rect width="56" height="56" rx="8" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#ClipPath-1_c_1_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect opacity="0.7" width="56" height="56" rx="8" fill="#151c2e"></rect><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z" fill="#1c2130"></path><rect opacity="0.6" width="52" height="52" rx="6" fill="url(#Gradient-0_c_1_r19)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="4" fill="url(#Gradient-1_c_1_r19)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z" fill="url(#Gradient-2_c_1_r19)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z" fill="url(#Gradient-3_c_1_r19)"></path><rect opacity="0.6" width="56" height="56" rx="8" fill="#151c2e" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_2_r20" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_2_r20" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_2_r20" x1="58.152" y1="24.257" x2="-3.614" y2="28.984" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_2_r20" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="clip0_366_7284_c_2_r"><rect width="56" height="56" rx="7.593" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#clip0_366_7284_c_2_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect opacity="0.7" width="56" height="56" rx="12" fill="#151C2E"></rect><rect opacity="0.6" width="52" height="52" rx="10" fill="url(#Gradient-0_c_2_r20)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="8" fill="url(#Gradient-1_c_2_r20)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z" fill="url(#Gradient-2_c_2_r20)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z" fill="url(#Gradient-3_c_2_r20)"></path><rect opacity="0.6" width="56" height="56" rx="12" fill="#151C2E" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_1_r21" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_1_r21" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_1_r21" x1="52" y1="52" x2="-2.3" y2="1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.2" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.5" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.7" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_1_r21" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="ClipPath-1_c_1_r"><rect width="56" height="56" rx="8" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#ClipPath-1_c_1_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect opacity="0.7" width="56" height="56" rx="8" fill="#151c2e"></rect><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z" fill="#1c2130"></path><rect opacity="0.6" width="52" height="52" rx="6" fill="url(#Gradient-0_c_1_r21)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="4" fill="url(#Gradient-1_c_1_r21)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z" fill="url(#Gradient-2_c_1_r21)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z" fill="url(#Gradient-3_c_1_r21)"></path><rect opacity="0.6" width="56" height="56" rx="8" fill="#151c2e" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_2_r22" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_2_r22" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_2_r22" x1="58.152" y1="24.257" x2="-3.614" y2="28.984" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_2_r22" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="clip0_366_7284_c_2_r"><rect width="56" height="56" rx="7.593" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#clip0_366_7284_c_2_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect opacity="0.7" width="56" height="56" rx="12" fill="#151C2E"></rect><rect opacity="0.6" width="52" height="52" rx="10" fill="url(#Gradient-0_c_2_r22)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="8" fill="url(#Gradient-1_c_2_r22)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z" fill="url(#Gradient-2_c_2_r22)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z" fill="url(#Gradient-3_c_2_r22)"></path><rect opacity="0.6" width="56" height="56" rx="12" fill="#151C2E" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_1_r23" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_1_r23" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_1_r23" x1="52" y1="52" x2="-2.3" y2="1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.2" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.5" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.7" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_1_r23" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="ClipPath-1_c_1_r"><rect width="56" height="56" rx="8" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#ClipPath-1_c_1_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect opacity="0.7" width="56" height="56" rx="8" fill="#151c2e"></rect><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z" fill="#1c2130"></path><rect opacity="0.6" width="52" height="52" rx="6" fill="url(#Gradient-0_c_1_r23)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="4" fill="url(#Gradient-1_c_1_r23)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z" fill="url(#Gradient-2_c_1_r23)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z" fill="url(#Gradient-3_c_1_r23)"></path><rect opacity="0.6" width="56" height="56" rx="8" fill="#151c2e" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg></button><button id="cellButton" type="button" class="cell "><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_2_r24" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_2_r24" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_2_r24" x1="58.152" y1="24.257" x2="-3.614" y2="28.984" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_2_r24" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="clip0_366_7284_c_2_r"><rect width="56" height="56" rx="7.593" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#clip0_366_7284_c_2_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect opacity="0.7" width="56" height="56" rx="12" fill="#151C2E"></rect><rect opacity="0.6" width="52" height="52" rx="10" fill="url(#Gradient-0_c_2_r24)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="8" fill="url(#Gradient-1_c_2_r24)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z" fill="url(#Gradient-2_c_2_r24)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z" fill="url(#Gradient-3_c_2_r24)"></path><rect opacity="0.6" width="56" height="56" rx="12" fill="#151C2E" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg></button><div class="cells-board-mask" style="z-index: 0; display: none;"><div class="animated-highlight" style="translate: none; rotate: none; scale: none; transform: translate(550px, 150px) rotate(-59.9999deg) skew(0.000286479deg, 0deg);"></div></div></div>
  `;
  document.querySelector(".status-bar").outerHTML = `
        <div class="status-bar">
            <div class="status-bar__status">
              <div class="status-bar__icon"><svg width="32" height="32" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.2752 2.2285C12.6529 1.48818 13.7108 1.48818 14.0885 2.2285L16.735 7.41481C16.8829 7.70466 17.1604 7.90633 17.4818 7.95743L23.2321 8.87169C24.0529 9.0022 24.3798 10.0082 23.7924 10.5963L19.6778 14.7159C19.4478 14.9461 19.3418 15.2724 19.3925 15.5938L20.2999 21.3452C20.4294 22.1662 19.5736 22.7879 18.8329 22.4111L13.6434 19.7708C13.3534 19.6232 13.0103 19.6232 12.7203 19.7708L7.53081 22.4111C6.79004 22.7879 5.93424 22.1662 6.06377 21.3452L6.97119 15.5938C7.0219 15.2724 6.91588 14.9461 6.68592 14.7159L2.57124 10.5963C1.98389 10.0082 2.31077 9.0022 3.1316 8.87169L8.88187 7.95743C9.20324 7.90633 9.48081 7.70466 9.62872 7.41481L12.2752 2.2285Z" fill="#C22A20"></path>
                  <path d="M12.2752 2.2285C12.6529 1.48818 13.7108 1.48818 14.0885 2.2285L16.735 7.41481C16.8829 7.70466 17.1604 7.90633 17.4818 7.95743L23.2321 8.87169C24.0529 9.0022 24.3798 10.0082 23.7924 10.5963L19.6778 14.7159C19.4478 14.9461 19.3418 15.2724 19.3925 15.5938L20.2999 21.3452C20.4294 22.1662 19.5736 22.7879 18.8329 22.4111L13.6434 19.7708C13.3534 19.6232 13.0103 19.6232 12.7203 19.7708L7.53081 22.4111C6.79004 22.7879 5.93424 22.1662 6.06377 21.3452L6.97119 15.5938C7.0219 15.2724 6.91588 14.9461 6.68592 14.7159L2.57124 10.5963C1.98389 10.0082 2.31077 9.0022 3.1316 8.87169L8.88187 7.95743C9.20324 7.90633 9.48081 7.70466 9.62872 7.41481L12.2752 2.2285Z" fill="url(#paint0_linear_448_8887status)"></path>
                  <path d="M12.2754 2.22809C12.6531 1.48777 13.711 1.48777 14.0887 2.22809L16.7352 7.4144C16.8831 7.70426 17.1607 7.90592 17.482 7.95702L23.2323 8.87128C24.0531 9.00179 24.38 10.0078 23.7927 10.5959L19.678 14.7155C19.448 14.9457 19.342 15.272 19.3927 15.5934L20.3001 21.3448C20.4297 22.1658 19.5739 22.7875 18.8331 22.4107L13.6436 19.7704C13.3536 19.6228 13.0105 19.6228 12.7205 19.7704L7.53102 22.4107C6.79025 22.7875 5.93445 22.1658 6.06398 21.3448L6.9714 15.5934C7.02211 15.272 6.91609 14.9457 6.68613 14.7155L2.57145 10.5959C1.9841 10.0078 2.31098 9.00179 3.13181 8.87128L8.88208 7.95702C9.20345 7.90592 9.48102 7.70426 9.62893 7.4144L12.2754 2.22809Z" fill="url(#paint1_linear_448_8887status)"></path>
                  <path d="M12.2754 2.22809C12.6531 1.48777 13.711 1.48777 14.0887 2.22809L16.7352 7.4144C16.8831 7.70426 17.1607 7.90592 17.482 7.95702L23.2323 8.87128C24.0531 9.00179 24.38 10.0078 23.7927 10.5959L19.678 14.7155C19.448 14.9457 19.342 15.272 19.3927 15.5934L20.3001 21.3448C20.4297 22.1658 19.5739 22.7875 18.8331 22.4107L13.6436 19.7704C13.3536 19.6228 13.0105 19.6228 12.7205 19.7704L7.53102 22.4107C6.79025 22.7875 5.93445 22.1658 6.06398 21.3448L6.9714 15.5934C7.02211 15.272 6.91609 14.9457 6.68613 14.7155L2.57145 10.5959C1.9841 10.0078 2.31098 9.00179 3.13181 8.87128L8.88208 7.95702C9.20345 7.90592 9.48102 7.70426 9.62893 7.4144L12.2754 2.22809Z" fill="url(#paint2_radial_448_8887status)"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.433 7.56862L13.7865 2.38231C13.5347 1.88876 12.8294 1.88876 12.5776 2.38231L9.93115 7.56862C9.73395 7.95509 9.36385 8.22398 8.93536 8.29211L3.18509 9.20637C2.63787 9.29338 2.41995 9.96407 2.81151 10.3561L6.92619 14.4757C7.23281 14.7827 7.37417 15.2177 7.30655 15.6463L6.39914 21.3977C6.31278 21.945 6.88331 22.3595 7.37716 22.1082L12.5666 19.468C12.9533 19.2712 13.4108 19.2712 13.7975 19.468L18.9869 22.1082C19.4808 22.3595 20.0513 21.945 19.965 21.3977L19.0576 15.6463C18.9899 15.2177 19.1313 14.7827 19.4379 14.4757L23.5526 10.3561C23.9442 9.96407 23.7262 9.29338 23.179 9.20637L17.4287 8.29211C17.0003 8.22398 16.6302 7.95509 16.433 7.56862ZM14.0887 2.22809C13.711 1.48777 12.6531 1.48777 12.2754 2.22809L9.62893 7.4144C9.48102 7.70426 9.20345 7.90592 8.88208 7.95702L3.13181 8.87128C2.31098 9.00179 1.9841 10.0078 2.57145 10.5959L6.68613 14.7155C6.91609 14.9457 7.02211 15.272 6.9714 15.5934L6.06398 21.3448C5.93445 22.1658 6.79025 22.7875 7.53102 22.4107L12.7205 19.7704C13.0105 19.6228 13.3536 19.6228 13.6436 19.7704L18.8331 22.4107C19.5739 22.7875 20.4297 22.1658 20.3001 21.3448L19.3927 15.5934C19.342 15.272 19.448 14.9457 19.678 14.7155L23.7927 10.5959C24.38 10.0078 24.0531 9.00179 23.2323 8.87128L17.482 7.95702C17.1607 7.90592 16.8831 7.70426 16.7352 7.4144L14.0887 2.22809Z" fill="url(#paint3_linear_448_8887status)"></path>
                  <path d="M12.741 7.3195C12.937 6.98075 13.4261 6.98075 13.6221 7.3195L15.1721 9.99846C15.2442 10.123 15.3656 10.2113 15.5063 10.2413L18.5331 10.8876C18.9159 10.9693 19.067 11.4344 18.8054 11.7255L16.7365 14.0275C16.6403 14.1345 16.594 14.2773 16.6089 14.4204L16.9296 17.4988C16.9701 17.8881 16.5745 18.1755 16.2168 18.0167L13.3882 16.7604C13.2566 16.702 13.1065 16.702 12.975 16.7604L10.1464 18.0167C9.7887 18.1755 9.39305 17.8881 9.4336 17.4988L9.75428 14.4204C9.7692 14.2773 9.72281 14.1345 9.62661 14.0275L7.55775 11.7255C7.29613 11.4344 7.44726 10.9693 7.83001 10.8876L10.8568 10.2413C10.9976 10.2113 11.119 10.123 11.1911 9.99846L12.741 7.3195Z" fill="url(#paint4_linear_448_8887status)"></path>
                  <path d="M19.6431 11.3076C13.5027 17.1102 8.01855 14.5437 6.04404 12.5351C3.04056 8.07161 9.63153 11.6424 15.4716 10.0802C20.1437 8.83037 20.1993 10.3777 19.6431 11.3076Z" fill="url(#paint5_linear_448_8887status)"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.486 3.38311C12.6114 3.44656 12.6616 3.59966 12.5981 3.72506L11.8786 5.14712C11.8152 5.27252 11.6621 5.32275 11.5367 5.2593C11.4113 5.19585 11.3611 5.04275 11.4245 4.91735L12.144 3.49529C12.2075 3.36989 12.3606 3.31966 12.486 3.38311Z" fill="#F9BE76"></path>
                  <circle cx="3.68131" cy="9.52742" r="0.254474" fill="#F9BE76"></circle>
                  <circle cx="11.3155" cy="5.62557" r="0.254474" fill="#F9BE76"></circle>
                  <path d="M10.7514 8.25268C8.82111 10.9869 9.51093 12.4755 10.0971 12.8781C11.8774 13.6816 15.1214 8.94033 15.3409 7.68564C15.5604 6.43095 13.1642 4.83492 10.7514 8.25268Z" fill="url(#paint6_linear_448_8887status)" fill-opacity="0.6"></path>
                  <defs>
                    <linearGradient id="paint0_linear_448_8887status" x1="13.1818" y1="0.45166" x2="18.8651" y2="22.4213" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FBA416" stop-opacity="0"></stop>
                      <stop offset="1" stop-color="#FDBB4E" stop-opacity="0.63"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_448_8887status" x1="13.182" y1="0.451259" x2="18.8653" y2="22.4209" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FDBB4E" stop-opacity="0"></stop>
                      <stop offset="1" stop-color="#FDBB4E" stop-opacity="0.63"></stop>
                    </linearGradient>
                    <radialGradient id="paint2_radial_448_8887status" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.2132 9.86681) rotate(52.6712) scale(14.8278)">
                      <stop offset="0.738765" stop-color="#9CB6DD" stop-opacity="0"></stop>
                      <stop offset="0.89825" stop-color="#C6F1FF" stop-opacity="0.37"></stop>
                      <stop offset="1" stop-color="#EFFBFF" stop-opacity="0.7"></stop>
                    </radialGradient>
                    <linearGradient id="paint3_linear_448_8887status" x1="20.3073" y1="17.4162" x2="8.6015" y2="6.81312" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FEFFD3" stop-opacity="0.63"></stop>
                      <stop offset="0.218803" stop-color="#FAFD4E" stop-opacity="0"></stop>
                      <stop offset="0.491108" stop-color="#FDFF8B" stop-opacity="0.56"></stop>
                      <stop offset="0.733041" stop-color="#F7F990"></stop>
                      <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                      <stop offset="1" stop-color="#FEFFB7" stop-opacity="0"></stop>
                    </linearGradient>
                    <linearGradient id="paint4_linear_448_8887status" x1="13.1816" y1="6.55811" x2="13.0119" y2="17.8398" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FEFFB0"></stop>
                      <stop offset="0.277442" stop-color="white" stop-opacity="0.51"></stop>
                      <stop offset="1" stop-color="#FAFD4E" stop-opacity="0.15"></stop>
                    </linearGradient>
                    <linearGradient id="paint5_linear_448_8887status" x1="12.635" y1="10.8612" x2="12.551" y2="14.8707" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FAFD4E" stop-opacity="0"></stop>
                      <stop offset="0.731853" stop-color="#FAFD4E" stop-opacity="0.46"></stop>
                    </linearGradient>
                    <linearGradient id="paint6_linear_448_8887status" x1="11.5105" y1="8.61842" x2="13.7636" y2="10.7449" gradientUnits="userSpaceOnUse">
                      <stop offset="0.223958" stop-color="#FAFD4E" stop-opacity="0.35"></stop>
                      <stop offset="1" stop-color="#FAFD4E" stop-opacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg></div>
              <div class="status-bar__status-content"><span class="status-bar__status-title">Макс. выигрыш</span>
                <div class="status-bar__status-text"><span class="status-bar__status-text-amount" id="possibleMaxWinAmount">${act2.toLocaleString('ru-RU', { useGrouping: true }).replace(/,/g, '.')}</span><span class="text-sm leading-4">&nbsp;</span><span class="status-bar__status-text-currency">₽</span></div>
              </div>
            </div>
            <div class="select-traps status-bar__select-traps"><button class="select-traps__prev-arrow-btn disabled:opacity-50" type="button" id="prev_preset_btn" onclick="prevPreset()"><svg class="select-traps__arrow-icon select-traps__arrow-icon_prev" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.92616 20.0002L10.7906 12.082L12.8584 10.0001L10.7906 7.91821L2.92616 0L0.858398 2.0819L8.72287 10.0001L0.858398 17.9183L2.92616 20.0002Z">
                  </path>
                </svg></button>
              <div class="select-traps__content"><span class="select-traps__traps_amount" id="trapsAmount">${trapsAmount}</span><span class="select-traps__title">ловушек</span></div><button class="select-traps__next-arrow-btn disabled:opacity-50" type="button" id="next_preset_btn" onclick="nextPreset()"><svg class="select-traps__arrow-icon" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.92616 20.0002L10.7906 12.082L12.8584 10.0001L10.7906 7.91821L2.92616 0L0.858398 2.0819L8.72287 10.0001L0.858398 17.9183L2.92616 20.0002Z">
                  </path>
                </svg></button>
            </div>
          </div>

        `;
        document.querySelector(".bet-panel").outerHTML = `
        <div class="bet-panel ">
            <div class="bet-panel__actions">
              <div class="flex flex-wrap flex-row mobile:flex-col mobile:gap-y-3">
                <div class="basis-2/3">
                  <div class="input-state-panel base-input">
                    <div class="flex w-full">
                      <!-- decrement button -->
                      <button type="button" id="decrease_bet_btn" class="bet-panel__control" onclick="decrementValue(&quot;amount_field&quot;)">
                        <div class="bet-panel__control-border right"></div><span class="bet-panel__control-icon">-</span>
                      </button>
                      <!-- value -->
                      <div class="app-input flex flex-1 justify-center"><input oninput='onInput("amount_field")' id="amount_field" maxlength="8" autocomplete="off" value="${bet_amount_value}" type='number' max='9999' min='5' style="width: 70px;"><div class="ml-1 my-auto"><div id="currentBetCurrency" class="app-input__currency">₽</div></div></div>

                      <!-- increment button  -->
                      <button type="button" id="increase_bet_btn" class="bet-panel__control" onclick="incrementValue(&quot;amount_field&quot;)">
                        <div class="bet-panel__control-border left"></div><span class="bet-panel__control-icon">+</span>
                      </button>
                    </div>
                  </div>
                </div>
                <!-- кнопкка в ожидании -->
                <div class="basis-1/3 pl-2 mobile:pl-0 mobile:basis-auto mobile:h-[3.25rem]">
                  <button id="play_btn" type="button" class="app-button big games-blue-bg text-white cursor-pointer block h-full w-full" onclick="playGame()"><span>Играть</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
        document.querySelector(".show").style.animation = "fadeOut 0.5s"
        document.querySelector(".show").addEventListener("animationend", () => {
          document.querySelector(".show").style.animation = "fadeIn 0.8s";
        })
        setTimeout(() => {
          console.log(document.querySelector(".show").style.animation)

          document.querySelector(".overlay").classList.remove("show");
        }, 600)
}

let trapsValueElement = 23.88;
export function prevPreset() {
  
  // let element = Number(document.getElementById("trapsAmount").innerText);
  // console.log(element)
  let element = trapsAmount
  if (element == 1) {
    document.getElementById("prev_preset_btn").disabled = true;
  } else {
    document.getElementById("prev_preset_btn").disabled = false;
    document.getElementById("next_preset_btn").disabled = false;

    element -= 2;
  }
  document.getElementById("trapsAmount").innerText = element;

  if (element == 1) {
    trapsValueElement = 23.88
  }
  else if (element == 3) {
    trapsValueElement = 2196.5
  }
  else if (element == 5) {
    trapsValueElement = 4000
  } else trapsValueElement = 5000


  let value = parseInt(document.getElementById('amount_field').value, 10);
  document.getElementById('amount_field').value = value;
  let actualValue = value*trapsValueElement;
  act2 = actualValue

  document.getElementById('possibleMaxWinAmount').innerText = actualValue.toLocaleString('ru-RU', { useGrouping: true }).replace(/,/g, '.');
  trapsAmount = element;
}

export function nextPreset() {
  let element = Number(document.getElementById("trapsAmount").innerText);
  if (element == 7) {
    document.getElementById("next_preset_btn").disabled = true;
  } else {
    document.getElementById("next_preset_btn").disabled = false;
    document.getElementById("prev_preset_btn").disabled = false;

    element += 2;
  }
  document.getElementById("trapsAmount").innerText = element;

  if (element == 1) {
    trapsValueElement = 23.88
  }
  else if (element == 3) {
    trapsValueElement = 2196.5
  }
  else if (element == 5) {
    trapsValueElement = 4000
  } else trapsValueElement = 5000

  let value = parseInt(document.getElementById('amount_field').value, 10);
  document.getElementById('amount_field').value = value;
  let actualValue = value*trapsValueElement;
  act2 = actualValue
  document.getElementById('possibleMaxWinAmount').innerText = actualValue.toLocaleString('ru-RU', { useGrouping: true }).replace(/,/g, '.');
  trapsAmount = element;
}



export function decrementValue(obj) {
  if (document.getElementById(obj).value <= 5) {
    document.querySelector('.Toastify').innerHTML = `
    <div class="Toastify__toast-container Toastify__toast-container--top-center app-popup"><div id="12" class="Toastify__toast Toastify__toast-theme--dark Toastify__toast--error Toastify__toast--close-on-click app-popup__toast" style="--nth: 1; --len: 1;"><div role="alert" class="Toastify__toast-body app-popup__toast-body"><div class="Toastify__toast-icon Toastify--animate-icon Toastify__zoom-enter"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="28" rx="14" fill="#13F36C" fill-opacity="0.2"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0001 12.7501C17.8661 12.7501 21.0002 11.6308 21.0002 10.25C21.0002 8.8693 17.8661 7.75 14.0001 7.75C10.134 7.75 7 8.8693 7 10.25C7 11.6308 10.134 12.7501 14.0001 12.7501ZM14.0001 18.5838C17.0483 18.5838 19.6415 17.888 20.6022 16.9168C20.8599 17.1773 21.0002 17.4577 21.0002 17.7498C21.0002 19.1305 17.8661 20.2498 14.0001 20.2498C10.134 20.2498 7 19.1305 7 17.7498C7 17.4577 7.14024 17.1773 7.39799 16.9168C8.35868 17.888 10.9519 18.5838 14.0001 18.5838ZM20.6022 14.4168C19.6415 15.3879 17.0483 16.0838 14.0001 16.0838C10.9519 16.0838 8.35868 15.3879 7.39799 14.4168C7.14024 14.6773 7 14.9577 7 15.2498C7 16.6305 10.134 17.7498 14.0001 17.7498C17.8661 17.7498 21.0002 16.6305 21.0002 15.2498C21.0002 14.9577 20.8599 14.6773 20.6022 14.4168ZM14.0001 13.584C17.0483 13.584 19.6415 12.8882 20.6022 11.917C20.8599 12.1775 21.0002 12.4579 21.0002 12.75C21.0002 14.1307 17.8661 15.25 14.0001 15.25C10.134 15.25 7 14.1307 7 12.75C7 12.4579 7.14024 12.1775 7.39799 11.917C8.35868 12.8882 10.9519 13.584 14.0001 13.584Z" fill="#13F36C"></path></svg></div><div><div class="app-popup__toast-body__wrapper" id="popUp"><h4 class="app-popup__toast-body__header">Попробуйте сделать ставку больше</h4><p class="app-popup__toast-body__body">Ваша ставка меньше минимальной.</p></div></div></div><div role="progressbar" aria-hidden="true" aria-label="notification timer" class="Toastify__progress-bar Toastify__progress-bar--animated Toastify__progress-bar-theme--dark Toastify__progress-bar--error" style="animation-duration: 3000ms; animation-play-state: running; opacity: 0;"></div></div></div>
    `;

    document.querySelector(".alert-popup").style.animation =
      "popup 1s forwards";
    document.querySelector(".alert-popup").style.display = "flex";

    setTimeout(() => {
      document.querySelector(".alert-popup").style.animation =
        "popupOut 1s forwards";
      document.querySelector(".alert-popup").style.display = "none";
    }, 2000);
  }
  let value = parseInt(document.getElementById('amount_field').value, 10);
  value = value >= 10 ? value / 2 : 5;
  document.getElementById(obj).value = value;
  let actualValue = value*trapsValueElement;
  document.getElementById('possibleMaxWinAmount').innerText = actualValue.toLocaleString('ru-RU', { useGrouping: true }).replace(/,/g, '.');
  bet_amount_value = value;
  act2 = actualValue
  changeBetValue(bet_amount_value);
}

export function incrementValue(obj){
  let value = parseInt(document.getElementById(obj).value, 10);
  if (value == 9999) 
  {
    document.querySelector('.Toastify').innerHTML = `
    <div class="Toastify__toast-container Toastify__toast-container--top-center app-popup"><div id="12" class="Toastify__toast Toastify__toast-theme--dark Toastify__toast--error Toastify__toast--close-on-click app-popup__toast" style="--nth: 1; --len: 1;"><div role="alert" class="Toastify__toast-body app-popup__toast-body"><div class="Toastify__toast-icon Toastify--animate-icon Toastify__zoom-enter"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="28" rx="14" fill="#13F36C" fill-opacity="0.2"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0001 12.7501C17.8661 12.7501 21.0002 11.6308 21.0002 10.25C21.0002 8.8693 17.8661 7.75 14.0001 7.75C10.134 7.75 7 8.8693 7 10.25C7 11.6308 10.134 12.7501 14.0001 12.7501ZM14.0001 18.5838C17.0483 18.5838 19.6415 17.888 20.6022 16.9168C20.8599 17.1773 21.0002 17.4577 21.0002 17.7498C21.0002 19.1305 17.8661 20.2498 14.0001 20.2498C10.134 20.2498 7 19.1305 7 17.7498C7 17.4577 7.14024 17.1773 7.39799 16.9168C8.35868 17.888 10.9519 18.5838 14.0001 18.5838ZM20.6022 14.4168C19.6415 15.3879 17.0483 16.0838 14.0001 16.0838C10.9519 16.0838 8.35868 15.3879 7.39799 14.4168C7.14024 14.6773 7 14.9577 7 15.2498C7 16.6305 10.134 17.7498 14.0001 17.7498C17.8661 17.7498 21.0002 16.6305 21.0002 15.2498C21.0002 14.9577 20.8599 14.6773 20.6022 14.4168ZM14.0001 13.584C17.0483 13.584 19.6415 12.8882 20.6022 11.917C20.8599 12.1775 21.0002 12.4579 21.0002 12.75C21.0002 14.1307 17.8661 15.25 14.0001 15.25C10.134 15.25 7 14.1307 7 12.75C7 12.4579 7.14024 12.1775 7.39799 11.917C8.35868 12.8882 10.9519 13.584 14.0001 13.584Z" fill="#13F36C"></path></svg></div><div><div class="app-popup__toast-body__wrapper" id="popUp"><h4 class="app-popup__toast-body__header">Попробуйте сделать ставку меньше</h4><p class="app-popup__toast-body__body">Ваша ставка больше максимальной.</p></div></div></div><div role="progressbar" aria-hidden="true" aria-label="notification timer" class="Toastify__progress-bar Toastify__progress-bar--animated Toastify__progress-bar-theme--dark Toastify__progress-bar--error" style="animation-duration: 3000ms; animation-play-state: running; opacity: 0;"></div></div></div>
    `;

    document.querySelector(".alert-popup").style.animation =
      "popup 1s forwards";
    document.querySelector(".alert-popup").style.display = "flex";

    setTimeout(() => {
      document.querySelector(".alert-popup").style.animation =
        "popupOut 1s forwards";
      document.querySelector(".alert-popup").style.display = "none";
    }, 2000);
  }
  value = value < 5120 ? value * 2 : 9999;
  document.getElementById(obj).value = value;
  let actualValue = value*trapsValueElement;
  document.getElementById('possibleMaxWinAmount').innerText = actualValue.toLocaleString('ru-RU', { useGrouping: true }).replace(/,/g, '.');

  bet_amount_value = value;

  act2 = actualValue
  changeBetValue(bet_amount_value);

}

export function onInput(obj){
   let value = parseInt(document.getElementById(obj).value, 10);
   
 
  // value = value > 9999? 9999 : value;
  // value = value < 5? 5 : value;

  document.getElementById(obj).value = value;
  let actualValue = value*trapsValueElement;
  document.getElementById('possibleMaxWinAmount').innerText = actualValue.toLocaleString('ru-RU', { useGrouping: true }).replace(/,/g, '.');
  
  bet_amount_value = value;
  changeBetValue(bet_amount_value);

}



Object.assign(window, {playGame, incrementValue,decrementValue, prevPreset, nextPreset, overlayAnimation, clickCellButton, takePrize,  overlayClick, onInput});

