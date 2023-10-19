function pslink() {
    {
        window.open("https://www.roblox.com/games/8651781069?privateServerLinkCode=" + document.getElementById("pscode").value);
        console.log('Button clicked!');
    }
}
window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById("a")
    if (el) {
        el.addEventListener("click", pslink, false);
    }
});