export interface Factory {
  getInstance: () => InstanceType<any>;
}
