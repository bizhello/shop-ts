/* eslint-disable prettier/prettier */
import React, { FC, useState } from 'react';

import { TextEnum } from '../../common/enums';

interface IProps {
  children?: JSX.Element | JSX.Element[];
}

const SearchInput: FC<IProps> = () => {
  const [value, setValue] = useState('');

  return (
    <section className='search'>
      <input   
        id="searchInput"
        name="search"
        type="search"
        className="search_input"
        placeholder={TextEnum.INPUT_HOLDER}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // pattern="[-a-zA-Zа-яёА-ЯЁ0-9@:%._+~#=]{2,256}\.[a-zа-яё]{2,6}(?:[?/][-a-zA-Zа-яёА-ЯЁ0-9@:%_+.~#?&/=]*)?"
      />
      <label htmlFor='searchInput' className="search__label" >Поиск</label>
    </section>
  );
};

export default SearchInput;
