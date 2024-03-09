import React, { FC, useState } from 'react'
import AgoraUIKit, { PropsInterface, layout, TracksConfigure } from "agora-react-uikit";

interface Video2Props {
    setVideoCall : any
}

const Video2: FC<Video2Props> = ({ setVideoCall  }) => {
    const [role, setRole] = useState("TEACHER");
  const rtcProps : PropsInterface = {
    appId: 'cc7bb6b0165a4ee8855a212baa58e50c',
    channel: 'TriNit',
    token: '007eJxTYJj4mIMzX8Noftzdbkmns/n26s2v5tV0mxx6kZQ6pfpL9gcFhuRk86QksyQDQzPTRJPUVAsLU9NEI0OjpMREU4tUU4PksvzXqQ2BjAxbndMYGKEQxGdjCCnK9MssYWAAAJb8ILM=', // use null or skip if using app in testing mode
    role:(role==="TEACHER")?"host":"audience",
    layout: layout.grid,
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return (
    <div className='absolute top-0 left-0 bottom-0 z-10 right-0 flex justify-center items-center bg-[#000000a9]'>
        <div style={{display: 'flex', width: '90vw', height: '90vh', background:"#329AEF"}}>
            <AgoraUIKit
                rtcProps={rtcProps} callbacks={callbacks}

                styleProps={{
                        localBtnContainer: {backgroundColor: '#7272F1'}}
                }
                
                />
        </div>
    </div>
  )
}

export default Video2;