import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";


const Room = () => {
  const { roomId } = useParams();
  // console.log(roomId);

  function randomID(len) {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }

  let myMeeting = async (element) => {
    const appID = parseInt(import.meta.env.VITE_APPID);
    const serverSecret = import.meta.env.VITE_SERVERSECRET;
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  randomID(5), randomID(5));
    // Create instance object from Kit Token.
 const zp = ZegoUIKitPrebuilt.create(kitToken);
 console.log(zp);

 zp.joinRoom({
  container: element,
  scenario:{
    mode: ZegoUIKitPrebuilt.VideoConference,
  },
  sharedLinks:[{
  name: "Copy Link",
  url: `http://localhost:5174/room/${roomId}`
  }]
});

  };

  return (

    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}>

      </div>
    )
  
  

};

export default Room;
