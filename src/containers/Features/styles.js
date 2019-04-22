import Styled from 'styled-components';
import Background from '../../imgs/services.jpg';
import { Icon } from 'antd';

export const FeaturesWrapper = Styled.div`
background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Background});
  width:100%;
  background-size:cover;
  display:flex;
  justify-content:space-evenly;
  flex-direction:column;
  height:100vh;
  background-color: rgba(0,0,0,0.5);
  margin-bottom:6rem;

  
  .h3{
    font-family: 'Lato', sans-serif;
    color:#fff;
  
  }
  .group{
    display:flex;
    justify-content:center;
    flex-direction: coloumn;
  }
  .pera{
    font-family: 'PT Sans Narrow', sans-serif;
    color:#fff
  }
  .hr{
    widtht:8rem;
  }
`;
export const DefaultIcon = Styled(Icon)`

color:#fff;

`;
