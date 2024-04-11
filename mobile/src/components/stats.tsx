import { Text, View } from 'react-native'

export function StatsContainer () {
  return (
    <View className='flex-col gap-3 mt-8 w-full'>
      <View className='flex-col items-center gap-2 p-4 bg-base-gray-200'>
        <Text className='font-bold text-2xl'>22</Text>
        <Text className=''>melhor sequência de pratos dentro da dieta</Text>
      </View>

      <View className='flex-col items-center gap-2 p-4 bg-base-gray-200'>
        <Text className='font-bold text-2xl'>109</Text>
        <Text className=''>refeiçoes registradas</Text>
      </View>

      <View className='flex-row justify-between gap-3'>
        <View className='w-1/2 flex-col items-center gap-2 p-4 bg-brand-green-light'>
          <Text className='font-bold text-2xl'>99</Text>
          <Text className=''>refeições dentro da dieta</Text>
        </View>

        <View className='w-1/2 flex-col items-center gap-2 p-4 bg-brand-red-light'>
          <Text className='font-bold text-2xl'>10</Text>
          <Text className=''>refeições fora da dieta</Text>
        </View>
      </View>
    </View>
  )
}
