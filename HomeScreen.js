import React from 'react';
import { Platform, Text, Linking, View, TouchableOpacity } from 'react-native';
import DeviceInfo from 'react-native-device-info';


class HomeScreen extends React.Component {
    static navigationOptions = { // A
        title: 'Home',
    };
    componentDidMount() { // B
        if (Platform.OS === 'android') {
            Linking.getInitialURL().then(url => {
                this.navigate(url);
            });
        } else {
            Linking.addEventListener('url', this.handleOpenURL);
        }
    }

    componentWillUnmount() { // C
        Linking.removeEventListener('url', this.handleOpenURL);
    }
    handleOpenURL = (event) => { // D
        console.log("\n\nasdfasf")
        // this.navigate(event.url);
    }
    navigate = (url) => { // E
        const { navigate } = this.props.navigation;
        const route = url.replace(/.*?:\/\//g, '');
        const id = route.match(/\/([^\/]+)\/?$/)[1];
        const routeName = route.split('/')[0];

        if (routeName === 'people') {
            navigate('People', { id, name: 'chris' })
        };
    }

    getDevice = () => {
        let deviceId = DeviceInfo.getDeviceId();
        console.log("deviceId", deviceId)
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Hello from Home!</Text>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity style={{borderWidth: 1, padding : 10}} onPress={() => this.getDevice()}>
                        <Text>get Device</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
export default HomeScreen;