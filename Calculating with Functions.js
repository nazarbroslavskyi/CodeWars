function zero(func) {
	let res = func;
	if(arguments.length == 0) {
		return 0;
	} else if(func[0] == "*") {
		return 0 * func[1];
	} else if(func[0] == "-") {
		return 0 - func[1];
	} else if(func[0] == "+") {
		return 0 + func[1];
	} else if(func[0] == "/") {
		return Math.floor(0 / func[1]);
	}
}
function one(func) {
	let res = func;
	if(arguments.length == 0) {
		return 1;
	} else if(func[0] == "*") {
		return 1 * func[1];
	} else if(func[0] == "-") {
		return 1 - func[1];
	} else if(func[0] == "+") {
		return 1 + func[1];
	} else if(func[0] == "/") {
		return Math.floor(1 / func[1]);
	}
}
function two(func) {
	let res = func;
	if(arguments.length == 0) {
		return 2;
	} else if(func[0] == "*") {
		return 2 * func[1];
	} else if(func[0] == "-") {
		return 2 - func[1];
	} else if(func[0] == "+") {
		return 2 + func[1];
	} else if(func[0] == "/") {
		return Math.floor(2 / func[1]);
	}
}
function three(func) {
	let res = func;
	if(arguments.length == 0) {
		return 3;
	} else if(func[0] == "*") {
		return 3 * func[1];
	} else if(func[0] == "-") {
		return 3 - func[1];
	} else if(func[0] == "+") {
		return 3 + func[1];
	} else if(func[0] == "/") {
		return Math.floor(3 / func[1]);
	}
}
function four(func) {
	let res = func;
	if(arguments.length == 0) {
		return 4;
	} else if(func[0] == "*") {
		return 4 * func[1];
	} else if(func[0] == "-") {
		return 4 - func[1];
	} else if(func[0] == "+") {
		return 4 + func[1];
	} else if(func[0] == "/") {
		return Math.floor(4 / func[1]);
	}
}
function five(func) {
	let res = func;
	if(arguments.length == 0) {
		return 5;
	} else if(func[0] == "*") {
		return 5 * func[1];
	} else if(func[0] == "-") {
		return 5 - func[1];
	} else if(func[0] == "+") {
		return 5 + func[1];
	} else if(func[0] == "/") {
		return Math.floor(5 / func[1]);
	}
}
function six(func) {
	let res = func;
	if(arguments.length == 0) {
		return 6;
	} else if(func[0] == "*") {
		return 6 * func[1];
	} else if(func[0] == "-") {
		return 6 - func[1];
	} else if(func[0] == "+") {
		return 6 + func[1];
	} else if(func[0] == "/") {
		return Math.floor(6 / func[1]);
	}
}
function seven(func) {
	if(arguments == 0) {
		return 7;
	} else if(func[0] == "*") {
		return 7 * func[1];
	} else if(func[0] == "-") {
		return 7 - func[1];
	} else if(func[0] == "+") {
		return 7 + func[1];
	} else if(func[0] == "/") {
		return Math.floor(7 / func[1]);
	}
}
function eight(func) {
	let res = func;
	if(arguments.length == 0) {
		return 8;
	} else if(func[0] == "*") {
		return 8 * func[1];
	} else if(func[0] == "-") {
		return 8 - func[1];
	} else if(func[0] == "+") {
		return 8 + func[1];
	} else if(func[0] == "/") {
		return Math.floor(8 / func[1]);
	}
}

function nine(func) {
	let res = func;
	if(arguments.length == 0) {
		return 9;
	} else if(func[0] == "*") {
		return 9 * func[1];
	} else if(func[0] == "-") {
		return 9 - func[1];
	} else if(func[0] == "+") {
		return 9 + func[1];
	} else if(func[0] == "/") {
		return Math.floor(9 / func[1]);
	}
}

function plus(number) {
	return ["+", number];
}
function minus(number) {
	return ["-", number];
}
function times(number) {
	return ["*", number];
}
function dividedBy(number) {
	return["/", number];
}

seven(times(five())); // must return 35