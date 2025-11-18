

interface TimerInputProps {
    hours: number
    minutes: number
    seconds: number
    onHoursChange: (value: number) => void
    onMinutesChange: (value: number) => void
    onSecondsChange: (value: number) => void
}

const TimerInput = ({
    hours, 
    minutes, 
    seconds, 
    onHoursChange, 
    onMinutesChange, 
    onSecondsChange
}:TimerInputProps) => {
    const handleInputChange = (value: string, max: number, onChange: (value: number) => void) => {
        const num = parseInt(value, 10)
        if(!isNaN(num) && num >= 0 && num <= max) {
            onChange(num)
        }
    }

    return(
        <div className = "grid grid-cols-3 gap-3">
            <div className = "space-y-2">
                <label className = "text-xs font-semibold uppercase">Hours</label>
                <input 
                    type = "number"
                    min = "0"
                    max = "23"
                    value = {hours}
                    onChange = {(e) => handleInputChange(e.target.value, 23, onHoursChange)}
                    className = "w-full px-4 py-3 border rounded-lg text-center text-lg font-bold focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    placeholder = "00"
                />
            </div>

            <div className = "space-y-2">
                <label className = "text-xs font-semibold uppercase">Minutes</label>
                <input 
                    type = "number"
                    min = "0"
                    max = "59"
                    value = {minutes}
                    onChange = {(e) => handleInputChange(e.target.value, 59, onMinutesChange)}
                    className = "w-full px-4 py-3 border rounded-lg text-center text-lg font-bold focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    placeholder = "00"
                />
            </div>

            <div className = "space-y-2">
                <label className = "text-xs font-semibold uppercase">Seconds</label>
                <input 
                    type = "number"
                    min = "0"
                    max = "59"
                    value = {seconds}
                    onChange = {(e) => handleInputChange(e.target.value, 59, onSecondsChange)}
                    className = "w-full px-4 py-3 border rounded-lg text-center text-lg font-bold focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    placeholder = "00"
                />
            </div>
        </div>
    )
}

export default TimerInput