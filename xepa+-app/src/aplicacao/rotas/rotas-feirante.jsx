import { Route } from 'react-router-dom';
import HomeFeirante from '@/modulos/feirante/paginas/inicio/Home';
import Financeiro from '@/modulos/feirante/paginas/financeiro/Financeiro';
import AdicionarProduto from '@/modulos/feirante/paginas/adicionar-produto/AddProduto';
import AdicionarFeira from '@/modulos/feirante/paginas/adicionar-feira/AddFeira';

export const rotasFeirante = [
  <Route key="demo-feirante" path="/demo/feirante" element={<HomeFeirante />} />,
  <Route key="inicio-feirante" path="/homeF" element={<HomeFeirante />} />,
  <Route key="financeiro" path="/financeiro" element={<Financeiro />} />,
  <Route key="adicionar-produto" path="/adicionar-produto" element={<AdicionarProduto />} />,
  <Route key="adicionar-feira" path="/adicionar-feira" element={<AdicionarFeira />} />,
];
