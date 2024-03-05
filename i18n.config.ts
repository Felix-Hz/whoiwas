export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      welcome: "Welcome",
      /* Contact */
      form_subject: "Subject",
      form_placeholder_subject: "What's all of this about?",
      form_placeholder_msg:
        "I'd love to know more about it. Keystroke, keystroke, keystroke...",
      title_2: "Let's Chat",
      form_msg: "Your message",
      form_submit: "Start the conversation",
      form_email: "Your email",
      footer: "© 2024 - Made with ☕️ by Felix Hernandez Vieyra",
      contact_subtitle:
        "Whether you have me in mind for a job opportunity, have stumbled upon a bug or want to leave some feedback, I'm all ears.",
    },
    es: {
      welcome: "Bienvenido",
      title_1: "La Galería",
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
