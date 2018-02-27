// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

    function accum(input){
    	var str = "";
        for (var i = 0; i < input.length; i++) {
        str = str + input[i].toUpperCase();
        rep = i + 1;
        for (var x = 0; x < rep; x++) {

        	str = str + input[i].toLowerCase();
        	}
        	str = str + "_"
        	
    }
        		return str.slice(0,-1)
    }
	
	