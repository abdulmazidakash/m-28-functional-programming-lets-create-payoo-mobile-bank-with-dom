// console.log('file add ');
document.getElementById("btn-add").addEventListener('click', function(event){
	event.preventDefault();

	const addMoney = document.getElementById('btn-add-money').value ;
	const pinNumber = document.getElementById('btn-pin-number').value;

	console.log(addMoney, pinNumber);
})