import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Newone,{screenOptions as kollam } from './Newone';
import Newtwo , {screenOptions as newtwoscreen} from './Newtwo';
import Support,{screenOptions as nSupportscreen}  from './Support';
import FavoritesScreen from './FavoritesScreen';
import NewFaverite from './NewFaverite';

    const ScreenRoute = createStackNavigator();

    // eslint-disable-next-line no-unused-vars
    const ScreenRouteInner = ({ navigation }) => (

        <ScreenRoute.Navigator >
            <ScreenRoute.Screen name="Newone" component={Newone} options = {kollam} />
            <ScreenRoute.Screen name="Support" component={Support} options = {nSupportscreen} />
            <ScreenRoute.Screen name="Newtwo" component={Newtwo} options = {newtwoscreen} />
            <ScreenRoute.Screen name="FavoritesScreen" component={FavoritesScreen} />
            <ScreenRoute.Screen name="NewFaverite" component={NewFaverite} />



            </ScreenRoute.Navigator>

    );

    export default ScreenRouteInner;
