import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    KeyboardAvoidingView,
    ActivityIndicator,
    StatusBar,
} from 'react-native';

import { getWeather } from './utils/api';
import getImageForWeather from './utils/getImageForWeather';
import getIconForWeather from './utils/getIconForWeather';

import SearchInput from './SearchInput';
import moment from 'moment';
import {toCamelCase} from 'string-manager';
import {Styles} from "./lib/Styles";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.handleDate = this.handleDate.bind(this);

        this.state = {
            loading: false,
            error: false,
            location: '',
            weather: '',
            temperature: 0,
            wind: '',
        };

    }

    componentDidMount() {
        this.handleUpdateLocation('Jakarta');
    }

    handleDate = date => moment(date).format("hh:mm");

    handleUpdateLocation = async city => {
        if (!city) return;

        this.setState({ loading: true }, async () => {
            try {
                const { location, weather, temperature, wind } = await getWeather(city);

                this.setState({
                    loading: false,
                    error: false,
                    location,
                    weather,
                    temperature,
                    wind,
                });


            } catch (e) {

                this.setState({
                    loading: false,
                    error: true,
                });

            }
        });
    };

    render() {
        const { loading, error, location, weather, temperature, wind} = this.state;

        return (
            <KeyboardAvoidingView style={Styles.container} behavior="padding">

              <StatusBar barStyle="light-content" />

              <ImageBackground
                  source={getImageForWeather(weather.main)}
                  style={Styles.imageContainer}
                  imageStyle={Styles.image}
              >

                <View style={Styles.detailsContainer}>

                  <ActivityIndicator animating={loading} color="white" size="large" />

                    {!loading && (
                        <View>
                            {error && (
                                <Text style={[Styles.smallText, Styles.textStyle]}>
                                    Error cari data kota dengan benar....
                                </Text>
                            )}
                            {!error && (
                                <View>
                                  <Text style={[Styles.iconText, Styles.textStyle]}>
                                      {getIconForWeather(weather.main)}
                                  </Text>
                                  <Text style={[Styles.largeText, Styles.textStyle]}>
                                      {location}
                                  </Text>
                                  <Text style={[Styles.weatherText, Styles.textStyle]}>
                                      {weather.main}, {toCamelCase(weather.description)}
                                  </Text>
                                  <Text style={[Styles.largeText, Styles.textStyle]}>
                                      {`${Math.round(temperature)}°C`}
                                  </Text>
                                  <Text style={[Styles.weatherText, Styles.textStyle]}>
                                      {`${Math.round(wind.speed)} m/s`} | {`${Math.round(wind.deg)}°`}
                                  </Text>
                                </View>
                            )}

                          <SearchInput
                              placeholder="Masukan Nama Kota"
                              onSubmit={this.handleUpdateLocation}
                          />

                            {!error && (
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View>
                                    <Text style={[Styles.iconText, Styles.textStyle]}>
                                        {getIconForWeather(weather.main)}
                                    </Text>
                                    <Text style={[Styles.largeText, Styles.textStyle]}>
                                        {location}
                                    </Text>
                                    <Text style={[Styles.weatherText, Styles.textStyle]}>
                                        {weather.main}, {toCamelCase(weather.description)}
                                    </Text>
                                    <Text style={[Styles.largeText, Styles.textStyle]}>
                                        {`${Math.round(temperature)}°C`}
                                    </Text>
                                    <Text style={[Styles.weatherText, Styles.textStyle]}>
                                        {`${Math.round(wind.speed)} m/s`} | {`${Math.round(wind.deg)}°`}
                                    </Text>
                                    </View>
                                    <View>
                                        <Text style={[Styles.iconText, Styles.textStyle]}>
                                            {getIconForWeather(weather.main)}
                                        </Text>
                                        <Text style={[Styles.largeText, Styles.textStyle]}>
                                            {location}
                                        </Text>
                                        <Text style={[Styles.weatherText, Styles.textStyle]}>
                                            {weather.main}, {toCamelCase(weather.description)}
                                        </Text>
                                        <Text style={[Styles.largeText, Styles.textStyle]}>
                                            {`${Math.round(temperature)}°C`}
                                        </Text>
                                        <Text style={[Styles.weatherText, Styles.textStyle]}>
                                            {`${Math.round(wind.speed)} m/s`} | {`${Math.round(wind.deg)}°`}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={[Styles.iconText, Styles.textStyle]}>
                                            {getIconForWeather(weather.main)}
                                        </Text>
                                        <Text style={[Styles.largeText, Styles.textStyle]}>
                                            {location}
                                        </Text>
                                        <Text style={[Styles.weatherText, Styles.textStyle]}>
                                            {weather.main}, {toCamelCase(weather.description)}
                                        </Text>
                                        <Text style={[Styles.largeText, Styles.textStyle]}>
                                            {`${Math.round(temperature)}°C`}
                                        </Text>
                                        <Text style={[Styles.weatherText, Styles.textStyle]}>
                                            {`${Math.round(wind.speed)} m/s`} | {`${Math.round(wind.deg)}°`}
                                        </Text>
                                    </View>
                                </View>
                            )}

                        </View>
                    )}
                </View>
              </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}