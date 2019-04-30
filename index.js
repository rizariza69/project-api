fetch("https://api.github.com/users/rizariza69")
  .then(response => {
    // We have to convert the response manually
    return response.json();
  })
  .then(data => {
    let myGithub = (document.getElementById("git-hub").innerHTML += `<li>${
      data.name
    } | ${data.login} | ${data.url} | ${data.created_at} </li>`);
    console.log(myGithub);
    // console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

let ships = [];

fetch("https://swapi.co/api/starships/")
  .then(response => {
    // We have to convert the response manually
    return response.json();
  })
  .then(data => {
    ships = data.results.map((item, index) => {
      return { name: item.name, model: item.model, length: item.length };
    });
    //html
    const el = document.getElementById("starwars"); //

    ships.forEach((item, index) => {
      el.innerHTML += `<li>${item.name} | ${item.model} | ${item.length}</li>`;
    });

    console.log(ships);
  })
  .catch(error => {
    console.log(error);
  });

let country = [];

fetch("https://restcountries.eu/rest/v2/all")
  .then(response => {
    // We have to convert the response manually
    return response.json();
  })
  .then(data => {
    country = data.map((item, index) => {
      return {
        name: item.name,
        nativeName: item.nativeName,
        region: item.region
      };
    });

    const element = document.getElementById("country");

    country.forEach((item, index) => {
      element.innerHTML += `<li> ${item.name} | ${item.capital} | ${
        item.nativeName
      } | ${item.region}  </li>`;
    });
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
