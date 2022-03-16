interface Categoria {
  uuid: string;
  nome: string;
  descricao: string;
}

interface Usuario {
  uuid: string;
  nome: string;
  email: string;
  senha: string;
}

interface Produto {
  uuid: string;
  nome: string;
  descricao: string;
  preco: number;
  estoque: number;
  categoria: string;
  marca: string;
}

interface Marca {
  uuid: string;
  nome: string;
}

interface CategoriaTypes {
  nome: string;
  descricao: string;
}

interface UsuarioTypes {
  nome: string;
  email: string;
  senha: string;
}

interface ProdutoTypes {
  nome: string;
  descricao: string;
  preco: number;
  estoque: number;
  categoria: string;
  marca: string;
}

interface MarcaTypes {
  nome: string;
}

interface LoginTypes {
  email: string;
  senha: string;
}

