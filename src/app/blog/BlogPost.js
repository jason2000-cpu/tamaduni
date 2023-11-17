import React, { useEffect, useState } from 'react'

function BlogPost({ data, aspect}) {
    // const [data, setData] = useState(null);

  

    // url = url + "?origin=*";
    // Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

// const getData = async () => {
//     try {
//         await fetch(`${url}${params}`)
//         .then(res => res.json())
//         .then(data =>{
//             console.log(JSON.parse(data));
//             setData(JSON.parse(data));
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     } catch (error) {
//         console.error(error);
//     }
    
//     };


 

  return (
        <div>
                    <div className='banner' style={{backgroundImage:`url(/image/RoP_${data.culture}.png)`}}>
                        <div className='banner-text'>
                            <h2>The { data.culture }</h2>
                            <h2>{ aspect }</h2>
                        </div>

                    </div>

                    {
                        data ?
                            <div className='passage-text'>
                                { !data.aspect === "null" ? <h2>{ data.aspect }</h2> : null }
                                <h3>Place of Origin</h3>
                                <p>{data.place_of_origin}</p>
                                <h3>Current Population</h3>
                                <p>{data.current_population}</p>
                                <h3>Current Places of Existence</h3>
                                <p>{data.current_places_of_existence}</p>
                                <h3>Language</h3>
                                <p>{data.language}</p>
                            </div> 
                            : <p>Loading...</p>
                    }


                    {/* <div className='passage-text'>
                        {
                            data? data.culture  : <p>Loading...</p>
                        }
                    
                        <h3>Male Rite of Passage</h3>
                        <p>
                            <span style={{fontSize:"70px"}}>T</span>
                            he Maasai have a significant  male rite of passage known as
                            "Enkipaata" or "Eunoto." This rite of passage marks the transition
                            from adolescence to adulthood and is an essential cultural and social
                            event in Maasai society. This Rite of Passage  includes:
                        </p>
                        <ol>
                            <li>Preparation</li>
                            <p>
                                The process begins when a group of young Maasai boys, typically between
                                the ages of 15 and 20, are selected to go through the rite of passage.
                                They are known as "Morans" during this phase of their lives. The selection 
                                is often based on their age and readiness to take on adult responsibilities.
                            </p>
                            <li>Isolation and Training</li>
                            <p>
                                The selected Morans are isolated from the rest of the community and undergo a
                                period of training and education. During this time, they learn essential skills,
                                traditions, customs, and responsibilities they will need as adults and warriors.
                            </p>
                            <li>Ceremonial Graduation</li>
                            <p>
                                The culmination of this period of training and isolation is a grand ceremony known as
                                "Eunoto." During this ceremony, the young men, who have now become warriors, dress in 
                                traditional clothing and beadwork. They perform various dances and rituals, showcasing
                                their strength, agility, and skills. These dances often involve the distinctive Maasai
                                jumping, a high vertical jump, and the singing of warrior songs.
                            </p>
                            <li>Circumcision</li>
                            <p>
                                In some Maasai subgroups, circumcision is also a part of this rite of passage. Circumcision
                                marks the physical transformation from boyhood to adulthood and is a highly significant and
                                sometimes painful event. It is performed by traditional circumcisers within the Maasai community.
                            </p>
                            <li>Responsibilities</li>
                            <p>
                                After the Eunoto ceremony and circumcision, the young men officially become Maasai warriors and
                                are expected to take on various responsibilities to protect their community, livestock, and territory.
                                They are responsible for defending against external threats, such as wild animals and neighboring tribes.
                            </p>
                            <li>Marriage and Family</li>
                            <p>
                                As Maasai warriors, the young men are now eligible for marriage, and they may choose to marry and start their
                                own families. Marriage is a significant aspect of Maasai culture and society.
                            </p>
                        </ol>

                    </div>  */}
        </div>
  )
}

export default BlogPost