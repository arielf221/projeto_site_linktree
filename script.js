function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = html.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Ariel usando óculos com camisa branca, olhando pra câmera",
    )
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute(
      "alt",
      "Ariel usando óculos com terno preto e gravata azul escuro, olhando pra câmera",
    )
  }
}
