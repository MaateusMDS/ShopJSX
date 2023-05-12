import { useEffect } from "react"
import { setData } from "../../context/Data"

export const Logoff = ({navigation}) => {
    useEffect(() => {
        const findData = (value) => {
            value.login = false
            setData('user', value)
            navigation.navigate('Login')
        }
        getData(findData, 'user')
    })

    return (
        <View> </View>
    )
}