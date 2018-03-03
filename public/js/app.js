let cardGroup = $('.card-group');
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
    console.log(array);
    // console.log(array.results);
    // console.log(array.results[0]);
    // console.log(array.results[0].thumbnail); // imagen del producto
    // console.log(array.results[0].price); //precio de producto
    // console.log(array.results[0].title);
  };
}

function umbro() {
  document.getElementById('prueba').textContent = 'diste click a umbro';
}