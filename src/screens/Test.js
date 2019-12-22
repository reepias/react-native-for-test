import React, {useState} from 'react'
import {Container, Content, Button, Footer, FooterTab} from 'native-base'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import {useNavigation} from 'react-navigation-hooks'

import {HeaderComponent, FooterTabComponent} from '../components'

export default () => {
  const {navigate} = useNavigation()

  const initialState = {
    numbers: [3, 5, 9, 15],
  }

  const goRestaurant = () => {
    navigate('RestaurantScreen')
  }

  const [numbers, setNumber] = useState(initialState.numbers)

  const nextNumber = () => {
    const n = numbers.length + 1
    const result = Math.pow(n, 2) - n + 3
    const array = numbers.concat(result)
    setNumber(array)
  }

  const handleRefresh = () => {
    setNumber(initialState.numbers)
  }

  return (
    <Container style={{flex: 1}}>
      <HeaderComponent onRefresh={handleRefresh} title={`Test`} />
      <Content>
        <View style={styles.MainContainer}>
          <FlatList
            data={numbers}
            renderItem={({item}) => (
              <View style={styles.itemNumber}>
                <Text style={styles.text}>{item}</Text>
              </View>
            )}
            numColumns={3}
            keyExtractor={(item, index) => `${index}`}
          />
        </View>
        <Button style={styles.button} onPress={nextNumber}>
          <Text>Next</Text>
        </Button>
      </Content>
      <Footer>
        <FooterTab>
          <Button style={{backgroundColor: 'yellow'}} onPress={goRestaurant}>
            <Text>Go Restaurant Page</Text>
          </Button>
        </FooterTab>
      </Footer>
      <FooterTabComponent />
    </Container>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 10,
  },

  button: {
    backgroundColor: 'pink',
    marginHorizontal: 10,
    justifyContent: 'center',
  },

  itemNumber: {
    width: '33%',
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },

  text: {
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
