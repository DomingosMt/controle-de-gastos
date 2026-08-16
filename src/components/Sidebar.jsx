import { IoAdd } from "react-icons/io5";
import { MdDashboard, MdOutlineLogout } from "react-icons/md";
import { PiNewspaperClipping } from "react-icons/pi";
import { BiBarChartAlt2 } from "react-icons/bi";
import { GoGear } from "react-icons/go";

function Sidebar() {
    return (
        <div>
            <div className="flex flex-col">
                    <img src="" alt="" />
                    <div className="flex flex-col">
                    <h1 className="">Financer</h1>
                    <h3>Conta Pessoal</h3>
                </div>
                <div>
                    <IoAdd />
                    <span>Nova Entrada</span>
                </div>
            </div>

            <div>
                <div>
                    <MdDashboard />
                    <span>Dashboard</span>
                </div>
                <div>
                    <PiNewspaperClipping />
                    <span>Transações</span>
                </div>
                <div>
                    <BiBarChartAlt2 />
                    <span>Análise</span>
                </div>
                <div>
                    <GoGear />
                    <span>Configurações</span>
                </div>
            </div>

            <div>
                <MdOutlineLogout />
                <span>Sair</span>
            </div>
        </div>
    )
}

export default Sidebar