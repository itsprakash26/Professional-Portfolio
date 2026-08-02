function StatCard({ icon: Icon, number, text }) {
    return (

        <div className="bg-[#0c1327] border border-gray-800 rounded-xl p-6 flex items-center gap-5 hover:border-violet-500 transition">

            <div className="bg-violet-600 w-14 h-14 rounded-xl flex justify-center items-center text-2xl">
                <Icon />
            </div>

            <div>

                <h2 className="text-3xl font-bold">
                    {number}
                </h2>

                <p className="text-gray-400">
                    {text}
                </p>

            </div>

        </div>

    );
}

export default StatCard;