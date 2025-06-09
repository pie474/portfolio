import Card from '@/components/card'

export default function Projects() {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4">
        <Card
          title="Portfolio Website"
          description="I built this website from scratch because I wanted to learn React!"
          tags={['React', 'Next', 'Tailwind', 'Typescript']}
          link="https://github.com/pie474/portfolio"
          date="May 2025"
        />
        <Card
          title="Two Wheel-Legged Balancing Robot"
          description="Designed LQR based control algorithm to balance a two-wheel robot with 5-bar active suspension legs. Simulated then deployed to an STM32-based robot."
          tags={['STM32', 'C++', 'Matlab', 'Simulink', 'WIP']}
          link="/projects/balstd"
          date="May 2025"
        />
        <Card
          title="Conductor"
          description="A CV pipeline that aims to sync MIDI music playback to video feed of a conductor, similar to how a human musician would play their instrument in an ensemble."
          tags={['Python', 'CV', 'WIP']}
          date="Nov 2024"
        />
      </div>
    </div>
  );
}
