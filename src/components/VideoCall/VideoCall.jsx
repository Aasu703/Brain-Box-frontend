// src/components/VideoCall.jsx
import React, { useEffect, useRef } from 'react';

const VideoCall = ({ stopCall }) => {
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    let localStream;

    useEffect(() => {
        // Function to start the video call
        const startCall = async () => {
            try {
                localStream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true,
                });
                localVideoRef.current.srcObject = localStream;
            } catch (error) {
                console.error('Error accessing media devices.', error);
            }
        };

        startCall();

        // Cleanup function to stop media streams
        return () => {
            if (localStream) {
                localStream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    return (
        <div className="video-call">
            <video ref={localVideoRef} autoPlay muted />
            <video ref={remoteVideoRef} autoPlay />
            <button onClick={stopCall}>End Call</button>
        </div>
    );
};

export default VideoCall;