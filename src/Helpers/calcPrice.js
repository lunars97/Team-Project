export function calcsubPrice(car) {
    return car.count * car.item.price;
}

export function calcTotalPrice(cars) {
    let totalPrice = 0;
    cars.forEach((item) => {
        totalPrice += item.subPrice;
    });
    return totalPrice;
}
export function getCountProductsCart() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    return basket ? basket.cars.length : 0;
}
