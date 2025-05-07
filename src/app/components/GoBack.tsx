'use client';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from "react-icons/fa";
const  GoBackButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="bg-primary-950 p-2 px-4 rounded-md cursor-pointer text-xs flex items-center gap-2">
      <FaChevronLeft/>
      <span className="font-semibold">Go Back</span>
    </button>
  );
}

export default GoBackButton;
