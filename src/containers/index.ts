import { Container } from 'inversify';
import componentModule from './modules/component';
import serviceModule from './modules/service';
import controllerModule from './modules/controller';

const container = new Container({
  skipBaseClassChecks: true,
  autoBindInjectable: true,
});
container.load(componentModule, serviceModule, controllerModule);

export default container;
