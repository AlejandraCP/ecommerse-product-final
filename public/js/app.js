const cardGroup = $('.card-group-js');
let output = '';

page('/nike', getApi);
page('/umbro', getApi);
page('/addidas', getApi);
page('/reebok', getApi);
page('/just do it', getApi);
page('/puma', getApi);
page('/fila', getApi);
page('/joma', getApi);
page();

function getApi(event) {  
  let brand = event.path;  
  let name = brand.substr(1);

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
    let results = array.results;
    console.log(results);    

    results.forEach(element => {
      output += `
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 my-2">
        <div class="card">
          <img class="card-img-top" src="${element.thumbnail}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">S/. ${element.price}</p>
          </div>
          <div class="card-footer text-center">
            <input class="btn btn-info" type="button" value="AÑADIR AL CARRITO" price="${element.price}" title="${element.listing_type_id}" />
          </div>
        </div>
      </div>
      `;
      cardGroup.html(output);
    });
  };

  let output = '';
};