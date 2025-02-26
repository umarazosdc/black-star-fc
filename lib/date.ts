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
}
