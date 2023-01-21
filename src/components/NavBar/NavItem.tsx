import classNames from 'classnames';
import { Link } from 'react-router-dom';

type NavItemProps = {
  name: string;
  href: string;
};

export default function NavItem({ name, href }: NavItemProps) {
  const isCurrent = window.location.pathname === href;
  return (
    <Link
      key={name}
      to={href}
      className={classNames(
        isCurrent
          ? 'border-gray-900 text-gray-900 dark:border-indigo-400 dark:text-gray-300'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400',
        'inline-flex items-center rounded-t border-b-2 px-1 pb-4 pt-1 text-[15px] font-medium outline-none focus:rounded-lg focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-400'
      )}
      aria-current={isCurrent ? 'page' : undefined}
    >
      {name}
    </Link>
  );
}
