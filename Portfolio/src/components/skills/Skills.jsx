import { skills } from "../../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
    return (

        <section
            id="skills"
            className="py-28 bg-[#060816]"
        >

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">

                    <span className="text-violet-400 uppercase tracking-widest">

                        My Skills

                    </span>

                    <h2 className="text-5xl font-bold mt-4">

                        Technologies I Master

                    </h2>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {
                        skills.map((skill, index) => (

                            <SkillCard
                                key={index}
                                {...skill}
                            />

                        ))
                    }

                </div>

            </div>

        </section>

    );
}

export default Skills;