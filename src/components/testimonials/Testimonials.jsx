import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../assets/next-icon.png'
import back_icon from '../assets/back-icon.png'
import user_1 from '../assets/user-1.png'
import user_2 from '../assets/user-2.png'
import user_3 from '../assets/user-3.png'
import user_4 from '../assets/user-4.png'


const Testimonials = () => {
    const slider = useRef(null);
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) { // Assuming each slide is 25%, we allow 3 slides forward (4 total)
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Jane Smith</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>he education and experiences I gained at Edusity were invaluable. The mechanical engineering department is top-notch, with professors who are both knowledgeable and approachable. The university's state-of-the-art labs and facilities provided the perfect environment for learning and innovation. I also appreciated the strong focus on sustainability and real-world applications. Today, I work as a design engineer, and I feel well-prepared and confident thanks to my time at Edusity.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, India</span>
                                </div>
                            </div>
                            <p>My experience at Edusity was transformative. The rigorous curriculum and the supportive faculty helped me develop both my technical skills and my critical thinking abilities. The university's strong emphasis on research allowed me to work on cutting-edge projects, which greatly enhanced my career prospects. Today, I'm thriving in my role as a software engineer at a leading tech company, and I owe much of my success to the solid foundation I built at Edusity</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Emily Davis</h3>
                                    <span>Edusity, UK</span>
                                </div>
                            </div>
                            <p>My time at Edusity was truly enriching. The psychology program offered a comprehensive curriculum that covered both theoretical and applied aspects of the field. The professors were passionate and always willing to provide guidance and support. The university also offered numerous opportunities for research and internships, which were crucial for my development as a psychologist. I now work in a clinical setting, and the skills and knowledge I gained at Edusity are integral to my practice.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Michael Fulkrug</h3>
                                    <span>Edusity, German</span>
                                </div>
                            </div>
                            <p>My experience at Edusity was transformative. The rigorous curriculum and the supportive faculty helped me develop both my technical skills and my critical thinking abilities. The university's strong emphasis on research allowed me to work on cutting-edge projects, which greatly enhanced my career prospects. Today, I'm thriving in my role as a software engineer at a leading tech company, and I owe much of my success to the solid foundation I built at Edusity</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials;
