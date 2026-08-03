import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.png";

import project6 from "@/assets/project-6.jpg";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  images: string[];
  year: string;
  role: string;
  client: string;
  summary: string;
  problem: string;
  research: string;
  process: string;
  solution: string;
  impact: string;
}

export const projects: Project[] = [
  {
    id: "finflow",
    title: "Panamano Web Design",
    description: "UX/UI Responsive Web Design para una panadería artesana.",
    tags: ["UX/UI", "Web Design", "App Design"],
    image: project1,
    images: [project1, project1, project1, project1, project1, project1],
    year: "2023",
    role: "Diseñadora Gráfica UX/UI",
    client: "Panamano, panadería",
    summary: "UX/UI Responsive Web Design para una panadería artesana.",
    problem: "Las panaderías artesanales están desapareciendo frente a modelos de producción industrial que priorizan volumen y bajo coste, ya que la competencia masiva dificulta que los pequeños hornos destaquen y comuniquen el valor de su producto. Para sobrevivir, necesitan conectar con consumidores que valoren el producto local y la elaboración tradicional pero muchas carecen de presencia digital y visibilidad para llegar a ese público.",
    research: "Usuarios que valoran el producto local y artesanal, con un perfil digital medio o avanzado y un poder adquisitivo medio-alto.\n¿Qué esperan los usuarios?\nUsuarios:\n• Poder organizar mejor sus compras de pan.\n• Acceder a productos personalizados.\n• Obtener beneficios o recompensas por su fidelidad.\nPanaderos:\n• Gestionar pedidos bajo demanda.\n• Reducir el desperdicio alimentario.\n• Mejorar la relación directa con sus clientes.",
    process: "Se planteó el diseño de una web app responsive, accesible desde cualquier dispositivo, centrada en la proximidad y en la comunicación directa entre panadero y cliente.",
    solution: "Se diseñó PANAMANO, una plataforma digital que permite a las panaderías artesanales ofrecer sus productos online de forma sencilla.\nPrincipales funcionalidades:\n• Catálogo de productos artesanales\n• Pedidos personalizados de pan\n• Compra online optimizada para móvil\n• Sistema de fidelización con acumulación de puntos\n• Descuentos personalizados para clientes recurrentes",
    impact: "La solución permite:\n• Mejorar la visibilidad digital de las panaderías artesanales\n• Facilitar la venta bajo demanda\n• Reducir el desperdicio alimentario\n• Ofrecer una experiencia de compra más cómoda y personalizada para los clientes",
  },
  {
    id: "nova-brand",
    title: "Loyalty Tab para\nDegusta Box",
    description: "UX/UI Responsive Web Design para un programa de fidelización",
    tags: ["UX/UI", "Web Design", "App Design"],
    image: "/lovable-uploads/a6000c46-f75a-4109-bcfb-1a1d1d08db6e.png",
    images: ["/lovable-uploads/a6000c46-f75a-4109-bcfb-1a1d1d08db6e.png", "/lovable-uploads/a6000c46-f75a-4109-bcfb-1a1d1d08db6e.png", "/lovable-uploads/a6000c46-f75a-4109-bcfb-1a1d1d08db6e.png", "/lovable-uploads/a6000c46-f75a-4109-bcfb-1a1d1d08db6e.png", "/lovable-uploads/a6000c46-f75a-4109-bcfb-1a1d1d08db6e.png", "/lovable-uploads/a6000c46-f75a-4109-bcfb-1a1d1d08db6e.png"],
    year: "2024",
    role: "Diseñadora Gráfica UX/UI",
    client: "Degusta Box",
    summary: "UX/UI Responsive Web Design para un programa de fidelización",
    problem: "• Alta rotación de usuarios y baja fidelización.\n• Falta de visibilidad de los beneficios existentes del programa.\n• Necesidad de obtener más información del cliente para mejorar la experiencia.",
    research: "Se realizaron tests de usuario con clientes recurrentes (+5 meses) para entender mejor su comportamiento, motivaciones y expectativas dentro de la plataforma.\n\nInsights clave:\n• Los usuarios no perciben claramente los beneficios del programa de fidelización.\n• Necesitan recompensas visibles, comprensibles y fáciles de alcanzar.\n• Valoran dinámicas de progreso y recompensa que refuercen su permanencia.\n\nNecesidades de los usuarios:\n• Sentirse recompensados por su fidelidad.\n• Entender fácilmente cómo conseguir puntos y beneficios.\n• Tener visibilidad de su progreso dentro del programa.\n\nLa investigación confirmó la oportunidad de diseñar una experiencia más clara, motivadora y orientada a la retención, integrando la fidelización dentro del perfil del usuario como una herramienta activa y visible.",
    process: "El proceso de diseño se centró en crear una experiencia clara, motivadora y fácil de usar dentro del perfil del usuario.\n\nObjetivos de diseño:\n• Hacer visible el programa de fidelización dentro de la cuenta del usuario.\n• Explicar de forma sencilla cómo conseguir puntos y recompensas.\n• Incentivar acciones clave para el negocio a través de hitos y beneficios.\n\nEnfoque:\n• Diseño de un dashboard específico dentro del perfil de usuario.\n• Organización de la información en acciones, progreso y recompensas.\n• Mejora de la jerarquía visual para destacar beneficios y próximas acciones.\n• Contenido claro y directo para facilitar la comprensión del sistema.\n\nLa propuesta se desarrolló con una lógica de seguimiento de hitos, permitiendo al usuario entender su progreso y visualizar de forma inmediata el valor de participar en el programa.",
    solution: "Se diseñó una nueva funcionalidad dentro del perfil de usuario: **Loyalty Tab (My Points)**, un espacio dedicado a la fidelización y seguimiento de recompensas.\n\nFuncionalidades principales:\n• Visualización de puntos acumulados en tiempo real.\n• Listado de acciones (milestones) para conseguir puntos.\n• Sistema de progreso hacia recompensas.\n• Acceso a beneficios como descuentos o cajas gratuitas.\n\nAcciones incentivadas:\n• Completar el perfil de usuario.\n• Suscribirse a la newsletter.\n• Añadir método de pago.\n• Realizar compras.\n• Invitar amigos.\n\nEl diseño se planteó como un **dashboard de fidelización**, donde el usuario puede visualizar fácilmente su progreso, entender qué acciones realizar y percibir de forma clara el valor de participar en el programa.",
    impact: "La implementación del programa de fidelización permitió mejorar la relación con el usuario y optimizar su experiencia dentro de la plataforma.\n\nResultados clave:\n• Mayor visibilidad y comprensión de los beneficios del programa.\n• Incremento del engagement y la interacción del usuario.\n• Mejora en la retención y reducción del churn.\n• Aumento en la recopilación de datos relevantes del usuario.\n\nComo resultado, los usuarios se sienten más motivados a interactuar con la plataforma, generando un mayor valor a largo plazo para el negocio.",
  },
  {
    id: "luxe-commerce",
    title: "Plataforma E-Commerce Luxe",
    description: "Experiencia de compra premium para consumidores de moda",
    tags: ["UX/UI", "Web Design", "E-Commerce"],
    image: project3,
    images: [project3, project3, project3, project3, project3, project3],
    year: "2024",
    role: "Diseñadora UX Senior",
    client: "Luxe Fashion Group",
    summary: "Se diseñó una plataforma e-commerce completa que eleva la experiencia de compra online al nivel de las experiencias de lujo en tienda.",
    problem: "Los consumidores de moda de lujo esperaban una experiencia digital premium. La plataforma existente tenía un 78% de abandono de carrito y pobre conversión móvil.",
    research: "Se observaron compradores personales, analizaron benchmarks de e-commerce de lujo y realizaron estudios diarios con 25 clientes de alto valor.",
    process: "Se mapeó todo el viaje de compra desde el descubrimiento hasta la post-compra. Se enfocó en reducir fricción manteniendo la calidad aspiracional de la marca.",
    solution: "Se diseñaron páginas de producto inmersivas con vistas 360°, checkout de 2 pasos, motor de recomendaciones personalizadas y chat de conserjería VIP.",
    impact: "El abandono de carrito se redujo al 34%. La conversión móvil aumentó un 225%. El valor promedio de pedido creció un 40%.",
  },
  {
    id: "pulse-analytics",
    title: "Up & Down",
    description: "Estrategia de producto e innovación para la recolección de agua pluvial en el hogar",
    tags: ["UX/UI", "Product Design", "Benchmark"],
    image: "/lovable-uploads/b28074d8-699d-4fd1-ab23-85e8034de8ec.png",
    images: [
      "/lovable-uploads/b28074d8-699d-4fd1-ab23-85e8034de8ec.png",
      "/lovable-uploads/b69a590a-45d2-4f6d-863a-ca183344fc25.png",
      "/lovable-uploads/709ee2d7-91d3-460a-a5aa-15da765d0399.png",
      "/lovable-uploads/9da737ff-72e0-427d-aa56-88e6cdc0e6a6.png",
      "/lovable-uploads/c9be0fd3-145d-412b-a58b-520eb07ecc2a.png"
    ],
    year: "2022",
    role: "Diseñadora de Producto",
    client: "Proyecto personal",
    summary: "Estrategia de producto e innovación para la recolección de agua pluvial en el hogar",
    problem: "• Solo el 3% del agua del planeta es dulce y apta para el consumo.\n• El agua de lluvia no se aprovecha a nivel doméstico por barreras económicas y de infraestructura.\n• La inversión inicial dificulta su adopción individual.\n\nEl reto es diseñar una solución accesible y escalable que permita aprovechar el agua de lluvia a nivel doméstico mediante un modelo colectivo.",
    research: "El target son comunidades, edificios y barrios interesados en soluciones sostenibles para recuperar y reutilizar el agua de lluvia, con posibilidad de ampliar el servicio a viviendas unifamiliares.\n\nInsights clave:\n• Existe un interés creciente por soluciones sostenibles aplicadas al hogar.\n• Las barreras económicas y técnicas dificultan la adopción individual.\n• Los modelos compartidos o comunitarios generan mayor viabilidad y aceptación.\n\nNecesidades de los usuarios:\n• Acceder a un sistema de reutilización de agua de forma sencilla.\n• Reducir costes mediante una solución colectiva.\n• Entender claramente los beneficios prácticos y medioambientales del servicio.",
    process: "El proyecto se planteó desde una visión de servicio y producto, transformando un sistema técnico complejo en una solución comprensible, accesible y escalable para el usuario.\n\nObjetivos de diseño:\n• Facilitar la adopción de un sistema de recolección de agua pluvial en entornos residenciales.\n• Reducir la percepción de complejidad técnica mediante una experiencia clara.\n• Potenciar el valor del modelo colectivo como solución sostenible y viable.\n\nEnfoque:\n• Análisis de barreras económicas, técnicas y de adopción.\n• Diseño centrado en las necesidades de comunidades y entornos compartidos.\n• Simplificación de la información para comunicar funcionamiento, beneficios e impacto.\n• Planteamiento de una experiencia escalable a otros contextos residenciales.\n\nEl proceso permitió definir una propuesta que conecta sostenibilidad, viabilidad y uso cotidiano, acercando el ciclo natural del agua a las personas de una forma más directa.",
    solution: "Se diseñó un servicio integral de recolección, filtrado y distribución de agua de lluvia para su uso dentro del hogar, facilitando el acceso a un recurso sostenible de forma directa y colectiva.\n\nCaracterísticas principales:\n• Sistema colectivo de captación de agua pluvial.\n• Proceso de filtrado para su aprovechamiento en el entorno doméstico.\n• Distribución eficiente del agua dentro de comunidades, edificios y barrios.\n• Modelo escalable a otros tipos de vivienda en el futuro.\n\nLa propuesta conecta el ciclo natural del agua con las personas, transformando la lluvia en un recurso accesible, funcional y sostenible para la vida cotidiana.",
    impact: "La propuesta plantea una nueva forma de aprovechar un recurso natural infrautilizado, generando valor tanto para las personas como para el entorno.\n\nResultados esperados:\n• Reducción del consumo de agua potable convencional.\n• Mayor acceso a soluciones sostenibles dentro del hogar.\n• Optimización de costes gracias a un modelo colectivo.\n• Incremento de la conciencia ambiental y del uso responsable del agua.\n\nComo resultado, el proyecto impulsa una solución escalable que acerca la sostenibilidad al día a día y fomenta una relación más directa y consciente con el agua.",
  },
  {
    id: "zen-wellness",
    title: "Freeletics",
    description: "Comunicación de producto para una App para ponerte en forma",
    tags: ["UX/UI", "App Design", "Health Tech"],
    image: "/lovable-uploads/6c904bf1-2735-4829-9ee8-5a9aa768ddd2.png",
    images: ["/lovable-uploads/6c904bf1-2735-4829-9ee8-5a9aa768ddd2.png", "/lovable-uploads/freeletics-cover.gif", "/lovable-uploads/55fa9cff-8d13-42d1-8ed8-d09eb661bebd.png", "/lovable-uploads/81a3c02c-272a-4ddc-a569-ad332b156aa3.png"],
    year: "2023",
    role: "Diseñadora UX/UI",
    client: "Freeletics Co.",
    summary: "Comunicación de producto para una App para ponerte en forma",
    problem: "• Los modelos tradicionales de entrenamiento requieren tiempo, dinero y horarios rígidos.\n• Muchos usuarios no encuentran planes adaptados a sus necesidades, nivel o ritmo de vida.\n• La falta de resultados rápidos, motivación y acompañamiento provoca frustración y abandono.\n• El proceso de ponerse en forma suele vivirse de manera individual y poco conectada.\n\n**Reto:** diseñar una experiencia digital que facilite el compromiso del usuario mediante personalización, flexibilidad y motivación continua.",
    research: "**Target:** personas que quieren ponerse en forma de manera flexible, adaptando el entrenamiento a su estilo de vida sin depender de un gimnasio.\n\nInsights clave:\n• Buscan mejorar su estado físico sin realizar grandes cambios en su rutina diaria.\n• Necesitan planes adaptados a su nivel, tiempo disponible y objetivos.\n• La motivación aumenta cuando existe seguimiento y sensación de progreso.\n• Valoran la conexión con otros usuarios para no sentirse solos en el proceso.\n\nNecesidades de los usuarios:\n• Rutinas personalizadas y accesibles.\n• Flexibilidad para entrenar en cualquier momento y lugar.\n• Acompañamiento durante el proceso.\n• Feedback claro sobre su evolución.",
    process: "Se definió una solución centrada en:\n• Personalización de la experiencia desde el inicio\n• Adaptación al contexto real del usuario (tiempo, espacio, nivel)\n• Refuerzo de la motivación mediante feedback y comunidad\n\nEl diseño se basó en:\n• Simplicidad y accesibilidad\n• Enfoque mobile-first\n• Experiencia progresiva y guiada",
    solution: "Se desarrolló una experiencia digital basada en:\n• Rutinas de entrenamiento personalizadas\n• Planes nutricionales adaptados al usuario\n• Entrenamientos sin necesidad de equipamiento\n• Sistema de seguimiento del progreso\n\nElementos clave:\n• Adaptación a tiempo y espacio del usuario\n• Feedback continuo y objetivos alcanzables\n• Comunidad de usuarios para reforzar motivación",
    impact: "La solución mejora la experiencia del usuario al facilitar un entrenamiento más accesible, personalizado y motivador.\n\nResultados clave:\n• Mayor adherencia a los planes de entrenamiento.\n• Reducción del abandono temprano.\n• Incremento de la motivación y constancia del usuario.\n• Mejora en la percepción de progreso y resultados.\n\nResultado: los usuarios mantienen el compromiso a largo plazo, alcanzando sus objetivos de forma más eficiente y acompañada.",
  },
  {
    id: "arch-studio",
    title: "Sitio Web Arch Studio",
    description: "Portfolio editorial para un estudio de arquitectura",
    tags: ["Web Design", "Branding", "Editorial"],
    image: project6,
    images: [project6, project6, project6, project6, project6, project6],
    year: "2023",
    role: "Directora de Diseño",
    client: "Arch Studio",
    summary: "Se creó un sitio web editorial inmersivo que muestra proyectos arquitectónicos a través de narrativa cinematográfica y diseño espacial.",
    problem: "El trabajo del estudio era visualmente impresionante pero su presencia digital no reflejaba la calidad de sus entornos construidos.",
    research: "Se estudió cómo estudios de arquitectura presentan su trabajo globalmente. Se analizaron patrones de narrativa scroll y experiencias web inmersivas.",
    process: "Se desarrolló un sistema de grilla personalizado inspirado en proporciones arquitectónicas. Se crearon patrones de interacción que replican la experiencia de moverse por espacios físicos.",
    solution: "Se construyó un sitio narrativo scroll-driven con showcases parallax, integración de sonido ambiente y filtrado curado por tipología y materialidad.",
    impact: "El tráfico web aumentó un 300%. Duración promedio de sesión: 4.2 minutos (antes 45 segundos). Nominado a Awwwards Site of the Day.",
  },
];
