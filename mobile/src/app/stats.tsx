import { Text, View } from 'react-native'

import { Percent } from '@/components/percent'
import { StatsContainer } from '@/components/stats'

import { VALUE } from '@/app'

export default function Stats () {
  return (
    <View className='flex-1 bg-base-gray-100 text-base-gray-700'>
      <View
        className={`${
          VALUE > 50 ? 'bg-brand-green-light' : 'bg-brand-red-light'
        } w-full h-52 items-center justify-center rounded-lg p-4 gap-1`}
      >
        <Percent value={VALUE} />
      </View>

      <View className='flex-col h-screen rounded-3xl -mt-3 bg-base-gray-100 px-6 py-8 items-center'>
        <Text className='font-bold text-sm'>Estatísticas gerais</Text>

        <StatsContainer />
      </View>
    </View>
  )
}
