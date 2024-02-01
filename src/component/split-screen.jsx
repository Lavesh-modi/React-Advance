

import React from 'react';
import { styled } from "styled-components"


const  Container = styled.div`
display: flex;
`

// const Panel = styled.div`
// flex:${(p)=>p.flex};`


const Panel = styled.div`
  flex: ${(p) => {
    console.log('Value of p:', p);
    return p.flex;
  }};
`;
function SplitScreen({ Left, Right,leftWidth=1,rightWidth=1 }) {
  return (
    <Container>
      <Panel flex={leftWidth}>
        <Left />
      </Panel>

      <Panel flex={rightWidth}>
        <Right></Right>
      </Panel>
    </Container>
  );
}

export default SplitScreen;