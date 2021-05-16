function compute()
{
	var principal = document.getElementById("principal").value;
	// Validation to ensure value >0 is introduced otherwise clean everything
	if (principal <= 0) { 
		alert("Enter a positive number");
		location.reload();
	}
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	
	var interest = principal * years * rate /100;
	
	var year = new Date().getFullYear()+parseInt(years);
	
	//Assign the vale of interest to the amount
	var amount = interest;
	
	// Display the inputs and the final calculation in the html page within the element with ID result
	document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\</mark\>.\<br\>You will receive an amount of \<mark\>"+amount+"\</mark\>,\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>"
}

function updateRate() 
{
    // Get value from the input with ID rate and assign it to rateval
	var rateval = document.getElementById("rate").value;
	// Display the rateval in the html page within the element with ID rate_val
    document.getElementById("rate_val").innerText=rateval+"%";
}
