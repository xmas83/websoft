//Set table callback function
function setTable(array, elementId) {
  let newArray = [];
  array.forEach(element => {
    const schoolObj = {
      Skolenhetskod: element.Skolenhetskod,
      Skolenhetsnamn: element.Skolenhetsnamn
    };
    newArray.push(schoolObj);
  });
  var col = [];
  for (var i = 0; i < newArray.length; i++) {
    for (var key in newArray[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }
  var table = document.createElement("table");

  var tr = table.insertRow(-1);

  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th);
  }
  for (var i = 0; i < newArray.length; i++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = newArray[i][col[j]];
    }
  }
  var divContainer = document.getElementById(elementId);
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
}

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const nameA = a.kom_namn.toUpperCase();
  const nameB = b.kom_namn.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

//Loading municipalities
async function loadMunicipalities() {
  let citiesArray = [];
  await fetch("../files-repo/municipalities.json")
    .then(res => res.json())
    .then(data => {
      citiesArray = data.kommuns;
      citiesArray.sort(compare);
      let element = "";

      for (const i in citiesArray) {
        let city = {
          name: citiesArray[i].kom_namn,
          kod: citiesArray[i].id
        };

        element += `
                <menu>
                    <menuitem style="cursor:pointer" onclick="getSchools(${city.kod},'${city.name}')" >${city.name} </menuitem>
                </menu>
                 `;
      }
      document.getElementById("menu-list").innerHTML = element;
    });
}
// Fill up the menu with municipalities
document
  .getElementById("schools")
  .addEventListener("click", loadMunicipalities());

//Get school related to the municipality
async function getSchools(kod, name) {
  console.log("function newfile. kod:" + kod);
  console.log("function newfile. name:" + name);
  await fetch("../files-repo/swedish_schools.json")
    .then(res => res.json())
    .then(data => {
      const schools = data;
      schoolArray = schools.Skolenheter.filter(
        school => school.Kommunkod == kod
      );
      console.log(schoolArray);
      console.log("Array first el: " + schoolArray[0]);
      document.getElementById("cityName").innerHTML =
        "list of school in " + name;
      if (schoolArray.length < 1) {
        document.getElementById("schools-table").innerHTML = `
                <div style="padding: ${20}px; margin: ${50}px ${10}px; border: ${0.5}px solid red; border-raduis: ${5}px; background: thistle; text-align: center;">
                    <p style="color: white; font-size: 15px; text-transform: uppercase; font-style: italic"><b>SORRY BUT NOT SCHOOL RELATED TO <span style="color:black">${name} KOMMUN</span> COULD BE FOUND IN OUR DATA BASE AT THE MOMENT. TRY ANOTHER!</b></p>
                </div>`;
      } else {
        setTable(schoolArray, "schools-table");
      }
    });
}
