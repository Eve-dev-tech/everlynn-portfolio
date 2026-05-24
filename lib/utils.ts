export function cn(...c: (string|undefined|null|false)[]) { return c.filter(Boolean).join(' ') }
export function scrollTo(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
