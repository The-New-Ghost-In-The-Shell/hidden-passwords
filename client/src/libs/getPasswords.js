// import dotenv from "dotenv"

// dotenv.config()
// import 'dotenv/config'

export const getPasswords = async (idFromUser) => {
    try {
        const request = await fetch(`${import.meta.env.VITE_DEV_HOST}/passwords/${idFromUser}`, {
            method: "GET"
        })
        const response = await request.json()
        return response
    } catch (error) {
        console.log(error)
    }
};