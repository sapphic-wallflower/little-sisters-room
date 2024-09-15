document.addEventListener("DOMContentLoaded", function() {
    const proNavHTML = `
        <div class="profile-pic-box">
            <div class="profile-pic"></div>
            <a href="/about.html">About Jasper</a>
        </div>

        <div class="nav-box">
            <h2>Navigation</h2>
            <a href="/">🏠 Home</a><br>
            <a href="/diary">📓 Diary</a><br>
            <a href="/games/home.html">🎮 Game Reviews</a><br>
            <a href="/cookbook">🍳 Cookbook</a><br>
            <a href="/friends">💜 Friends</a><br>
            <a href="/projects">📂 Cool Projects</a><br>
        </div>
    `;

    const proNav = document.querySelector('.pronav');
    if (proNav) {
        proNav.innerHTML = proNavHTML;
    }
});
