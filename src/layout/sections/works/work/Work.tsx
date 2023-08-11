import React from 'react';

import {TabLink} from "../../../../components/LinkAll";
import { StyledButton } from '../../../../components/Button';

import { S } from '../Works_Styles';


type WorkPropsType = {
    title: string
    text: string
    src: string
}


export const Work: React.FC<WorkPropsType> = (props:WorkPropsType) => {
    return (
        <S.Work>
            <S.ImgWrapper>
                <S.ImgWork src={props.src}/>
                <StyledButton>view proj</StyledButton>
            </S.ImgWrapper>

            <S.DescriptionWrapper>
                <S.TitleWork>{props.title}</S.TitleWork>
                <S.DescriptionWork>{props.text}</S.DescriptionWork>
                <TabLink href={""}>demo</TabLink>
                <TabLink href={""}>work</TabLink>
            </S.DescriptionWrapper>
        </S.Work>
    );
};

// const StyledWork = styled.div`
  
//   width: 330px;
//   flex-grow: 1;
//   background-color: ${theme.colors.secondaryBg};
//   ${TabLink} {
//     padding: 10px 0;
//     margin-right: 10px;
//   }
//   @media ${theme.media.desk} {
//     max-width: 540px;
//   }
// `

// const ImgWrapper = styled.div`
//   position: relative;

//   ${StyledButton} {
//     opacity: 0;
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     &::before {
//       width: 100%;
//       height: 100%;
//     }
//   }

//   &::before {
//       content: "";
//       position: absolute;
//       left: 0;
//       top: 0;
//       bottom: 0;
//       right: 0;
//       background: rgba(0, 0, 0, 0.30);
//       backdrop-filter: blur(4px);
//       opacity: 0;
//     }

//   &:hover {
//     &::before {
//       opacity: 1;
//     }
    
//     ${StyledButton} {
//       opacity: 1;
//     }
//   }

//     @media ${theme.media.tablet} {
      
//       &::before {
//       opacity: 1;
//     }
    
//     ${StyledButton} {
//       opacity: 1;
//     }
//     }

// `

// const ImgWork = styled.img`
//     width: 100%;
//     height: 260px;
//     object-fit: cover;
// `
// const TitleWork = styled.h3`
//     text-transform: capitalize;
// `

// const DescriptionWork = styled.p`
//   margin: 14px 0 10px;
// `
// const DescriptionWrapper = styled.div`
//   padding: 25px 20px;
// `