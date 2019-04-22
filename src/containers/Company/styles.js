import styled from 'styled-components';
import Coworking from '../../imgs/coworking-3.jpg';

export const CompnyWrapper = styled.div`
background-image:linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${Coworking});
  height:20rem;
  width:100%
  background-size:cover;
  background-position:center;
  margin-top:3rem;
  .pera-group{
    top:4rem;
    display: flex;
    flex-direction:coloumn;
    text-align: center;
    position: relative;
    justify-content: center;
    
}
.pera{
  font-family: 'PT Sans Narrow', sans-serif;
    align-items: center;
    font-size: 3rem;
    color: #fff;
    width: 72%;
    justify-content: center;
    line-height: 57px;
}
.button-wrapper{
  display: flex;
  justify-content: center;
  top: 3rem;
  position: relative;
  }
   .custom-button{
    display: flex;
    justify-content: center;
    cursor: pointer;
    padding: 0 25px;
    height: 49px;
    font-size: 11px;
    text-transform: uppercase;
 
    font-weight: 700;
    line-height: 1;
    border-radius: 30px;
    border: 2px solid transparent;
    background-color:#ff2549;
    color:#fff;
    :hover{
     background-color:transparent;
     border: 2px solid #fff;
   }
   :visited{
     border:0;
   }
  }

  
`;

export default CompnyWrapper;
