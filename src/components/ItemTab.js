/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState,useEffect } from 'react'
import { Tab } from '@headlessui/react'
import AddTabButton from './AddTabButton'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ItemTab() {

    const [isSent, setIsSent] = useState(false);
    
    let [categories] = useState({
        Personal: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
            },
        ],
        Work: [
            
        ],
        Important: [
            
        ],
    })

    let [newCategories] = useState({
        id: 3,
        title: "testing whether it can work or not",
    })

    function handlePlusClick() {
        setIsSent(true);
        categories.Personal.push(newCategories);
        console.log(JSON.stringify(categories));
      }
      if (isSent) {
        <div className="items-center w-full max-w-xl px-2 py-16 sm:px-0">
            <Tab.Group>
                <div className='flex flex-row justify-between'>
                <Tab.List className=" tabs tabs-boxed object-fit w-fit">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'tab tab-lg',
                                    selected
                                        ? 'tab-active'
                                        : ''
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <AddTabButton/>
                </div>
                
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            <ul>
                                {posts.map((post) => (
                                    <li
                                        key={post.id}
                                        className="relative rounded-md p-3 hover:bg-gray-100"
                                    >
                                        <h3 className="text-sm font-medium leading-5">
                                            {post.title}
                                        </h3>

                                        <a
                                            href="#"
                                            className={classNames(
                                                'absolute inset-0 rounded-md',
                                                'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                            )}
                                        />
                                    </li>
                                ))}
                            </ul>
                            
                            <button className='btn btn-primary w-full' onClick={handlePlusClick}>Add Item</button>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
      }
    return (
        <div className="items-center w-full max-w-xl px-2 py-16 sm:px-0">
            <Tab.Group>
                <div className='flex flex-row justify-between'>
                <Tab.List className=" tabs tabs-boxed object-fit w-fit">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'tab tab-lg',
                                    selected
                                        ? 'tab-active'
                                        : ''
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <AddTabButton/>
                </div>
                
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            <ul>
                                {posts.map((post) => (
                                    <li
                                        key={post.id}
                                        className="relative rounded-md p-3 hover:bg-gray-100"
                                    >
                                        <h3 className="text-sm font-medium leading-5">
                                            {post.title}
                                        </h3>

                                        <a
                                            href="#"
                                            className={classNames(
                                                'absolute inset-0 rounded-md',
                                                'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                            )}
                                        />
                                    </li>
                                ))}
                            </ul>
                            
                            <button className='btn btn-primary w-full' onClick={handlePlusClick}>Add Item</button>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
