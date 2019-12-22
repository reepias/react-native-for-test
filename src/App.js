import React, {Fragment} from 'react'

import {StatusBar} from 'react-native'

import NavigationService from './navigation'
import PrimaryNav from './navigation/appNavigation'

//return root component
export default () => {
  return (
    <Fragment>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0.2)'} />
      <ThemeConsumer />
    </Fragment>
  )
}

const ThemeConsumer = () => {
  return <PrimaryNav ref={nav => NavigationService.setTopLevelNavigator(nav)} />
}
