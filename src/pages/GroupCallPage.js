/* eslint-disable prettier/prettier */
import React from 'react';
import { ZegoUIKitPrebuiltCall, GROUP_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import { StyleSheet, View } from 'react-native';
import { ZegoLayoutMode } from '@zegocloud/zego-uikit-rn';
import { APP_ID, APP_SIGN } from '../keys';

export default function GroupCallPage(props) {

    const userID = props.route.params.name;
    const userName = props.route.params.name;
    const callID = props.route.params.id;

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
                    ...GROUP_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { props.navigation.navigate('Home') },
                    onCallEnd: onEndCall,
                    layout: {
                        mode: ZegoLayoutMode.gallery,
                        config: {
                            addBorderRadiusAndSpacingBetweenView: false
                        }
                    }
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