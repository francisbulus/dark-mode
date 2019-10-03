import { useEffect } from 'react';
import { useLocalStorage } from "./useLocalStorage"

const useDarkMode = (key, initialValue) => {

    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)
    
    useEffect(() => {
        console.log("Dark in hook: ", darkMode);

        if (darkMode === true) {
            document.body.classList.remove('dark-mode');
        }
        else {
            document.body.classList.add('dark-mode');
        }
    }, [darkMode]);
    
    return [darkMode, setDarkMode];
    
    }
    
export default useDarkMode;