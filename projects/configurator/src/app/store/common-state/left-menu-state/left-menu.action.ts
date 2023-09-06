import { leftMenuData } from '../../../modules/left-menu/left-menu.types';
import { LEFT_MENU_STATE_KEY } from './left-menu.model';

export class LoadLeftMenuData {
  static readonly type = `[${LEFT_MENU_STATE_KEY}]  load`;
}

export class LoadLeftMenuDataSuccess {
  static readonly type = `[${LEFT_MENU_STATE_KEY}]  load success`;
  constructor(public response: leftMenuData) {}
}

export class LoadLeftMenuDataError {
  static readonly type = `[${LEFT_MENU_STATE_KEY}]  load error`;
}
