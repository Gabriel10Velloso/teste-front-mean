import { EnterpriseModel } from "./enterprise";

export class ClientModel {
  constructor(
    public _id: string,
    public name: string,
    public image_src: string,
    public enterprises: EnterpriseModel[],
    public enterprisesTotal?: number,
    public propertiesTotal?: number,
  ) { }
}