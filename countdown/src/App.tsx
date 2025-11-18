import { useState, useEffect, useCallback } from 'react'
import TimerInput from './components/timer-input'
import TimerDisplay from './components/timer-display'
import TimerControls from './components/timer-controls'
import './App.css'

function App() {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [remainingTime, setRemainingTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [initialTime, setInitialTime] = useState(0)
  const [timerStarted, setTimerStarted] = useState(false) // Track if timer has been started

  // Calculate total time in seconds
  const totalTime = hours * 3600 + minutes * 60 + seconds

  // Update remaining time when inputs change
  useEffect(() => {
    if (!timerStarted) {
      setRemainingTime(totalTime)
      setInitialTime(totalTime)
    }
  }, [totalTime, timerStarted])

  // Timer countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false)
            setTimerStarted(false) // Reset timer started flag when finished
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isRunning, remainingTime])

  const handleStart = useCallback(() => {
    if (remainingTime > 0) {
      setTimerStarted(true)
      setIsRunning(true)
    }
  }, [remainingTime])

  const handlePause = useCallback(() => {
    setIsRunning(false)
  }, [])

  const handleReset = useCallback(() => {
    setIsRunning(false)
    setTimerStarted(false) // Reset the timer started flag
    setRemainingTime(initialTime)
  }, [initialTime])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Countdown Timer
            </h1>
            <p className="text-gray-600">
              Set your timer and start counting down
            </p>
          </div>

          <TimerDisplay remainingTime={remainingTime} />

          <div className="space-y-6">
            <TimerInput
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              onHoursChange={setHours}
              onMinutesChange={setMinutes}
              onSecondsChange={setSeconds}
            />

            <TimerControls
              isRunning={isRunning}
              remainingTime={remainingTime}
              onStart={handleStart}
              onPause={handlePause}
              onReset={handleReset}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App