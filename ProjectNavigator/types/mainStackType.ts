import {NativeStackNavigationProp} from '@react-navigation/native-stack'

export type propsMainNavigationStack={
    params: any;
    Home: undefined;
    About?: {
        name: string
        cor?: string
    }
}

export type propStack = NativeStackNavigationProp<propsMainNavigationStack>