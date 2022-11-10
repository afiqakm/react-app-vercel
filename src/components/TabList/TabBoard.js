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
                    detail: 'Content ' + nextContent++,
                }
            },
        ]);
    }

    function handleDeleteTab(tabsId) {
        setTabs(tab.filter((t) => t.id !== tabsId));
    }


    return (
        <>
            <div className='flex flex-row gap-5'>
                <AddTab onAddTab={handleAddTab} />
                <DeleteTab onDeleteTab={handleDeleteTab} tabs={tab}/>
            </div>

            <TabList
                tabs={tab}
            />
        </>
    );
}

let nextId = 2;
let nextContent = 3;
const initialTab = [
    {
        id: 0,
        text: 'Work',
        content: {
            detail: 'Content 1',
        }
    },
    {
        id: 1,
        text: 'Personal',
        content: {
            detail: 'Content 2',
        }
    },
];
