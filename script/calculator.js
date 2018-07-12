window.onload = function() {

	var buttons = document.getElementById('buttons');
	var clear = document.getElementById('clear');
	var answer = document.getElementById('answer');

	buttons.addEventListener('click', function(e) {

		if (e.target.nodeName === 'LI') {
			
			var v = e.target.innerHTML;

			if (v === '=') {

				try {
					answer.innerHTML = eval(answer.innerHTML); /* Evaluates string expression in answer field*/

				} catch(error) {
					answer.innerHTML = error.message;
				}

			} else {
				answer.innerHTML += v;
			}
		} 

	});

	// Clear answer field
	clear.addEventListener('click', function() {
		answer.innerHTML = ''
	})
};