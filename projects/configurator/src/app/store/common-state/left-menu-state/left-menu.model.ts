import {
  leftMenuApartment,
  leftMenuCalculate,
  leftMenuOptions,
} from '../../../modules/left-menu/left-menu.types';

export const LEFT_MENU_STATE_KEY = 'leftMenuState';

export interface LeftMenuStateModel {
  options: leftMenuOptions | null;
  apartment: leftMenuApartment | null;
  calculate: leftMenuCalculate | null;
}

export const initialLeftMenuStore: LeftMenuStateModel = {
  options: null,
  apartment: null,
  calculate: null,
};
