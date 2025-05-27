import ProjectCard from '../../components/project_card'

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <ProjectCard
          title="Two Wheel-Legged Balancing Robot"
          description="Designed LQR based control algorithm to balance a two-wheel robot with 5-bar active suspension legs. Simulated then deployed to an STM32-based robot."
          tech={['STM32', 'C++', 'Simulink']}
          link="/projects/balstd"
          date="May 2025"
        />
      </div>
    </div>
  );
}
