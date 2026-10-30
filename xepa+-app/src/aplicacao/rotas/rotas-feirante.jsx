
import { Route } from 'react-router-dom';

import HomeFeirante from '@/modulos/feirante/paginas/inicio/Home';
import Financeiro from '@/modulos/feirante/paginas/financeiro/Financeiro';
import AddGasto from '@/modulos/feirante/paginas/adicionar-gasto/AddGasto';
import AdicionarProduto from '@/modulos/feirante/paginas/adicionar-produto/AddProduto';
import AdicionarFeira from '@/modulos/feirante/paginas/adicionar-feira/AddFeira';
import HistoricoChat from '@/modulos/feirante/paginas/historico-chat/HistoricoChat';
import ChatIA from '@/modulos/feirante/paginas/chat-ia/ChatIA';

export const rotasFeirante = [
  <Route key="demo-feirante" path="/demo/feirante" element={<HomeFeirante />} />,
  <Route key="inicio-feirante" path="/homeF" element={<HomeFeirante />} />,
  <Route key="financeiro" path="/financeiro" element={<Financeiro />} />,
  <Route key="gastos" path="/adicionar-gasto" element={<AddGasto />} />,
  <Route key="adicionar-produto" path="/adicionar-produto" element={<AdicionarProduto />} />,
  <Route key="adicionar-feira" path="/adicionar-feira" element={<AdicionarFeira />} />,
  <Route key="chat-ia" path="/chat-ia" element={<ChatIA />} />,
  
  <Route key="historico-chat" path="/HistoricoChat" element={<HistoricoChat />} />,
  <Route key="historico-chat-usuario" path="/HistoricoChatUsuario" element={<HistoricoChat />} />,
];
