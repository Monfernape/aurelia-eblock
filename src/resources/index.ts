import {FrameworkConfiguration, PLATFORM} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  //config.globalResources([]);
  config.plugin(PLATFORM.moduleName('aurelia-validation'))
}
