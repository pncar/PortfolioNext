'use client';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from "react-icons/fa";
const  GoBackButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="group border border-primary-900 hover:border-primary-700 transition-all bg-primary-950 p-2 px-4 rounded-md cursor-pointer text-xs flex items-center gap-2">
      <FaChevronLeft className="translate-x-0 group-hover:-translate-x-1 transition-all"/>
      <span className="font-semibold">Go Back</span>
    </button>
  );
}

export default GoBackButton;
