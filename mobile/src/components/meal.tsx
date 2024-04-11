import { View, Text } from 'react-native'

type Props = {
  time: string
  title: string
  status: 'in' | 'out'
}

export function Meal ({ time, title, status }: Props) {
  return (
    <View className='flex-row justify-between gap-4 border p-4 border-base-gray-300 rounded-md'>
      <View className='flex-row gap-4'>
        <Text className=''>{time}</Text>
        <Text>|</Text>
        <Text className=''>{title}</Text>
      </View>

      <View
        className={`${
          status === 'in' ? 'bg-brand-green-mid' : 'bg-brand-red-mid'
        } rounded-full w-5 h-5`}
      ></View>
    </View>
  )
}
