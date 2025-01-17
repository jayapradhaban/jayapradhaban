import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

const SettingsLayout = () => {
    return (
        <Stack>
          <Stack.Screen
            name="settings"
            options={{
              title: 'Settings',
              headerLargeTitle: true,
              headerShadowVisible: false,
              headerShown:false,
              headerStyle: { backgroundColor: Colors.background },
    
              headerSearchBarOptions: {
                placeholder: 'Search',
              },
            }}
          />
        </Stack>
      );
    };

export default SettingsLayout