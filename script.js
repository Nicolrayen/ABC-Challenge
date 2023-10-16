function randomColor() {
  const randomNum = Math.floor(Math.random() * 3);
  const array = ["Green", "Blue", "Red"]
  return array[randomNum];
}

const hacheCinco = document.getElementsByTagName("h5");

const hacheCincoPressed = e => {
  e.target.style.color = randomColor();
}

for (let h5 of hacheCinco) {
  h5.addEventListener("click", hacheCincoPressed);
}