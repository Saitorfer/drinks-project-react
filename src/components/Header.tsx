import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className='bg-slate-800'> 

        <div className='mx-auto container px-5 py-6'>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='w-32' src='logo.svg' alt='logo'/>
                </div>
                <nav className="flex gap-4">
                    <NavLink 
                    className={({isActive})=>
                        isActive ? "text-orange-500 uppercase font-bold":"text-white uppercase font-bold"
                    }
                    to="/">Home</NavLink>
                    <NavLink 
                    className={({isActive})=>
                        isActive ? "text-orange-500 uppercase font-bold":"text-white uppercase font-bold"
                    }
                    to="favorites">Favorites</NavLink>
                </nav>
            </div>

        </div>


    </header>

  )
}