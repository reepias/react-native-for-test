import React, {PureComponent} from 'react'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
} from 'native-base'

import {HeaderComponent, FooterTabComponent} from '../components'

class Test extends PureComponent {
  render() {
    return (
      <Container style={{flex: 1}}>
        <HeaderComponent title={`Test Page`} />
        <Content/>
        <FooterTabComponent/>
      </Container>
    )
  }
}

export default Test
