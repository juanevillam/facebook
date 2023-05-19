// ** Icons
import { DotsHorizontalIcon } from "@heroicons/react/solid";

export const NotificationsDropdown = () => {
  return (
    <div className="absolute animate__animated animate__fadeIn animate__faster bg-light-50 dark:bg-dark-200 block h-96 pb-3 pl-4 pr-4 pt-2.5 right-1 rounded-xl shadow-lg top-14 w-80 z-50">
      <div className="flex justify-between w-full">
        <h1 className="dark:text-light-400 font-bold text-2xl bouncing">
          Notifications
        </h1>
        <DotsHorizontalIcon className="cursor-pointer bouncing dark:hover:bg-opacity-10 dark:text-gray-400 duration-300 hover:bg-gray-100 h-8 p-1.5 rounded-full text-gray-500 transition" />
      </div>
    </div>
  );
};
