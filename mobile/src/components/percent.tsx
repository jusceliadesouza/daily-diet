import { Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/styles/colors'

export function Percent ({ value }: { value: number }) {
  return (
    <View
      className={`${
        value > 50 ? 'bg-brand-green-light' : 'bg-brand-red-light'
      } w-full h-28  rounded-lg p-4 items-center gap-1`}
    >
      <Feather
        name='arrow-up-right'
        size={24}
        color={colors.brand.green.dark}
        className='self-end -mb-6'
      />
      <Text className='text-base-gray-700 text-[2rem] font-bold'>{value}%</Text>
      <Text className='text-base-gray-500'>das refeições dentro da dieta</Text>
    </View>
  )
}
