var i, j;

var num = parseInt(prompt("Enter number to find it's prime number"));

var count;

for(i = 1;i <= num;i++){

	count = 0;

	for(j = 1;j <= i;j++){

		if(i % j == 0){

			count = count + 1;

        	}

    	}

	if(count == 2){

		document.write(i + " is a prime number<br>");

    }

}