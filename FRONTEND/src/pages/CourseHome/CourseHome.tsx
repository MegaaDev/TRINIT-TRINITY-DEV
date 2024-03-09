import React, { FC, useEffect, useState } from 'react';
import {
  AgoraRTCProvider,
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRTCClient,
  useRemoteAudioTracks,
  useRemoteUsers,
  RemoteUser,
  LocalVideoTrack,
} from 'agora-rtc-react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import Videos from '../Videos/Videos';
import Video2 from '../Video2/Video2';
import ProductWorkflow from '../../components/product-workflow/productWorkflow';

interface CourseHomeProps {}

const CourseHome: FC<CourseHomeProps> = ({}) => {
  const client = useRTCClient(
    AgoraRTC.createClient({ codec: 'vp8', mode: 'rtc' })
  );
  const [channelName, setChannelName] = useState('test');
  const [AppID, setAppID] = useState('90c9031aa6a44528b4a15f9342571826');
  const [token, setToken] = useState(null);
  const [inCall, setInCall] = useState(false);

  useEffect(() => {
    console.log(inCall);
  }, [inCall]);

  return (
    <div>
      CourseHome
      {!inCall ? (
        <button
          className="mt-[25px] text-[16px] h-[40px] flex justify-center items-center text-white p-3 bg-[#318CE7] hover:bg-[#43a0fc] active:bg-[#3176bb] transition-all rounded-md"
          onClick={() => {
            setInCall(true);
          }}
        >
          Join Call
        </button>
      ) : (
        <div className="w-[30vw] h-[30vh]">
          {/* <AgoraRTCProvider client={client}> */}
          {/* <Videos channelName={channelName} AppID={AppID} token={token} /> */}
          <Video2 setVideoCall={setInCall} />
          {/* <ProductWorkflow /> */}
          <br />
          <br />
          {/* <button onClick={() => setInCall(false)}>End Call</button> */}
          {/* </AgoraRTCProvider> */}
        </div>
      )}
    </div>
  );
};

export default CourseHome;
