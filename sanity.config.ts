import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./admin/schemas";
import { myStructure } from "admin/deskStructure";
import { projectId, dataset } from "./admin/env";

export default defineConfig({
  name: "gift",
  title: "project gift sanity",
  basePath: "/admin",
  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
