import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { colors } from '@/styles/colors'

type Props = TouchableOpacityProps & {
  title: string
  isLoading?: boolean
  hasIcon?: boolean
}

export function Button ({
  title,
  isLoading = false,
  hasIcon = false,
  ...rest
}: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} className='flex-row items-center justify-center gap-3 bg-base-gray-600 p-4 rounded-lg' {...rest}>
      {hasIcon && (
        <Feather name='plus' size={24} color={colors.base.gray[100]} />
      )}
      <Text className='text-base-gray-100'>{title}</Text>
    </TouchableOpacity>
  )
}
