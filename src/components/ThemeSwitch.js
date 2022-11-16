import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { themeChange } from 'theme-change'


export default function ThemeSwitch() {
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        themeChange(false);
        const data1 = localStorage.getItem('theme');
        if (data1 === 'coffee') setEnabled(true);
    }, []);

    return (
        <>
            <div className="flex flex-row gap-3 py-2">
                <span className=' align-center'>cupcake</span>
                <Switch
                    data-set-theme={enabled ? 'cupcake' : 'coffee'}
                    data-act-class="ACTIVECLASS"
                    checked={enabled}
                    onChange={setEnabled}
                    className={'toggle'}
                    value={'cupcake'}
                />

                <span className=' align-center'>coffee</span>
            </div>
        </>
    )
}

/*

                */