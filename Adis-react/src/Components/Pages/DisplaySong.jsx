import React, { useState } from 'react'
import { Footer,Play,ProgressBarContainer,Time,RangeInput,Containers,StyledAiFillPlayCircle,StyledIoPauseCircle} from '../Style/DisplaySong.styled'
const DisplaySong = () => {
  const [playing, setPlaying]=useState(true)

  const toogle = ()=>{
    setPlaying(!playing)
  }
  return (
    <Footer>
     <Play>
      <Containers onClick={toogle}>
      {
        playing? <StyledAiFillPlayCircle />:<StyledIoPauseCircle />
      }
      </Containers>
     </Play>
     <ProgressBarContainer>
      <Time className="current"></Time>
      <RangeInput type="range" />
      <Time>00:00</Time>
    </ProgressBarContainer>
    
    </Footer>
  )
}

export default DisplaySong