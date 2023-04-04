/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React, { FC } from 'react';

import { TextEnum } from '../../common/enums';
import { ICard, IChangeCard } from '../../common/interfaces/ICard';
import { dateReverse } from '../../utils';

interface IProps {
  children?: JSX.Element | JSX.Element[];
  toggelePopup: () => void;
  changeValuePopup: (value: IChangeCard) => void;
  card: ICard;
}

const Card: FC<IProps> = ({ toggelePopup, changeValuePopup, card }) => {

  const {
    id,
    url,
    title,
    price,
    dateFrom,
    dateTo,
    count } = card

  const changeCard = () => {
    changeValuePopup({
      ...card
    })
    toggelePopup()
  };

  return (
    <article className="card">
      <img
        className="card__image"
        src={url}
        alt="Фотография товара"
        width="104px"
        height="142px"
      />
      <div className="card__group">
        <h4 className="card__description">{TextEnum.DESIGNATION}</h4>
        <p className="card__value">{title}</p>
      </div>
      <div className="card__group">
        <h4 className="card__description">{TextEnum.PRICE}</h4>
        <p className="card__value">{price}р</p>
      </div>
      <div className="card__group">
        <h4 className="card__description">{TextEnum.EXPIRATION_DATE}</h4>
        <p className="card__value">{dateReverse(dateFrom)}-{dateReverse(dateTo)}</p>
      </div>
      <div className="card__group">
        <h4 className="card__description">{TextEnum.COUNT}</h4>
        <p className="card__value">{count}шт</p>
      </div>
      <div className="card__group">
        <button className="card__control card__control-plus" />
        <button className="card__control card__control-minus" />
      </div>
      <div className="card__group">
        <button
          className="card__control card__control-change"
          onClick={() => changeCard()}
        />
        <button className="card__control card__control-delete" />
      </div>
    </article>
  );
};

export default Card;
