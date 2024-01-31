export const myStructure = (S: any) =>
  S.list()
    .title("Контент")
    .items([
      S.listItem()
        .title("Про нас")
        .child(
          S.document().schemaType("about").title("Про нас").documentId("about"),
        )
        .icon(() => "🌸"),

      S.listItem()
        .title("Послуги")
        .child(
          S.document()
            .schemaType("serviceList")
            .title("Послуги")
            .documentId("serviceList"),
        )
        .icon(() => "🛠️"),

      S.listItem()
        .title("Відгуки")
        .child(
          S.document()
            .schemaType("feedbacks")
            .title("Відгуки")
            .documentId("feedbacks"),
        )
        .icon(() => "📝"),

      S.listItem()
        .title("Галерея")
        .child(
          S.document()
            .schemaType("photoGallery")
            .title("Галерея")
            .documentId("photoGallery"),
        )
        .icon(() => "🖼️"),

      S.listItem()
        .title("Контакти")
        .child(
          S.document()
            .schemaType("contacts")
            .title("Контакти")
            .documentId("contacts"),
        )
        .icon(() => "📞"),
    ]);
