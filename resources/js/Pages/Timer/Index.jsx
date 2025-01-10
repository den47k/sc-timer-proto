import AuthenticatedLayoutProto from "@/Layouts/AuthenticatedLayoutProto";
import { Head, router } from "@inertiajs/react";
import { useScramble } from "@/hooks/useScramble";
import Timer from "@/Pages/Timer/Partials/TimerDisplay";

import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { DocumentDuplicateIcon } from "@heroicons/react/20/solid";
import axios from "axios";

export default function Dashboard({ profilePhotoUrl }) {
  const { scramble, generateNewScramble } = useScramble();

  const configAxios = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const handleSolveComplete = async (solveData) => {
    try {
      axios
        .post(route('solves.store'), solveData)
        .then((response) => console.log(JSON.stringify(response.data)))
        .catch((error) => console.log("Error", error));
      generateNewScramble();
    } catch (error) {
      console.error("Failed to submit solve: ", error);
    }
  };

  return (
    <AuthenticatedLayoutProto profilePhotoUrl={profilePhotoUrl}>
      <Head title="Dashboard" />

      <div className="relative grid grid-cols-[1fr_auto] h-screen">
        {/* Scramble, buttons, and timer */}
        <div className="flex flex-col items-center justify-center h-auto w-auto text-2xl">
          {/* Scramble */}
          <div
            className="font-robotoMono text-white text-xl text-center cursor-default select-none px-4 rounded-md"
            style={{ wordBreak: "break-word" }}
          >
            {scramble}
          </div>

          {/* Control Buttons */}
          <div className="flex space-x-3 mt-3">
            <button
              className="flex items-center justify-center w-6 h-6 text-white cursor-pointer"
              title="Edit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></path>
                <line
                  x1="136"
                  y1="64"
                  x2="192"
                  y2="120"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
              </svg>
            </button>

            <button
              className="flex items-center justify-center w-6 h-6 text-white cursor-pointer"
              title="Copy"
            >
              <DocumentDuplicateIcon className="w-5 h-5" />
            </button>

            <button
              onClick={() => generateNewScramble()}
              className="flex items-center justify-center w-6 h-6 text-white cursor-pointer"
              title="Refresh Scramble"
            >
              <ArrowPathIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Timer */}
          <Timer event="3x3" scramble={scramble} onSolveComplete={handleSolveComplete} />
        </div>

        {/* Side Statistics */}
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 bg-base-900 text-white flex items-center justify-center rounded-md shadow-lg">
            hello world
          </div>
        </div>
      </div>
    </AuthenticatedLayoutProto>
  );
}
