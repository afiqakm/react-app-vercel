/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Tab } from '@headlessui/react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TabList({ tabs, onDeleteTab, onChangeTab }) {
    return (
        <Tab.Group>
            <Tab.List className=" tabs tabs-boxed object-fit w-fit">
                {tabs.map((tab) => (
                    <>
                        <Tab
                            key={tab.id}
                            className={({ selected }) =>
                                classNames(
                                    'tab tab-lg justify-between gap-4',
                                    selected
                                        ? 'tab-active'
                                        : ''
                                )
                            }
                        >
                            {tab.text}
                        </Tab>
                    </>
                ))}
            </Tab.List>
            <Tab.Panels
                className={classNames(
                    'mx-auto h-120 bg-base-200 w-full max-w-xl p-3 rounded-md justify-center'
                )}
            >
                {tabs.map((tab) => (
                    <Tab.Panel
                        className={classNames(
                            'rounded-xl bg-base-300 p-4 m-4',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                        )}>{tab.content.detail}</Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}


