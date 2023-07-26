import styled from "styled-components";

type FlexWrapperType = {
    direction?: string
    align?: string
    wrap?: string
    justify?: string
    maxW?: string
    margin?: string
}


export const  FlexWrapper = styled.div<FlexWrapperType>`
  display: flex;
  flex-direction: ${props=> props.direction || "row"};
  align-items: ${props=> props.align || "stretch"};
  flex-wrap: ${props=> props.wrap || "nowrap"};
  justify-content: ${props=> props.justify || "flex-start"};
  max-width: ${props=> props.maxW || "none"};
  margin: ${props=> props.margin || ""};
`