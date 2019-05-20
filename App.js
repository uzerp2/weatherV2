// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });





// /////////////////////////////////////////////////////////////////////////////////////////////
// // 1-ый урок



// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });




// /////////////////////////////////////////////////////////////////////////////////////////////
// // 2-ый урок

// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   KeyboardAvoidingView,
//   Platform,
//   TextInput,
// } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <KeyboardAvoidingView
//         style={styles.container}
//         behavior="padding"
//       >
//         <Text style={[styles.largeText, styles.textStyle]}>
//           San Francisco
//         </Text>
//         <Text style={[styles.smallText, styles.textStyle]}>
//           Light Cloud
//         </Text>
//         <Text style={[styles.largeText, styles.textStyle]}>24°</Text>

//         <TextInput
//           autoCorrect={false}
//           placeholder="Search any city"
//           placeholderTextColor="white"
//           style={styles.textInput}
//           clearButtonMode="always"
//         />
//       </KeyboardAvoidingView>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textStyle: {
//     textAlign: 'center',
//     fontFamily:
//       Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
//   },
//   largeText: {
//     fontSize: 44,
//   },
//   smallText: {
//     fontSize: 18,
//   },
//   textInput: {
//     backgroundColor: '#666',
//     color: 'white',
//     height: 40,
//     width: 300,
//     marginTop: 20,
//     marginHorizontal: 20,
//     paddingHorizontal: 10,
//     alignSelf: 'center',
//   },
// });




// /////////////////////////////////////////////////////////////////////////////////////////////
// // 3-ый урок

// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';

// import SearchInput from './src/weather/3/components/SearchInput';

// export default class App extends React.Component {
//   render() {
//     return (
//       <KeyboardAvoidingView
//         style={styles.container}
//         behavior="padding"
//       >
//         <Text style={[styles.largeText, styles.textStyle]}>
//           San Francisco
//         </Text>
//         <Text style={[styles.smallText, styles.textStyle]}>
//           Light Cloud
//         </Text>
//         <Text style={[styles.largeText, styles.textStyle]}>24°</Text>

//         <SearchInput placeholder="Search any city" />
//       </KeyboardAvoidingView>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textStyle: {
//     textAlign: 'center',
//     fontFamily:
//       Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
//   },
//   largeText: {
//     fontSize: 44,
//   },
//   smallText: {
//     fontSize: 18,
//   },
// });






// /////////////////////////////////////////////////////////////////////////////////////////////
// // 4-ый урок

// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   ImageBackground,
//   Text,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';

// import getImageForWeather from './src/weather/utils/getImageForWeather';

// import SearchInput from './src/weather/4/components/SearchInput';

// export default class App extends React.Component {
//   render() {
//     return (
//       <KeyboardAvoidingView
//         style={styles.container}
//         behavior="padding"
//       >
//         <ImageBackground
//           source={getImageForWeather('Clear')}
//           style={styles.imageContainer}
//           imageStyle={styles.image}
//         >
//           <View style={styles.detailsContainer}>
//             <Text style={[styles.largeText, styles.textStyle]}>
//               San Francisco
//             </Text>
//             <Text style={[styles.smallText, styles.textStyle]}>
//               Light Cloud
//             </Text>
//             <Text style={[styles.largeText, styles.textStyle]}>
//               24°
//             </Text>

//             <SearchInput placeholder="Search any city" />
//           </View>
//         </ImageBackground>
//       </KeyboardAvoidingView>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#34495E',
//   },
//   imageContainer: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     width: null,
//     height: null,
//     resizeMode: 'cover',
//   },
//   detailsContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0,0,0,0.2)',
//     paddingHorizontal: 20,
//   },
//   textStyle: {
//     textAlign: 'center',
//     fontFamily:
//       Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
//     color: 'white',
//   },
//   largeText: {
//     fontSize: 44,
//   },
//   smallText: {
//     fontSize: 18,
//   },
// });












// /////////////////////////////////////////////////////////////////////////////////////////////
// // 5-ый урок

// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   ImageBackground,
//   Text,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';

// import getImageForWeather from './src/weather/utils/getImageForWeather';

// import SearchInput from './src/weather/5/components/SearchInput';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       location: 'San Francisco',
//     };
//   }

//   handleUpdateLocation = city => {
//     this.setState({
//       location: city,
//     });
//   };

//   render() {
//     const { location } = this.state;

//     return (
//       <KeyboardAvoidingView
//         style={styles.container}
//         behavior="padding"
//       >
//         <ImageBackground
//           source={getImageForWeather('Clear')}
//           style={styles.imageContainer}
//           imageStyle={styles.image}
//         >
//           <View style={styles.detailsContainer}>
//             <Text style={[styles.largeText, styles.textStyle]}>
//               {location}
//             </Text>
//             <Text style={[styles.smallText, styles.textStyle]}>
//               Light Cloud
//             </Text>
//             <Text style={[styles.largeText, styles.textStyle]}>
//               24°
//             </Text>

//             <SearchInput
//               placeholder="Search any city"
//               onSubmit={this.handleUpdateLocation}
//             />
//           </View>
//         </ImageBackground>
//       </KeyboardAvoidingView>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#34495E',
//   },
//   imageContainer: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     width: null,
//     height: null,
//     resizeMode: 'cover',
//   },
//   detailsContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0,0,0,0.2)',
//     paddingHorizontal: 20,
//   },
//   textStyle: {
//     textAlign: 'center',
//     fontFamily:
//       Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
//     color: 'white',
//   },
//   largeText: {
//     fontSize: 44,
//   },
//   smallText: {
//     fontSize: 18,
//   },
// });






// /////////////////////////////////////////////////////////////////////////////////////////////
// // 6-ый урок

// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   ImageBackground,
//   Text,
//   KeyboardAvoidingView,
//   Platform,
//   ActivityIndicator,
//   StatusBar,
// } from 'react-native';

// import { fetchLocationId, fetchWeather } from './src/weather/utils/api';
// import getImageForWeather from './src/weather/utils/getImageForWeather';

// import SearchInput from './src/weather/6/components/SearchInput';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: false,
//       error: false,
//       location: '',
//       temperature: 0,
//       weather: '',
//     };
//   }

//   componentDidMount() {
//     this.handleUpdateLocation('San Francisco');
//   }

//   handleUpdateLocation = async city => {
//     if (!city) return;

//     this.setState({ loading: true }, async () => {
//       try {
//         const locationId = await fetchLocationId(city);
//         const { location, weather, temperature } = await fetchWeather(
//           locationId,
//         );

//         this.setState({
//           loading: false,
//           error: false,
//           location,
//           weather,
//           temperature,
//         });
//       } catch (e) {
//         this.setState({
//           loading: false,
//           error: true,
//         });
//       }
//     });
//   };

//   render() {
//     const {
//       loading,
//       error,
//       location,
//       weather,
//       temperature,
//     } = this.state;

//     return (
//       <KeyboardAvoidingView
//         style={styles.container}
//         behavior="padding"
//       >
//         <StatusBar barStyle="light-content" />
//         <ImageBackground
//           source={getImageForWeather(weather)}
//           style={styles.imageContainer}
//           imageStyle={styles.image}
//         >
//           <View style={styles.detailsContainer}>
//             <ActivityIndicator
//               animating={loading}
//               color="white"
//               size="large"
//             />

//             {!loading && (
//               <View>
//                 {error && (
//                   <Text style={[styles.smallText, styles.textStyle]}>
//                     Could not load weather, please try a different
//                     city.
//                   </Text>
//                 )}

//                 {!error && (
//                   <View>
//                     <Text
//                       style={[styles.largeText, styles.textStyle]}
//                     >
//                       {location}
//                     </Text>
//                     <Text
//                       style={[styles.smallText, styles.textStyle]}
//                     >
//                       {weather}
//                     </Text>
//                     <Text
//                       style={[styles.largeText, styles.textStyle]}
//                     >
//                       {`${Math.round(temperature)}°`}
//                     </Text>
//                   </View>
//                 )}

//                 <SearchInput
//                   placeholder="Search any city"
//                   onSubmit={this.handleUpdateLocation}
//                 />
//               </View>
//             )}
//           </View>
//         </ImageBackground>
//       </KeyboardAvoidingView>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#34495E',
//   },
//   imageContainer: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     width: null,
//     height: null,
//     resizeMode: 'cover',
//   },
//   detailsContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0,0,0,0.2)',
//     paddingHorizontal: 20,
//   },
//   textStyle: {
//     textAlign: 'center',
//     fontFamily:
//       Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
//     color: 'white',
//   },
//   largeText: {
//     fontSize: 44,
//   },
//   smallText: {
//     fontSize: 18,
//   },
// });






/////////////////////////////////////////////////////////////////////////////////////////////
// итог

import React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

import { fetchLocationId, fetchWeather } from './src/weather/utils/api';
import getImageForWeather from './src/weather/utils/getImageForWeather';

import SearchInput from './src/weather/components/SearchInput';

export default class App extends React.Component {
  state = {
    loading: false,
    error: false,
    location: '',
    temperature: 0,
    weather: '',
  };

  componentDidMount() {
    this.handleUpdateLocation('San Francisco');
  }

  handleUpdateLocation = async city => {
    if (!city) return;

    this.setState({ loading: true }, async () => {
      try {
        const locationId = await fetchLocationId(city);
        const { location, weather, temperature } = await fetchWeather(
          locationId,
        );

        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature,
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
    const {
      loading,
      error,
      location,
      weather,
      temperature,
    } = this.state;

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={getImageForWeather(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>
            <ActivityIndicator
              animating={loading}
              color="white"
              size="large"
            />

            {!loading && (
              <View>
                {error && (
                  <Text style={[styles.smallText, styles.textStyle]}>
                    Could not load weather, please try a different
                    city.
                  </Text>
                )}

                {!error && (
                  <View>
                    <Text
                      style={[styles.largeText, styles.textStyle]}
                    >
                      {location}
                    </Text>
                    <Text
                      style={[styles.smallText, styles.textStyle]}
                    >
                      {weather}
                    </Text>
                    <Text
                      style={[styles.largeText, styles.textStyle]}
                    >
                      {`${Math.round(temperature)}°`}
                    </Text>
                  </View>
                )}

                <SearchInput
                  placeholder="Search any city"
                  onSubmit={this.handleUpdateLocation}
                />
              </View>
            )}
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});
