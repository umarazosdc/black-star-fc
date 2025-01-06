const formatDate = (dateString: string) => {
   const date = new Date(dateString);
   return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
   }).format(date);
};

export default formatDate;
