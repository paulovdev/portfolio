import React from "react";
import './Projects.css';
import { Fade } from 'react-awesome-reveal';
import { ImAttachment } from "react-icons/im";

const Projects = () => {

    const projectList = [
        {
            photo: '/pic2.webp',
            href: "https://pxulin.github.io/full-site/",

            title: "Landing page",
            desc: "full simple modern landing page.",
        },

    ];

    function viewProject(url) {
        window.open(url, "_blank");
    }

    return (
        <section id="projects">
            <Fade direction='down' cascade duration={800} triggerOnce>
                <h1 >PROJECTS<span id="mySpan"></span></h1>
            </Fade>

            <div className="projects-container">
                {projectList.map((project, index) => (
                    <Fade
                        key={index}
                        direction="up"
                        duration={700}
                        delay={index * 100}
                        triggerOnce>
                        <div key={project.key}>
                            <div className="card-projects">
                                <div className="projects-photo-container">
                                    <img src={project.photo} width={350} height={350} alt="landing page photo" />
                                </div>
                                <div className="projects-text-container">
                                    <h1>{project.title}</h1>
                                    <p>{project.desc}</p>
                                    <div id="item" onClick={() => viewProject(project.href)}>
                                        <ImAttachment color="var(--color-special)" />
                                        <a>VIEW PROJECT</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </section>
    );
};

export default React.memo(Projects);
