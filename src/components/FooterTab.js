import React from 'react'
import {Footer, FooterTab, Button, View} from 'native-base'
import {Text} from 'react-native'

const FooterComponent = props => {
  return (
    <Footer>
      <FooterTab>
        <View
          disabled
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingLeft: 15,
            backgroundColor: 'green',
          }}
          active>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Sarabun-Regular',
              fontSize: 18,
            }}>
            Adthasit Suksomthawisap
          </Text>
        </View>
      </FooterTab>
    </Footer>
  )
}

export default FooterComponent
