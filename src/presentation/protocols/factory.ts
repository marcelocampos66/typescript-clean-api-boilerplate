/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Factory {
  getInstance: (...args: any) => InstanceType<any>;
}
