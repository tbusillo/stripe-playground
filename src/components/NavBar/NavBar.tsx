import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  BellIcon,
  XIcon,
  MenuIcon,
  PlusSmIcon
} from '@heroicons/react/outline';
import classNames from 'classnames';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { NavItem, NavLogo } from '@components';

type NavBarProps = {
  logo?: React.ReactNode;
};

const navigation = [
  { name: 'Dashboard', href: '/', current: true },
  { name: 'My Designs', href: '/designs', current: false },
  { name: 'Example', href: '/example', current: false },
  { name: 'Inspiration', href: '/inspiration', current: false },
  { name: 'Editor', href: '/editor' }
];

const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Settings', href: '/settings' },
  { name: 'Documentation', href: '/docs' },
  { name: 'Example', href: '/example' }
];

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: ''
};

const NavBar = ({ logo }: NavBarProps) => {
  const router = window.location;

  return (
    <Disclosure
      as='nav'
      className='bg-white shadow-sm transition-colors duration-300 dark:bg-gray-800/80'
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between pt-4'>
              <div className='flex'>
                <NavLogo>{logo}</NavLogo>
                <div className='hidden tracking-wide sm:-my-px sm:ml-6 sm:flex sm:space-x-8'>
                  {navigation.map((item) => (
                    <NavItem name={item.name} href={item.href} key={item.name}>
                      {item.name}
                    </NavItem>
                  ))}
                </div>
              </div>
              <div className='hidden pb-3 sm:ml-6 sm:flex sm:items-center'>
                <button
                  type='button'
                  className='mr-4 inline-flex items-center rounded-lg border border-transparent bg-indigo-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-400'
                >
                  <PlusSmIcon className='h-5 w-5' />
                  <span className='ml-1'>Add</span>
                </button>
                <button
                  type='button'
                  className='hidden rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-transparent'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-3'>
                  <div>
                    <Menu.Button className='flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-400'>
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='hidden h-8 w-8 rounded-full'
                        src={user.imageUrl}
                        alt=''
                      />
                      <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 font-semibold tracking-wider dark:bg-transparent'>
                        TB
                      </span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          <Link
                            to={item.href}
                            className={classNames(
                              router.pathname === item.href
                                ? 'bg-gray-100'
                                : '',
                              'block px-4 py-2 text-gray-700'
                            )}
                          >
                            {item.name}
                          </Link>
                        </Menu.Item>
                      ))}
                      <Menu.Item>
                        <button
                          className={classNames(
                            router.pathname === '/logout' ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                          // onClick={() => supabase.auth.signOut()}
                        >
                          Sign out
                        </button>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className='-mr-2 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-700 dark:ring-offset-gray-700'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <Transition
              enter='transition duration-100 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
            >
              <div className='space-y-1 pt-2 pb-3'>
                {navigation.map((item) => (
                  <Disclosure.Button key={item.name}>
                    <Link
                      to={item.href}
                      className={classNames(
                        item.current
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                          : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  </Disclosure.Button>
                ))}
              </div>
              <div className='border-t border-gray-200 pt-4 pb-3'>
                <div className='flex items-center px-4'>
                  <div className='flex-shrink-0'>
                    <img
                      className='h-10 w-10 rounded-full'
                      src={user.imageUrl}
                      alt=''
                    />
                  </div>
                  <div className='ml-3'>
                    <div className='text-base font-medium text-gray-800'>
                      {user.name}
                    </div>
                    <div className='text-sm font-medium text-gray-500'>
                      {user.email}
                    </div>
                  </div>
                  <button
                    type='button'
                    className='ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    <span className='sr-only'>View notifications</span>
                    <BellIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
                <div className='mt-3 space-y-1'>
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  <Disclosure.Button
                    as='a'
                    href={'/logout'}
                    className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                    // onClick={() => console.log('Hi') supabase.auth.signOut()}
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            </Transition>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
