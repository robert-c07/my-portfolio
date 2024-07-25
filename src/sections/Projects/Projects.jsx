import styles from './ProjectsStyles.module.css';
import hlri from '../../assets/hlri.png';
import zcom from '../../assets/zcom.png';
import ini from '../../assets/ini.png';
import zhealth from '../../assets/zhealth.png';
import getfarms from '../../assets/getfarms.png';
import cityplots from '../../assets/cityplots.png';
import momentum from '../../assets/momentum.png';
import acres from '../../assets/acres.png';
import roques from '../../assets/roques.png';
import lkn from '../../assets/lkn.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <>
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={hlri}
          link="https://www.homeloanrateofinterest.com/"
          h3="HomeLoan Rate of Interest"
          p="Static lead generation site"
        />
        <ProjectCard
          src={zcom}
          link="https://zcomdigitalmedia.com/"
          h3="Zcom Digital Media"
          p="Dynamic Site"
        />
        <ProjectCard
          src={ini}
          link="https://www.indemnitynationalinsurance.com/"
          h3="Indemnity National Insurance"
          p="Dynamic Next.js lead generation site"
        />
        <ProjectCard
          src={zhealth}
          link="https://www.zealoushealthcare.com/"
          h3="Zealous Healthcare"
          p="Dynamic React site"
        />
        <ProjectCard
          src={getfarms}
          link="https://getfarms.in/"
          h3="GetFarms"
          p="Dynamic site"
        />
        <ProjectCard
          src={cityplots}
          link="https://www.cityplots.io/"
          h3="Cityplot"
          p="Dynamic React site"
        />
      </div>
    </section>
    <section id="projects" className={styles.container}>
      <h1 className="">Wordpress Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={momentum}
          link="https://www.momentummotorsports.in/"
          h3="Momentum Motorsports"
          p="Wordpress Site"
        />
        <ProjectCard
          src={lkn}
          link="https://lknstrategies.us/"
          h3="LKN Strategies"
          p="Wordpress Site"
        />
        <ProjectCard
          src={acres}
          link="https://acreslanding.com/"
          h3="Acreslanding"
          p="Wordpress Site"
        />
        <ProjectCard
          src={roques}
          link="https://stroqueschurch.in/"
          h3="St.Roques Church"
          p="Wordpress Site"
        />
      </div>
    </section>
    </>
  );
}

export default Projects;
