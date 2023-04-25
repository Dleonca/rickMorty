const cartoonCharacters = async (pagina) =>{ 
    let url = "https://rickandmortyapi.com/api/character/?page="+pagina;
    const response = await fetch(url);
    const data = await response.json() ;
    console.log(data);
    //llenado de select
    selectRes = document.querySelector('#namescc');
    selectRes.innerHTML="";
      optItem = document.createElement('option');
      optItem.classList.add("opt");
      optItem.value =`0`;
      optItem.innerHTML = `Todos`
      selectRes.appendChild(optItem);
    data.results.map(item => {
      optItem = document.createElement('option');
      optItem.classList.add("opt");
      optItem.value =`${item.id}`;
      optItem.innerHTML = `${item.name}`
      selectRes.appendChild(optItem);
   });
    //llenado de cards
    divRes = document.querySelector("#resultado");
    divRes.innerHTML = "";
    data.results.map(item => {
        divItem = document.createElement('div');
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
        </div>`
        divRes.appendChild(divItem);
     });
    
}
cartoonCharacters(1);