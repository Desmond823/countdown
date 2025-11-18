
interface TimerDisplayProps {
    remainingTime: number
}

const TimerDisplay = ({ remainingTime }:TimerDisplayProps) => {
    const hours = Math.floor(remainingTime / 3600)
    const minutes = Math.floor(remainingTime % 3600) / 60
    const seconds = remainingTime % 60

    const formatTime = (value: number) => String(value).padStart(2, '0')

    return(
        <div className = "relative">
            <div className = {`absolute inset-0 bg-gradie`} />

            <div className = "relative rounded-xl p-12 text-center shadow-lg">
                <div className = "text-6xl font-bold font-mono tracking-wider">
                    {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
                </div>
                <div className = "mt-4 text-sm tracking-widest uppercase">
                    Hours • Minutes • Seconds
                </div>
            </div>
        </div>
    )
}

export default TimerDisplay