import { defineField } from "sanity";

import { TBlocks } from "@/src/types";

const feedbacks = {
  name: "feedbacks",
  description: "Review Schema",
  type: "document",
  fields: [
    defineField({
      name: "reviews",
      title: "Редагування та додавання відгуків",
      type: "array",
      of: [
        defineField({
          name: "review",
          title: "Додавання/редагування відгука",
          type: "object",
          fields: [
            defineField({
              name: "reviewName",
              title: "Заголовок відгука",
              description: "Введіть заголовок відгука",
              type: "string",
              validation: rule =>
                rule
                  .required()
                  .error("Заголовок обов'язковий")
                  .min(3)
                  .error("Введіть заголовок, який містить хоча б 3 символи")
                  .max(20)
                  .error(
                    "Введіть заголовок, який містить не більше 20 символів",
                  ),
            }),
            defineField({
              name: "image",
              title: "Зображення",
              type: "image",
              description: "Завантажте зображення",
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
              title: "Опис зображення",
              description:
                "Введіть короткий опис того, що зображено на картинці",
              type: "string",
              validation: rule =>
                rule.required().error("Опис зображення є обов'язковим полем"),
            }),
            defineField({
              name: "text",
              title: "Текст відгука",
              type: "array",
              description: "Напишіть повний текст для цього відгука",
              of: [{ type: "block" }],
              validation: Rule =>
                Rule.custom((blocks: TBlocks) => {
                  if (!blocks || !Array.isArray(blocks)) {
                    return "Немає тексту відгука";
                  }
                  const totalLength = blocks.reduce((acc, block) => {
                    if (
                      block._type === "block" &&
                      block.children &&
                      Array.isArray(block.children)
                    ) {
                      block.children.forEach(child => {
                        if (child.text && typeof child.text === "string") {
                          acc += child.text.length;
                        }
                      });
                    }

                    return acc;
                  }, 0);

                  const maxLength = 425;

                  if (totalLength > maxLength || totalLength < 1) {
                    return `Загальна довжина тексту блоків повинна бути заповнена й містити менше ${maxLength} символів`;
                  }
                  return true;
                }),
            }),
          ],
          validation: rule =>
            rule.required().error("Додайте принаймні 3 відгуки"),
        }),
      ],
      validation: rule => rule.min(3).error("Додайте принаймні 3 відгуки"),
    }),
  ],
};

export default feedbacks;
