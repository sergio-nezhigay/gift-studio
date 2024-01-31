import { defineField } from "sanity";

import { TBlocks } from "@/src/types";

const serviceList = {
  name: "serviceList",
  description: "serviceList Schema",
  type: "document",
  fields: [
    defineField({
      name: "services",
      title: "Редагування та додавання послуг",
      type: "array",
      of: [
        defineField({
          name: "service",
          title: "Додавання/редагування послуги",
          type: "object",
          fields: [
            defineField({
              name: "serviceName",
              title: "Заголовок послуги",
              description: "Введіть заголовок послуги",
              type: "array",
              of: [{ type: "block" }],
              validation: Rule =>
                Rule.custom((blocks: TBlocks) => {
                  if (!blocks || !Array.isArray(blocks)) {
                    return "Заголовок обов'язковий";
                  }
                  return true;
                }),
            }),
            defineField({
              name: "serviceUrl",
              title: "Посилання",
              description:
                "Введіть посилання на додаткову інформацію про послугу",
              type: "url",
              validation: rule =>
                rule.required().error("Посилання є обов'язковим полем"),
            }),
            defineField({
              name: "image",
              title: "Зображення",
              type: "image",
              options: { hotspot: true },
              validation: rule =>
                rule.required().custom(value => {
                  if (!value || !value.asset) {
                    return "Зображення є обов'язковим полем";
                  }
                  return true;
                }),
            }),
            defineField({
              name: "alt",
              description:
                "Введіть короткий опис того, що зображено на картинці",
              type: "string",
              validation: rule =>
                rule.required().error("Опис зображення є обов'язковим полем"),
            }),
          ],
          preview: {
            select: {
              title: "serviceName",
              media: "image",
            },
          },
          validation: rule =>
            rule.required().error("Додайте принаймні 1 послугу"),
        }),
      ],
      validation: rule => rule.min(1).error("Додайте принаймні 1 послугу"),
    }),
  ],
};

export default serviceList;
