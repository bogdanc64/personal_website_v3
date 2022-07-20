import { useEffect, useState } from 'react';
import {DarkModeSwitch} from 'react-toggle-dark-mode'
import {useTheme} from 'next-themes'

const DarkModeToggle = () => {
  
    const {systemTheme , theme, setTheme} = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;
    const initialTheme = theme === 'dark' ? true : false;

    const [checked, setChecked] = useState<boolean>(initialTheme)

    useEffect(() => {
        if (currentTheme === 'dark') {
            setChecked(true)
        } else {
            setChecked(false)
        }
    }, [checked])

    const onClick = () => {
        setChecked(!checked)
        currentTheme === 'light' ? setTheme('dark') : setTheme('light')
    }
  

    return (
    <DarkModeSwitch 
        checked={checked}
        onChange={onClick}
        size={20}
    />
  )
}

export default DarkModeToggle;