/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TabList({ tabs, onDeleteTab, showDelete }) {

    return (
        <Tab.Group>
            <div className='flex flex-row justify-start w-full max-w-xl'>
                <Tab.List className=" flex flex-nowrap tabs tabs-boxed w-fit h-fit overflow-x-auto scrollbar-hide">
                    {tabs.map((tab) => (
                        <TabItem
                            key={tab.id}
                            tabs={tab}
                            onDelete={onDeleteTab}
                            delStat={showDelete} />
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels
                className={classNames(
                    'mx-auto h-120 bg-base-200 w-full max-w-xl p-3 rounded-md justify-center'
                )}
            >
                {tabs.map((tab) => (
                    <Tab.Panel
                        key={tab.content.cId}
                        className={classNames(
                            'rounded-xl bg-base-300 p-4 m-4',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                        )}>{tab.content.detail}</Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}

function TabItem({ tabs, onDelete, delStat }) {
    return (
        <>
            <Tab
                key={tabs.id}
                className={({ selected }) =>
                    classNames(
                        'tab tab-lg justify-between gap-4',
                        selected
                            ? 'tab-active'
                            : ''
                    )
                }
            >
                {tabs.text}
                {delStat && <button
                    onClick={() => onDelete(tabs.id)}
                    className="btn w-5 h-5 rounded-full p-0 min-h-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>}

            </Tab>

        </>
    );
}