import { elements } from "./elements";
const title = document.getElementById("title").textContent;
console.log(title);

async function displayAmiibo() {
  const amiiboUrl = `https://www.amiiboapi.com/api/amiibo/?gameseries=${title}`;

  try {
    const result = await fetch(amiiboUrl);
    const data = await result.json();
    data.amiibo.forEach(element => {
      elements.displayArea.insertAdjacentHTML(
        "beforeend",
        `<ul class="display-amiibo">
          <li class="display-name">${element.character}</li>
          <li class="display-series">${element.amiiboSeries}</li>
          <img class="display-image" src="${element.image}" alt="">
        </ul>`
      );
    });
  } catch (error) {
    console.log(error);
  }
}

displayAmiibo();

//displayAmiibo();
