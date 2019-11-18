import { elements } from "./elements";

async function displayAmiibo() {
  const amiiboUrl = "https://www.amiiboapi.com/api/amiibo/?gameseries=pokemon";
  try {
    const result = await fetch(amiiboUrl);
    const data = await result.json();
    data.amiibo.forEach(element => {
      elements.displayArea.insertAdjacentHTML(
        "beforeend",
        `<ul class="display-amiibo">
          <li class="display-name">Name:${element.character}</li>
          <li class="display-series">Series:${element.amiiboSeries}</li>
          <img class="display-image" src="${element.image}" alt="">
        </ul>`
      );
    });
  } catch (error) {
    console.log(error);
  }
}

displayAmiibo();
