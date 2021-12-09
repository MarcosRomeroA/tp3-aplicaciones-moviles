import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeScreen } from "../screens/HomeScreen";
import { AnimeScreen } from "../screens/AnimeScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {  
    return (
        <>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} initial={true} />
            <Drawer.Screen name="Anime" component={AnimeScreen} /> 
        </Drawer.Navigator>
        </>
    );
};