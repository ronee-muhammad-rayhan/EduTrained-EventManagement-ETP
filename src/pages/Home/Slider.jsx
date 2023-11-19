import sliderImg1 from '../../assets/banner-3.jpg'
import sliderImg2 from '../../assets/banner-4.jpg'
import sliderImg3 from '../../assets/banner.jpg'
import sliderImg4 from '../../assets/banner2.jpg'

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full h-96">
                <div id="item1" className="carousel-item w-full">
                    <img src={sliderImg1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={sliderImg2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={sliderImg3} className="w-full object-cover" />
                </div>
                <div id="item4" className="carousel-item w-full object-fill">
                    <img src={sliderImg4} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Slider;