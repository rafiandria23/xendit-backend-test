import {ContainerModule} from 'inversify';
import identifiers from '../identifiers';
import type {WinstonLoggerType} from '../../types/component';
import WinstonLogger from '../../components/logger';

const componentModule = new ContainerModule(bind => {
	bind<WinstonLoggerType>(identifiers.components.logger)
		.to(WinstonLogger)
		.inSingletonScope();
});

export default componentModule;
