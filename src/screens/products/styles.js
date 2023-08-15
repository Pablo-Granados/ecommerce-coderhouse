import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: COLORS.background,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    
  },
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: COLORS.text,

  },
  goBackText: {
    fontSize: 14,
    color: COLORS.text,
  },
  products: {
    flex: 1,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
  },
  notFoundText: {},
  clearIcon: {
    position: 'absolute',
    zIndex: 2,
    right: 5,
    top: 16,
  },
  productsContent: {
    paddingVertical: 25,
    gap: 15,
    
  },
  productContainer: {
    backgroundColor: COLORS.text,
    borderRadius: 20,
    width: '45%',
    marginHorizontal: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },
  productDetail: {
    padding: 10,
    gap: 5,
    backgroundColor: COLORS.gray,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  productName: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: 'bold',


  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.primary,

  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});