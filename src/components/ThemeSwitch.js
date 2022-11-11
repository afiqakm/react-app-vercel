import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { themeChange } from 'theme-change'


export default function ThemeSwitch() {
    let [enabled, setEnabled] = useState(false)

    useEffect(() => {
        themeChange(false);
        const data = localStorage.getItem('themeState');
        if (data === true) setEnabled(true);
    }, []);


    useEffect(() => {
        localStorage.setItem('themeState', JSON.stringify(enabled));
    }, [enabled]);



    return (
        <>
            <div className="flex flex-row gap-3 py-2">
                <span className=' align-center'>cupcake</span>
                <Switch
                    data-set-theme={enabled ? 'cupcake' : 'coffee'}
                    data-act-class="ACTIVECLASS"
                    defaultChecked={enabled}
                    onChange={setEnabled}
                    className={'toggle'}
                >

                </Switch>
                <span className=' align-center'>coffee</span>
            </div>
        </>
    )
}

/*

                */