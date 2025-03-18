export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
};

export const suspendedSince = (suspendUntill: Date) => {
  const since = suspendUntill.setDate(suspendUntill.getDate() - 3);
  const now = new Date();
  const date = new Date(since);
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return "Just now";
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < 172800) {
    return "Yesterday";
  } else if (diffInSeconds < 259200) {
    return "2 days";
  } else if (diffInSeconds < 345600) {
    return "3d";
  } else {
    return date.toLocaleDateString(); // Default for anything beyond 3 days
  }
};

export const getHoursMinute = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
  }).format(date);
};

export const getAge = (dobString: string) => {
  const dob = new Date(dobString);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();

  // If birthday hasn't occurred yet this year, subtract 1 from age
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
};

export const setDate = (dobString: string) => {
  const dob = new Date(dobString);

  const year = dob.getFullYear();
  const day = dob.getDate();
  const month = dob.getMonth();
  return `${day}-${month}-${year}`;
};
