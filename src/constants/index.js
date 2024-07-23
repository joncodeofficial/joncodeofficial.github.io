import {
  sevenSuite,
  norkut,
  nanotecks,
  tudolarVenezuela,
  youtubeClone,
  oldPortfolio,
  holoxr,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Sobre mí',
  },
  {
    id: 'experience',
    title: 'Experiencias',
  },
  {
    id: 'work',
    title: 'Proyectos',
  },
  {
    id: 'contact',
    title: 'Contacto',
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
      'Esta app utiliza React en el frontend y AWS Lambda en el backend. El backend consta de dos funciones Lambda: una realiza web scraping y almacena los datos en una base de datos, mientras que la otra actúa como una API para obtener los precios de la base de datos. Además, se ha programado un cron job para que cada 6 horas automáticamente se actualicen los precios.',
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
    source_uri: '/tudolarvenezuela/',
  },
  {
    name: 'Youtube Clone',
    description:
      'Este un clon de YouTube que utiliza React en el frontend, junto con las bibliotecas de Tailwind y MUI para los estilos y la maquetación. Además, se integra con una API freemium de RapidAPI para obtener videos y datos de YouTube. En resumen, la aplicación es un clon de YouTube desarrollado con React, Tailwind y MUI, que utiliza la API de RapidAPI.',
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
    image: youtubeClone,
    source_uri: '/youtube-clone',
  },
  {
    name: 'Old Portfolio',
    description:
      'Este es mi antiguo portfolio personal desarrollado utilizando únicamente HTML, CSS y JavaScript, usando vite como entorno de desarrollo y teniendo muy en cuenta el SEO. Es un portfolio con numerosas animaciones, capacidad para varios idiomas y también se trata de una Progressive Web App (PWA). En resumen, se trata de un portfolio vanilla.',
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
    source_uri: '/portfolio',
  },
];

export { experiences, projects };
