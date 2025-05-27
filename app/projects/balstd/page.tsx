import VideoPlayer from '../../../components/video_player'

export default function BalstdProjectPage() {
    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-semibold mb-4">Two Wheel-Legged Balancing Robot</h1>

            <p className="text-gray-300 mb-6">
                This project explores the control of a two-wheeled robot equipped with active suspension legs using modern control techniques. Inspired by systems like Boston Dynamics' Handle and traditional inverted pendulums, the robot combines balance, leg articulation, and real-time control into one platform.
            </p>

            <div className="space-y-4">
                <section>
                    <h2 className="text-xl font-semibold mb-2">Overview</h2>
                    <p className="text-gray-400">
                        The robot is built on a custom two-wheeled drive base with 5-bar linkage suspension legs that can actively adjust for terrain or balance assistance. The control algorithm uses an LQR (Linear Quadratic Regulator) approach to maintain upright stability under disturbances.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">LQR Design</h2>
                    <p className="text-gray-400">
                        The LQR assumes a simplified 2d model of the robot that includes a wheel, rigid leg, and single hip joint, with torques applyable at each joint.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">Simulation</h2>
                    <p className="text-gray-400">
                        Dynamic models of the robot were built in Simulink using Simscape Multibody to capture the true nonlinear dynamics of the leg and wheel mechanisms.
                    </p>

                    <br />

                    <p className="text-gray-400">
                        An initial 2d model was first created to test as close to the LQR as possible.
                    </p>
                    <div className="flex justify-center">
                        <VideoPlayer
                            src="/gated_ramp.mp4"
                            caption="Early 2D simulation on a flat surface, with the position setpoint being a saturating ramp function."
                        />
                    </div>

                    <p className="text-gray-400">
                        The LQR controller was first validated here, introducing various measurement imperfections that would be encountered in real life to prove stability.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">Deployment</h2>
                    <p className="text-gray-400">
                        The validated controller was deployed to a STM32-based embedded platform. Motor encoders were used for proprioceptive feedback, and a 6-axis IMU on the chassis was used for world orientation.
                    </p>
                </section>

                {/* <section>
                    <h2 className="text-xl font-semibold mb-2">Technologies</h2>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>STM32 (bare-metal C++)</li>
                        <li>Simulink / Simscape Multibody</li>
                        <li>Linear control theory (LQR)</li>
                        <li>Real-time embedded development</li>
                    </ul>
                </section> */}
            </div>
        </div>
    )
}
