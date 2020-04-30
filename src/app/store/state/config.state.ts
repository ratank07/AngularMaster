import { IConfig } from "../../model/userConfig";

export interface IConfigState {
  config: IConfig
}

export const initialConfigState: IConfigState = {
  config: null
}
