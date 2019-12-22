import React from 'react'
import {Header, Left, Body, Right, Title, Button, Icon} from 'native-base'

const HeaderComponent = props => {
  const {title} = props
  return (
    <Header
      style={{backgroundColor: 'green'}}
      androidStatusBarColor="black"
      iosBarStyle="dark-content">
      <Left style={{flex: 1}}>
        {props.onBack && (
          <Button onPress={props.onBack} transparent>
            <Icon name="arrow-back" />
          </Button>
        )}
      </Left>
      <Body style={{flex: 1}}>
        <Title style={{alignSelf: 'center', color: '#FFF'}}>{title}</Title>
      </Body>
      <Right style={{flex: 1}}>
        {props.onRefresh && (
          <Button onPress={props.onRefresh} transparent>
            <Icon name="refresh" />
          </Button>
        )}
      </Right>
    </Header>
  )
}

export default HeaderComponent
