import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'rdky8b77',
  dataset: 'production',
  title: 'My Personal Website',
  apiVersion: '2023-09-03',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});

export default config;
