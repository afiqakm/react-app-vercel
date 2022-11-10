import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { themeChange } from 'theme-change'




export default function ThemeSwitch() {
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        themeChange(false);
    }, []);


    return (
        <>
            <div className="flex flex-row gap-3 py-2">
                <span className=' align-center'>cupcake</span>
                <Switch
                    data-toggle-theme='cupcake,coffee'
                    data-act-class="ACTIVECLASS"
                    checked={enabled}
                    onChange={setEnabled}
                    className={'toggle'
                    }
                >
                    
                </Switch>
                <span className=' align-center'>coffee</span>
            </div>
        </>
    )
}

/*

                */