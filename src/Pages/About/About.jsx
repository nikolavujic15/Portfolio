import InfoCard from "../../Components/InfoCard/InfoCard";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="name">
        <div>
          <h1 className="txt">
            AB <br /> OU
          </h1>
        </div>
        <h1 className="txt lg">T</h1>

        <div className="me">ME</div>
      </div>

      <div className="info">
        <InfoCard
          title="About Me"
          details="I'm Nikola Vujić, a web developer with a diverse skill set. My primary focus is on JavaScript, React, TypeScript, HTML, CSS, and Java. I also have experience working with Photoshop and Figma for design. Currently completing my thesis at the Academy of Applied Studies in Šabac, I'm eager to gain my first professional experience and further enhance my skills. I'm a passionate learner, always staying updated with the latest industry trends. With my knowledge and drive for success, I'm ready to contribute to project teams. "
        />
        <InfoCard
          title="Education"
          details="Academy of Applied Studies in Šabac, Serbia
          Department: Information Technology
          
          During my time at the Academy of Applied Studies in Šabac, I have been pursuing my education in the field of Information Technology. The program has provided me with a strong foundation in various aspects of IT, including software development, web technologies, and database management. Through hands-on projects and coursework, I have gained practical skills and knowledge that are essential for a successful career in the industry.
          
          In addition to my formal education, I have also taken several courses to further enhance my skills and stay up-to-date with the latest technologies. Some of the notable courses I have completed include:
          
          CySecor JavaScript Course
          
          This course provided me with a comprehensive understanding of JavaScript programming language, covering topics such as data manipulation, DOM manipulation, and asynchronous programming. Through practical exercises and real-world examples, I gained valuable experience in building interactive web applications.
          Danilo Vesovic React Course
          
          In this course, I delved into the world of React, a popular JavaScript library for building user interfaces. I learned about component-based development, state management, and routing in React applications. Through hands-on projects, I developed proficiency in creating dynamic and responsive web interfaces.
          These additional courses have expanded my practical knowledge and allowed me to apply the concepts learned in a real-world context. I am committed to continuous learning and growth in the field of IT, always seeking opportunities to broaden my skill set and stay ahead in an ever-evolving industry."
        />
        <InfoCard
          title="Skills"
          details="My skills include:

          HTML: I have advanced knowledge of HTML and the ability to structure and design responsive web pages.
          CSS: I have a deep understanding of CSS and can create stylized and attractive web pages.
          JavaScript: I am experienced in programming using JavaScript, allowing me to provide interactivity and functionality to web applications.
          TypeScript: I have knowledge of TypeScript, enabling me to write clean and scalable code with the help of types.
          Java: I have utilized Java programming for developing web servlets and backend solutions. I can create robust and scalable backend applications.
          Object-Oriented Programming (OOP): I have a profound understanding of OOP concepts, which I use for organizing and designing efficient and modular code.
          React: I am proficient in working with React and capable of creating dynamic and reactive user interfaces.
          Photoshop and Figma: I am familiar with design tools such as Photoshop and Figma, enabling me to create visually appealing and professional designs.
          Bootstrap: I am proficient in using the Bootstrap framework for rapid and efficient development of responsive web pages."
        />
       
      </div>
    </div>
  );
};

export default About;
