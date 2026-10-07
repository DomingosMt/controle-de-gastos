import { NavLink } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { MdDashboard, MdOutlineLogout } from "react-icons/md";
import { PiNewspaperClipping } from "react-icons/pi";
import { BiBarChartAlt2 } from "react-icons/bi";
import { GoGear } from "react-icons/go";

function Sidebar() {
    return (
        <aside className="app-sidebar">
            <div className="sidebar-top">
                <div className="brand-block">
                    <div className="brand-mark">F</div>
                    <div><h1>FinControl</h1><p>Conta pessoal</p></div>
                </div>
                <button className="sidebar-add">
                    <IoAdd />
                    <span>Nova Entrada</span>
                </button>
            </div>

            <nav className="sidebar-nav" aria-label="Navegação principal">
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                    <MdDashboard />
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="/transactions" className="sidebar-link">
                    <PiNewspaperClipping />
                    <span>Transações</span>
                </NavLink>
                <NavLink to="/reports" className="sidebar-link">
                    <BiBarChartAlt2 />
                    <span>Análise</span>
                </NavLink>
                <NavLink to="/settings" className="sidebar-link">
                    <GoGear />
                    <span>Configurações</span>
                </NavLink>
            </nav>

            <button className="sidebar-logout">
                <MdOutlineLogout />
                <span>Sair</span>
            </button>
        </aside>
    )
}

export default Sidebar