function ProgressBar({ value }) {
    return (

        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">

            <div
                className="h-full bg-violet-500 rounded-full transition-all duration-1000"
                style={{
                    width: `${value}%`,
                }}
            />

        </div>

    );
}

export default ProgressBar;