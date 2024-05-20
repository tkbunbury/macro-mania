import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: '100%'}}>
            <View className="w-full justify-center items-center min-h-[85vh] px-4">
                <Image
                    source={images.logo_2}
                    className="w-[340px] h-[94px]"
                    resizeMode="contain"    
                />

                <Image
                    source={images.cards_2}
                    className="max-w-[380px] w-full h-[300px]"
                    resizeMode="contain"
                />

                <View className="relative mt-5">
                    <Text className="text-3xl text-white font-bold text-center">
                        Optimize your Nutrition with <Text className="text-secondary-200">Macro Mania</Text>
                    </Text>

                    <Image
                        source={images.path}
                        className="w-[156px] h-[18px] absolute -bottom-3 right-2"
                        resizeMode="contain"
                    />
                </View>

                <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                    Fuel your body with precision: unlock your full potential with Macro Mania.
                </Text>

                <CustomButton
                    title="Continue with Email"
                    handlePress={() => router.push('/sign-in')}
                    containerStyles="w-full mt-7"
                />
            </View>
        </ScrollView>

        <StatusBar backgroundColor='#161622' style='light' />

     
    </SafeAreaView>
  );
}



