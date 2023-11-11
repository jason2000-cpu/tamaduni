const  OpenAIApi  = require("openai");


const openai = new OpenAIApi({
    apiKey: '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'
});


export  async function GET(req, res) {
        const prompt = `
            write me a joke about a cat and a bowl of pasta. Return response in the following parsable JSON format:
    
            {
                "Q": "question",
                "A": "answer"
            }
    
        `;
    
      const response = await openai.chat.completions.create({
          messages: [{ role: "system", content: prompt }],
          model: "gpt-3.5-turbo",
        });
    
        console.log(response.choices[0].message.content);
        // return res.json(response.choices[0]);

        return Response.json(response.choices[0]);

 }


