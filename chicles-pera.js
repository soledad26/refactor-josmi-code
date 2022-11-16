function showDeliveryCost(deliveryCost){
	document.getElementById('delivery-cost').innerText = deliveryCost;
}

function showTotal(totalPrice){
	document.getElementById('total-price').innerText = totalPrice;
}

function showBadZipFormat() {
	console.error('El código zip introducido no es válido')
}

window.addEventListener('load', () => {
	const priceWithoutDeliveryCost = 5;
	const calculateDeliveryButton = document.getElementById('calculate-delivery');

	calculateDeliveryButton.addEventListener('click', () => {
		const zipCode = document.getElementById('zip-code').value;
		console.log(zipCode);

		// ADD LOGIC HERE
		
		// 1) calculamos el costo de envío (empieza de 1 a 5 => 2€, de 6 a 8 => 3€, 9 = 5€)

		var primerDigito = zipCode.charAt(0);

		console.log(primerDigito);

		let costoEnvio = 0;
		

		// 1.1) empieza de 1 a 5 => 2€
		if(primerDigito == 1 || primerDigito == 2 || primerDigito == 3 || primerDigito == 4 || primerDigito == 5) {
			costoEnvio = 2;			
		} 	

		// 1.2) de 6 a 8 => 3€
		if(primerDigito == 6 || primerDigito == 7 || primerDigito == 8 ) {
			costoEnvio = 3;			
		} 	
		
		// 1.3) 9 = 5€
		if(primerDigito == 9) {
			costoEnvio = 5;			
		} 
		
		// 2) calcular el total
		 const costoTotal = priceWithoutDeliveryCost + costoEnvio;

		console.log(costoEnvio);
		console.log(costoTotal);

		// 3) actualizar valor del envío (id=delivery-cost)
		showDeliveryCost
		var textoValorEnvio = document.getElementById('delivery-cost');
		textoValorEnvio.innerHTML = costoEnvio + "€";

		// 4) actualizar valor total (id=total-price)
		var textoValorTotal = document.getElementById('total-price');
		textoValorTotal.innerHTML = costoTotal + "€";




	})
});