import React from 'react';
import { Carousel, Card} from 'react-bootstrap';
import './Marriages.css';
import marriage1 from '../../assets/marriage1.jpg';
import marriage2 from '../../assets/marriage2.jpg';
import marriage3 from '../../assets/marriage3.jpg';
import marriage4 from '../../assets/marriage4.jpg';
import marriage5 from '../../assets/marriage5.jpg';
import marriage6 from '../../assets/marriage6.jpg';

const Marriages = () => {
    return (
    <div>
    <div className='mar-background'>
    <div className="mar-details">
        <h1>Marriages</h1>
        <p>Vivid Vibes, your dedicated event management partner, specializes in curating unique and personalized weddings. From enchanting venues to bespoke decor and gourmet delights, we orchestrate every detail to craft an unforgettable celebration tailored to your love story. With meticulous planning and creative expertise, we transform your wedding day into a vibrant, personalized masterpiece, allowing you to cherish each moment while we handle the magic behind the scenes. Your love deserves to be celebrated in vivid color, and we are here to bring that vision to life.</p>
    </div>
    <Carousel className="multi-item-carousel">
      {/* First set of three cards */}
      <Carousel.Item>
        <div className="mar-d-flex">
          <Card className='mar'>
            <Card.Img variant="top" className='mar' src={marriage1} />
            <Card.Body className='mar-body'>
              <Card.Title className='mar-title'>Engagement</Card.Title>
              <Card.Text className='mar-text'>We create seamless and personalized engagement celebrations, handling everything from venue selection to decor, allowing couples to enjoy a stress-free and joyous start to their wedding journey.</Card.Text>
            </Card.Body>
          </Card>
          <Card className='mar'>
            <Card.Img variant="top" className='mar' src={marriage2} />
            <Card.Body className='mar-body'>
              <Card.Title className='mar-title'>Wedding Decorations</Card.Title>
              <Card.Text className='mar-text'>Elevate your wedding with our company's exquisite decoration services. From enchanting floral arrangements to personalized themes, we transform venues into captivating spaces for your special day.</Card.Text>
            </Card.Body>
          </Card>
          <Card className='mar'>
            <Card.Img variant="top" className='mar' src={marriage3} />
            <Card.Body className='mar-body'>
              <Card.Title className='mar-title'>Reception</Card.Title>
              <Card.Text className='mar-text'>We curate an unforgettable reception that reflects your style and love story. We ensure a joyous celebration where every detail is meticulously crafted for lasting memories for happily ever after.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Carousel.Item>

    {/*Second set of three cards */}
      <Carousel.Item>
        <div className="mar-d-flex">
          <Card className='mar'>
            <Card.Img variant="top" className='mar' src={marriage4} />
            <Card.Body className='mar-body'>
              <Card.Title className='mar-title'>Indian Weddings</Card.Title>
              <Card.Text className='mar-text'>Immerse your Indian wedding in the rich tapestry of tradition with our event management company. From vibrant decor to cultural intricacies, we orchestrate every detail to blend perfectly as per traditions.</Card.Text>
            </Card.Body>
          </Card>
          <Card className='mar'>
            <Card.Img variant="top" className='mar' src={marriage5} />
            <Card.Body className='mar-body'>
              <Card.Title className='mar-title'>Church Weddings</Card.Title>
              <Card.Text className='mar-text'>Transform your church wedding into a timeless and elegant affair with our expertise. From graceful decor to seamless coordination, we ensure every aspect reflects the sanctity and beauty of your union.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='mar'>
            <Card.Img variant="top" className='mar' src={marriage6} />
            <Card.Body className='mar-body'>
              <Card.Title className='mar-title'>Destination Weddings</Card.Title>
              <Card.Text className='mar-text'>Embark on a journey of love with our company, specializing in destination weddings. From breathtaking venues to seamless logistics, we curate a picturesque celebration in the destination of your dreams.</Card.Text>
            </Card.Body>
          </Card>
          </div>
      </Carousel.Item>
      </Carousel>
      </div>
    </div>
    );
  };

export default Marriages;