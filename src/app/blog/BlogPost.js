import React, { useEffect, useState } from 'react'

function BlogPost({ data, aspect, culture}) {

  return (
        <div>
                    <div className='banner' style={{backgroundImage:`url(/image/RoP_${culture}.png)`}}>
                        <div className='banner-text'>
                            <h2>The {culture }</h2>
                            <h2>{ aspect }</h2>
                        </div>

                    </div>

                    {
                        data ?
                            <div className='passage-text'>
                                { !data.aspect === "null" ? <h2>{ data.aspect }</h2> : null }
                                 <h2>Introduction</h2>
                                 <p>{data.culture}</p>
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

        </div>
  )
}

export default BlogPost