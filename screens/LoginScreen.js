import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FadeIn, FadeOut } from 'react-native-reanimated';
import { AnimatedImage } from 'react-native-reanimated/lib/typescript/reanimated2/component/Image';




export default function LoginScreen() {
  return (
    <View className=' bg-white h-full w-full'>
      <StatusBar style='light' />
      <Animated.Image e
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
      <View className=' h-full w-full flex justify-around pt-40 pb-10'>
        {/* titke */}
        <View className=' flex items-center'>
          <Text className='text-white  font-bold tracking-wider text-5xl'>
            Login
          </Text>
        </View>

        {/* form */}
        <View className=' flex items-center mx-4 space-y-4'>
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
            <Text>Don't have an account</Text>
            <TouchableOpacity>
              <Text className=' text-sky-600'>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
