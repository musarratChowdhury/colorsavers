let table_body = document.getElementById("table-body");
let dataTable = document.getElementById("data-table");
let colorName = document.getElementById("colorName-input");
let colorHex = document.getElementById("colorHEX-input");
let submitBtn = document.getElementById("submit-btn");
let alertBox = document.querySelector(".alert-box");
let isDuplicate = false;

// console.log(dataTable);
window.onload = () => {
  localStorageCheck();
  //   infos.splice(infos.length - 1, 1);
  //   localStorage.setItem("infos", JSON.stringify(infos));

  infos.forEach((element) => {
    let newRow = document.createElement("tr");
    //adding the name of the color
    let colorHEX = document.createElement("td");
    colorHEX.innerText = element.Hex;
    //setting the color display
    let colorDisplay = document.createElement("span");
    colorDisplay.classList.add("color-display");
    colorDisplay.style.backgroundColor = element.Hex;
    //adding the display to the td
    let colorTd = document.createElement("td");
    colorTd.appendChild(colorDisplay);
    //
    let colorNAME = document.createElement("td");
    colorNAME.innerText = element.Name;

    //
    //adding the new rows to the t-body
    newRow.appendChild(colorHEX);
    newRow.appendChild(colorTd);
    newRow.appendChild(colorNAME);
    table_body.appendChild(newRow);
  });
};

//form actions
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //push to localstorage
  localStorageCheck();
  //   console.log(infos);
  //duplicate check

  infos.forEach((color) => {
    if (color.Hex == colorHex.value) {
      //   window.alert("this color already exist!");
      alertBox.innerText = "this color already exist!";
      isDuplicate = true;
    }
  });
  if (!isDuplicate) {
    let newRow = document.createElement("tr");
    //adding the name of the color
    let colorHEX = document.createElement("td");
    colorHEX.innerText = colorHex.value;
    //setting the color display
    let colorDisplay = document.createElement("span");
    colorDisplay.classList.add("color-display");
    colorDisplay.style.backgroundColor = colorHex.value;
    //adding the display to the td
    let colorTd = document.createElement("td");
    colorTd.appendChild(colorDisplay);
    //
    let colorNAME = document.createElement("td");
    colorNAME.innerText = colorName.value;

    //
    //adding the new rows to the t-body
    newRow.appendChild(colorHEX);
    newRow.appendChild(colorTd);
    newRow.appendChild(colorNAME);
    table_body.appendChild(newRow);
    infos.push({ Name: colorName.value, Hex: colorHex.value });
    localStorage.setItem("infos", JSON.stringify(infos));
    console.log(infos);
  }
});

function localStorageCheck() {
  //checking for local storage availability..........

  if (localStorage.getItem("infos") == null) {
    infos = [];
  } else {
    infos = JSON.parse(localStorage.getItem("infos"));
  }
}
