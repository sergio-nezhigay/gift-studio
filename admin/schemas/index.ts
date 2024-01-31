import { type SchemaTypeDefinition } from "sanity";

import accessibleImage from "./objects/accessibleImage";
import about from "./about";
import photoGallery from "./photoGallery";
import serviceList from "./serviceList";
import contacts from "./contacts";
import feedbacks from "./feedbacks";

export const schemaTypes: SchemaTypeDefinition[] = [
  accessibleImage,
  serviceList,
  about,
  photoGallery,
  contacts,
  feedbacks,
];
