import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface WheelData {
  frontLeft: {
    pressure: number
    temperature: number
  }
  frontRight: {
    pressure: number
    temperature: number
  }
  rearLeft: {
    pressure: number
    temperature: number
  }
  rearRight: {
    pressure: number
    temperature: number
  }
}

interface CarWheelsDataProps {
  data: WheelData
}

export function CarWheelsData({ data }: CarWheelsDataProps) {
  // Helper function to determine temperature color
  const getTempColor = (temp: number) => {
    if (temp > 100) return 'text-red-500'
    if (temp > 80) return 'text-orange-500'
    return 'text-green-500'
  }

  // Helper function to determine pressure color
  const getPressureColor = (pressure: number) => {
    if (pressure > 35) return 'text-red-500'
    if (pressure < 30) return 'text-orange-500'
    return 'text-green-500'
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Car Image Container */}
      <div className="relative aspect-video">
        <Image
          src="/images/car.png"
          alt="Car top view"
          fill
          className="object-contain"
        />
        
        {/* Front Left Wheel */}
        <Card className="absolute left-[12%] top-[10%] p-2 bg-background/80">
          <p className={getTempColor(data.frontLeft.temperature)}>
            {data.frontLeft.temperature}°C
          </p>
          <p className={getPressureColor(data.frontLeft.pressure)}>
            {data.frontLeft.pressure} PSI
          </p>
        </Card>

        {/* Front Right Wheel */}
        <Card className="absolute right-[12%] top-[10%] p-2 bg-background/80">
          <p className={getTempColor(data.frontRight.temperature)}>
            {data.frontRight.temperature}°C
          </p>
          <p className={getPressureColor(data.frontRight.pressure)}>
            {data.frontRight.pressure} PSI
          </p>
        </Card>

        {/* Rear Left Wheel */}
        <Card className="absolute left-[12%] top-[70%] p-2 bg-background/80">
          <p className={getTempColor(data.rearLeft.temperature)}>
            {data.rearLeft.temperature}°C
          </p>
          <p className={getPressureColor(data.rearLeft.pressure)}>
            {data.rearLeft.pressure} PSI
          </p>
        </Card>

        {/* Rear Right Wheel */}
        <Card className="absolute right-[12%] top-[70%] p-2 bg-background/80">
          <p className={getTempColor(data.rearRight.temperature)}>
            {data.rearRight.temperature}°C
          </p>
          <p className={getPressureColor(data.rearRight.pressure)}>
            {data.rearRight.pressure} PSI
          </p>
        </Card>
      </div>
    </div>
  )
}