import { ActivityIndicator } from 'react-native'

export function Loading () {
  return (
    <ActivityIndicator className='flex-1 bg-zinc-100 items-center justify-center text-base-gray-500' />
  )
}
