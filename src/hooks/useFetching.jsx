import { useState } from "react"


export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const fetching = async () => {
        try {
            setIsLoading (true)
            await callback()
        } catch (e) {
            setError(console.log(e))
        } finally {
            setIsLoading (false)
        }
    }
    return [fetching, isLoading, error]
}