const outline = "focus:outline-none";

export const ButtonType = {
	primary: `bg-gray-900 hover:bg-gray-400 hover:text-gray-900 text-white font-bold rounded ${outline}`,
	warning: `bg-blue-500 hover:bg-blue-700 text-white font-bold rounded ${outline}`,
	info: `bg-white hover:bg-gray-700 hover:text-gray-100 text-gray-700 font-bold rounded ${outline}`,
	danger: `bg-red-300 hover:bg-red-500 text-white font-bold rounded ${outline}`,
};

export const ButtonSize = {
	small: "py-2 px-4 text-xs",
	large: "py-3 px-6 text-lg",
};
