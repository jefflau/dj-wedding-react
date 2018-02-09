import React from 'react'

const Venue = () => (
  <div>
    <h3>Trisara, Phuket</h3>
    <img src={require('../images/trisara.jpg')} className="inline" />
    <p>Trisara means “the third garden in heaven” in Sanskrit. We chose it as our wedding venue for its simple yet harmonious and elegant setting surrounded by tropical forest, exotic gardens and the sea, and for its serene and secluded atmosphere. We hope you'll also like this beautiful resort.</p>
    <p>For more details, please visist: www.trisara.com</p>
    <p>Dress code: Beach formal</p>
    <p>Our ceremony will be held outdoors on the Beachfront Deck (which is wooden so high heels are ok), while dinner will take place indoors.</p>

    <div className="google-maps inline">
      <iframe width="600" height="450" frameBorder="0" style={{border:0}}
  src="https://www.google.com/maps/embed/v1/place?q=Trisara%20Choeng%20Thale%20Phuket%20Thailand&key=AIzaSyASdC2uYOXT0OHJwkcE7JHsjqO-elf1YhA"></iframe>
    </div>
    <p>Trisara is located 17 minutes by car from Phuket International Airport.</p>
  </div>
)

export default Venue
