function add(a,b){
	var num = a.length + b.length;
	var n = 0
	var arry = [];
	while(n < num){
		arry.push(n);
		n = n + 1;
	}
	return arry
}