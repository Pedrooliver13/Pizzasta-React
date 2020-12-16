import * as Styled from './style';

import Input from '../Form/Input';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowDown, IoMdBasket } from 'react-icons/io';

const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.Search method="GET" action="/">
        <Input placeholder="Search" name="filter"/>

        <button type="submit">
          <AiOutlineSearch fontSize={20} />
        </button>
      </Styled.Search>

      <div className="row">
        <Styled.User>
          <img
            src="https://cdn.dribbble.com/users/2102053/avatars/small/ddf2f85e2cfba5c08a6a63f9e4124f51.jpg?1574671348"
            alt="Foto de Perfil"
          />

          <p className="user__name">Pedro_Oliveira</p>

          <IoIosArrowDown />
        </Styled.User>

        <Styled.Buy>
          <IoMdBasket fontSize={20} />
          <span className="items">2</span>
        </Styled.Buy>
      </div>
    </Styled.Wrapper>
  );
};

export default Header;
