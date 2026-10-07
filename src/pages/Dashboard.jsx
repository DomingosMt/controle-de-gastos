
import { useState } from 'react'
import { FiBell, FiChevronDown, FiPlus, FiSearch } from 'react-icons/fi'
import { MdOutlineAccountBalanceWallet, MdOutlineArrowDownward, MdOutlineArrowUpward } from 'react-icons/md'
import Sidebar from '../components/Sidebar'

const overviewCards = [
  { label: 'Saldo atual', icon: MdOutlineAccountBalanceWallet, tone: 'green' },
  { label: 'Entradas', icon: MdOutlineArrowUpward, tone: 'blue' },
  { label: 'Saídas', icon: MdOutlineArrowDownward, tone: 'orange' },
]

function Dashboard() {
  const [isEntryMenuOpen, setIsEntryMenuOpen] = useState(false)

  return (
    <div className="dashboard-shell">
      <Sidebar />
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">Visão geral</p>
            <h1>Olá, seja bem-vindo!</h1>
          </div>
          <div className="header-actions">
            <button className="icon-button" aria-label="Pesquisar"><FiSearch /></button>
            <button className="icon-button" aria-label="Notificações"><FiBell /></button>
            <div className="profile-chip">
              <span className="profile-avatar">U</span>
              <span className="profile-name">Usuário</span>
              <FiChevronDown />
            </div>
          </div>
        </header>

        <section className="welcome-strip">
          <div>
            <p className="welcome-kicker">Seu controle financeiro</p>
            <h2>Tenha clareza sobre o seu dinheiro.</h2>
            <p>Adicione uma entrada para começar a acompanhar sua vida financeira.</p>
          </div>
          <div className="entry-action-wrap">
            <button className="primary-button" onClick={() => setIsEntryMenuOpen((current) => !current)}>
              <FiPlus />
              Nova entrada
            </button>
            {isEntryMenuOpen && (
              <div className="entry-menu">
                <button>Nova receita</button>
                <button>Nova despesa</button>
              </div>
            )}
          </div>
        </section>

        <section className="overview-grid" aria-label="Resumo financeiro">
          {overviewCards.map(({ label, icon: Icon, tone }) => (
            <article className="overview-card" key={label}>
              <div className={`overview-icon ${tone}`}><Icon /></div>
              <div>
                <p>{label}</p>
                <strong>--</strong>
                <span>Sem dados disponíveis</span>
              </div>
            </article>
          ))}
        </section>

        <section className="dashboard-panels">
          <article className="panel chart-panel">
            <div className="panel-heading">
              <div><p className="eyebrow">Acompanhamento</p><h2>Fluxo financeiro</h2></div>
              <button className="period-button">Este mês <FiChevronDown /></button>
            </div>
            <div className="empty-chart">
              <div className="chart-lines" aria-hidden="true"><span /><span /><span /><span /></div>
              <div className="empty-state">
                <MdOutlineAccountBalanceWallet />
                <h3>Sem movimentações ainda</h3>
                <p>Seus dados aparecerão aqui quando houver transações.</p>
              </div>
            </div>
          </article>
          <article className="panel transactions-panel">
            <div className="panel-heading">
              <div><p className="eyebrow">Atividade recente</p><h2>Últimas transações</h2></div>
              <button className="text-button">Ver todas</button>
            </div>
            <div className="empty-state compact">
              <FiSearch />
              <h3>Nenhuma transação encontrada</h3>
              <p>Comece registrando sua primeira entrada ou saída.</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default Dashboard