import { useEffect, useState } from "react"
import { getData } from "../../context/Data"

export const Login ({navigation}) => {
    const [error, setError] = useState('')
    const [form, setForm] = useState('')
    var data = {}

    useEffect(() => {
        const findData = (value) => {
            data = value
            console.log(data)
        }
        getData(findData, 'user')
    })

    const Validate = () => {
        //Validar registro
        return (form.user && form.pass ? true : false)
    }

    const next = () => {
        data.login = true
        setData('user', data)
    }

    const onPress = () => {
        (Validate()) ? 
        next(form) : setError('Cadastro inválido')
    }

    const CallBack = (key, data) => {
        var clone = Object.assign({}, form)
        clone[key] = data
        setForm(clone)
    }

    return(
        <View style={Style.container}>
            <Text style={Style.title}>Login</Text>
            <TextCuston
                name='user'
                CallBack = {CallBack}
                value = {form.name}
                placeholder = 'User'
            />
            <TextCuston
                name='pass'
                CallBack = {CallBack}
                value = {form.pass}
                placeholder = 'User'
            />
            <Text style={Style.error}>{error}</Text>
            <ButtonCuston
                onPress={onPress}
                placeholder = 'Cadastrar'
            />
            <StatusBar style="auto"/>
        </View>
    )

}