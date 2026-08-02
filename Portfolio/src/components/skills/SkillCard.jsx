import ProgressBar from "./ProgressBar";

function SkillCard({
    icon: Icon,
    name,
    percentage,
}) {
    return (

        <div className="space-y-3">

            <div className="flex justify-between">

                <div className="flex items-center gap-3">

                    <Icon className="text-2xl text-violet-500" />

                    <span>{name}</span>

                </div>

                <span>{percentage}%</span>

            </div>

            <ProgressBar value={percentage} />

        </div>

    );
}

export default SkillCard;   