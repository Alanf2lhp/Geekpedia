import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
  'https://odxqvkwxhbfgcmngdhic.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
)

window.verificarForcaSenha = function () {
  const senha = document.getElementById("senha").value
  const barra = document.getElementById("barraSenha")
  let forca = 0
  if (senha.length >= 6) forca++
  if (/[A-Z]/.test(senha)) forca++
  if (/[0-9]/.test(senha)) forca++
  if (/[\W_]/.test(senha)) forca++
  barra.style.cssText =
    forca <= 1 ? "width:33%;background:red" :
    forca <= 3 ? "width:66%;background:orange" :
    "width:100%;background:limegreen"
}

window.cadastrar = async function () {
  const nome = document.getElementById("nome").value
  const data = document.getElementById("data").value
  const apelido = document.getElementById("apelido").value
  const email = document.getElementById("email").value
  const senha = document.getElementById("senha").value

  document.getElementById("apelidoErro").textContent = ""

  if (!/^[A-Za-z]{1,15}$/.test(apelido)) {
    document.getElementById("apelidoErro").textContent = "Apelido só com letras, até 15 caracteres."
    return
  }

  // Criptografa a senha (exemplo simples; o ideal é usar bcrypt no backend)
  const senhaHash = btoa(senha)

  const { data: usuario, error } = await supabase
    .from('usuarios')
    .insert([
      { nome, data_nascimento: data, apelido, email, senha: senhaHash }
    ])

  if (error) {
    alert("Erro ao cadastrar: " + error.message)
  } else {
    alert("Conta criada com sucesso!")
    window.location.href = "index.html"
  }
}
