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
} from 'native-base'

import {HeaderComponent} from '../components'

class Test extends PureComponent {
  render() {
    return (
      <Container style={{flex: 1}}>
        <HeaderComponent title={`Test Page`} />
      </Container>
    )
  }
}

export default Test
