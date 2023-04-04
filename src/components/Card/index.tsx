// eslint-disable-next-line prettier/prettier
import React, { FC } from 'react';

import { TextEnum } from '../../common/enums';

interface IProps {
  children?: JSX.Element | JSX.Element[];
}

const Card: FC<IProps> = () => {
  return (
    <article className="card">
      <img
        className="card__image"
        src="https://www.w3schools.com/images/w3schools_green.jpg"
        alt="Фотография товара"
        width="104px"
        height="142px"
      />
      <div className="card__group">
        <h4 className="card__description">{TextEnum.DESIGNATION}</h4>
        <p className="card__value">Вкусняха</p>
      </div>
      <div className="card__group">
        <h4 className="card__description">{TextEnum.PRICE}</h4>
        <p className="card__value">121р</p>
      </div>
      <div className="card__group">
        <h4 className="card__description">{TextEnum.EXPIRATION_DATE}</h4>
        <p className="card__value">11.10.22-11.10.23</p>
      </div>
      <div className="card__group">
        <h4 className="card__description">{TextEnum.COUNT}</h4>
        <p className="card__value">5шт</p>
      </div>
      <div className="card__group">
        <button className="card__control card__control-plus" />
        <button className="card__control card__control-minus" />
      </div>
      <div className="card__group">
        <button className="card__control card__control-change" />
        <button className="card__control card__control-delete" />
      </div>
    </article>
  );
};

export default Card;
