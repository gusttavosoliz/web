// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Chaparrita", time: 15 },
  { text: "hoy es un dia especial 21 de septiembre", time: 18 },
  { text: "Dia de los estudiantes, enamorados, del medico", time: 27 },
  { text: "en pocas palbrabras nuestro dia ", time: 32 },
  { text: "te mando estas flores amarillas ", time: 33 },
  { text: "espero te guste ezte detalle ", time: 41 },
  { text: "quisas sea un poco tarde ", time: 47 },
  { text: "estaba corrigiendo algunas cosas que no me gustaron", time: 54 },
  { text: "sabes que te amo mucho", time: 59 },
  { text: "puedes contar con migo amorcito", time: 67 },
  { text: "amor no te neojes esto no es facil jajajaja", time: 72 },
  { text: "me estaba olvidando como hcaerlo ", time: 78 },
  { text: "busque ayuda en san GOOGLE ", time: 83 },
  { text: "ah tambien de YUOTUBE", time: 91 },
  { text: "te mando muchos corazones", time: 97 },
  { text: "❤❤❤❤❤❤", time: 104 },
  { text: "Feliz dia del medico mi vida", time: 108 },
  { text: "feliz dia de los enamorados ", time: 144 },
  { text: "te amooooooo", time: 148 },
  { text: "enserio espero le guste jejejeje", time: 153 },
  { text: "esta vez diferente algo lindo creo jajaja", time: 158 },
  { text: "flores amarillas", time: 164 },
  { text: "🌷🌷🌷🌷🌷", time: 169 },
  { text: "ah no son amrilla perdon", time: 176 },
  { text: "🌻🌻🌻🌻", time: 183 },
  { text: "ahora si flores amrillas 🌻🌻🌻🌻", time: 188 },
  { text: "TE AMO mi chaparrita ❤.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);