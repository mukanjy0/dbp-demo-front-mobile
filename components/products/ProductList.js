import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import { getProducts } from '../../api/products';
import { theme } from '../../core/theme';
import { Divider, Searchbar } from 'react-native-paper';

const Item = ({product}) => {
    return (
        <View style={styles.item}>
            <Image style={styles.productImg} source={{
                uri: product.thumbnail
            }} />
            <Text style={styles.brand}>{product.brand}</Text>
            <Text style={styles.title}>{product.title}</Text>

            <Text>S/ {product.price}</Text>
        </View>
    )
};

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [results, setResults] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')

    const onChangeSearch = query => setSearchQuery(query);

    useEffect(() => {
        async function fetchProducts() {
            const response = await getProducts(searchQuery)
            setProducts(response.products)
            setResults(response.products.length)
        }

        fetchProducts()
    }, [searchQuery]);

    return(
        <SafeAreaView style={styles.container}>
            <Searchbar
                style={styles.searchBar}
                onChangeText={onChangeSearch}
                placeholder='Search'
                value={searchQuery}
            />
            <View style={styles.header}>
                <Text style={styles.headerText}>{`${results} RESULTS`}</Text>
            </View>
            <Divider/>

            <FlatList
                numColumns={2}
                data={products}
                renderItem={({item}) => <Item product={item}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: "#EDEFEE",
    },
    searchBar:{
        marginVertical: 8,
        backgroundColor: "white"
    },
    header: {
        fontSize: 16,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        marginHorizontal: 8,
    },
    headerText: {
        color: "#bdbdbd",
        fontWeight: 'bold'
    },
    item: {
        flex: 1,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    productImg: {
        width: 185,
        height: 250,
        marginVertical: 8
    },
    brand:{
        fontWeight: 'bold',
        color: theme.colors.primary
    },
    title: {
      fontSize: 14,
    },
});

export default ProductList;