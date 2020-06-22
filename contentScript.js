const scriptTag = document.createElement('script');
const scriptBody = document.createTextNode(`let rawprice = ShopifyAnalytics.meta.product.variants[0].price
let price = rawprice / 100
let message = "$" + price.toFixed(2) // " / item or kg"
if (document.getElementsByClassName('special-price').length > 0) {
	box[0].innerHTML = message
} else {
	let picture = document.getElementById('product-photo-container')
	let pricebox = document.createElement("div")
	pricebox.classList.add("special-price")
	pricebox.classList.add("special-price-default")
	pricebox.innerHTML = message
	pricebox.style.backgroundColor = "#4bea4b"
	picture.appendChild(pricebox)
}`);

scriptTag.id = 'chromeExtensionPrices';
scriptTag.appendChild(scriptBody);
document.body.append(scriptTag);