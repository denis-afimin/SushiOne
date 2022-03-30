document.getElementById('en').onclick = function() {
	document.getElementById('en').classList.add('activ');
	document.getElementById('ru').classList.remove('activ');

	for (let item of document.getElementsByClassName('ru')) {
		item.classList.add('delete');
	}

	for (let item of document.getElementsByClassName('en')) {
		item.classList.remove('delete');
	}
};

document.getElementById('ru').onclick = function() {
	document.getElementById('ru').classList.add('activ');
	document.getElementById('en').classList.remove('activ');

	for (let item of document.getElementsByClassName('en')) {
		item.classList.add('delete');
	}

	for (let item of document.getElementsByClassName('ru')) {
		item.classList.remove('delete');
	}
};