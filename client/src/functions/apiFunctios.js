


const URL = 'http://localhost:3001/generate-image'

export function sendData(input) {
    try {
        const response = fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({prompt:input})
        })
        return response
    } catch (error) {
        console.log({ error: error.message })
    }
}