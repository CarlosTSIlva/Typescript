import { Request, Response,  } from 'express'

export function helooword(req:Request, res:Response) {
    return res.json({message: 'hello word'})
}