import "dotenv/config"
import express from "express";
import {Request, Response} from "express"
import {User} from "./entity/user.entity.js"
import {AppDataSource} from "./app-data-source.js"

// establish database connection
await AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
        process.exit(1)
    })


// create and setup express app
const app = express()
app.use(express.json())


// register routes
app.get("/users", async function (req: Request, res: Response) {
    const users = await AppDataSource.getRepository(User)
        .find({
            order: {
                id: "ASC"
            }
        })
    res.json(users)
})


app.get("/users/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(User)
        .findOneBy({
            id: +req.params.id,
        })
    return res.send(results)
})


app.post("/users", async function (req: Request, res: Response) {
    const user = AppDataSource.getRepository(User).create(req.body)
    const results = await AppDataSource.getRepository(User).save(user)
    return res.send(results)
})


app.put("/users/:id", async function (req: Request, res: Response) {
    const user = await AppDataSource.getRepository(User)
        .findOneBy({
            id: +req.params.id,
        })
    if (!user) {
        res.sendStatus(404)
        return
    }
    AppDataSource.getRepository(User).merge(user, req.body)
    const results = await AppDataSource.getRepository(User).save(user)
    return res.send(results)
})


app.delete("/users/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(User).delete(req.params.id)
    return res.send(results)
})


// start express server
await app.listen(process.env.PORT)
console.log("Express started")