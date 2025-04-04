import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  homeTeam: string;
  awayTeam: string;
  datetime: string;
  place: string;
}

const ProjectCard = ({ src, homeTeam, awayTeam, datetime, place }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full mx-auto max-w-4xl hover:scale-105 transition-transform mb-8">
      <div className="grid md:grid-cols-3 gap-4">
        <Image
          src={src}
          alt={`${homeTeam} vs ${awayTeam}`}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />

        <div className="relative p-8 bg-[#030014]/80 md:col-span-2">
          <div className="flex flex-col items-center mb-6">
            <div className="flex w-full justify-between items-center">
              <div className="text-center flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {homeTeam}
                </h2>
                <div className="text-sm text-purple-500">Home</div>
              </div>
              <div className="mx-8">
                <span className="text-3xl font-bold text-cyan-500">VS</span>
              </div>
              <div className="text-center flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {awayTeam}
                </h2>
                <div className="text-sm text-purple-500">Away</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 border-t border-[#2A0E61] pt-6">
            <p className="text-gray-300 flex items-center gap-3 text-lg">
              <span className="text-purple-500 text-2xl">📅</span>
              {new Date(datetime).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-gray-300 flex items-center gap-3 text-lg">
              <span className="text-purple-500 text-2xl">⏰</span>
              {new Date(datetime).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="text-gray-300 flex items-center gap-3 text-lg">
              <span className="text-purple-500 text-2xl">📍</span>
              {place}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
