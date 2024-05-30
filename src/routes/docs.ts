import { Router as router } from 'express';
import YAML from 'yamljs';
import SwaggerUI from 'swagger-ui-express';

const docs = YAML.load('docs/index.yml');

const docsRouter = router();

docsRouter.use('/', SwaggerUI.serveFiles(docs), SwaggerUI.setup(docs));

export default docsRouter;
