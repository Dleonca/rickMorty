const cartoonCharacters = async (pagina) =>{ 
    let url = "https://rickandmortyapi.com/api/character/?page="+pagina;
    const response = await fetch(url);
    const data = await response.json() ;
    console.log(data);
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
            <p class="card-text">Name:${item.name}</p>
            <p class="card-text">Gender:${item.gender}</p>
            <p class="card-text">Species:${item.species}</p>
          </div>
        </div>`
        divRes.appendChild(divItem);

    });
    
}
cartoonCharacters(1);