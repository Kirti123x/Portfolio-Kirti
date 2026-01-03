export type ColorPalette = 'blue' | 'purple' | 'emerald' | 'rose' | 'amber' | 'slate' | 'cyan' | 'indigo' | 'orange' | 'teal';

export const themeColors: Record<ColorPalette, {
  primary: string;
  gradient: string;
  bg: string;
  bgLight: string;
  text: string;
  button: string;
  ring: string;
}> = {
  blue: {
    primary: 'text-blue-600',
    gradient: 'from-blue-600 to-indigo-700',
    bg: 'bg-blue-600',
    bgLight: 'bg-blue-50',
    text: 'text-blue-600',
    button: 'bg-blue-600 hover:bg-blue-700',
    ring: 'ring-blue-500'
  },
  purple: {
    primary: 'text-purple-600',
    gradient: 'from-purple-600 to-pink-600',
    bg: 'bg-purple-600',
    bgLight: 'bg-purple-50',
    text: 'text-purple-600',
    button: 'bg-purple-600 hover:bg-purple-700',
    ring: 'ring-purple-500'
  },
  emerald: {
    primary: 'text-emerald-600',
    gradient: 'from-emerald-600 to-teal-600',
    bg: 'bg-emerald-600',
    bgLight: 'bg-emerald-50',
    text: 'text-emerald-600',
    button: 'bg-emerald-600 hover:bg-emerald-700',
    ring: 'ring-emerald-500'
  },
  rose: {
    primary: 'text-rose-600',
    gradient: 'from-rose-600 to-pink-600',
    bg: 'bg-rose-600',
    bgLight: 'bg-rose-50',
    text: 'text-rose-600',
    button: 'bg-rose-600 hover:bg-rose-700',
    ring: 'ring-rose-500'
  },
  amber: {
    primary: 'text-amber-600',
    gradient: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-600',
    bgLight: 'bg-amber-50',
    text: 'text-amber-600',
    button: 'bg-amber-600 hover:bg-amber-700',
    ring: 'ring-amber-500'
  },
  slate: {
    primary: 'text-slate-700',
    gradient: 'from-slate-700 to-slate-900',
    bg: 'bg-slate-700',
    bgLight: 'bg-slate-100',
    text: 'text-slate-700',
    button: 'bg-slate-700 hover:bg-slate-800',
    ring: 'ring-slate-500'
  },
  cyan: {
    primary: 'text-cyan-600',
    gradient: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-600',
    bgLight: 'bg-cyan-50',
    text: 'text-cyan-600',
    button: 'bg-cyan-600 hover:bg-cyan-700',
    ring: 'ring-cyan-500'
  },
  indigo: {
    primary: 'text-indigo-600',
    gradient: 'from-indigo-600 to-purple-700',
    bg: 'bg-indigo-600',
    bgLight: 'bg-indigo-50',
    text: 'text-indigo-600',
    button: 'bg-indigo-600 hover:bg-indigo-700',
    ring: 'ring-indigo-500'
  },
  orange: {
    primary: 'text-orange-600',
    gradient: 'from-orange-500 to-red-600',
    bg: 'bg-orange-600',
    bgLight: 'bg-orange-50',
    text: 'text-orange-600',
    button: 'bg-orange-600 hover:bg-orange-700',
    ring: 'ring-orange-500'
  },
  teal: {
    primary: 'text-teal-600',
    gradient: 'from-teal-500 to-emerald-600',
    bg: 'bg-teal-600',
    bgLight: 'bg-teal-50',
    text: 'text-teal-600',
    button: 'bg-teal-600 hover:bg-teal-700',
    ring: 'ring-teal-500'
  }
};

export const getTheme = (palette: ColorPalette) => themeColors[palette] || themeColors.blue;
