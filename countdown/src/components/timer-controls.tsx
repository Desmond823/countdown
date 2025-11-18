
interface TimerControlsProps {
    isRunning: boolean
    remainingTime: number
    onStart: () => void
    onPause: () => void
    onReset: () => void
}

const TimerControls = ({
    isRunning,
    remainingTime,
    onStart,
    onPause,
    onReset,
}:TimerControlsProps) => {
    return (
        <div className = "flex gap-3">
            {!isRunning ? (
                <button
                    onClick = {onStart}
                    disabled = {remainingTime === 0}
                    className = "flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 disabled:cursor-not-allowed uppercase text-sm tracking-wide"
                >
                    Start
                </button>
            ) : (
                <button
                    onClick = {onPause}
                    className = "flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 uppercase text-sm tracking-wide"
                >
                    Pause
                </button>
            )}

            <button
                onClick = {onReset}
                className = "flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 uppercase text-sm tracking-wide"
            >
                Reset
            </button>
        </div>
    )
}

export default TimerControls