export const formatDate = (iso) => {
   return (new Date(iso)).toString().split(' ').splice(1,2).join(' ');
 }