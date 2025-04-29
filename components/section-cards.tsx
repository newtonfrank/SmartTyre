'use client'

import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { GiCarWheel } from "react-icons/gi";

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CarWheelsData } from "@/app/pages/CarWheelDetails/CarWheelsData"
import Image from "next/image";

import { useTheme } from "next-themes";
import Map from "./Map";

import { FaMountainSun } from "react-icons/fa6";

export function SectionCards() {

  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/images/Tyre_Mark_Dark.png" : "/images/Tyre_Mark_light.png";

  const tyreData = {
    frontLeft: { temperature: 85, pressure: 32 },
    frontRight: { temperature: 82, pressure: 33 },
    rearLeft: { temperature: 78, pressure: 31 },
    rearRight: { temperature: 105, pressure: 36 },
  };

  const tyres = [
    { position: "Front Left", data: tyreData.frontLeft },
    { position: "Front Right", data: tyreData.frontRight },
    { position: "Rear Left", data: tyreData.rearLeft },
    { position: "Rear Right", data: tyreData.rearRight },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Owner Details Card */}
      
      <div className="flex flex-col lg:flex-row gap-4">
  <Card className="bg-background w-full lg:w-1/2">
    <CardHeader>
      <div className="flex items-center justify-between">
        <div>
          <CardTitle className="text-3xl font-bold">Vehicle Details</CardTitle>
          <CardDescription className="text-lg">Tata Nexon 2024</CardDescription>
        </div>
        <Badge variant="secondary" className="h-fit px-3 py-1 text-base flex items-center gap-2">
          <div>
            <GiCarWheel size={20} className="mr-2" />
          </div>
          Four Wheeler
        </Badge>
      </div>
      <div className="space-y-1 pt-2 text-lg">
        <p><span className="font-semibold">Owner:</span> William Smith</p>
        <p><span className="font-semibold">Tracking Since:</span> 4 Months</p>
      </div>
    </CardHeader>
  </Card>

  <Card className="bg-background w-full lg:w-1/2">
  <CardHeader>
    <div className="flex items-center justify-between">
      <div>
        <CardTitle className="text-3xl font-bold flex items-center gap-3">
          Terrain
        </CardTitle>
        
        <CardDescription className="text-lg">Terrains that tyre are been driven on</CardDescription>
      </div>
      <Badge variant="secondary" className="h-fit px-3 py-1 text-base flex items-center gap-2 mb-2">
        <div>
            <FaMountainSun size={20} className="mr-2" />
        </div>
            
              Hilly
          </Badge>
    </div>

    <div className="space-y-1 pt-2 text-lg">
      <Image
        src={theme === "dark" ? "/images/hilly.png" : "/images/road.png"}
        alt="Terrain Image"
        width={600}
        height={200}
        className="rounded-lg"
      />
    </div>
  </CardHeader>
</Card>

</div>

      {/* Car Wheels Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Car Visualization */}
        <Card className="p-6 flex justify center">
          <CardTitle className="mb-2 text-center text-2xl font-bold">
            Tire Status Visualization
          </CardTitle>
          
          <div className="rounded-xl bg-muted/50 p-4">
            <CarWheelsData data={tyreData} />
          </div>
        </Card>

        {/* Tire Status Grid */}
        <div className="grid grid-cols-2 gap-4">
          {tyres.map((tyre) => (
            <Card 
              key={tyre.position}
              className={`group relative overflow-hidden transition-colors
                ${tyre.data.temperature > 100 ? 
                  "bg-destructive/10 hover:bg-destructive/15" : 
                  "bg-muted/30 hover:bg-muted/50"}`}
            >
              <CardHeader className="pb-2">
                <CardDescription className="text-sm font-medium">
                  {tyre.position}
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-4">
                <div className="flex items-baseline gap-2">
                  <CardTitle className="text-3xl font-bold">
                    {tyre.data.temperature}°
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">/ {tyre.data.pressure}psi</span>
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <Badge
                    variant={tyre.data.temperature > 100 ? "destructive" : "default"}
                    className="gap-1 px-2"
                  >
                    {tyre.data.temperature > 100 ? (
                      <>
                        <IconTrendingUp className="h-4 w-4" />
                        High Temp
                      </>
                    ) : (
                      <>
                        <IconTrendingDown className="h-4 w-4" />
                        Normal
                      </>
                    )}
                  </Badge>
                </div>
              </div>
              <div className={`absolute -right-8 -top-8 h-20 w-20 rounded-full transition-all 
                ${tyre.data.temperature > 100 ? 
                  "bg-destructive/20 group-hover:bg-destructive/30" : 
                  "bg-primary/20 group-hover:bg-primary/30"}`} 
              />
            </Card>
          ))}
        </div>
      </div>

       {/* Car Wheels Section */}
       <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
       

        {/* map */}
        <div className="grid grid-cols-2 gap-4 p2">
        <Card className="p-6 flex justify center">
          <CardTitle className="mb-2 text-center text-2xl font-bold">
            Location
          </CardTitle>
          
          <div className="rounded-xl bg-muted/50 p-4">
            <Map />
          </div>
        </Card>
        </div>
      </div>
    </div>
  );
}
