import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import {Transition} from 'react-native-reanimated'

import Routes from './routes'
import {TestScreen} from '../screens'

const Root = {screen: TestScreen}

// Manifest of possible screens
const PrimaryNav = createAnimatedSwitchNavigator(
  {
    [Routes.TEST_SCREEN]: Root,
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-left"
          durationMs={200}
          interpolation="easeIn"
        />
        <Transition.In type="slide-right" durationMs={200} />
      </Transition.Together>
    ),
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: Routes.TEST_SCREEN,
  },
)

const ModalNav = createStackNavigator(
  {
    Main: {
      screen: PrimaryNav,
      path: 'app',
    },
  },
  {
    mode: 'modal',
    initialRouteName: 'Main',
    headerMode: 'none',
  },
)

export default createAppContainer(ModalNav)
