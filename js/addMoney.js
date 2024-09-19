// console.log('file add ');
document.getElementById("btn-add").addEventListener('click', function(event){
	event.preventDefault();

	const addMoney = document.getElementById('input-add-money').value ;
	const pinNumber = document.getElementById('input-pin-number').value;

	// console.log(addMoney, pinNumber);

	if (pinNumber === '1234'){

		const balance = document.getElementById('account-balance').innerText;
		const balanceNumber = parseFloat(balance);
		const addMoneyNumber = parseFloat(addMoney);

		const newBalance = balanceNumber + addMoneyNumber;

		document.getElementById('account-balance').innerText = newBalance;
	}else{
		alert('failed password , please try again later');
	}
})