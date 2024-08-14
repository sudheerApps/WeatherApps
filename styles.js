import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#f8055e',
    },
    centeredContent: {
        alignItems: 'center',
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#11d7ef',
        marginBottom: 20,
    },
    titles:{
       fontSize:12,
       color:'#9d9698',
    },
    
    input: {
        height: 50,
        width: '80%',
        borderColor: '#11d7ef',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: '#11d7ef',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#11d7ef',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        marginLeft: 10,
        color:'#11d7ef',
    },
    weatherInfo: {
        marginTop: 20,
        alignItems: 'center',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#11d7ef',
        marginTop: 10,
    },
    subheading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#11d7ef',
        marginTop: 10,
    },
    weatherText: {
        color: '#11d7ef',
        fontSize: 16,
        marginBottom: 8,
    },
});
