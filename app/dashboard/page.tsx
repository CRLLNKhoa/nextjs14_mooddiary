import React from 'react'
import Continuous from './components/Continuous '
import Bank from './components/Bank'
import ScoreMood from './components/ScoreMood'
import MoodAndEvent from './components/MoodAndEvent'
import CountTime from './components/CountTime'
import CalanderYear from './components/CalanderYear'

export default function Page() {
  return (
    <div className='flex flex-col gap-4 p-4 pb-12'>
      <Continuous />
      <Bank />
      <ScoreMood />
      <MoodAndEvent />
      <CountTime />
      <CalanderYear />
    </div>
  )
}
