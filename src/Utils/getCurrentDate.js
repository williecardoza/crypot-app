export const getCurrentDate = () => {
   return (new Date()).toString().split(' ').splice(1,3).join(' ');
 }