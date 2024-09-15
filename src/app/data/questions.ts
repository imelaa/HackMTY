export interface Option {
  value: string;
  text: string;
}

export interface Question {
  question: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    question: "¿Cómo prefieres manejar tu dinero?",
    options: [
      { value: "A", text: "Me gusta organizarlo en un plan concreto y seguirlo paso a paso." },
      { value: "B", text: "Me gusta hablar con otros y explorar diferentes opciones antes de tomar una decisión." },
      { value: "C", text: "Me gusta analizar todas las variables y desarrollar una estrategia basada en datos." }
    ]
  },
  {
    question: "¿Cómo reaccionas cuando tienes que tomar una decisión financiera rápida?",
    options: [
      { value: "A", text: "Prefiero seguir un proceso planificado que ya tengo preparado." },
      { value: "B", text: "Me gusta consultar con otras personas antes de decidir." },
      { value: "C", text: "Evalúo todas las opciones de manera analítica antes de tomar una decisión." }
    ]
  },
  {
    question: "Si tuvieras que invertir tu dinero, ¿qué estrategia usarías?",
    options: [
      { value: "A", text: "Invertiría de manera segura, prefiriendo algo predecible y de bajo riesgo." },
      { value: "B", text: "Buscaría recomendaciones de otras personas para encontrar la mejor oportunidad." },
      { value: "C", text: "Haría una investigación exhaustiva y analizaría los posibles riesgos y retornos." }
    ]
  },
  {
    question: "¿Cómo te describirías al trabajar en un equipo?",
    options: [
      { value: "A", text: "Soy muy organizado y siempre me aseguro de que las cosas se hagan." },
      { value: "B", text: "Me encanta colaborar con otros y conectar a las personas adecuadas." },
      { value: "C", text: "Me gusta desarrollar soluciones y aportar ideas innovadoras." }
    ]
  },
  {
    question: "¿Qué harías si tienes un dinero extra que no necesitas usar de inmediato?",
    options: [
      { value: "A", text: "Lo ahorraría en una cuenta segura o lo invertiría en algo que ya tengo planificado." },
      { value: "B", text: "Buscaría oportunidades nuevas a través de amigos o conocidos para invertirlo." },
      { value: "C", text: "Investigaré las mejores formas de invertirlo de manera estratégica y con más retorno." }
    ]
  },
  {
    question: "¿Cómo prefieres aprender sobre finanzas personales?",
    options: [
      { value: "A", text: "Con un plan estructurado que me permita poner en práctica lo que aprendo." },
      { value: "B", text: "A través de la colaboración, conversaciones y consejos de otras personas." },
      { value: "C", text: "Mediante la investigación y el análisis profundo de los conceptos financieros." }
    ]
  },
  {
    question: "¿Qué prefieres hacer cuando te enfrentas a un desafío financiero?",
    options: [
      { value: "A", text: "Crear un plan concreto y práctico para superarlo." },
      { value: "B", text: "Consultar a otros para obtener diferentes puntos de vista y soluciones." },
      { value: "C", text: "Analizar la situación desde todos los ángulos y encontrar la mejor solución posible." }
    ]
  },
  {
    question: "¿Cómo prefieres manejar tus metas financieras a largo plazo?",
    options: [
      { value: "A", text: "Prefiero establecer metas claras con un plan de acción detallado para alcanzarlas." },
      { value: "B", text: "Me gusta hablar sobre mis metas con otras personas y recibir recomendaciones." },
      { value: "C", text: "Prefiero ajustar mis metas y estrategias en función de la información que voy recopilando." }
    ]
  },
  {
    question: "¿Cómo prefieres establecer metas financieras?",
    options: [
      { value: "A", text: "Definir un plan específico con pasos claros y seguirlo rigurosamente." },
      { value: "B", text: "Consultar con otras personas y ajustar tus metas según sus consejos y experiencias." },
      { value: "C", text: "Investigar diferentes estrategias y opciones para diseñar una meta financiera bien fundamentada." }
    ]
  },
  {
    question: "Cuando enfrentas un nuevo proyecto financiero, ¿cómo te aproximas a él?",
    options: [
      { value: "A", text: "Creas un plan detallado y comienzas a ejecutarlo paso a paso." },
      { value: "B", text: "Buscas la opinión de amigos, familiares o expertos para obtener diferentes perspectivas." },
      { value: "C", text: "Analizas el proyecto desde múltiples ángulos y consideras todas las variables posibles antes de actuar." }
    ]
  },
  {
    question: "¿Cómo te enfrentas a una oportunidad de inversión?",
    options: [
      { value: "A", text: "Sigues un procedimiento probado y seguro que ya has establecido." },
      { value: "B", text: "Preguntas a tu red de contactos y analizas las recomendaciones de otros." },
      { value: "C", text: "Realizas una investigación exhaustiva y evalúas los datos antes de tomar una decisión." }
    ]
  },
  {
    question: "¿Cuál es tu enfoque para resolver un problema financiero inesperado?",
    options: [
      { value: "A", text: "Actúas rápidamente siguiendo un plan de contingencia que hayas preparado previamente." },
      { value: "B", text: "Discutes el problema con otras personas para encontrar una solución colaborativa." },
      { value: "C", text: "Evaluas el problema en detalle, considerando diferentes soluciones y sus posibles consecuencias." }
    ]
  },
  {
    question: "En la gestión de tu presupuesto, ¿qué es lo más importante para ti?",
    options: [
      { value: "A", text: "Tener un esquema claro y seguirlo con disciplina para asegurar el control del dinero." },
      { value: "B", text: "Ajustar tu presupuesto en función de recomendaciones y sugerencias de tu círculo cercano." },
      { value: "C", text: "Crear un modelo detallado que considere todas tus necesidades y opciones a largo plazo." }
    ]
  },
  {
    question: "¿Cómo prefieres aprender sobre nuevas herramientas financieras?",
    options: [
      { value: "A", text: "A través de guías y tutoriales paso a paso que te ayuden a aplicarlas de inmediato." },
      { value: "B", text: "Participando en discusiones y talleres donde puedas compartir ideas y aprender de otros." },
      { value: "C", text: "Investigando por tu cuenta, analizando las herramientas y sus aplicaciones para entenderlas en profundidad." }
    ]
  },
  {
    question: "Cuando trabajas en equipo para un proyecto financiero, ¿cuál es tu rol preferido?",
    options: [
      { value: "A", text: "Organizar y estructurar el trabajo, asegurándome de que todos sigan el plan." },
      { value: "B", text: "Facilitar la comunicación y coordinar con otros miembros del equipo para lograr un objetivo común." },
      { value: "C", text: "Desarrollar y presentar estrategias innovadoras y analizar cómo estas afectan el proyecto." }
    ]
  },
  {
    question: "¿Qué tipo de planificación te resulta más natural?",
    options: [
      { value: "A", text: "Planificación detallada y organizada, con metas y pasos claros." },
      { value: "B", text: "Planificación flexible que se adapta a las ideas y aportaciones de los demás." },
      { value: "C", text: "Planificación estratégica basada en análisis y evaluación de diferentes escenarios." }
    ]
  },
  {
    question: "¿Cuál es tu enfoque para tomar decisiones financieras importantes?",
    options: [
      { value: "A", text: "Crear un plan detallado y seguirlo meticulosamente." },
      { value: "B", text: "Consultar con otras personas y considerar sus opiniones antes de decidir." },
      { value: "C", text: "Analizar toda la información disponible para desarrollar una estrategia bien fundamentada." }
    ]
  },
  {
    question: "¿Cómo prefieres gestionar tu dinero en el día a día?",
    options: [
      { value: "A", text: "Seguir un presupuesto riguroso y ajustar mis gastos según un plan fijo." },
      { value: "B", text: "Adaptar mis gastos en función de las recomendaciones y experiencias de los demás." },
      { value: "C", text: "Realizar análisis periódicos para ajustar mi presupuesto en base a nuevos datos y tendencias." }
    ]
  },
  {
    question: "Cuando surge un problema financiero, ¿cómo sueles abordarlo?",
    options: [
      { value: "A", text: "Implementar inmediatamente una solución concreta que ya tengo planificada." },
      { value: "B", text: "Hablar con amigos, familiares o expertos para encontrar una solución adecuada." },
      { value: "C", text: "Examinar el problema desde diferentes perspectivas y considerar varias soluciones antes de decidir." }
    ]
  },
  {
    question: "¿Cómo te gusta aprender sobre nuevas oportunidades financieras?",
    options: [
      { value: "A", text: "A través de cursos estructurados y recursos que te guíen paso a paso." },
      { value: "B", text: "Participando en discusiones y grupos donde puedas aprender de las experiencias de otros." },
      { value: "C", text: "Investigando a fondo y analizando todas las opciones para tomar decisiones informadas." }
    ]
  }
]