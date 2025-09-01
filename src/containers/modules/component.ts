import { ContainerModule } from 'inversify';

import identifiers from '../identifiers';
import WinstonLogger from '../../components/logger';

const componentModule = new ContainerModule(({ bind }) => {
  bind<WinstonLogger>(identifiers.components.logger)
    .to(WinstonLogger)
    .inSingletonScope();
});

export default componentModule;
