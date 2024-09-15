// index.ts

// Define la estructura de los datos del índice
export interface Activity {
  title: string;
  description: string;
}

export interface Role {
  role: string;
  description: string;
}

export interface Challenge {
  title: string;
  roles: Role[];
}

export interface Forum {
  description: string;
  incentive: string;
}

export interface InstructionsPhase {
  title: string;
  description: string;
}

export interface Instructions {
  description: string;
  phases?: InstructionsPhase[];
}

export interface Block {
  title: string;
  objective: string;
  activities: Activity[];
  challenge?: Challenge;
  forum?: Forum;
  instructions?: Instructions;
  roles?: Role[];
}

// Datos del índice
const index: Block[] = [
  {
    title: 'Bloque 1 (Meses 1-3): Introducción a las Finanzas Personales',
    objective: 'Familiarizar a los participantes con conceptos clave de finanzas personales y trabajo en equipo.',
    activities: [
      {
        title: 'Crear un presupuesto mensual para una familia ficticia',
        description: 'Todos los miembros del equipo colaboran para identificar ingresos y gastos, establecer objetivos financieros y decidir cómo distribuir los recursos.'
      },
      {
        title: 'Juego de simulación: Manejo de una emergencia financiera',
        description: 'El equipo toma decisiones ante un imprevisto (como una emergencia médica o pérdida de empleo). Todos deben proponer soluciones y justificar su elección para que el grupo decida la mejor opción.'
      },
      {
        title: 'Desarrollar un plan de ahorro de 3 meses',
        description: 'En conjunto, crean un plan que incluya el ahorro necesario para un objetivo a corto plazo. Colaboran en la búsqueda de formas para reducir gastos y aumentar los ahorros.'
      }
    ],
    challenge: {
      title: 'Desafío Final',
      roles: [
        {
          role: 'Líder Estratégico',
          description: 'Define las prioridades y elabora un informe sobre la toma de decisiones y la distribución de los recursos.'
        },
        {
          role: 'Analista Financiero',
          description: 'Realiza el análisis de los datos financieros recopilados durante las actividades y presenta un resumen de las proyecciones.'
        },
        {
          role: 'Ejecutor Creativo',
          description: 'Presenta un plan visual (infografía o presentación) que explique el resultado del plan de ahorro y cómo se pueden alcanzar los objetivos.'
        }
      ]
    },
    forum: {
      description: 'Los equipos suben sus resultados en el foro, incluyendo el presupuesto, el plan de ahorro y el informe del desafío final. Cada equipo debe revisar y comentar al menos dos presentaciones de otros equipos.',
      incentive: 'Reciben puntos adicionales por comentar en el foro y dar retroalimentación constructiva.'
    }
  },
  {
    title: 'Bloque 2 (Meses 4-6): Inversiones y Toma de Riesgos',
    objective: 'Introducir a los adolescentes al concepto de inversión y enseñarles a tomar decisiones considerando el riesgo y la recompensa.',
    activities: [
      {
        title: 'Simulación de inversión con $1,000 ficticios',
        description: 'El equipo decide en qué activos invertir (acciones, bonos, etc.) basándose en el perfil de riesgo que definan.'
      },
      {
        title: 'Evaluar diferentes estrategias de inversión',
        description: 'Los participantes investigan y discuten las ventajas y desventajas de distintas opciones (inversiones conservadoras vs. arriesgadas).'
      },
      {
        title: 'Estudio de caso sobre la gestión de crisis financiera',
        description: 'Analizan un escenario de crisis financiera y colaboran en cómo ajustar sus inversiones para minimizar pérdidas.'
      }
    ],
    challenge: {
      title: 'Desafío Final',
      roles: [
        {
          role: 'Líder Estratégico',
          description: 'Desarrolla una estrategia de inversión a largo plazo basada en la simulación y las discusiones del equipo.'
        },
        {
          role: 'Analista Financiero',
          description: 'Presenta un análisis detallado del riesgo y rendimiento potencial de las inversiones realizadas por el equipo.'
        },
        {
          role: 'Ejecutor Creativo',
          description: 'Diseña una presentación visual que explique las decisiones de inversión y los resultados obtenidos, usando gráficos y tablas.'
        }
      ]
    },
    forum: {
      description: 'Los equipos suben los resultados de sus estrategias de inversión, análisis y presentación del desafío final. Revisan y comentan las estrategias de otros equipos, discutiendo los riesgos y aciertos en las decisiones de inversión.',
      incentive: 'Puntos adicionales por cada revisión realizada a los proyectos de otros equipos.'
    }
  },
  {
    title: 'Bloque 3 (Meses 7-9): Emprendimiento y Manejo de Negocios',
    objective: 'Enseñar a los adolescentes a diseñar y gestionar un pequeño negocio, desde la planificación hasta la ejecución y el análisis de rentabilidad.',
    activities: [
      {
        title: 'Diseño de un plan de negocio básico',
        description: 'El equipo colabora en la creación de un negocio ficticio, definiendo el producto o servicio, estructura de costos, precios y estrategias de marketing.'
      },
      {
        title: 'Proyección de ingresos y gastos',
        description: 'Todos los miembros deben trabajar juntos para proyectar los ingresos y los gastos mensuales del negocio.'
      },
      {
        title: 'Simulación de crecimiento rápido',
        description: 'El equipo debe decidir cómo gestionar un crecimiento inesperado en el negocio, ajustando sus estrategias de costos, personal y expansión.'
      }
    ],
    challenge: {
      title: 'Desafío Final',
      roles: [
        {
          role: 'Líder Estratégico',
          description: 'Elabora el plan de negocio detallado, incluyendo estrategias de crecimiento a largo plazo.'
        },
        {
          role: 'Analista Financiero',
          description: 'Presenta un análisis financiero del negocio, evaluando los costos y el retorno de inversión.'
        },
        {
          role: 'Ejecutor Creativo',
          description: 'Crea un prototipo visual o campaña de marketing para promocionar el producto o servicio del negocio.'
        }
      ]
    },
    forum: {
      description: 'Suben los resultados de su plan de negocio, análisis financiero y campaña de marketing. Comentaron al menos dos planes de negocio de otros equipos, ofreciendo sugerencias para mejorar la proyección y estrategia de crecimiento.',
      incentive: 'Puntos adicionales por la retroalimentación realizada a otros equipos.'
    }
  },
];

export default index;
