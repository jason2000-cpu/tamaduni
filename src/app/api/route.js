const  OpenAIApi  = require("openai");


const openai = new OpenAIApi({
    apiKey: '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'
});


export  async function GET(req) {
    const { searchParams } = new URL(req.url);
    const culture = searchParams.get('culture');
    const aspect = searchParams.get('aspect');
    console.log(culture, aspect);

    const prompt = `
                The ${aspect} of the ${culture}.
                Put the answer in this JSON format:
                {
                    culture: "${culture}",
                    aspect: "${aspect}",
                    place_of_origin :"place of origin in detail goes here",
                    current_population:"current population in detail goes here",
                    current places of existence :"current places of existence in detail goes here",
                    language :"language in detail goes here",
                }
                `;

  const response = await openai.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "gpt-3.5-turbo",
    });

    console.log(response.choices[0].message.content);
    return Response.json(response.choices[0].message.content);

}

