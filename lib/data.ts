export const roles = [
   { role: 'Centre-back' },
   { role: 'Full-back' },
   { role: 'Wing-back' },
   { role: 'Centre-midfielder' },
   { role: 'Defensive-midfielder' },
   { role: 'Attacking-midfielder' },
   { role: 'Wide-midfielder' },
   { role: 'Centre-forward' },
   { role: 'Second-striker' },
   { role: 'Winger' },
];
export const positions = [
   { position: 'Defender' },
   { position: 'Midfielder' },
   { position: 'Forward' },
];
export const weights = [
   { weight: 45.9 },
   { weight: 60.66 },
   { weight: 62.1 },
   { weight: 68.44 },
   { weight: 73.39 },
   { weight: 80.1 },
];
export const heights = [
   { height: 5 },
   { height: 5.3 },
   { height: 5.5 },
   { height: 5.8 },
   { height: 6 },
   { height: 6.2 },
];
export const months = [
   'January',
   'February',
   'March',
   'April',
   'May',
   'June',
   'July',
   'August',
   'September',
   'October',
   'November',
   'December',
];
export const years = Array.from(
   { length: 101 },
   (_, i) => new Date().getFullYear() - i
);

export const stats = {
      spd: 'Speed',
      sho: 'Shooting',
      def: 'Defense',
      dri: 'Dribbling',
      pac: 'Pace',
      pas: 'Passing',
   };