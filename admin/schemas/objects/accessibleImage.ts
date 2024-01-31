import { defineType, defineField } from "sanity";

export default defineType({
  name: "accessibleImage",
  title: "Редагування/додавання зображення",
  type: "object",
  fields: [
    defineField({
      name: `image`,
      type: `image`,
      title: "Зображення",
      options: {
        hotspot: true,
      },
      validation: rule =>
        rule.custom((value: any) => {
          if (!value) {
            return "Зображення обов'язкове";
          }
          return true;
        }),
    }),
    defineField({
      name: "alt",
      type: "string",
      title: "Опис зображення",
      description: "Введіть короткий опис того, що зображено на картинці",
      validation: rule => rule.required(),
    }),
  ],
  validation: rule =>
    rule.custom((value, context) => {
      if (!value || !value.image) {
        return "Зображення обов'язкове";
      }
      if (!value.alt) {
        return "Опис зображення обов'язковий";
      }
      return true;
    }),
});
