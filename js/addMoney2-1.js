document.getElementById('btn-add-money')
.addEventListener('click', function(event){
	event.preventDefault();

	const addMoney = getInputFieldValueById('input-add-money');
	const pinNumber = getInputFieldValueById('input-pin-number')


	// console.log('add money inside addMoney2.js', addMoney, pinNumber);
	//
	//wrong way to verify . do not try it at your serious website

	if(pinNumber === 1234){
		
	}else{
		alert('failed add the money.')
	}
})