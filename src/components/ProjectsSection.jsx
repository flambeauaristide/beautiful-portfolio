import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Social Media App",
    description: "A social media app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://social-media-theta-navy.vercel.app/",
    githubUrl: "https://github.com/flambeauaristide/social-media",
  },
  {
    id: 2,
    title: "Beautiful Portfolio App",
    description: "A portfolio website built with React and TailwindCSS.",
    image: "/projects/project2.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://beautiful-portfolio-eta.vercel.app/",
    githubUrl: "https://github.com/flambeauaristide/beautiful-portfolio",
  },
  {
    id: 3,
    title: "Ecommerce App",
    description: "An ecommerce website built with Next.js and TailwindCSS.",
    image: "/projects/project3.png",
    tags: ["Next", "TailwindCSS"],
    demoUrl: "https://ecommerce-delta-brown-63.vercel.app/",
    githubUrl: "https://github.com/flambeauaristide/ecommerce",
  },
  {
    id: 4,
    title: "Music App",
    description: "A music website built with React and TailwindCSS.",
    image: "/projects/project4.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://flambeau-music-app.netlify.app/",
    githubUrl: "https://github.com/flambeauaristide/music-app",
  },
  {
    id: 5,
    title: "Landing-page App",
    description: "A landing-page website built with React and TailwindCSS.",
    image: "/projects/project5.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://virtualr-bay.vercel.app/",
    githubUrl: "https://github.com/flambeauaristide/virtualr",
  },
  {
    id: 6,
    title: "Movie App",
    description: "A movie website built with React and TailwindCSS.",
    image: "/projects/project6.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://netflix-clone-1-as3c.onrender.com/",
    githubUrl: "https://github.com/flambeauaristide/netflix-clone",
  },
  {
    id: 7,
    title: "Restaurant App",
    description: "A restaurant website built with React and bootstrap.",
    image: "/projects/project7.png",
    tags: ["React", "Bootstrap"],
    demoUrl: "https://react-foodies-website-iota.vercel.app/",
    githubUrl: "https://github.com/flambeauaristide/React_Foodies_Website",
  },
  {
    id: 8,
    title: "Slide Login Form App",
    description: "A login form built with html and css.",
    image: "/projects/project8.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://slide-navbar.vercel.app/",
    githubUrl: "https://github.com/flambeauaristide/slide-navbar",
  },
  {
    id: 9,
    title: "Student Grade Calculator App",
    description: "A calculator built with html, css and js.",
    image: "/projects/project9.png",
    tags: ["HTML", "CSS", "JS"],
    demoUrl: "https://student-grade-calculator-rho.vercel.app/",
    githubUrl: "https://github.com/flambeauaristide/student-grade-calculator",
  },
  {
    id: 10,
    title: "Slide down a navigation bar on scroll App",
    description: "A navigation bar built with html, css and js.",
    image: "/projects/project10.png",
    tags: ["HTML", "CSS", "JS"],
    demoUrl: "https://slide-down-a-navigation-bar-on-scro.vercel.app/",
    githubUrl:
      "https://github.com/flambeauaristide/slide-down-a-navigation-bar-on-scroll",
  },
  {
    id: 11,
    title: "BMI Calculator App",
    description: "A BMI calculator built with html, css and js.",
    image: "/projects/project11.png",
    tags: ["HTML", "CSS", "JS"],
    demoUrl: "https://bmi-calculator-beta-lime.vercel.app/",
    githubUrl: "https://github.com/flambeauaristide/bmi-calculator",
  },
  {
    id: 12,
    title: "Toast Notification App",
    description: "A notification built with html, css and js.",
    image: "/projects/project12.png",
    tags: ["HTML", "CSS", "JS"],
    demoUrl: "https://toast-notification-cyan.vercel.app/",
    githubUrl: "https://github.com/flambeauaristide/toast-notification",
  },
  {
    id: 13,
    title: "Internet Speed Test App",
    description: "An internet speed test app built with html, css and js.",
    image: "/projects/project13.png",
    tags: ["HTML", "CSS", "JS"],
    demoUrl: "https://internet-speed-test-app-five.vercel.app/",
    githubUrl: "https://github.com/flambeauaristide/internet-speed-test-app",
  },
  {
    id: 14,
    title: "Tip Calculator App",
    description: "A tip calculator app built with html, css and js.",
    image: "/projects/project14.png",
    tags: ["HTML", "CSS", "JS"],
    demoUrl: "https://tip-calculator-blush-ten.vercel.app/",
    githubUrl: "https://github.com/flambeauaristide/tip-calculator",
  },
  {
    id: 15,
    title: "Pharmacy App",
    description: "A pharmacy app built with html and css.",
    image: "/projects/project15.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://pharmacy-five-chi.vercel.app/",
    githubUrl: "https://github.com/flambeauaristide/pharmacy",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured
          <span className="text-red-500"> Projects</span>
        </h2>

        <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 max-sm:grid">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 bg-red-500"
            target="_blank"
            href="https://github.com/flambeauaristide"
          >
            Check My Github
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
