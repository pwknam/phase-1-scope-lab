var customerName = "bob"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = "not bob"
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "Kyushik"
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Joshua"
    return leastFavoriteCustomer
}