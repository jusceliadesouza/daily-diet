import '@/styles/global.css'

import { Slot } from 'expo-router'
import { StatusBar } from 'react-native'

import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold
} from '@expo-google-fonts/nunito'

import { Loading } from '@/components/loading'

export default function Layout () {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      {fontsLoaded ? <Slot /> : <Loading />}
    </>
  )
}
