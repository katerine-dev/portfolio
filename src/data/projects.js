import microcardapio from '../assets/microcardapio.png'
import todolist from '../assets/todolist.png'
import pacman from '../assets/pacman.png'
import queridoDiario from '../assets/queridodiario.png'

const projects = [
  {
    id: 1,
    title: 'MicroCardápio',
    subtitle: 'Book / Micro-frontend',
    description: 'Projeto de Micro Frontends: Container + Micro Cardápio + Micro Pedido. Integração via events e shared React.',
    tech: ['React', 'Module Federation', 'Vite/webpack'],
    repo: 'https://github.com/katerine-dev/MicroCardapio',
    img: microcardapio
  },
  {
    id: 2,
    title: 'TodoListRecoil',
    subtitle: 'Productivity / To-do app',
    description: 'To-do app com estado global via Recoil, filtros e persistência local (LocalStorage).',
    tech: ['React', 'Recoil', 'LocalStorage'],
    repo: 'https://github.com/katerine-dev/TodoListRecoil',
    img: todolist
  },
  {
    id: 3,
    title: 'PacMan',
    subtitle: 'Game / Canvas demo',
    description: 'Versão em JS do clássico — exercício de lógica, animação e uso de canvas.',
    tech: ['JavaScript', 'Canvas', 'CSS'],
    repo: 'https://github.com/katerine-dev/PacMan',
    img: pacman
  },
  {
    id: 4,
    title: 'Querido Diário',
    subtitle: 'Web App / Diário',
    description: 'App para registro diário com upload de imagens, tags e persistência local.',
    tech: ['React', 'Vite', 'LocalStorage'],
    repo: 'https://github.com/katerine-dev/querido-diario',
    img: queridoDiario
  }
]

export default projects
