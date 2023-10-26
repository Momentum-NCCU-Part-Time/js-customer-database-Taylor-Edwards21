const entryPoint = 
document.querySelector(`.container`);

function customerToHtml(customer) {
  let customerName = customer.name.first.charAt(0).toUpperCase() + 
  customer.name.first.slice(1) + 
  " " + customer.name.last.charAt(0).toUpperCase() + 
  customer.name.last.slice(1)
 
  return `<div class = "card" > 
  <img src = ${customer.picture.large} class = "customerCardID" >
  <h2 class= "customer-name">${customerName} <h2>
  < div class= "customer-facts">
  <div class= "email">${customer.email} 
  </div>`
} 

let allCustomers = customers.map((customer) => customerToHtml(customer)).join(`/n`);

entryPoint.innerHTML = allCustomers;