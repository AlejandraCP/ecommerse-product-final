page('/nike', nike);
page('/umbro', umbro);
// page('/addidas', index);
// page('/reebok', index);
// page('/just', index);
// page('/puma', index);
// page('/fila', index);
// page('/joma', index);
page();

function nike() {
  document.getElementById('prueba').textContent = 'diste click a nike';
}

function umbro() {
  document.getElementById('prueba').textContent = 'diste click a umbro';
}