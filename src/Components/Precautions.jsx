import React from 'react'
import './Precautions.css'
import Treatment from './Treatment'
import { useNavigate } from 'react-router-dom'

const Precautions = () => {

  const navigate=useNavigate();
    function Treatment(){
        navigate("/treatment")
    }
  return (
    <div>
       <h2>Precautions Of Typhoid</h2>
       <ul>
        <li>Sanitizing clothes: A person should wash any clothing that has come 
          into contact with lice, fleas, or chiggers. It is essential to wash the 
          clothes in water that is at least 130°F. Alternatively, people can seal
           the clothes in a plastic bag for at least 2 weeks.</li>
           <li>Wearing different clothes: People should avoid wearing the same clothing every day.
             This is especially important when living in close quarters, or when 
             exposed to typhus-carrying insects.</li>
             <li>Wearing appropriate clothing: Wearing long sleeves and socks 
              when camping can help to prevent chigger bites.</li>
              <li>Avoiding dense brush: People should avoid areas of heavy brush, which are more likely to host chiggers.</li>
       </ul>
       

      <h2>Precautions Of Dengue Fever</h2>
      <ul>
      <li>Remove standing water 
        (buckets or barrels, bird baths, old tires that may hold rainwater) 
        and fill low spots where water can pool.</li>
        <li>Keep mosquitos outside of your home by repairing holes
           in screens and keeping windows and doors closed if possible.</li>
           <li>Use mosquito netting at night in areas where dengue is common.</li>
           <li>Take steps to control mosquitoes in and around your home.</li>
           </ul>

        <h2>Precautions Of Maleria</h2>
        <ul>
          <li>Cover your skin. Wear pants and long-sleeved shirts. 
            Tuck in your shirt, and tuck pant legs into socks.</li>
          <li>Apply repellent to clothing. Sprays containing permethrin are safe to apply to clothing.</li>
          <li>Sleep under a net. Bed nets, particularly those treated with insecticides, such as permethrin,
             help prevent mosquito bites while you are sleeping.</li>
          <li>Treat clothing, mosquito nets, tents, sleeping bags and other 
            fabrics with an insect repellent called permethrin.</li>
        </ul>

        <button className='btn-2' onClick={Treatment}>How To Treatment?</button>
      
    </div>
  )
}

export default Precautions