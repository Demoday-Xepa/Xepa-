import { Route } from 'react-router-dom';
import HomeUsuario from '@/modulos/usuario/paginas/inicio/Home';
import Mapa from '@/modulos/usuario/paginas/mapa/componentes/MapaMain';
import DetalheProduto from '@/modulos/usuario/paginas/detalhe-produto/DetalheProduto';
import ChatIA from '@/modulos/usuario/paginas/chat-ia/ChatIA';
import { Impacto } from '@/modulos/usuario/paginas/impacto/ImpactoU';
import Cozinha from '@/modulos/usuario/paginas/cozinha/componentes/Cozy';
import ChatFeirante from '@/modulos/usuario/paginas/chat-feirante/ChatFeirante';

export const rotasUsuario = [
  <Route key="demo-usuario" path="/demo/consumidor" element={<HomeUsuario />} />,
  <Route key="inicio-usuario" path="/homeU" element={<HomeUsuario />} />,
  <Route key="mapa" path="/mapa" element={<Mapa />} />,
  <Route key="detalhe-produto" path="/Verduras" element={<DetalheProduto />} />,
  <Route key="chat-ia" path="/chat-ia" element={<ChatIA />} />,
  <Route key="chat-feirante" path="/chat-feirante" element={<ChatFeirante />} />,
  <Route key="impacto" path="/impacto" element={<Impacto />} />,
  <Route key="cozinha" path="/cozinha" element={<Cozinha />} />,
];
