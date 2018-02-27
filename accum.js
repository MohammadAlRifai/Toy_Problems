// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

    function accum(input){
    	var str = "";
    	var input = input;
        var aa ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var a ="abcdefghijklmnopqrstuvwxyz";
        for (var j = 0; j < j.length; j++) {
        for (var x = 0; x < aa.length; x++) {
        for (var i = 0; i < a.length; i++) {
        	if(input[j] === a[i]){
        		return str + aa[x]; 
        	}
        	if (input[j] === aa[x]){
        		return str + a[i];
        	}
    }
	}
	}
	}