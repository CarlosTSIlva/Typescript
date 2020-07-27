import { Request, Response,  } from 'express'
import createUser from './services/CreateUser'

export function helooword(req:Request, res:Response) {
    const user = createUser({
        email: 'carlosteixeira@hotmail.com',
        password: '123456',
        techs: [ 'typescript', 'react', 'react-native', {title: 'JavaScript', experience: 1000}],
    })
    console.log(user.email)
    return res.json({message: 'hello word'})
}