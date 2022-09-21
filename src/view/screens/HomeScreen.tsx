import { View, StyleSheet, Text, SafeAreaView, TextInput } from 'react-native';
import COLORS from '../../consts/colors';
import { ShoppingCart } from "phosphor-react-native";
import { MagnifyingGlass } from "phosphor-react-native";
import { TextAlignLeft } from "phosphor-react-native";

const HomeScreen = () => {
    const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

    const CategoryList = () => {
        return <View style={style.categoryContainer}>
            {categories.map((item, i) => (
                <Text>{item}</Text>
            ))}
        </View>
    }

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <View style={{ paddingHorizontal: 20 }}>
                <View style={style.header}>
                    <View>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome to</Text>
                        <Text style={{ fontSize: 38, fontWeight: 'bold', color: COLORS.green }}>
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
        fontWeight: 'bold',
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
    }
})

export default HomeScreen;