const colorBtn = document.getElementById("color-btn");

let finalColor = "";

colorBtn.addEventListener("input", function (e) {
  const selectedColor = e.target.value;
  finalColor = selectedColor;
});

document
  .getElementById("getColors-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const selectedMode = document.getElementById("color-input").value;
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${finalColor.slice(1)}&mode=${selectedMode}`,
    )
      .then((res) => res.json())
      .then((data) => {
        let hexBackgroundHTML = "";
        let hexContainerHTML = "";

        data.colors.forEach((color, index) => {
          hexContainerHTML += `
          <div id="hexvalue-${index + 1}">${color.hex.value}</div>`;
          hexBackgroundHTML += `
          <div id="container-${index + 1}" style="background-color:${color.hex.value}"></div>`;
        });
        document.getElementById("footer-container").innerHTML =
          hexContainerHTML;
        document.getElementById("main-container").innerHTML = hexBackgroundHTML;
      });
  });
