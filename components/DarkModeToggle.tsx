import { useEffect, useState } from 'react';
import {DarkModeSwitch} from 'react-toggle-dark-mode'
import {useTheme} from 'next-themes'
import { margin } from 'styled-system';

type DarkModeToggleProps = {
    size:string;
}

const DarkModeToggle = (props:DarkModeToggleProps) => {
  
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
        size={props.size}
        style={{marginTop:'5'}}
    />
  )
}

export default DarkModeToggle;