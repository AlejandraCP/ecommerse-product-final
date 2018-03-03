let cardGroup = $('.card-group');
console.log(cardGroup);


page('/nike', getApi);
page('/umbro', getApi);
// page('/addidas', sewred);
// page('/reebok', strtyrtyd);
// page('/just', swerwrd);
// page('/puma', ssdsd);
// page('/fila', sddd);
// page('/joma', asd);
page();


let url = 'https://api.mercadolibre.com/sites/MPE/search?condition=new&q=Nike';

function getApi() {
console.log()
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
    console.log(array.results[0]);
    console.log(array.results[0].thumbnail); // imagen del producto
    console.log(array.results[0].price); //precio de producto
    console.log(array.results[0].title);
  };
}

function umbro() {
  document.getElementById('prueba').textContent = 'diste click a umbro';
}