// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
	function characPosit(character){
		var alphabet = "abcdefghijklmnopqrstuvwxyz"
			for(i=0; i<alphabet.length;i++){
		if (character === alphabet[i]){
		var a=i+1
			return "Position of Alphabet "+a
		}
	}
}

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		var str= ""
		while (s>0){
        str = str + n
        s=s-1
    }

		return str
	}

	 
