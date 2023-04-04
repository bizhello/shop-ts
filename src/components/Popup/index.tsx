import React, { FC, useState } from 'react';

interface IProps {
  children?: JSX.Element | JSX.Element[];
}

const Popup: FC<IProps> = () => {
  const [value, setValue] = useState('');

  return (
    <article className="popup">
      <form className="popup__form">
        <div className="popup_group">
          <label htmlFor="popup__file">Выбрать картинку для товара</label>
          <input
            style={{ marginTop: '10px' }}
            type="file"
            id="popup__file"
            name="popup__file"
            multiple
          />
        </div>
        <div className="popup_group">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="popup__input"
            type="text"
            id="popup__title"
            name="popup__title"
          />
          <label
            htmlFor="popup__title"
            className={
              value
                ? 'popup__label popup__label-filled'
                : 'popup__label popup__label-empty'
            }
          >
            Название товара
          </label>
        </div>
        <div className="popup_group">
          <label htmlFor="popup__price">Цена товара</label>
          <input
            placeholder="Цена товара"
            style={{ marginTop: '10px' }}
            type="text"
            id="popup__price"
            name="popup__price"
          />
        </div>
        <div>DATA</div>
        <div className="popup_group">
          <label htmlFor="popup__count">Кол-во товара</label>
          <input
            placeholder="Кол-во товара"
            style={{ marginTop: '10px' }}
            type="text"
            id="popup__count"
            name="popup__count"
          />
        </div>
        <div>
          <button>СОХРАНИТЬ</button>
          <button>ЗАКРЫТЬ</button>
        </div>
      </form>
    </article>
  );
};

export default Popup;
