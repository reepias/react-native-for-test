import React, {PureComponent} from 'react'
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  ActivityIndicator,
  Image,
} from 'react-native'
import {Container, Content} from 'native-base'

import {HeaderComponent, FooterTabComponent} from '../components'

import {ListItem} from 'react-native-elements'

import _ from 'lodash'

const API_KEY = 'AIzaSyAMSty4fKoaxuzS3bs0EQ-1oPIAozJY5hg'

class Restaurant extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      data: [],
      pageToken: '',
      refreshing: false,
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    const latitude = '13.8235283'
    const longitude = '100.5081204'
    const {pageToken} = this.state
    const urlFirst = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=500&type=restaurant&key=AIzaSyAMSty4fKoaxuzS3bs0EQ-1oPIAozJY5hg
    `
    const urlNext = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=500&type=restaurant&key=AIzaSyAMSty4fKoaxuzS3bs0EQ-1oPIAozJY5hg&pagetoken=${pageToken}`

    let url = pageToken === '' ? urlFirst : urlNext
    this.setState({loading: true})
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(res => {
        const arrayData = _.uniqBy([...this.state.data, ...res.results], 'id')

        this.setState({
          data: pageToken === '' ? res.results : arrayData,
          loading: false,
          refreshing: false,
          pageToken: res.next_page_token,
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({loading: false})
      })
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    )
  }
  renderHeader = () => {
    return (
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 20,
          marginBottom: 10,
        }}>
        {this.state.siteTitle}
      </Text>
    )
  }
  renderFooter = () => {
    if (this.state.pageToken === undefined) return null

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE',
        }}>
        <ActivityIndicator animating size="large" />
      </View>
    )
  }

  handleRefresh = () => {
    this.setState(
      {
        pageToken: '',
        refreshing: true,
      },
      () => {
        this.fetchData()
      },
    )
  }

  handleLoadMore = () => {
    this.fetchData()
  }

  onBack = () => {
    this.props.navigation.navigate('Main')
  }

  render() {
    return (
      <Container style={styles.container}>
        <HeaderComponent
          onRefresh={this.handleRefresh}
          onBack={this.onBack}
          title={`Restaurants`}
        />
        <Content>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            ListFooterComponent={this.renderFooter}
            renderItem={({item}) => {
              const rating = item.rating ? item.rating : 'na'
              const photo = item.photos && item.photos[0].photo_reference
              return (
                <View style={{paddingVertical: 10, flex: 1}}>
                  <View style={{alignItems: 'center'}}>
                    {photo && (
                      <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{
                          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo}&key=${API_KEY}`,
                        }}
                      />
                    )}
                  </View>
                  <ListItem
                    title={`${item.name}` + ' (' + `${rating}` + ')'}
                    subtitle={`${item.vicinity}`}
                    containerStyle={{borderBottomWidth: 0}}
                  />
                  <View
                    style={{
                      height: 1,
                      width: '100%',
                      backgroundColor: '#CED0CE',
                      marginBottom: 10,
                    }}
                  />
                </View>
              )
            }}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={100}
          />
        </Content>
        <FooterTabComponent />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
})

export default Restaurant
