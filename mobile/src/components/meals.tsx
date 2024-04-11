import { Text, View, ScrollView } from 'react-native'

import { Button } from './button'
import { DayList } from './dayList'

export function Meals () {
  return (
    <View className='gap-4 justify-between mb-8'>
      <Text>Refeições</Text>

      <Button title='Nova refeição' hasIcon />

      <ScrollView className='mb-64' contentContainerClassName='pb-8' showsHorizontalScrollIndicator={false}>
        <DayList date='11.04.2024' />
        <DayList date='10.04.2024' />
        <DayList date='09.04.2024' />
      </ScrollView>
    </View>
  )
}
