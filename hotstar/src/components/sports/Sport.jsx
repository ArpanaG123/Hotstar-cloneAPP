import React from 'react'
import Styled from 'styled-components'
import './sport.css';

const Sport = () => {
  return (
    <Container>
        <h4 className='latest-Head1'>Best in Sports</h4>
        <Content>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8981/1448981-h-3f9689893436" alt="" className='sport1' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8932/1448932-h-265afd765d77" alt="" className='sport2' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8455/1448455-h-33490f89a937" alt="" className='sport3' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8903/1448903-h-853b7346500c" alt="" className='sport4' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/9001/1449001-h-453c365ce373" alt="" className='sport4' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9031/1449031-h-f6d8f41c4d1b" alt="" className='sport4' />
            </Wrap>
        </Content>
    </Container> 
  )
}

export default Sport

const Container = Styled.div`
`

const Content = Styled.div`
    display:flex;
    margin-left:50px;
    margin-top:-3%
`

const Wrap = Styled.div`
    cursor:pointer;
    overflow:hidden;

    img{
        width:220px;
        height:130px;
        padding:5px;
        border-radius:10px;
    }

    &:hover{
        transition: opacity 0.1s ease-in;
        transform:scale(1.05);
    }
`