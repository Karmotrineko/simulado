import { StyleSheet, View, Text, Image } from "react-native";

function Carta1({texto}){
    return(
        <View style={styles.corpo}>
            <Text style={styles.texto}>
                {texto}
            </Text>
            <Image style={styles.img} source={{uri:'https://magic-island.weebly.com/uploads/1/9/3/3/19337587/259755399.png?228' }} />
                <View style={styles.stats}>
                    <Text style={styles.desc}>Dano : 100</Text>
                    <Text style={styles.desc}>Mana : 300</Text>
                    <Text style={styles.desc}>Valor : 500</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    texto: {
        fontSize: '30px',
        color: 'white',
        fontWeight: 'bold',
        textShadowRadius: '15px',
        textShadowColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Trojan Pro Bold',
        marginBottom: 40
    },
    img: {
        width: '100%',
        height: 400
    },
    stats: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around"
    },
    desc: {
        fontWeight: 'bold',
        margin: 10

    },
    corpo: {
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default Carta1;