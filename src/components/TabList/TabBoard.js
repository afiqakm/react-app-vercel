import { useState } from 'react';
import AddTab from './AddTab';
import DeleteTab from './DeleteTab';
import TabList from './TabList';

export default function TabBoard() {
    const [tab, setTabs] = useState(initialTab)
    
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

    return (
        <>
            <div className='flex flex-row gap-5'>
                <AddTab onAddTab={handleAddTab} />
                <DeleteTab tabs={tab}/>
            </div>
            <TabList tabs={tab}/>
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
