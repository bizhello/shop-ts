/* eslint-disable prettier/prettier */
import { TStartsWithAria } from '../../../../common/types';

export interface IButton {
  handleClick: () => void;
  text: string;
  ariaAttributes?: Record<TStartsWithAria, string>;
}
