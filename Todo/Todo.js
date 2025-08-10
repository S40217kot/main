const cookieForm = document.getElementById('cookie-form');
const cookieList = document.getElementById('cookie-list');

const loadCookies = () => {
    const cookies = document.cookie.split('; ');
    cookieList.innerHTML = '';
    cookies.forEach(cookie => {
        const [key, value] = cookie.split('=');
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${value}`;
        cookieList.appendChild(listItem);
    });
};

// 初期表示
loadCookies();

// フォーム送信イベント
cookieForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('cookie-input').value;
    document.cookie = `data=${input}; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
    loadCookies();
});
