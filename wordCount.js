function countWords(str) {
	let counter = 0;
	for(let i = 0; i < str.length; i++) {
		if(str[i] !== " " || str[i] !== "﻿﻿﻿﻿﻿﻿") {
			counter++;
			while(str[i] !== " " && i !== str.length || str[i] !== "") {
				i++;
			}
		}
	}

	return counter;
}
console.log(countWords("Dear   Victoria, I love  to press   space button."))