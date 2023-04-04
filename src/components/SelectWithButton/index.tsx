/* eslint-disable prettier/prettier */
import React, { FC } from 'react';

import { TextEnum } from '../../common/enums';

interface IProps {
  children?: JSX.Element | JSX.Element[];
  toggelePopup: () => void;
}

const SelectWithButton: FC<IProps> = ({ toggelePopup }) => {
  return (
    <section className="selectWithButton">
      <div className='selectWithButton__group selectWithButton__group-left'>
        <select id='selectWithButton__select' className='selectWithButton__select' name='selectWithButton__select' defaultValue={TextEnum.DATE_END}>
          <option disabled >{TextEnum.CHOOSE_SORT}</option>
          <option value={TextEnum.DATE_CREATED}>{TextEnum.DATE_CREATED}</option>
          <option value={TextEnum.DATE_END}>{TextEnum.DATE_END}</option>
          <option value={TextEnum.DATE_MAKE}>{TextEnum.DATE_MAKE}</option>
        </select>
        <label htmlFor='selectWithButton__select' className="search__label" >{TextEnum.SORT_BY}</label>
      </div>
      <div className='selectWithButton__group selectWithButton__group-right'>
        <p className="selectInput__text">{TextEnum.ADD_PRODUCT}</p>
        <button className="selectWithButton__button" onClick={toggelePopup}></button>
      </div>
    </section>
  );
};

export default SelectWithButton;
