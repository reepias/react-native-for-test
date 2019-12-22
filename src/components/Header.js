import React from 'react'
import {Header, Left, Body, Right, Title} from 'native-base'

const HeaderComponent = props => {
  const {title} = props
  return (
    <Header
      style={{backgroundColor: 'green'}}
      androidStatusBarColor="black"
      iosBarStyle="dark-content">
      <Left style={{flex: 1}}></Left>
      <Body style={{flex: 1}}>
        <Title style={{alignSelf: 'center', color: '#FFF'}}>{title}</Title>
      </Body>
      <Right style={{flex: 1}}></Right>
    </Header>
  )
}

export default HeaderComponent
