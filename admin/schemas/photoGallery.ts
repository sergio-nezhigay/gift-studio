import { defineField } from "sanity";

const gallery = {
  name: "photoGallery",
  description: "Gallery Schema",
  type: "document",
  fields: [
    defineField({
      name: "images",
      type: "array",
      title: "Редагування та додавання галереї зображень",
      of: [{ type: "accessibleImage" }],
      validation: rule => rule.min(6).error("Додайте принаймні 6 зображень"),
    }),
  ],
};

export default gallery;
