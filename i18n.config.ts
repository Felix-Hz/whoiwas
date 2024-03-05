export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      welcome: "Welcome",

      /* Gallery */
      title_1: "The Gallery",
      subtitle_gallery:
        "I've been diligently working on some pet projects that you can explore right here.",
      whoami_desc:
        "My personal portfolio that has been crafted with a lot of love for you to have an interactive and animated experience.",
      authapi_desc:
        "The backend for a social media app that includes database modelling, authentication and user functionality.",
      greensquares_desc:
        "This project features a daily cron job that retrieves a random fact and documents it down in markdown.",
      morecomingsoon_desc:
        "I'm working on fixing the hosting for a few projects, stay tuned!",

      /* Toolkit */
      title_3: "The Toolkit",
      subtitle_toolkit:
        "These are some technologies that I've employed recently for both professional projects, and personal endeavors.",

      /* Contact */
      title_2: "Let's Chat",
      form_email: "Your email",
      form_subject: "Subject",
      form_msg: "Your message",
      form_submit: "Start the conversation",
      contact_subtitle:
        "Whether you have me in mind for a job opportunity, have stumbled upon a bug or want to leave some feedback, I'm all ears.",
      form_placeholder_subject: "What's all of this about?",
      form_placeholder_msg:
        "I'd love to know more about it. Keystroke, keystroke, keystroke...",
      /* Footer */
      footer: "© 2024 - Made with ☕️ by Felix Hernandez Vieyra",
    },
    es: {
      welcome: "Bienvenido",

      /* Gallery */
      title_1: "La Galería",
      subtitle_gallery:
        "Estuve trabajando diligentemente en algunos proyectos que podés explorar acá.",
      whoami_desc:
        "Mi portfolio personal que fue hecho con mucho amor para que tengas una experiencia interactiva y animada.",
      authapi_desc:
        "El backend de una app de redes sociales que incluye modelado de base de datos, autenticación y funcionalidad de usuario.",
      greensquares_desc:
        "Este proyecto tiene un trabajo cron diario que busca un dato al azar y lo documenta en markdown.",
      morecomingsoon_desc:
        "Estoy trabajando para arreglar el hosting de algunos proyectos, ¡paciencia!",

      /* Toolkit */
      title_3: "El Toolkit",
      subtitle_toolkit:
        "Estas son algunas de las tecnologías que usé recientemente en proyectos tanto profesionales como personales.",

      /* Contact */
      title_2: "Charlemos",
      form_email: "Email",
      form_subject: "Asunto",
      form_placeholder_subject: "¿En qué puedo ayudarte?",
      form_msg: "Mensaje",
      form_placeholder_msg: "Contame... Keystroke, keystroke, keystroke",
      form_submit: "Empezá esta conversación",
      footer: "© 2024 - Hecho con ☕️ por Felix Hernandez Vieyra",
      contact_subtitle:
        "Ya sea que me tengas en mente para una oportunidad de trabajo, te hayas topado con un bug o quieras dejar algún comentario, soy todo oídos.",
    },
  },
}));
