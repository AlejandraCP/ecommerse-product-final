const cardGroup = $('.card-group');
console.log(cardGroup);

page('/nike', getApi);
page('/umbro', getApi);
page("/addidas", getApi);
page("/reebok", getApi);
page("/just", getApi);
page("/puma", getApi);
page("/fila", getApi);
page("/joma", getApi);
page();

function getApi(e) {  
  let x = e.path;
  var name = x.substr(1);

  let url = `https://api.mercadolibre.com/sites/MPE/search?condition=new&q=${name}`;

  $.ajax({
    url: url,
    contentType: 'application/json',
    method: 'GET',
    success: function(response) {
      getApi(response);
    }
  });

  const getApi = array => {
    console.log(array);
    console.log(array.results);
    console.log(array.results[0].title);

    let results = array.results;

    results.forEach(element => {
      console.log(element.title);  

      cardGroup.html += `
      <div class="card">
        <img class="card-img-top" src="${element.thumbnail}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title" id="prueba">${element.title}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      `;
    });

    // console.log(array.results[0]);
    // console.log(array.results[0].thumbnail); // imagen del producto
    // console.log(array.results[0].price); //precio de producto
    // console.log(array.results[0].title);
  };
};