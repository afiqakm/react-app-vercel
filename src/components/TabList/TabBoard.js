import { useState } from 'react';
import AddTab from './AddTab';
import TabList from './TabList';
import { Switch } from '@headlessui/react'

export default function TabBoard() {
    const [tab, setTabs] = useState(initialTab)
    const [enabled, setEnabled] = useState(false)

    function handleAddTab(text) {
        setTabs([
            ...tab,
            {
                id: nextId++,
                text: text,
                content: {
                    cId: ncId++,
                    detail: 'Content ' + nextContent++,
                }
            },
        ]);
    }

    function handleDeleteTab(tabId) {
        setTabs(tab.filter((t) => t.id !== tabId));
        console.log(tabId)
    }

    return (
        <>
            <div className='flex flex-row justify-between w-full max-w-lg'>
                <AddTab onAddTab={handleAddTab} />
                <div className="form-control">
                    <label className="label cursor-pointer gap-3">
                        <span className="label-text">Delete Tab</span>
                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={'toggle'}
                        />
                    </label>
                </div>
            </div>

            <TabList tabs={tab} onDeleteTab={handleDeleteTab} showDelete={enabled} />
        </>
    );
}

let nextId = 2;
let ncId = 102;
let nextContent = 3;
const initialTab = [
    {
        id: 0,
        text: 'Work',
        content: {
            cId: 100,
            detail: 'Content 1',
        }
    },
    {
        id: 1,
        text: 'Personal',
        content: {
            cId: 101,
            detail: 'Content 2',
        }
    },
];
