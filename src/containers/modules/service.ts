import {ContainerModule} from 'inversify';
import identifiers from '../identifiers';
import type {RideServiceType} from '../../types/service';
import RideService from '../../services/ride';

const serviceModule = new ContainerModule(bind => {
	bind<RideServiceType>(identifiers.services.ride)
		.to(RideService)
		.inSingletonScope();
});

export default serviceModule;
