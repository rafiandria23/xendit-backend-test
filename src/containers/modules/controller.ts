import { ContainerModule } from 'inversify';

import identifiers from '../identifiers';
import type * as controllerTypes from '../../types/controller';
import RideController from '../../controllers/ride';

const controllerModule = new ContainerModule((bind) => {
  bind<controllerTypes.RideController>(identifiers.controllers.ride)
    .to(RideController)
    .inSingletonScope();
});

export default controllerModule;
