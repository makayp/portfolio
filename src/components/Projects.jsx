import Card from "./Card";

const projects = [
  {
    id: 1,
    title: "Todo List",
    description: "Multi theme Todo List app made with react",
    type: "todo",
    link: "https://todo-list-reactjs7394.netlify.app",
  },
  {
    id: 2,
    title: "Coming soon...",
    description: "",
    type: "blue-bg",
    link: "",
  },
  {
    id: 3,
    title: "Coming soon...",
    description: "",
    type: "black-bg",
    link: "",
  },
  {
    id: 4,
    title: "Coming soon...",
    description: "",
    type: "yellow-bg",
    link: "",
  },
  {
    id: 5,
    title: "Coming soon...",
    description: "",
    type: "pink-bg",
    link: "",
  },
  {
    id: 6,
    title: "Coming soon...",
    description: "",
    type: "red-bg",
    link: "",
  },
];

function Projects() {
  return (
    <section id='projects'>
      <h3>Projects</h3>
      <p>Check out some of my recent works below.</p>
      <div className='project-list'>
        {projects.map(project => (
          <Card project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
