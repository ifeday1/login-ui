import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeIn, FadeInUp, FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
  const navigation = useNavigation();
  return (
    <View className=' bg-white h-full w-full'>
      <StatusBar style='light' />
      <Image
        className=' h-full w-full absolute'
        source={require('../assests/images/background.png')}
      />

      {/* lights */}
      <View className=' flex-row justify-around w-full absolute'>
        <Image
          className='h-[225] w-[90]'
          source={require('../assests/images/light.png')}
        />
        <Image
          className='h-[160] w-[65]'
          source={require('../assests/images/light.png')}
        />
      </View>

      {/* title and form */}
      <View className=' h-full w-full flex justify-around pt-48'>
        {/* titke */}
        <View className=' flex items-center'>
          <Text className='text-white  font-bold tracking-wider text-5xl'>
            Sign up
          </Text>
        </View>

        {/* form */}
        <View className=' flex items-center mx-4 space-y-4'>
          <View className=' bg-black/5 p-5 rounded-2xl w-full'>
            <TextInput placeholder='Username' placeholderTextColor={'grey'} />
          </View>

          <View className=' bg-black/5 p-5 rounded-2xl w-full'>
            <TextInput placeholder='Email' placeholderTextColor={'grey'} />
          </View>
          <View className=' bg-black/5 p-5 rounded-2xl w-full mb-3'>
            <TextInput
              placeholder='Password'
              placeholderTextColor={'grey'}
              secureTextEntry
            />
          </View>

          <View className='w-full'>
            <TouchableOpacity className='w-full bg-sky-400 p-3 rounded-2xl mb-3'>
              <Text className=' text-xl font-bold text-white text-center'>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View className=' flex-row justify-center '>
            <Text>Have an account</Text>
            <TouchableOpacity onPress={() => navigation.push('Login')}>
              <Text className=' text-sky-600'>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
