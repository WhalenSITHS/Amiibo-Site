import { elements } from "./elements";
import { create } from "domain";

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
      renderAmiibo(data);
    } catch (error) {
      console.log(error);
    }
  });
}
search();

const renderAmiibo = amiibo => {
  const markup = `<ul class="display-amiibo">
  <li class="display-name">Name: ${amiibo.character}</li>
  <li class="display-series">Series: %series%</li>
  <img class="display-image" src="%source%" alt="">
</ul>`;
  data.amiibo.forEach(el => {
    elements.displayArea.insertAdjacentHTML("beforeend", markup);
  });
};
