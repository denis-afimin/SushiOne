document.getElementById('en').onclick = function() {
	document.getElementById('en').classList.add('activ');
	document.getElementById('uk').classList.remove('activ');

	for (let item of document.getElementsByClassName('uk')) {
		item.classList.add('delete');
	}

	for (let item of document.getElementsByClassName('en')) {
		item.classList.remove('delete');
	}
};

document.getElementById('uk').onclick = function() {
	document.getElementById('uk').classList.add('activ');
	document.getElementById('en').classList.remove('activ');

	for (let item of document.getElementsByClassName('en')) {
		item.classList.add('delete');
	}

	for (let item of document.getElementsByClassName('uk')) {
		item.classList.remove('delete');
	}
};