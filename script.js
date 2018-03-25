var flag = 0;
function startMain() {
	var inputText =	document.getElementById('userInput').value;
	var greyBox = document.getElementById('black-box-text');
	greyBox.innerHTML = inputText;
	flag = 1;
}
function modalStart() {
	if(flag === 0) {
		$('#myModal').modal();
	} else {
		$('#errorModal').modal();
	}

}
function clearAll() {
	var blackBox = document.getElementById('black-box-text');
	var greyBox = document.getElementById('grey-box-text');
	blackBox.innerHTML = "";
	greyBox.innerHTML = "";
	flag = 0;
}
function moveRight() {
	var blackBox = document.getElementById('black-box-text');
	var greyBox = document.getElementById('grey-box-text');
	if(greyBox.innerHTML === "") {
		greyBox.innerHTML = blackBox.innerHTML;
		blackBox.innerHTML = "";
	}
}
function moveLeft() {
	var blackBox = document.getElementById('black-box-text');
	var greyBox = document.getElementById('grey-box-text');
	if(blackBox.innerHTML === "") {
		blackBox.innerHTML = greyBox.innerHTML;
		greyBox.innerHTML = "";
	}
}