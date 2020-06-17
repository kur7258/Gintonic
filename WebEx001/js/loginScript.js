id=prompt("id 입력 ");
if(id == 'std01'){
	pw=prompt("password 입력");
	if(pw=='1111'){
		location.href="loginSuccess.html";
	}
	else{
		location.href="loginFail.html";
	}
}
else if(id == 'std02'){
	pw=prompt("password 입력");
	if(pw=='2222'){
		location.href="loginSuccess.html";
	}
	else{
		location.href="loginFail.html";
	}
}
else if(id == 'std03'){
	pw=prompt("password 입력");
	if(pw=='3333'){
		location.href="loginSuccess.html";
	}
	else{
		location.href="loginFail.html";
	}
}
else{
	location.href="loginFail.html";
}