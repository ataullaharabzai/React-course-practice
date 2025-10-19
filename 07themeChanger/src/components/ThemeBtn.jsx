import React from 'react'
import useTheme from '../contexts/themeContext'

function ThemeBtn() {
    const { defaultTheme, lightMode, darkMode } = useTheme()

    const handleBtn = (e) => {
        const checkButton = e.currentTarget.checked;
        if (checkButton) {
            darkMode()
        } else {
            lightMode()
        }
    }
    return (
        <>
            <div className='themeBtn'>
                <label className='switch'>
                    <input
                        value=''
                        checked={defaultTheme === "dark"}
                        type="checkbox"
                        onChange={handleBtn}
                        id='toggle'
                    />
                    <span className='slider'></span>
                </label>
            </div>
        </>
    )
}

export default ThemeBtn