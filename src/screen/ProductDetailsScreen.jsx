// import React, {useState} from 'react';
// import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import LinearGradient from "react-native-linear-gradient";
// import Header from "../components/Header";
//
// const ProductDetailsScreen = () => {
//
//     const imageUrl = "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png";
//     const sizes = ["S", "M", "L", "XL"]
//     const colorsArray = [
//         "#91a1b0",
//         "#b11d1d",
//         "#1f44a3",
//         "#9f632a",
//         "#1d752b",
//         "#000000"
//     ]
//     const [selectedSize, setSelectedSize] = useState(null);
//
//     return (
//         <LinearGradient
//             colors={['#FDF0F3', '#FFFBFC']}
//             style={styles.container}
//         >
//             <View style={styles.headerContainer}>
//                 <Header/>
//             </View>
//             <Image source={{uri: imageUrl}} style={styles.coverImage}/>
//             <View style={styles.contentContainer}>
//                 <Text style={styles.title}>Winter Coat</Text>
//                 <Text style={[styles.title, styles.price]}>$65.9</Text>
//             </View>
//             {/*---Size Container---*/}
//             <Text style={styles.sizeText}></Text>
//             <View style={styles.sizeContainer}>
//                 {sizes.map((size) => {
//                     return (
//                         <TouchableOpacity
//                             style={styles.sizeValueContainer}
//                             onPress={() => {
//                                 setSelectedSize(size)
//                             }}
//                         >
//                             <Text style={[styles.sizeValue, selectedSize == size && {color: "#e55b5b"}]}>{size}</Text>
//                             <Text style={[styles.title, styles.colorText]}>Colors</Text>
//                             <View style={styles.colorContainer}>
//                                 {colorsArray.map((color)=>{
//                                     return(
//                                         <View style={[styles.circleBorder,{borderColor: color}]}>
//                                             <View style={[styles.circle, {backgroundColor: color}]} />
//                                         </View>
//                                     )
//                                 })}
//                             </View>
//                         </TouchableOpacity>
//                     )
//                 })}
//             </View>
//         </LinearGradient>
//     );
// };
//
// export default ProductDetailsScreen;
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     headerContainer: {
//         padding: 20,
//     },
//     coverImage: {
//         width: "100%",
//         height: 420,
//     },
//     contentContainer: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         marginHorizontal: 20,
//         marginVertical: 20,
//     },
//     title: {
//         fontSize: 20,
//         color: "#444444",
//         fontWeight: "500",
//     },
//     price: {
//         color: "#4d4c4c",
//     },
//     sizeText: {
//         marginHorizontal: 20,
//     },
//     sizeContainer: {
//         flexDirection: "row",
//         marginHorizontal: 20,
//     },
//     sizeValueContainer: {
//         height: 36,
//         width: 36,
//         borderRadius: 18,
//         backgroundColor: "#ffffff",
//         justifyContent: "center",
//         alignItems: "center",
//         marginHorizontal: 10,
//     },
//     sizeValue: {
//         fontSize: 18,
//         fontWeight: "600",
//     },
//     colorText: {
//         marginHorizontal: 20,
//         marginTop: 10,
//     },
//     colorContainer: {
//         flexDirection: "row",
//         marginHorizontal: 20,
//         alignItems: "center",
//     },
//     circle : {
//         height: 36,
//         width: 36,
//         borderRadius: 18,
//     },
//     circleBorder: {
//         borderWidth: 2,
//         marginHorizontal: 5,
//         height: 48,
//         width: 48,
//         borderRadius: 24,
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });

import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import {useRoute} from "@react-navigation/native";

const ProductDetailsScreen = () => {

    const imageUrl = "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png";
    const sizes = ["S", "M", "L", "XL"];
    const colorsArray = [
        "#91a1b0",
        "#b11d1d",
        "#1f44a3",
        "#9f632a",
        "#1d752b",
        "#000000"
    ];
    const route = useRoute()
    const item = route.params.item;
    console.log(route.params.item)
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    return (
        <LinearGradient
            colors={['#FDF0F3', '#FFFBFC']}
            style={styles.container}
        >
            <View style={styles.headerContainer}>
                <Header/>
            </View>
            <Image source={{uri: item.image}} style={styles.coverImage}/>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={[styles.title, styles.price]}>${item.price}</Text>
            </View>

            {/*---Size Container---*/}
            <Text style={styles.sizeText}></Text>
            <View style={styles.sizeContainer}>
                {sizes.map((size, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={styles.sizeValueContainer}
                            onPress={() => setSelectedSize(size)}
                        >
                            <Text style={[styles.sizeValue, selectedSize == size && {color: "#e55b5b"}]}>{size}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/*---Color Container---*/}
            <Text style={[styles.title, styles.colorText]}>Colors</Text>
            <View style={styles.colorContainer}>
                {colorsArray.map((color, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.circleBorder, selectedColor === color && {borderColor: color, borderWidth: 2}]}
                        onPress={()=>{setSelectedColor(color)}}
                    >
                        <View style={[styles.circle, {backgroundColor: color}]} />
                    </TouchableOpacity>
                ))}
            </View>

        {/*-----button container-----*/}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        padding: 20,
    },
    coverImage: {
        width: "100%",
        height: 420,
    },
    contentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        // marginVertical: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        color: "#444444",
        fontWeight: "500",
    },
    price: {
        color: "#4d4c4c",
    },
    sizeText: {
        // marginHorizontal: 20,
    },
    sizeContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
    },
    sizeValueContainer: {
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    sizeValue: {
        fontSize: 18,
        fontWeight: "600",
    },
    colorText: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    colorContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
        alignItems: "center",
    },
    circle : {
        height: 36,
        width: 36,
        borderRadius: 18,
    },
    circleBorder: {
        marginHorizontal: 5,
        height: 48,
        width: 48,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#e96e6e",
        padding: 10,
        margin: 10,
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: "600",
        color: "white",
        textAlign: "center",
    },
});
