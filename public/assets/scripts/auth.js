if (!localStorage.getItem('auth')) {
  localStorage.setItem('auth', 'false');
}

if(localStorage.getItem("auth") == "false"){
    window.location.href = "auth.html";
}