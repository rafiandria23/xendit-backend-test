import {ContainerModule} from 'inversify';
import identifiers from '../identifiers';
import type {RideControllerType} from '../../types/controller';
import RideController from '../../controllers/ride';

const controllerModule = new ContainerModule(bind => {
	bind<RideControllerType>(identifiers.controllers.ride)
		.to(RideController)
		.inSingletonScope();
});

export default controllerModule;
