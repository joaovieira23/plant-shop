import { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList, TextInput, Image, TouchableOpacity, Dimensions, ImageSourcePropType } from 'react-native';

import COLORS from '../../consts/colors';
import FONTS from '../../consts/fonts';

import { ShoppingCart } from "phosphor-react-native";
import { HeartStraight } from "phosphor-react-native";
import { MagnifyingGlass } from "phosphor-react-native";
import { TextAlignLeft } from "phosphor-react-native";

import plants from '../../consts/plants';
const width = Dimensions.get('screen').width/2-30;

interface PropsPlans {
    id: number;
    name: string,
    price: string,
    like: boolean,
    img: ImageSourcePropType,
    about: string;
}

const HomeScreen = ({ navigation }) => {
    const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

    const [categoryIndex, setCategoryIndex] = useState(0);

    const CategoryList = () => {
        return <View style={style.categoryContainer}>
            {categories.map((item, i) => (
                <TouchableOpacity 
                    key={i} 
                    onPress={() => setCategoryIndex(i)}
                    activeOpacity={0.8}
                >
                    <Text style={[style.categoryText, categoryIndex == i && style.categoryTextSelected]}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    };

    const Card = ({ plant }: { plant: PropsPlans}) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("Details", plant)}>
                <View style={style.card}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={{ 
                            width: 30, 
                            height: 30, 
                            borderRadius: 15, 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            backgroundColor: plant.like ? 'rgba(245, 42, 42, 0.2)' : 'rgba(255, 255, 255, 0.2)'
                        }}>
                            <HeartStraight size={18} color={plant.like ? COLORS.red : COLORS.dark} />
                        </View>
                    </View>
                        <View style={{ height: 100, alignItems: 'center' }}>
                            <Image style={{ flex: 1, resizeMode: 'contain' }} source={plant.img} />
                        </View>
                        <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10, fontFamily: FONTS.PoppinsLight }}>
                            {plant.name}
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 5 }}>
                            <Text style={{ fontSize: 19, fontFamily: FONTS.PoppinsBold }}>${plant.price}</Text>
                            <View style={{ 
                                height: 25, 
                                width: 25, 
                                backgroundColor: COLORS.green, 
                                borderRadius: 5, 
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{ fontSize: 18, color: COLORS.white, fontWeight: 'bold' }}>+</Text>
                            </View>
                        </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <View style={{ paddingHorizontal: 20 }}>
                <View style={style.header}>
                    <View>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', fontFamily: FONTS.PoppinsSemiBold }}>Welcome to</Text>
                        <Text style={{ fontSize: 38, fontWeight: 'bold', fontFamily: FONTS.PoppinsBold, color: COLORS.green }}>
                            Plant Shop
                        </Text>
                    </View>
                    <ShoppingCart size={28} />
                </View>
                <View style={{ marginTop: 30, flexDirection: 'row' }}>
                    <View style={style.searchContainer}>
                        <MagnifyingGlass size={26} style={{ marginLeft: 20 }} />
                        <TextInput placeholder='Search' style={style.input} />
                    </View>
                    <View style={style.sortBtn}>
                        <TextAlignLeft size={30} color={COLORS.white} />
                    </View>
                    </View>
            <CategoryList />
            <FlatList 
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 300
                }}
                numColumns={2} 
                data={plants} 
                renderItem={({ item }) => <Card plant={item}  />}
            />
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        fontFamily: FONTS.PoppinsSemiBold,
        color: COLORS.dark,
        flex: 1
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: COLORS.green,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    categoryText: {
        fontFamily: FONTS.PoppinsMedium,
        fontSize: 16,
        color: 'grey',
        fontWeight: 'bold'
    },
    categoryTextSelected: {
        color: COLORS.green,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: COLORS.green,
    },
    card: {
        height: 225,
        backgroundColor: COLORS.light,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15
    }
})

export default HomeScreen;