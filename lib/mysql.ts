import { PrismaClient } from "@prisma/client";

const connectToDB = async () => {
    const prisma = new PrismaClient();
    try {
        const connection = await prisma.$connect();
        console.log("CONN", connection);
        return connection;
    } catch (error) {
        console.log(error);
        return null;
    }
    // const connection = await prisma
    //     .$connect()
    //     .then(() => console.log("Connection succesfuly to db"))
    //     .catch((err: object) =>
    //         console.log(`Getting Error from DB connection ${err.message}`)
    //     );

    // return connection;
    // const db = await prisma.$connect()
    // if(db){
    //     console.log("Connection succesfuly to db")
    // }else{
    //     console.log("Error connectig to db")
    // }
};

export default connectToDB;
