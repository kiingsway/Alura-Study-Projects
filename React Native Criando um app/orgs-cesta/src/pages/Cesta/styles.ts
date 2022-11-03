import { Platform, StatusBar, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 578 / 768 * width,
  },
  headerTitle: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignSelf: 'center',
    position: 'absolute',
  },
  title: {
    ...padding(6),
    borderRadius: 6,
    backgroundColor: '#222222BB',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 26,
    color: 'white',
    overflow: 'hidden'
  },
  product: {
    ...padding(8, 16),
  },
  productName: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
  },
  productOwner: {
    flexDirection: 'row',
    alignItems: 'center',
    ...padding(10, 0)
  },
  productOwnerTitle: {
    fontSize: 16,
    lineHeight: 26,
    paddingLeft: 12
  },
  productOwnerImage: {
    width: 32,
    height: 32,
    borderRadius: 6,
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
  productPrice: {
    fontSize: 26,
    lineHeight: 42,
    color: '#249F85',
    marginTop: 8,
  },
  btnBuy: {
    color: '#249F85',

  },
});

function padding(a: number, b?: number, c?: number, d?: number) {

  return {
    paddingTop: a,
    paddingRight: b || b === 0 ? b : a,
    paddingBottom: c || c === 0 ? c : a,
    paddingLeft: d || d === 0 ? d : (b || b === 0 ? b : a),
  }
}