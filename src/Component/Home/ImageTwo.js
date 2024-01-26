import { Parallax } from 'react-parallax';
import Satellite from '../../img/2.jpeg'

const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage={Satellite} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">Made for each other</span>
        </div>
    </Parallax>
);

export default ImageTwo