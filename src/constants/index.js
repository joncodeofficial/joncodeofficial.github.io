import {
  sevenSuite,
  norkut,
  nanotecks,
  tudolarVenezuela,
  taskmotion,
  oldPortfolio,
  holoxr,
} from '../assets';
import { DOMAIN_URI } from '../config';

export const navLinks = [
  {
    id: 'experience',
    title: 'Experiencias',
  },
  {
    id: 'work',
    title: 'Proyectos',
  },
];

//
const experiences = [
  {
    title: 'Frontend | React Developer',
    company_name: 'HOLO XR',
    icon: holoxr,
    iconBg: '#880811',
    date: 'Junio 2023 - Presente',
    points: [
      'Desarrollo y Reconstrucción de una grafica Gantt usando React para llevar un control de los diferentes proyectos realizados.',
      'Desarrollo de un visualizador de Modelos BIM de estructuras y edificios.',
      'Desarrollo de un modulo interactico para llevar la toma de avances de una infraestructura.',
    ],
  },
  {
    title: 'Frontend | React Developer',
    company_name: 'Seven Suite',
    icon: sevenSuite,
    iconBg: '#880811',
    date: 'Enero 2023 - Mayo 2023',
    points: [
      'Desarrollo y Reconstrucción de aplicaciones web usando Next.js y otras tecnologías relacionadas.',
      'Colaborar con equipos multifuncionales que incluyen diseñadores,  desarrolladores para crear productos de alta calidad.',
      'Implementar un diseño responsivo y garantizar la compatibilidad entre navegadores.',
      'Participar en revisiones de código y proporcionar un Feedback constructivo a otros desarrolladores.',
    ],
  },
  {
    title: 'FullStack | .NET Developer',
    company_name: 'Norkut',
    icon: norkut,
    iconBg: '#1D1836',
    date: 'Julio 2022 - Enero 2023',
    points: [
      'Trabaje con angular.js y tecnología .NET para crear y mantener aplicaciones y también hacerlas eficientes y escalables.',
      'Colaborar y comunicar con los diferentes grupos de desarrolladores para terminar las tareas en el tiempo indicado por los project managers.',
      'Agregue Funcionalidades a un CRM existente dentro de un software de gestión de supermercados.',
      'Personalice y optimicé el CMS nopCommerce utilizado para crear el E-commerce de la empresa.',
    ],
  },
  {
    title: 'Frontend | React Developer',
    company_name: 'Nanotekcs',
    icon: nanotecks,
    iconBg: '#1D1836',
    date: 'Junio 2021 - Junio 2022',
    points: [
      'Desarrollar Landing pages de ventas para aumentar un embudo de ventas.',
      'Maquetar las pages con el objetivo de captar la atención y el interés de potenciales compradores.',
      'Tener muy en cuenta el SEO onpage y offpage para el buen posicionamiento de las páginas.',
      'Implementar un Diseño Responsive y Fluid Design.',
    ],
  },
];

const projects = [
  {
    name: 'TudolarVenezuela',
    description:
      'Este clon de YouTube utiliza React, Tailwind y MUI en el frontend. Se integra con una API de RapidAPI para obtener videos y datos, replicando la experiencia de YouTube.',
    tags: [
      {
        name: 'React',
        color: 'text-blue-500',
      },
      {
        name: 'Nodejs',
        color: 'text-yellow-500',
      },
      {
        name: 'Mongodb',
        color: 'text-green-500',
      },
      {
        name: 'AWS',
        color: 'text-orange-500',
      },
      {
        name: 'Web scraping',
        color: 'text-red-500',
      },
    ],
    image: tudolarVenezuela,
    domain: DOMAIN_URI + '/tudolarvenezuela/',
    source_uri: '/tudolarvenezuela/',
  },
  {
    name: 'Taskmotion',
    description:
      'Este gestor de tareas usa React en el frontend y Node.js con Honojs en el backend. Supabase maneja la base de datos, y Tailwind, Zustand y Chadcn/ui mejoran la UI.',
    tags: [
      {
        name: 'React',
        color: 'text-blue-500',
      },
      {
        name: 'Tailwind',
        color: 'text-yellow-500',
      },
      {
        name: 'MUI',
        color: 'text-green-500',
      },
      {
        name: 'React Router',
        color: 'text-green-500',
      },
      {
        name: 'RapidAPI',
        color: 'text-orange-500',
      },
    ],
    image: taskmotion,
    domain: 'https://taskmotion.pages.dev',
    source_uri: '/taskmotion',
  },
  {
    name: 'Old Portfolio',
    description:
      'Este es mi antiguo portfolio, desarrollado con HTML, CSS y JavaScript. Usa Vite, es una PWA, admite varios idiomas y está optimizado para SEO.',
    tags: [
      {
        name: 'html',
        color: 'text-orange-400',
      },
      {
        name: 'css',
        color: 'text-blue-500',
      },
      {
        name: 'Javascript',
        color: 'text-yellow-500',
      },
      {
        name: 'SASS',
        color: 'text-pink-500',
      },
      {
        name: 'PWA',
        color: 'text-green-500',
      },
      ,
      {
        name: 'SEO',
        color: 'text-blue-600',
      },
    ],
    image: oldPortfolio,
    domain: DOMAIN_URI + '/portfolio',
    source_uri: '/portfolio',
  },
];

export { experiences, projects };
