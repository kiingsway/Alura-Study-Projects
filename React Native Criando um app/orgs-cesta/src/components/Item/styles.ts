import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  Item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: 'center'
  },
  ItemImage: {
    width: 46,
    height: 46,
  },
  ItemText: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646'
  },
});

export default styles;