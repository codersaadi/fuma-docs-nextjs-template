import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useEffect } from 'react'


export default function ThemeSwitch() {
  const DARK_THEME = 'dark'
  const LIGHT_THEME = 'light'
  const [mounted, setMounted] = React.useState(false)
  const {setTheme, resolvedTheme} = useTheme()
   useEffect(()=> setMounted(true), [])
   if (!mounted) {
    return  <Image
    src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
    width={21}
    height={21}
    sizes="21x21"
    alt="Loading Light/Dark Toggle"
    priority={false}
    title="Loading Light/Dark Toggle"
  />
   }
   if (resolvedTheme === DARK_THEME) {
    return <SunIcon onClick={()=> setTheme(LIGHT_THEME)}/>
   }
   if (resolvedTheme === LIGHT_THEME) {
    return <MoonIcon onClick={()=> setTheme(DARK_THEME)}/>
   }
}












export function SunIcon({size = 32 , fill = 'gray', onClick = ()=>{}}) {
    return (
      <svg className='cursor-pointer z-50' fill={fill} onClick={onClick} width="21" height="21"  xmlns="http://www.w3.org/2000/svg">
      <path  d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"></path>
      <path  d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"></path>
  </svg>
    )
  }
  
  export function MoonIcon({size = 32 , fill = 'gray', onClick = ()=>{}}) {
    return (
      <svg className="cursor-pointer z-50" fill={fill} onClick={onClick} width="21" height="21" xmlns="http://www.w3.org/2000/svg">
      <path className="cwnoo" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"></path>
      <path className="c4foe" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"></path>
  </svg>
    )
  }