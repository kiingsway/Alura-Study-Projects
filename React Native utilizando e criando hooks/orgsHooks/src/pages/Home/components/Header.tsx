import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { logo } from '../../../assets';
import { GetHeader } from '../../../services/ManageData';

class Header extends React.Component {
  state = {
    header: {
      welcomeText: '',
      subtitle: '',
    }
  }

  loadHeader() {
    const response = GetHeader();
    this.setState({ header: response })
    console.log(response)
  }

  componentDidMount(): void {
    this.loadHeader();
  }

  render() {
    return (
      <View style={styles.header}>
        <Image style={styles.headerImage} source={logo} />
        <Text style={styles.welcolmeText}>{this.state.header.welcomeText}</Text>
        <Text style={styles.subtitle}>{this.state.header.subtitle}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  headerImage: {
    width: 70,
    height: 28,
  },
  welcolmeText: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#434343',

  }
})

export default Header;