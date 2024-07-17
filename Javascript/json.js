const product = {
	name: "t-shirt",
	price: 500,
	size: "M",
};

localStorage.setItem("prod", JSON.stringify(product));
const fromLocalStorage = JSON.parse(localStorage.getItem("prod"));
console.log("fromLocalStorage", fromLocalStorage.name);
