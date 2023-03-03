

const URL = process.env.URL_OAI


module.exports = {
    sendData : async (req, res)=>{
        const { prompt } = req.body
        const headers = {
            "Content-type": "application/json",
            "Authorization": `Bearer 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`
        }
        try {
            if(!!!prompt){
                throw "No Prompt Found!"
            }

            const response = await fetch(URL, {
                method:'POST',
                headers: headers,
                body: JSON.stringify({prompt, size: '256x256'})
            })

            const data = await response.json()
            res.json(data)


            
        } catch (error) {
            res.status(500).json({error: error.message})
        }
        
    }
}