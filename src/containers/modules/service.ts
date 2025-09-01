import { ContainerModule } from 'inversify';

import identifiers from '../identifiers';
import type * as serviceTypes from '../../types/service';
import RideService from '../../services/ride';

const serviceModule = new ContainerModule(({ bind }) => {
  bind<serviceTypes.RideService>(identifiers.services.ride)
    .to(RideService)
    .inSingletonScope();
});

export default serviceModule;
