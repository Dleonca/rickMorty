const cartoonCharacters = async (pagina, optcc) => {
  let url = "https://rickandmortyapi.com/api/character/?page=" + pagina;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  //llenado de select con los nombres de los personajes
  selectRes = document.querySelector("#namescc");
  selectRes.innerHTML = "";
  optItem = document.createElement("option");
  optItem.classList.add("opt");
  optItem.value = null;
  optItem.setAttribute("selected", "");
  optItem.innerHTML = `Todos`;
  selectRes.appendChild(optItem);
  data.results.map((item) => {
    optItem = document.createElement("option");
    optItem.classList.add("opt");
    optItem.value = `${item.id}`;
    optItem.innerHTML = `${item.id} - ${item.name}`;
    selectRes.appendChild(optItem);
  });
  if (optcc === 43) {
    //llenado de cards todos personajes de una pagina
    divRes = document.querySelector("#resultado");
    divRes.innerHTML = "";
    data.results.map((item) => {
      divItem = document.createElement("div");
      divItem.classList.add("col-12");
      divItem.classList.add("col-md-6");
      divItem.classList.add("col-lg-4");
      divItem.innerHTML = `
        <div class="card m-2  " >
          <img src="${item.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text titleP">${item.name}</p>
            <p class="card-text titleS">Your gender is ${item.gender} and your species is ${item.species}. </p>
          </div>
        </div>`;
      divRes.appendChild(divItem);
    });
  }

  if (optcc != 43) {
    divRes2 = document.querySelector("#resultado");
    divRes2.innerHTML = "";
    // optSel es el  ID del personaje que deseas imprimir
    const ident = null;
    const nombre = null;
    data.results.find((item) => {
      ident = `${item.id}`;
      nombre = `${item.name}`;
      if (optcc === ident) {
        console.log(ident)
      } else {
        console.log("no hay id")
      }
    });
    console.log(`${ident}, su nombre es: ${nombre}`)
      //const character = data.results.id[data.results.map((item) => {-1].id
     // console.log(character);

    //const character = data.results.find((item) => item.id === optcc); // Buscar el personaje con el ID especificado
   /* if (character != null) {
      // Si se encontró el personaje, imprimir su información
      const divItem2 = document.createElement("div");
      divItem.classList.add("col-12");
      divItem.classList.add("col-md-6");
      divItem.classList.add("col-lg-4");
      divItem2.innerHTML = `
            <div class="card m-2">
              <img src="${character.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text titleP">${character.name}</p>
                <p class="card-text titleS">Your gender is ${character.gender} and your species is ${character.species}. </p>
              </div>
            </div>`;
    }
    divRes2.appendChild(divItem);*/
  }
};
cartoonCharacters(1, 43);

const sElemento = document.getElementById("namescc");
sElemento.addEventListener("change", (event) => {
  const valorObt = event.target.value;
  console.log("Personaje con ID:", valorObt);
  const pElemento = document.getElementById("pagina");
  const initialValue = pElemento.value;
  console.log("Pagina No", initialValue);
  if (valorObt == 43) {
    cartoonCharacters(initialValue, 43);
  } else {
    cartoonCharacters(initialValue, valorObt);
  }
});
