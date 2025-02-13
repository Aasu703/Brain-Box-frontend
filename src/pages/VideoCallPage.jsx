import React, { useEffect, useRef } from 'react';

const VideoCallPage = () => {
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    let localStream;

    useEffect(() => {
        const startCall = async () => {
            try {
                localStream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true,
                });
                localVideoRef.current.srcObject = localStream;

                // Here, you would typically connect to other peers in a real application
            } catch (error) {
                console.error('Error accessing media devices.', error);
                alert("Permission denied. Unable to access camera and microphone.");
            }
        };

        startCall();

        return () => {
            if (localStream) {
                localStream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const endCall = () => {
        if (localStream) {
            localStream.getTracks().forEach(track => track.stop());
        }
        window.close(); // Close the window after ending the call
    };

    return (
        <div style={styles.container}>
            <h2>Video Call</h2>
            <div style={styles.videoGrid}>
                <video
                    ref={localVideoRef}
                    autoPlay
                    muted
                    style={styles.localVideo}
                />
                <video
                    ref={remoteVideoRef}
                    autoPlay
                    style={styles.remoteVideo}
                />
            </div>
            <button onClick={endCall} style={styles.endCallButton}>
                End Call
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    videoGrid: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    localVideo: {
        width: '300px',
        height: 'auto',
        border: '2px solid #0078d4',
        borderRadius: '8px',
        marginRight: '10px',
    },
    remoteVideo: {
        width: '600px',
        height: 'auto',
        border: '2px solid #0078d4',
        borderRadius: '8px',
    },
    endCallButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#ff4d4d',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

export default VideoCallPage;