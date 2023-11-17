const  OpenAIApi  = require("openai");
const env = require("dotenv").config();


const openai = new OpenAIApi({
    APIKey: env.API_KEY
})


export  async function GET(req) {
    const { searchParams } = new URL(req.url);
    const culture = searchParams.get('culture');
    const aspect = searchParams.get('aspect');
    console.log(culture, aspect);

    const prompt1 = `
                The ${culture} in detail. Every point mus have atleast 2.
                Put the answer in this JSON format:
                {
                    culture: "${culture}",
                    place_of_origin :"place of origin in detail goes here",
                    current_population:"current population in detail goes here",
                    current places of existence :"current places of existence in detail goes here",
                    language :"language in detail goes here",
                }
                `;

    const propmt2 = `
                The ${aspect} of the ${culture} in detail. in point form.
                Each points should be atleast 4 paragraphs
             `
    
    const prompt = aspect === null ? propmt2 : prompt1

  const response = await openai.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "gpt-3.5-turbo",
    });

    console.log(response.choices[0].message.content);
    return Response.json(response.choices[0].message.content);

}

