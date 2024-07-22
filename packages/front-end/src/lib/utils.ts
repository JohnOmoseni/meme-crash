import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toastNotify(toast: any, title: string, desc?: string) {
  return toast({
    title: title,
    description: desc,
  });
}

export const convertToTime = (ms: number) => {
  // Get the current date and time
  const currentDate: Date = new Date(ms);

  // Extract the hour and minute components
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  // Convert hours to AM/PM format
  const ampm = hours >= 12 ? "pm" : "am";
  const displayHours: number = hours % 12 || 12; // Convert 0 to 12-hour format

  // Format the time string
  const formattedTime: string = `${displayHours}:${minutes
    .toString()
    .padStart(2, "0")} ${ampm}`;

  return formattedTime;
};

export const handleApiError = (error: any, message?: string) => {
  console.error(`API Error - ${message}:`, error);
  if (error.response) {
    // Server returned a responnse not in the 200 range
    console.error("Response data:", error.response.data);
    console.error("Response status:", error.response.status);
  } else if (error.request) {
    console.error("Request data:", error.request);
  } else {
    // No response from server - 404
    console.error("Error message:", error.message);
  }
  throw error;
};
