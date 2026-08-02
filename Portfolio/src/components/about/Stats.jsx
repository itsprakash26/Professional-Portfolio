import { stats } from "../../data/stats";
import StatCard from "./StatCard";

function Stats() {
    return (

        <div className="grid md:grid-cols-2 gap-6">

            {
                stats.map((item, index) => (

                    <StatCard
                        key={index}
                        {...item}
                    />

                ))
            }

        </div>

    );
}

export default Stats;