import { Text, View } from 'react-native'
import { Link, usePathname} from 'expo-router'
import { Feather } from '@expo/vector-icons'

import { colors } from '@/styles/colors'

import { VALUE } from '@/app'

type Props = {
  value: number
}

export function Percent ({ value }: Props) {
  const pathname = usePathname()

  return (
    <View
      className={`${
        VALUE > 50 ? 'bg-brand-green-light' : 'bg-brand-red-light'
      } w-full h-28  rounded-lg p-4 items-center gap-1`}
    >
      {pathname === '/stats' ? (
        <Link href='/' className='self-start mb-1'>
          <Feather
            name='arrow-left'
            size={24}
            color={colors.brand.green.dark}
          />
        </Link>
      ) : (
        <Link href='/stats' className='self-end -mb-6'>
          <Feather
            name='arrow-up-right'
            size={24}
            color={colors.brand.green.dark}
          />
        </Link>
      )}

      <Text className='text-base-gray-700 text-[2rem] font-bold'>{value}%</Text>
      <Text className='text-base-gray-500'>das refeições dentro da dieta</Text>
    </View>
  )
}
