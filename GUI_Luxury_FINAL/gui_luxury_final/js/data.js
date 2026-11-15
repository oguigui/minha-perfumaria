// Catálogo demonstrativo da GUI Luxury.
// Os valores são ilustrativos e servem para as atividades do projeto.
const perfumes = [
  { nome: "Âmbar Royale", categoria: "unissex", familia: "Amadeirado", preco: 289.90, imagem: "assets/images/perfume-ambre.svg", descricao: "Notas quentes, sofisticadas e envolventes." },
  { nome: "Rose Élégance", categoria: "feminino", familia: "Floral", preco: 319.90, imagem: "assets/images/perfume-rose.svg", descricao: "Delicadeza floral com personalidade." },
  { nome: "Noir Intense", categoria: "masculino", familia: "Oriental", preco: 349.90, imagem: "assets/images/perfume-noir.svg", descricao: "Presença marcante para noites especiais." },
  { nome: "Jardin Doré", categoria: "feminino", familia: "Cítrico", preco: 279.90, imagem: "assets/images/perfume-rose.svg", descricao: "Um frescor luminoso com toque de flores brancas." },
  { nome: "Bois Mystique", categoria: "unissex", familia: "Amadeirado", preco: 389.90, imagem: "assets/images/perfume-ambre.svg", descricao: "Madeiras elegantes e um fundo levemente especiado." }
];

const formatarMoeda = (valor) => valor.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});
