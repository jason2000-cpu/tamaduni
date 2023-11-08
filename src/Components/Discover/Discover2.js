import React from 'react'
import './Discover.css'


function Discover2() {
  return (
    <div >
      <div style={{paddingLeft:"2rem"}}>
        <h1>Discover</h1>
      </div>
        <div className="projcard-container">
        <div className="projcard projcard-blue">
          <div className="projcard-innerbox">
            <img className="projcard-img" src="/image/maasai2.jpg" />
            <div className="projcard-textbox">
              <div className="projcard-title">The Maasai</div>
              <div className="projcard-subtitle">Fun Fact</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">When Maasai individuals greet one another, they often spit in their hands and then shake hands. This may sound unusual to people.</div>
              <div className="projcard-tagbox">
                <span className="projcard-tag">Learn More..</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="projcard projcard-red">
          <div className="projcard-innerbox">
            <img className="projcard-img" src="/image/Yoruba2.webp" />
            <div className="projcard-textbox">
              <div className="projcard-title">The Yoruba</div>
              <div className="projcard-subtitle">Fun Fact</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">One of the most famous aspects of Yoruba culture is their traditional masquerade festivals, where elaborately costumed dancers and performers embody various spirits and deities, bringing music, dance, and storytelling to life in a mesmerizing spectacle. These festivals are not only a celebration of Yoruba spirituality but also a testament to their creativity and artistic prowess.</div>
              <div className="projcard-tagbox">
                <span className="projcard-tag">Learn More ...</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="projcard projcard-green">
          <div className="projcard-innerbox">
            <img className="projcard-img" src="/image/zulu.jpg" />
            <div className="projcard-textbox">
              <div className="projcard-title">The Zulu</div>
              <div className="projcard-subtitle">Fun Fact</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">Zulu dance is not only a form of entertainment but also a means of storytelling and expression.One of the most famous Zulu dances is the "Indlamu" dance, often referred to as the "Zulu war dance." It is characterized by powerful foot-stomping, intricate body movements, and rhythmic chanting or singing.</div>
              <div className="projcard-tagbox">
                <span className="projcard-tag">Learn More...</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="projcard projcard-customcolor">
          <div className="projcard-innerbox">
            <img className="projcard-img" src="/image/khoisan.jpeg" />
            <div className="projcard-textbox">
              <div className="projcard-title">The Khoisan</div>
              <div className="projcard-subtitle">Fun Fact</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">The Khoisan languages are known for their distinctive click consonants. These click sounds are produced by various tongue and mouth movements, creating unique linguistic patterns. The presence of click sounds in their languages sets the Khoisan languages apart and is a testament to the linguistic diversity found in Africa.</div>
              <div className="projcard-tagbox">
                <span className="projcard-tag">Learn More...</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Discover2