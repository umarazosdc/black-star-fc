export const formatDate = (dateString: string) => {
   const date = new Date(dateString);
   return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
   }).format(date);
};

export const getHoursMinute = (dateString: string) => {
   const date = new Date(dateString);
   return new Intl.DateTimeFormat('en-US', {
      timeStyle: 'short'
   }).format(date);
};
