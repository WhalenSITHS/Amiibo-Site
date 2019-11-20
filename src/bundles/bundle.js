import { elements } from "./elements";

elements.amiiboForm.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector(".btn").click();
  }
});

function search() {
  elements.amiiboForm.addEventListener("submit", async function(e) {
    e.preventDefault();
    const amiiboUrl = `https://www.amiiboapi.com/api/amiibo/?character=${elements.amiiboName.value}`;
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
      console.log(data.amiibo[0]);
    } catch (error) {
      console.log(error);
    }
  });
}
search();
