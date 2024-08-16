/* eslint-disable prettier/prettier */
import React from 'react';
import { ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG, ZegoMenuBarButtonName } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import { StyleSheet, View } from 'react-native';
import { ZegoLayoutMode, ZegoViewPosition } from '@zegocloud/zego-uikit-rn';
import { APP_ID, APP_SIGN } from '../keys';

export default function OneToOneCallPage(props) {

    const userID = props.route.params.name;
    const userName = props.route.params.name;
    const callID = props.route.params.id;

    const appID = 1215230849;
    const appSign = '9436373ba74766e138fc38594dc8e4cb692383f9131201b4245270b629bbd726';

    const onEndCall = (ID, reason, duration) => {
        console.log('ON END CALL ', ID, reason, duration);
        props.navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={APP_ID}
                appSign={APP_SIGN}
                userID={userID}
                userName={userName}
                callID={callID}

                config={{
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { props.navigation.navigate('Home') },
                    onCallEnd: onEndCall,
                    layout: {
                        mode: ZegoLayoutMode.pictureInPicture,
                        config: {
                            switchLargeOrSmallViewByClick: true,
                            smallViewBorderRadius: 10,
                            smallViewPosition: ZegoViewPosition.topRight,
                            smallViewSize: { width: 85, height: 151 },
                        },
                    },
                    turnOnCameraWhenJoining: false,
                    turnOnMicrophoneWhenJoining: false,
                    useSpeakerWhenJoining: true,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
})