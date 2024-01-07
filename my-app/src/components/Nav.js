import { Link } from 'react-router-dom';
const Nav = () => {
  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },

  ]
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-end items-center max-container'>
        <a href='/'>
          <h1 className=" text-2xl leading-normal font-semibold font-montserrat">&lt; avibandi.com /&gt;</h1>
        </a>
        <ul className='flex-1 flex justify-end items-center gap-12 max-lg:hidden'>
          {navLinks.map((item) => (
            <Link to={item.href}>
              <button>
                {
                  item.label === "Contact" ?
                    <h1 className='text-white text-2xl font-semibold font-palanquin border-2 border-blue-600 bg-blue-600 rounded-lg px-4 py-2 hover:text-blue-600 hover:bg-transparent transition-colors'>
                      {item.label}
                    </h1> :

                    <h1 className='font-montserrat leading-normal text-2xl text-slate-gray font-semibold'>
                      {item.label}
                    </h1>
                }
              </button>
            </Link>
          ))}
        </ul>

        {/* <h1 className='font-montserrat leading-normal text-2xl text-slate-gray font-semibold'>
                  {item.label}
                </h1> */}

        {/* <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div> */}
      </nav>
    </header>

  );
};

export default Nav;
