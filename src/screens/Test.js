import React from 'react'
import {Container, Content, Button} from 'native-base'
import {Text} from 'react-native'
import {useNavigation} from 'react-navigation-hooks'

import {HeaderComponent, FooterTabComponent} from '../components'

export default () => {
  const {navigate} = useNavigation()

  const goRestaurant = () => {
    navigate('RestaurantScreen')
  }

  return (
    <Container style={{flex: 1}}>
      <HeaderComponent title={`Test`} />
      <Content>
        <Text>Test Page</Text>
        <Button onPress={goRestaurant}>
          <Text>Go Restaurant Page</Text>
        </Button>
      </Content>
      <FooterTabComponent />
    </Container>
  )
}
