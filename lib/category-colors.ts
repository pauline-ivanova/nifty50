// Color mapping for different categories
export const categoryColorMap: { [key: string]: CategoryColors } = {
  'Basics': {
    primary: 'green',
    bg: 'bg-green-50',
    border: 'border-green-200',
    borderAccent: 'border-green-500',
    borderAccentColor: '#10b981', // green-500
    text: 'text-green-800',
    textAccent: 'text-green-600',
    hoverBg: 'hover:bg-green-100',
    hoverBorder: 'hover:border-green-300',
    hoverText: 'hover:text-green-700',
    ring: 'ring-green-500',
    fromGradient: 'from-green-50/50',
    viaGradient: 'via-white',
    toGradient: 'to-green-50/30',
    bgAccent: 'bg-green-200/20',
    linkColor: 'text-green-600',
    linkHover: 'hover:text-green-700',
    divide: 'divide-green-200',
  },
  'Investing': {
    primary: 'blue',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    borderAccent: 'border-blue-500',
    borderAccentColor: '#3b82f6', // blue-500
    text: 'text-blue-800',
    textAccent: 'text-blue-600',
    hoverBg: 'hover:bg-blue-100',
    hoverBorder: 'hover:border-blue-300',
    hoverText: 'hover:text-blue-700',
    ring: 'ring-blue-500',
    fromGradient: 'from-blue-50/50',
    viaGradient: 'via-white',
    toGradient: 'to-blue-50/30',
    bgAccent: 'bg-blue-200/20',
    linkColor: 'text-blue-600',
    linkHover: 'hover:text-blue-700',
    divide: 'divide-blue-200',
  },
  'Trading': {
    primary: 'purple',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    borderAccent: 'border-purple-500',
    borderAccentColor: '#a855f7', // purple-500
    text: 'text-purple-800',
    textAccent: 'text-purple-600',
    hoverBg: 'hover:bg-purple-100',
    hoverBorder: 'hover:border-purple-300',
    hoverText: 'hover:text-purple-700',
    ring: 'ring-purple-500',
    fromGradient: 'from-purple-50/50',
    viaGradient: 'via-white',
    toGradient: 'to-purple-50/30',
    bgAccent: 'bg-purple-200/20',
    linkColor: 'text-purple-600',
    linkHover: 'hover:text-purple-700',
    divide: 'divide-purple-200',
  },
  'Analysis': {
    primary: 'indigo',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    borderAccent: 'border-indigo-500',
    borderAccentColor: '#6366f1', // indigo-500
    text: 'text-indigo-800',
    textAccent: 'text-indigo-600',
    hoverBg: 'hover:bg-indigo-100',
    hoverBorder: 'hover:border-indigo-300',
    hoverText: 'hover:text-indigo-700',
    ring: 'ring-indigo-500',
    fromGradient: 'from-indigo-50/50',
    viaGradient: 'via-white',
    toGradient: 'to-indigo-50/30',
    bgAccent: 'bg-indigo-200/20',
    linkColor: 'text-indigo-600',
    linkHover: 'hover:text-indigo-700',
    divide: 'divide-indigo-200',
  },
};

export interface CategoryColors {
  primary: string;
  bg: string;
  border: string;
  borderAccent: string;
  borderAccentColor: string; // RGB color for inline styles
  text: string;
  textAccent: string;
  hoverBg: string;
  hoverBorder: string;
  hoverText: string;
  ring: string;
  fromGradient: string;
  viaGradient: string;
  toGradient: string;
  bgAccent: string;
  linkColor: string;
  linkHover: string;
  divide: string;
}

export function getCategoryColors(category: string): CategoryColors {
  return categoryColorMap[category] || categoryColorMap['Basics'];
}
