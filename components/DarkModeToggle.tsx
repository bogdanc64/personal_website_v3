import { useEffect, useState } from 'react';
import {DarkModeSwitch} from 'react-toggle-dark-mode'
import {useTheme} from 'next-themes'

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
        moonColor={'#f7fafc'}
        sunColor={'#2d3748'}
        style={{marginTop:'5'}}
    />
  )
}

export default DarkModeToggle;