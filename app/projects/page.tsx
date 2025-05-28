import Card from '../../components/card'

export default function Projects() {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4">
        <Card
          title="Two Wheel-Legged Balancing Robot"
          description="Designed LQR based control algorithm to balance a two-wheel robot with 5-bar active suspension legs. Simulated then deployed to an STM32-based robot."
          tags={['STM32', 'C++', 'Simulink', 'WIP']}
          link="/projects/balstd"
          date="May 2025"
        />
      </div>
    </div>
  );
}
