window.onload = function() {
  var lyrics = document.querySelector(".lyrics-large");
  var popup = document.querySelector(".lyrics-box");


  var fontSize = 30; 
  while (lyrics.scrollHeight > lyrics.offsetHeight) {
      fontSize -= 1;
      lyrics.style.fontSize = fontSize + "px";
  }


  var maxWidth = Math.max(lyrics.offsetWidth, lyrics.scrollWidth);
  popup.style.width = maxWidth + "px";
}

var currentIndex = 0; 

function closeAlert() {
  var lyrics = document.querySelector(".lyrics-large");
  var songLines = [
      "Hola Jhade",
      "¿Sabias que?",
      "Eres linda",
      "Tu dirás, callate o que digo tonterias",
      "Pero no, no digo tonterias",
      "Porque si eres linda",
      "Y no acepto que digas no como respuesta",
      "Ya no se que más decir",
      "Pero si se que me gustas",
      "Creo que si te lo dije asdksadhjk",
      "Pero bueno, igual me gusta recordartelo",
      "Porque eres bien linda",
      "¿Si te lo dije no?",
      "Hoy te veias preciosa",
      "Y hoy me diverti contigo, aunque siempre me divierto contigo",
      "Porque me gusta pasar tiempo contigo",
      "Y aqui terminan las cartas porque aún no se como agregar más jkasdkjalsd "
  ];

  currentIndex = (currentIndex + 1) % songLines.length; 
  lyrics.textContent = songLines[currentIndex]; 
}
