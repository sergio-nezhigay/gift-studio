const about = {
  name: "about",
  title: "Про нас",
  description: "About Schema",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Зображення для секції 'Про нас'",
      type: "accessibleImage",
      description:
        "Додайте зображення розмірами не менше 592 пікселів шириною та 645 пікселів висотою",
    },
  ],
};

export default about;
