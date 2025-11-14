export async function GET() {
  const frases = {
    fofas: [
      "Você é meu lugar favorito no mundo 💖",
      "Cada dia com você fica mais especial ✨",
      "Você me acalma só de existir ❤️‍🩹",
    ],
    cantadas: [
      "Amor, você não é Wi-Fi, mas caramba… como conecta comigo ❤️",
      "Seu nome é Google? Porque você tem tudo que eu procuro 💕 ",
      
    ],
    motivacionais: [
      "Confia,minha linda, você é mais forte do que pensa 🌟",
      "Relaxa, respira… você tá indo bem demais 💗",
      "Eu acredito tanto em você que chega dá orgulho 🤍",
    ],
  };

 const tipo = ["fofas", "cantadas", "motivacionais"] as const;

 const categoriaAleatoria =
  tipo[Math.floor(Math.random() * tipo.length)];

const fraseAleatoria =
  frases[categoriaAleatoria][
    Math.floor(Math.random() * frases[categoriaAleatoria].length)
  ];


  return Response.json({
    frase: fraseAleatoria,
    categoria: categoriaAleatoria,
  });
}
