const  OpenAIApi  = require("openai");
const env = require("dotenv").config();


const openai = new OpenAIApi({
    APIKey: env.API_KEY
})


/** This code is used when I don't have access to internet */

// export async function GET(req) {
//     const { searchParams } = new URL(req.url);
//     const culture = searchParams.get('culture');
//     const aspect = searchParams.get('aspect');
//     console.log(culture, aspect);

//     const res = {
//             culture: culture,
//             place_of_origin :"place of origin in detail goes here",
//             current_population:"current population in detail goes here",
//             current_places_of_existence :"current places of existence in detail goes here",
//             language :"language in detail goes here",
//     }

//     console.log(res);

//     return Response.json(res);
// }





/**This code is used when there is internet */

export  async function GET(req) {
    const { searchParams } = new URL(req.url);
    const culture = searchParams.get('culture');
    const aspect = searchParams.get('aspect');
    console.log(culture, aspect);

    const prompt1 = `
                The ${culture} in detail. Every point mus have atleast 5 paragraphs.
                Put the answer in key-value pairs JSON FORMAT with the keys being,
                culture, place_of_origin, current_population, 
                current_places_of_existence and language:
                `;

    const propmt2 = `
                The ${aspect} of the ${culture} in detail. in point form.
                 Each points should be atleast 4 paragraphs`
    
    const prompt = aspect === null ? propmt2 : prompt1

  const response = await openai.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "gpt-3.5-turbo",
    });

    let responseData = response.choices[0].message.content;
    console.log(JSON.parse(responseData));
    return Response.json(JSON.parse(responseData));

}

