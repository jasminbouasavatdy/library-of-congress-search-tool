console.log("here");

fetch("https://www.loc.gov/maps/?q=civil war&fo=json")
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    var searchBarResultEl = document.querySelector("#search");
    console.log(data);

    for (var i = 0; i < data.content.result.length; i++) {
      var divEl = document.createElement("div");
      var titleEl = document.createElement("h3");
      var descriptionEl = document.createElement("p");
      console.log(data.content.results[i].title);
      console.log(data.content.results[i].description[0]);

      divEl.appendChild(titleEl);
      divEl.appendChild(descriptionEl);

      searchBarResultEl.appendChild(divEl);
    }
  });
