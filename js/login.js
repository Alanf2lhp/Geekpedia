window.logar = async function () {
  const apelido = document.getElementById("apelido").value;
  const senha = document.getElementById("senha").value;
  const senhaHash = btoa(senha);

  const { data, error } = await supabase
    .from('usuarios')
    .select("*")
    .eq("apelido", apelido)
    .eq("senha", senhaHash)
    .single();

  if (error || !data) {
    alert("Apelido ou senha incorretos");
  } else {
    alert("Login realizado com sucesso!");

    // Salva o ID e o apelido do usuário no localStorage
    localStorage.setItem("usuario_id", data.id);
    localStorage.setItem("nomeUsuario", data.apelido); // <-- isso permite mostrar no menu

    // Redireciona para o painel
    window.location.href = "painel.html";
  }
};
