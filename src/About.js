import React from 'react';
import "./About.css";

function About() {
  return (
    <div className='aboutusMain'>
      <div className='aboutusMain-content'>
        <span className='aboutusMain-content-title'>Our Team</span>
        <span className='aboutusMain-content-content'>
          <p>Welcome to "Unihelper", a dedicated platform crafted by a passionate team of engineering undergraduates with one common goal - to provide valuable support to our fellow undergraduates and the wider academic community. We understand the challenges that come with pursuing higher education, and we're here to make your journey smoother and more successful.</p>
          <p>As fellow students, we've walked in your shoes and understand the unique struggles and questions that can arise during your academic journey.</p>
          <p>Our team's collective experience spans various fields of Engineering, IT, Computer Science, ensuring that the information and resources we provide are not only accurate but also tailored to your specific needs.</p>
          <p>We believe in the power of knowledge sharing and community support. This website is our way of <b>giving back</b> to the academic community that has nurtured us. Together, let's unlock the full potential of your university experience.</p>
        </span>
      </div>
    </div>
  )
}

export default About