// Firwood RP - Main JavaScript


console.log("Firwood RP JS loaded");


// Discord OAuth Login

function discordLogin() {

    const clientId = "1524349879055548506";

    const redirect =
    "https://firwood-rp.vercel.app/login.html";


    const url =
    "https://discord.com/oauth2/authorize" +
    "?client_id=" + clientId +
    "&response_type=code" +
    "&redirect_uri=" + encodeURIComponent(redirect) +
    "&scope=identify";


    window.location.href = url;

}



// Animații carduri

const cards = document.querySelectorAll(".card");


cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});