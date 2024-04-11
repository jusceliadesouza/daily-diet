import { View, Text } from 'react-native'
import { Meal } from './meal'

type Props = {
  date: string
}

export function DayList ({ date }: Props) {
  return (
    <View className='flex-1 gap-4 mb-8'>
      <Text className='font-bold text-lg text-base-gray-700'>{date}</Text>

      <Meal title='X-Tudo' time='20:00' status='out' />
      <Meal title='Whey protein com leite' time='16:00' status='in' />
      <Meal title='Salada cesar com frango' time='12:30' status='in' />
      <Meal title='Vitamina de banana com morango' time='09:30' status='in' />
    </View>
  )
}
