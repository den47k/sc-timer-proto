import AuthenticatedLayoutProto from "@/Layouts/AuthenticatedLayoutProto";
import { Head } from "@inertiajs/react";
import { useScramble } from "@/hooks/useScramble";

import { PencilIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import { DocumentDuplicateIcon } from "@heroicons/react/20/solid";

export default function Dashboard({ profilePhotoUrl }) {
  const { scramble, generateNewScramble } = useScramble();

  return (
    <AuthenticatedLayoutProto profilePhotoUrl={profilePhotoUrl}>
      <Head title="Dashboard" />

      <div className="grid grid-cols-[1fr_auto]">
        {/* Scramble, buttons and timer value */}
        <div className="flex flex-col items-center justify-center">

          <div>{scramble}</div>

          {/* control buttons */}
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
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
            <DocumentDuplicateIcon className="size-6 text-white" />
            <ArrowPathIcon onClick={() => generateNewScramble()} className="size-6 text-white" />
          </div>

          {/* timer value */}
          <div>0.00</div>
        </div>

        {/* Side statistics */}
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 bg-base-900 text-white flex items-center justify-center">
            hello world
          </div>
        </div>
      </div>
    </AuthenticatedLayoutProto>
  );
}
