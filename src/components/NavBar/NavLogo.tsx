type NavLogoProps = {
  children?: React.ReactNode | React.ReactNode[];
};

const NavLogo = ({ children }: NavLogoProps) => {
  return <div className='flex flex-shrink-0 items-center pb-3'>{children}</div>;
};

export default NavLogo;
