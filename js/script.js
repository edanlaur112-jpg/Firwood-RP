// =================================
// Firwood RP - Main JavaScript
// =================================


console.log("Firwood RP JS loaded");



// =================================
// Discord Login
// =================================

function discordLogin(){

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




// =================================
// Acces Special (Sindicat / Mafia / Underground)
// =================================

function checkAccess(){


    const password =
    document.getElementById("password").value;


    const message =
    document.getElementById("message");



    // parola de test

    if(password === "firwood2026"){


        message.innerHTML =
        "✅ Acces permis";


        setTimeout(function(){


            window.location.href =
            "pages/sindicat.html";


        },1000);



    } else {


        message.innerHTML =
        "❌ Parolă greșită";


    }


}




// =================================
// Sindicat - Demo Buttons
// =================================


function applyJob(job){


    alert(
        "Ai aplicat pentru jobul: " + job
    );


}



function acceptApplication(id){


    alert(
        "Aplicația #" + id + " acceptată"
    );


}



function deleteApplication(id){


    alert(
        "Aplicația #" + id + " ștearsă"
    );


}



function startEvent(name){


    alert(
        "Eveniment pornit: " + name
    );


}



function stopEvent(name){


    alert(
        "Eveniment oprit: " + name
    );


}



function deleteEvent(name){


    alert(
        "Eveniment șters: " + name
    );


}



function fireMember(name){


    alert(
        "Membru concediat: " + name
    );


}