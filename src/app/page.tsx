import { projects, skills, contactEmail } from '@/lib/data';

export default function Home() {
  return (
    <>
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <p className="text-2xl font-heading">Hero — coming soon</p>
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-center justify-center gap-8 px-6 py-20">
        <h2 className="text-4xl font-heading font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {projects.map((project) => (
            <article key={project.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3">
              <h3 className="text-2xl font-heading font-semibold">{project.title}</h3>
              <p className="text-sm text-foreground/70">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm mt-2">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent">
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent">
                    GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center">
        <p className="text-2xl font-heading">About — coming soon</p>
      </section>

      <section id="skills" className="min-h-screen flex flex-col items-center justify-center gap-8 px-6 py-20">
        <h2 className="text-4xl font-heading font-bold">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {skills.map((skill) => (
            <div key={skill.name} className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col gap-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-xs text-foreground/50">{skill.category}</span>
              <div className="h-1 w-full rounded-full bg-white/10">
                <div
                  className="h-1 rounded-full bg-accent"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="min-h-screen flex flex-col items-center justify-center gap-4 px-6">
        <h2 className="text-4xl font-heading font-bold">Contact</h2>
        <p className="text-foreground/70">
          Reach me at{' '}
          <a href={`mailto:${contactEmail}`} className="text-accent underline underline-offset-2">
            {contactEmail}
          </a>
        </p>
      </section>
    </>
  );
}
