import React, {PureComponent} from 'react'
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Content,
  Text
} from 'native-base'

import {HeaderComponent, FooterTabComponent} from '../components'

class Restaurant extends PureComponent {
  render() {
    return (
      <Container style={styles.container}>
        <HeaderComponent title={`Restaurants`} />
        <Content>
          <Text>Restaurants Page</Text>
        </Content>
        <FooterTabComponent/>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Restaurant
