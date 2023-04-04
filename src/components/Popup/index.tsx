/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { FC, useEffect, useRef, useState } from 'react';

import { TextPopupEnum } from '../../common/enums';
import { ICard, IChangeCard } from '../../common/interfaces/ICard'
import { getDate } from '../../utils';

interface IProps {
  children?: JSX.Element | JSX.Element[];
  toggelePopup: () => void;
  changeValuePopup: (value: IChangeCard) => void;
  valuePopup: IChangeCard;
}

const Popup: FC<IProps> = ({ toggelePopup, changeValuePopup, valuePopup }) => {

  const {
    id,
    url,
    title,
    price,
    dateFrom,
    dateTo,
    count } = valuePopup
  const [preview, setPreview] = useState<string | undefined>(url)
  const [file, setFile] = useState<File | null>(null)
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const { todayDate, todayMonth, todayDay } = getDate();

  const onChangeFileInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files || e.target.files.length === 0) {
      setFile(null)

      return
    }
    setFile(e.target.files[0])
  }

  const handleClickButtonFile = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const saveCard = () => {
    if (id) {
      // dispatch saveNewVersionCard
    }

    // dispatch createCard
  }

  const closePopup = () => {
    toggelePopup();
    changeValuePopup({
      id: null,
      url: '',
      title: '',
      price: null,
      dateFrom: '',
      dateTo: '',
      count: null,
    })
  }

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file)
      setPreview(objectUrl)
    }

  }, [file])

  return (
    <article className="popup" onClick={(e) => e.target === e.currentTarget && closePopup()}>
      <form className="popup__form">
        <div className="popup_group">
          <label htmlFor="popup__file" >{TextPopupEnum.LABEL_FILE}</label>
          <div className='file__group'>
            <div>
              <button style={{ display: "block", width: "120px", height: "30px" }} onClick={() => handleClickButtonFile()} type='button'>Выбрать картинку</button>
              <input
                ref={hiddenFileInput}
                style={{ display: 'none' }}
                type="file"
                id="popup__file"
                name="popup__file"
                multiple
                onChange={(e) => onChangeFileInput(e)}
              />
            </div>
            <img src={preview || 'https://cdn-icons-png.flaticon.com/512/3875/3875172.png'} width='80px' height='110px' alt="No photo" />
          </div>
        </div>
        <div className="popup_group">
          <input
            value={title}
            onChange={(e) => changeValuePopup({ title: e.target.value })}
            className="popup__input"
            type="text"
            id="popup__title"
            name="popup__title"
          />
          <label
            htmlFor="popup__title"
            className={
              title
                ? 'popup__label popup__label-filled'
                : 'popup__label popup__label-empty'
            }
          >
            {TextPopupEnum.LABEL_TITLE}
          </label>
        </div>
        <div className="popup_group">
          <input
            value={price || ''}
            onChange={(e) => changeValuePopup({ price: +e.target.value })}
            className="popup__input"
            type="text"
            id="popup__price"
            name="popup__price"
          />
          <label
            htmlFor="popup__price"
            className={
              price
                ? 'popup__label popup__label-filled'
                : 'popup__label popup__label-empty'
            }
          >
            {TextPopupEnum.LABEL_PRICE}
          </label>
        </div>
        <div className='date'>
          <p className='date__text'>Дата срока годности</p>
          <div className='date__group'>
            <div className='date__reverse'>
              <input min={`${todayDate.getFullYear() - 1}-${todayMonth}-${todayDay}`} max={`${todayDate.getFullYear()}-${todayMonth}-${todayDay}`} value={dateFrom} onChange={(e) => changeValuePopup({ dateFrom: e.target.value })} type='date' className='date__input' />
              <p className='date__text'>От</p>
            </div>
            <div className='date__reverse'>
              <input min={`${todayDate.getFullYear() - 1}-${todayMonth}-${todayDay}`} max={`${todayDate.getFullYear() + 3}-${todayMonth}-${todayDay}`} value={dateTo} onChange={(e) => changeValuePopup({ dateTo: e.target.value })} type='date' className='date__input' />
              <p className='date__text'>До</p>
            </div>
          </div>
        </div >
        <div className="popup_group">
          <input
            value={count || ''}
            onChange={(e) => changeValuePopup({ count: +e.target.value })}
            className="popup__input"
            type="text"
            id="popup__count"
            name="popup__count"
          />
          <label
            htmlFor="popup__count"
            className={
              count
                ? 'popup__label popup__label-filled'
                : 'popup__label popup__label-empty'
            }
          >
            {TextPopupEnum.LABEL_COUNT}
          </label>
        </div>
        <div className='popup__button_group'>
          <button className="popup__button popup__button-save" type='button' onClick={() => saveCard()}>
            {TextPopupEnum.SAVE}
          </button>
          <button className="popup__button popup__button-close" type='button' onClick={closePopup}>
            {TextPopupEnum.CLOSE}
          </button>
        </div>
      </form>
    </article >
  );
};

export default Popup;
