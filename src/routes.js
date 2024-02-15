import DefaultPage from "components/DefaultPage";
import Categoria from "pages/Categoria";
import Home from "pages/Home";
import NaoEncontrada from "pages/NaoEncontrada";
import Pesquisa from "pages/Pesquisa";
import ProdutoPage from "pages/ProdutoPage";
import TodosProdutos from "pages/TodosProdutos";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />}/>
          <Route path="produtos/:id" element={<ProdutoPage />}/>
          <Route path="pesquisa/:produtoProcurado" element={<Pesquisa />}/>
          <Route path="categoria/:categoria" element={<Categoria />} />
          <Route path="categoria/:categoria/:mercadoria" element={<Categoria />} />
          <Route path="todosprodutos" element={<TodosProdutos />}/>
          <Route path="todosprodutos/:mercadoria" element={<TodosProdutos />}/>
          <Route path="*" element={<NaoEncontrada />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
