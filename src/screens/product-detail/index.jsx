import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';


import { styles } from './styles';
import { addToCart } from '../../store/cart/cart.slice';

function ProductDetail({ navigation, route }) {
    const dispatch = useDispatch();

  const { color, productId } = route.params;
  const products = useSelector((state) => state.products.data);


  const product = products.find((product) => product.id === productId);

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <View style={styles.container}>
      <View style={[styles.containerImage, { backgroundColor: color }]}>
        <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>$ {product.price}</Text>
        <Text style={styles.tagTitle}>Etiquetas</Text>
        <View style={styles.containerTags}>
          {product.tags.map((tag) => (
            <TouchableOpacity key={tag} style={[styles.containerTag, { backgroundColor: color }]}>
              <Text style={styles.tag}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity onPress={onAddToCart} style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ProductDetail;