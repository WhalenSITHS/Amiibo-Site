import { elements } from "./elements";

async function displayAmiibo() {
  const amiiboTitle = document.getElementsByClassName("header-title").value;
  console.log(amiiboTitle);
  const amiiboUrl = `https://www.amiiboapi.com/api/amiibo/?gameseries=${amiiboTitle}`;

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

window.addEventListener("load", event => {
  displayAmiibo();
  console.log("page is fully loaded");
});
