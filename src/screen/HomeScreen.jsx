import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import Fontisto from "react-native-vector-icons/Fontisto";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import data from "../data/data.json";

const HomeScreen = () => {

    const categories = ["Trending Now", "All", "New", "Mens", "Womens"]

    const [products, setProducts] = useState(data.products)
    const [selectedCategory, setSelectedCategory] = useState("Mens");
    const [isLike, setIsLike] = useState(false)

    const handleLiked = (item) => {
        const newProducts = products.map((prod)=>{
            if(prod.id === item.id){
                return {
                    ...prod,
                    isLiked: true,
                }
            }
            return prod;
        })
        setProducts(newProducts);
    }

    return (

        <LinearGradient
            colors={['#FDF0F3', '#FFFBFC']}
            style={styles.container}
        >
            <Header/>
            {/*-----Product list-------*/}
            <FlatList
                numColumns={2}
                ListHeaderComponent={
                    <>
                        <Text style={styles.matchText}>Match your Style</Text>
                        {/*--------input container-----*/}
                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Fontisto name={"search"} size={26} color={"#C0C0C0"}/>
                            </View>
                            <TextInput style={styles.textInput} placeholder="Search"/>
                        </View>
                        {/*---------category section------------*/}
                        <FlatList
                            data={categories}
                            renderItem={({item}) => (
                                <Category
                                    item={item}
                                    selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                                />
                            )}
                            keyExtractor={(item) => item}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </>
                }
                data={products}
                renderItem={({item,index})=>(
                    <ProductCard
                        item={item}
                        handleLiked={handleLiked}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 150,}}
            />
            {/*<View style={{flexDirection: "row",}}>*/}
            {/*    <ProductCard />*/}
            {/*    <ProductCard />*/}
            {/*</View>*/}
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    matchText: {
        fontSize: 28,
        color: "#000000",
        marginTop: 25,
    },
    inputContainer: {
        backgroundColor: "#ffffff",
        height: 48,
        borderRadius: 12,
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 20,
    },
    iconContainer: {
        marginHorizontal: 15,
    },
    textInput: {
        flex: 1,
    },
});

export default HomeScreen;
