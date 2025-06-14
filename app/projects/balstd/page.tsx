import VideoPlayer from '@/components/video_player'

export default function BalstdProjectPage() {
    return (
        <div className="max-w-3xl mx-auto pt-24">
            <h1 className="text-3xl font-semibold mb-6">Two Wheel-Legged Balancing Robot</h1>

            <p className="text-gray-300 mb-8">
                This project explores the control of a two-wheeled robot equipped with active suspension legs using modern control techniques. Inspired by systems like Boston Dynamics' Handle and traditional inverted pendulums, the robot combines balance, leg articulation, and real-time control into one platform.
            </p>

            <div className="space-y-4">
                <section>
                    <h2 className="text-xl font-semibold mb-2">Goal</h2>
                    <p className="text-gray-400">
                        The robot is built on a custom two-wheeled drive base with 5-bar linkage suspension legs that can actively adjust for terrain or balance assistance. The control algorithm uses an LQR (Linear Quadratic Regulator) approach to maintain upright stability under disturbances.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">LQR Design</h2>
                    <p className="text-gray-400">
                        The LQR assumes a simplified 2d model of the robot that includes a wheel, rigid leg, and single hip joint, with torques applicable at each joint. Its state vector includes chassis pitch/velocity, wheel position/velocity, and pendulum angle/velocity. By driving this state to zero, it balances the robot.
                    </p>
                    <br />
                    <p className="text-gray-400">
                        The equations of motion were defined symbolically in a Matlab script, from which a symbolic solver was used to solve the nonlinear system model, linearize it into state space form, and finally solve the LQR problem to determine the K gain matrix.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">Simulation</h2>
                    <p className="text-gray-400">
                        Dynamic models of the robot were built in Simulink using Simscape Multibody to capture the true nonlinear dynamics of the leg and wheel mechanisms.
                    </p>

                    <br />

                    <p className="text-gray-400">
                        An initial 2d model was first created to test as close to the LQR as possible. There was a lot of debugging that had to be done with sign conventions and such, which was much easier to do with this reduced dimensionality.
                    </p>

                    <div className="flex justify-center mb-4 mt-4">
                        <VideoPlayer
                            src="/projects/balstd/gated_ramp.mp4"
                            caption="Early 2D simulation on a flat surface, with the position setpoint being a saturating ramp function."
                        />
                    </div>

                    <p className="text-gray-400">
                        Next was the full 3d simulation. With the 2d variant working, this was a simple matter of adding a second leg, and adding a couple more PID controllers to control  the newly introduced DOFs, like roll (side-side tilt), leg split (keep the legs at the same angle from the chassis), and yaw (overall heading).
                    </p>

                    <div className="flex justify-center mb-4 mt-4">
                        <VideoPlayer
                            src="/projects/balstd/sim_3d.mp4"
                            caption="3d version of the above simulation."
                        />
                    </div>

                    <p className="text-gray-400">
                        This seemed pretty foolproof in simulation. It performed phenomenally against offset center-of-mass, incorrect torque scaling, and various starting states.
                        {/* However, it was still making other assumptions. Mainly, it was still a continuous-time controller (impossible with a microcontroller), and didn't model any sensor phase delays. */}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">Deployment</h2>

                    <p className="text-gray-400">
                        The controller was deployed to a STM32-based embedded platform. Motor encoders were used for proprioceptive feedback, and a 6-axis IMU on the chassis was used for world orientation.
                    </p>

                    <div className="flex justify-center mb-4 mt-4">
                        <VideoPlayer
                            src="/projects/balstd/moving_demo.MOV"
                            caption="Demo of it balancing and driving around! (slowly because I was still scared of it)"
                        />
                    </div>

                    <p className="text-gray-400">
                        The chattering you can hear in the video is a combination of wheel motor backlash and minimal sensor filtering. Next steps I'm currently working on include more comprehensive remote control (I currently cannot control the leg length, tilt, nor turret), as well as a Kalman filter on the virtual model of the system.
                    </p>

                    <br />

                    <p className="text-gray-400">
                        Active progress is being made and I'll update this page accordingly, so check back if you're curious how I'm doing!
                    </p>


                </section>

            </div>
        </div>
    )
}
