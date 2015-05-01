function n(num){
	if(num < 0){
		return null;
	}
	else{
		var count = 0;
		var arry = [];
		while(count < num){
			arry.push(count);
			count = count + 1;
		}
		return arry;
	}
}