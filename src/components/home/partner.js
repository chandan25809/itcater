import React from 'react';
import image1 from '../../assets/images/th.png';
import image2 from '../../assets/images/charles.png';
import image3 from '../../assets/images/plastipak.png';
import image4 from '../../assets/images/meijer.png';
import image5 from '../../assets/images/alta.jfif';
import image6 from '../../assets/images/icbc.png';
import image7 from '../../assets/images/sephora...png';
import image8 from '../../assets/images/nutrien.png';
import image9 from '../../assets/images/accely.png';
function Partner() {
return (
<div >
    <br></br>
<section class="partners">
<div class="partners__container container container--px">
    <div className="titleHolder">
        <h2>OUR COMPANY PARTNERS</h2>
        <p>Partnerships that Work</p>
        </div>
    <div class="partners__wrapper">
    <a href="#" class="partners__item">
        <img src={image1} alt=" Thyssenkrupp Crankshaft" class="partner__img"/>
    </a>
    <a href="#" class="partners__item">
        <img src={image2} alt="Charles River Labs" class="partner__img"/>
    </a>
    <a href="#" class="partners__item">
        <img src={image3} alt="Plastipak" class="partner__img"/>
    </a>
    <a href="#" class="partners__item">
        <img src={image4} alt="Meijer Supermarkets" class="partner__img"/>
    </a>
    <a href="#" class="partners__item">
        <img src={image5} alt="NewAlta" class="partner__img"/>
    </a>
            <a href="#" class="partners__item">
        <img src={image6} alt="ICBC – Insurance Corporation of British Columbia" class="partner__img"/>
    </a>
            <a href="#" class="partners__item">
        <img src={image7} alt="Sephora" class="partner__img"/>
    </a>
            <a href="#" class="partners__item">
        <img src={image8} alt="Nutrien" class="partner__img"/>
    </a>
            <a href="#" class="partners__item">
        <img src={image9} alt="Accely" class="partner__img"/>
    </a>
    </div>
</div>
<br></br>
<br></br>
</section>
</div>  
);
}

export default Partner;