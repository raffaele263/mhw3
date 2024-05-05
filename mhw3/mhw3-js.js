



const buttonmenu = document.querySelector("#buttonmenu img");
buttonmenu.addEventListener("click", OpenMenu);

function OpenMenu(event) {
    console.log("ciao");
    const Menumobile = document.querySelector('#hiddenmenumobile');
    Menumobile.classList.remove('hidden');
    document.body.classList.add('no-scroll');

}
const buttonclosemenumobile = document.querySelector('#buttonclosemenumobile');
buttonclosemenumobile.addEventListener("click", CloseMenu);
function CloseMenu(event) {
    const Menumobile = document.querySelector('#hiddenmenumobile');
    Menumobile.classList.add('hidden');
}

//#region Banner

const textBannerHidden = document.querySelector("#Banner #text2");
textBannerHidden.classList.add("textnone");
textBannerHidden.classList.remove("texthidden");

const Banner = document.querySelector('#Banner');
Banner.addEventListener("click", CambioimmBanner);
const imgBanner = document.querySelector("#ImgBanner");
imgBanner.classList.remove("hiddenimgbanner");
imgBanner.classList.add("imgbannerprinc");

function CambioimmBanner() {   
    const imgBanner = document.querySelector("#ImgBanner");
    const textBannerprinc = document.querySelector("#Banner #text");
    const textBannerHidden = document.querySelector("#Banner #text2");
    if (imgBanner.classList == 'hiddenimgbanner') {
        imgBanner.classList.add("imgbannerprinc");
        imgBanner.classList.remove("hiddenimgbanner");
        textBannerprinc.classList.add("textprincipal");
        textBannerprinc.classList.remove("textnone")
        textBannerHidden.classList.remove("texthidden");
        textBannerHidden.classList.add("textnone");
    }
    else {                                                      /* Funzione Per il Cambio Immagine Nell'Banner*/
        imgBanner.classList.add("hiddenimgbanner");
        textBannerprinc.classList.remove("textprincipal");
        textBannerprinc.classList.add("textnone")
        textBannerHidden.classList.add("texthidden");
        textBannerHidden.classList.remove("textnone");
        imgBanner.classList.remove("imgbannerprinc");
    }
    const ButtonBannerPrincipal = document.querySelector("#Banner .ButtonPrincipal");
    ButtonBannerPrincipal.addEventListener("click", ButtonBanPrincipal, { capture: false});
    function ButtonBanPrincipal(event) 
    { 
        event.stopImmediatePropagation();
        window.alert("Presto Disponibile,Principal");    /* Funzione Per il Button Principale nell'Banner*/
        console.log("principal");
    }
    const ButtonBannerHidden = document.querySelector("#Banner .ButtonHidden");
    ButtonBannerHidden.addEventListener("click", ButtonBanHidden,{ capture: false});
    function ButtonBanHidden(event) 
    {
        event.stopImmediatePropagation();
        window.alert("Presto Disponibile,Hidden");            /* Funzione Per il Button Secondario nell'Banner*/                                         
        console.log('Cliccato interno,Hidden!');
    }
}

//#endregion

//#region CercaPrincipale
document.getElementById("CercaPrincipale").addEventListener("focusout", focusOutCercaPrincipale);
document.getElementById("CercaPrincipale").value="Cosa Vuoi Cercare?";
function focusOutCercaPrincipale(event)
{
if(document.getElementById("CercaPrincipale").value===""||document.getElementById("CercaPrincipale").value==="Cosa Vuoi Cercare?")
    {
        document.getElementById("ButtonCerca").classList.add("hidden");
        document.getElementById("CercaPrincipale").value="Cosa Vuoi Cercare?";
    }
}

document.getElementById("CercaPrincipale").addEventListener("click", ClickCercaPrincipale);
document.getElementById("ButtonCerca").classList.add("hidden");
function ClickCercaPrincipale(event)
{
    document.getElementById("ButtonCerca").classList.remove("hidden");
    document.getElementById("CercaPrincipale").value="";
}
document.getElementById("ButtonCerca").addEventListener("click",ClickButtonCerca);
function ClickButtonCerca(event)
{
    let valoreCerca=document.getElementById("CercaPrincipale").value;
    console.log(valoreCerca);
    document.getElementById("CercaPrincipale").value="Cosa Vuoi Cercare?";
    document.getElementById("ButtonCerca").classList.add("hidden");
}

//#endregion

//#region Newsletter


document.getElementById("Email").addEventListener("focusout", focusoutNewsletterEmail);
document.getElementById("Email").value="Inserisci La Tua E-mail";
function focusoutNewsletterEmail()
{
    if(document.getElementById("Email").value==="")
        { 
            document.getElementById("Email").value="Inserisci La Tua E-mail"
        }
        else EMAILCHECK=document.getElementById("Email").value;
}

document.getElementById("Email").addEventListener("click",clicknewsletteremail);

function clicknewsletteremail(event)
{
    EMAILCHECK="";
document.getElementById("Email").value=null;
}
           
document.getElementById("buttonnewsletter").addEventListener("click",buttonnewsletter)
const Key_abstract="";
function buttonnewsletter()
{
EMAILCHECK=document.getElementById("Email").value;
console.log(EMAILCHECK);
let responsejson;
const options = {method: 'GET'};
fetch("https://emailvalidation.abstractapi.com/v1/?api_key="+Key_abstract+"&email=" + EMAILCHECK , options)
  .then(response => response.json())
  .then(response => onJsonCerca(response))
  .catch(err => console.error(err));
  document.getElementById("Email").value="Inserisci La Tua E-mail";
}
function onJsonCerca(json)
{
    let Deliverable = json.deliverability;
   if(Deliverable==="DELIVERABLE")
    {
        window.alert("E-mail Corretta");
    }
    else
    {
        window.alert("E-mail Sbagliata");
    }
}
//#endregion

//#region modalClickZoom
function onModalClick() {
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
}

const modalView = document.querySelector('#modalview');
modalView.addEventListener('click', onModalClick);

const Preferitiimgbutton = document.querySelectorAll(".ProdottoArticoloInfo .TestoArticolo .ButtonProdotto .ButtonZoom");
for (let i = 0; i < Preferitiimgbutton.length; i++) {
    Preferitiimgbutton[i].addEventListener("click", onThumbnailClick);
}

function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
}

function onThumbnailClick(event) {
    const Button = event.currentTarget;
    console.log(event.currentTarget);
    const Prodotto = document.querySelectorAll("img" + "[data-index='" + Button.dataset.index + "']");
    console.log(Prodotto);
    const image = createImage(Prodotto[0].src);
    document.body.classList.add('no-scroll');
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
    modalview.style.left = window.pageXOffset - 8 + "px";
    modalview.style.top = window.pageYOffset - 8 + "px";

}

//#endregion

//#region ButtonCompraVetrine

document.getElementById("ButtonCompraVet1").addEventListener("click",ButtonCompraVet2);
function ButtonCompraVet1(event)
{
window.alert("Articolo Non Disponibile:1");
}

document.getElementById("ButtonCompraVet2").addEventListener("click",ButtonCompraVet2);
function ButtonCompraVet2(event)
{
window.alert("Articolo Non Disponibile:2");
}

//#endregion


const ProdottiImg  = document.querySelectorAll(".ProdottoArticoloInfo .ImgArticolo");
for (let i = 0; i < ProdottiImg.length; i++)
{
    ProdottiImg[i].addEventListener("click", ProdottiImgReindirizzamento);
}
function ProdottiImgReindirizzamento(event)
{
    const Button = event.currentTarget.dataset.index;
    switch (Button) 
    {
        case "1": window.alert("Articolo Non Disponibile:" + "110"); break;
        case "2": window.alert("Articolo Non Disponibile:" + "120"); break;
        case "3": window.alert("Articolo Non Disponibile:" + "130"); break;
        case "4": window.alert("Articolo Non Disponibile:" + "140"); break;
        case "5": window.alert("Articolo Non Disponibile:" + "150"); break;
        case "6": window.alert("Articolo Non Disponibile:" + "160"); break;
        case "7": window.alert("Articolo Non Disponibile:" + "170"); break;
        case "8": window.alert("Articolo Non Disponibile:" + "180"); break;
        case "9": window.alert("Articolo Non Disponibile:" + "190"); break;
        case "10": window.alert("Articolo Non Disponibile:" + "200"); break;
        case "11": window.alert("Articolo Non Disponibile:" + "210"); break;
        case "12": window.alert("Articolo Non Disponibile:" + "220"); break;
        case "13": window.alert("Articolo Non Disponibile:" + "230"); break;
        case "14": window.alert("Articolo Non Disponibile:" + "240"); break;
        case "15": window.alert("Articolo Non Disponibile:" + "250"); break;
        case "16": window.alert("Articolo Non Disponibile:" + "260"); break;
        case "17": window.alert("Articolo Non Disponibile:" + "270"); break;
    }
}
const client_id = "";
  const client_secret ="";
  // Dichiara variabile token
  let token;
  // All'apertura della pagina, richiediamo il token
  fetch("https://accounts.spotify.com/api/token",
      {
     method: "post",
     body: 'grant_type=client_credentials',
     headers:
     {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
     }
    }
  ).then(onTokenResponse).then(onTokenJson);

function onJsonShow(json) {
    console.log('JSON ricevuto');
    // Svuotiamo la libreria
    const library = document.querySelector('#album-view');
    library.innerHTML = '';
    // Leggi il numero di risultati
    const results = json.albums.items;
    let num_results = results.length;
    // Mostriamone al massimo 10
    if(num_results > 10)
      num_results = 10;
    // Processa ciascun risultato
    for(let i=0; i<num_results; i++)
    {
      // Leggi il documento
      const album_data = results[i]
      // Leggiamo info
      const title = album_data.name;
      const selected_image = album_data.images[0].url;
      // Creiamo il div che conterrà immagine e didascalia
      const album = document.createElement('div');
      album.classList.add('album');
      // Creiamo l'immagine
      const img = document.createElement('img');
      img.src = selected_image;
      // Creiamo la didascalia
      const caption = document.createElement('span');
      caption.textContent = title;
      // Aggiungiamo immagine e didascalia al div
      album.appendChild(img);
      album.appendChild(caption);
      // Aggiungiamo il div alla libreria
      library.appendChild(album);
    }
  }
  function onJsonAlbum(json) {
    console.log('JSON ricevuto');
    // Svuotiamo la libreria
    console.log(json);
    const library = document.querySelector('#album-view');
    library.innerHTML = '';
    // Leggi il numero di risultati
    const results = json.albums.items;
    let num_results = results.length;
    // Mostriamone al massimo 10
    if(num_results > 10)
      num_results = 10;
    // Processa ciascun risultato
    for(let i=0; i<num_results; i++)
    {
      // Leggi il documento
      const album_data = results[i]
      // Leggiamo info
      const title = album_data.name;
      const selected_image = album_data.images[0].url;
      // Creiamo il div che conterrà immagine e didascalia
      const album = document.createElement('div');
      album.classList.add('album');
      // Creiamo l'immagine
      const img = document.createElement('img');
      img.src = selected_image;
      // Creiamo la didascalia
      const caption = document.createElement('span');
      caption.textContent = title;
      // Aggiungiamo immagine e didascalia al div
      album.appendChild(img);
      album.appendChild(caption);
      // Aggiungiamo il div alla libreria
      library.appendChild(album);
    }
  }
  function onResponse(response) {
    console.log('Risposta ricevuta');
    return response.json();
  }
  
  function searchAlbum(event)
  {
    // Impedisci il submit del form
event.preventDefault();
    // Leggi valore del campo di testo
    const album_value = encodeURIComponent("Gym");
    console.log('Eseguo ricerca: ' + album_value);
    // Esegui la richiesta
    fetch("https://api.spotify.com/v1/search?type=album&q=" + album_value,
      {
        headers:
        {
          'Authorization': 'Bearer ' + token
        }
      }
    ).then(onResponse).then(onJsonAlbum);
  }
  function searchShow(event)
  {
    // Impedisci il submit del form
event.preventDefault();
    // Leggi valore del campo di testo
    const album_value = encodeURIComponent("the Weekend");
    console.log('Eseguo ricerca: ' + album_value);
    // Esegui la richiesta
    fetch("https://api.spotify.com/v1/search?type=playlist&q=" + album_value,
      {
        headers:
        {
          'Authorization': 'Bearer ' + token
        }
      }
    ).then(onResponse).then(onJsonShow);
  }
  function onTokenJson(json)
  {
    // Imposta il token global
    token = json.access_token;
  }
  
  function onTokenResponse(response)
  {
    return response.json();
  }
  
 
  document.getElementById("ButtonSpotifyAlbum").addEventListener("click",searchAlbum);
 /* document.getElementById("ButtonSpotifyShow").addEventListener("click",searchShow);*/
