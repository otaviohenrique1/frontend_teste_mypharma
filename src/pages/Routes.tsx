import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CadastroCategoria } from "./Categoria/Cadastro";
import { ListaCategorias } from "./Categoria/Lista";
import { HomePage } from "./HomePage";
import { Login } from "./Login";
import { CadastroMarca } from "./Marca/Cadastro";
import { ListaMarcas } from "./Marca/Lista";
import { Pagina404 } from "./Pagina404";
import { CadastroProduto } from "./Produto/Cadastro";
import { EdicaoProduto } from "./Produto/Edicao";
import { ListaProduto } from "./Produto/Lista";
import { CadastroUsuario } from "./Usuario/Cadastro";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/produtos" element={<ListaProduto />} />
        <Route path="/produtos/cadastro" element={<CadastroProduto />} />
        <Route path="/produtos/:id/edicao" element={<EdicaoProduto />} />

        <Route path="/marcas" element={<ListaMarcas />} />
        <Route path="/marcas/cadastro" element={<CadastroMarca />} />
        <Route path="/marcas/:id/edicao" element={<EdicaoProduto />} />

        <Route path="/categorias" element={<ListaCategorias />} />
        <Route path="/categorias/cadastro" element={<CadastroCategoria />} />
        <Route path="/categorias/:id/edicao" element={<EdicaoProduto />} />

        <Route path="/usuarios" element={<ListaProduto />} />
        <Route path="/usuarios/cadastro" element={<CadastroUsuario />} />
        <Route element={<Pagina404 />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}