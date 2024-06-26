import { Meals } from '@/components/meals'
import { Percent } from '@/components/percent'
import { View, Image, Text } from 'react-native'

export const VALUE = 90.86

export default function Home () {
  return (
    <View className='flex-1 bg-base-gray-100 text-base-gray-700 px-6 py-8 gap-9'>
      <View className='w-full flex-row justify-between'>
        <Image source={require('@/assets/logo.png')} resizeMode='cover' />

        <Image
          className='h-10 w-10 border-2 border-base-gray-600 rounded-full'
          source={{ uri: 'https://github.com/jusceliadesouza.png' }}
          resizeMode='cover'
        />
      </View>

      <Percent value={VALUE}/>

      <Meals />
    </View>
  )
}
