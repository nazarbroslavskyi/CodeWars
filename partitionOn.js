function partitionOn(pred, items) {
	let newArr = [];
  let flag = true;
  let index;
  let arr = [];
	items.map(function(elem, i) {
		if(pred(elem)) {
			newArr.push(elem);
		} else {
			arr.push(elem);
			// console.log(arr);
		}
	} )
items = arr.concat(newArr);
// console.log(items);

for(let i = 0; i < items.length; i++) {
	if(pred(items[i]) == true) {
		index = i;
		break;
	}
}

  return index;
}

var items = [1, 2, 3, 4, 5, 6];
function isEven(n) {return n % 2 == 0}
var i = partitionOn(isEven, items);

console.log(i);

