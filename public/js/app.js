const cardGroup = $('.card-group-js');
let output = '';
console.log(cardGroup);

page('/nike', getApi);
page('/umbro', getApi);
page("/addidas", getApi);
page("/reebok", getApi);
page("/just do it", getApi);
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
    let results = array.results;

    results.forEach(element => {
      output += `
      <div class="card col-12 col-sm-4 m-2">
        <img class="card-img-top" src="${element.thumbnail}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text"></p>
        </div>
        <div class="card-footer">
          <input class="car btn btn-primary" type="button" value="AÑADIR AL CARRITO" price="${element.price}" title="${element.listing_type_id}" />
        </div>
      </div>
      `;
      cardGroup.html(output);
    });
  };

  let output = '';
};

