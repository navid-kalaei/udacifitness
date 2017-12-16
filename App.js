import React from 'react';
import {View, Text, Slider} from 'react-native';
import AddEntry from './components/AddEntry'
import History from './components/History'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {

    state = {
        value: 0
    }

    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={{flex: 1}}>
                    <History/>
                </View>
            </Provider>
        );
    }
}