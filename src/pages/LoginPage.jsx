import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import backgroundImage from "../assets/imagemloginpage.jpg";

function LoginPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] lg:flex">
      <section className="relative flex min-h-[42vh] overflow-hidden bg-[#1f2a24] text-white lg:min-h-screen lg:w-[44%]">
        <img
          src={backgroundImage}
          alt="imagem de escritorio"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/40 to-black/70" />

        <div className="relative z-10 flex w-full flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div className="max-w-md space-y-5 pb-4 lg:pb-10">
            <h2 className="text-3xl leading-tight font-semibold sm:text-4xl lg:text-[3.5rem] lg:leading-[1.02]">
              Seu parceiro para uma vida financeira tranquila
            </h2>
            <p className="max-w-lg text-sm leading-6 text-white/82 sm:text-base sm:leading-7">
              Assuma o controle dos seus gastos e planeje o seu futuro com clareza e segurança.
            </p>
          </div>
        </div>
      </section>

      <section className="flex min-h-[58vh] items-center justify-center px-6 py-10 sm:px-10 lg:min-h-screen lg:w-[56%] lg:px-16 xl:px-24">
        <div className="w-full max-w-115 space-y-8">
          <div className="space-y-3 text-center lg:text-left"> 
            <h1 className="text-3xl font-semibold text-[#1f1f1f] sm:text-4xl">
              Bem-vindo de volta
            </h1>
            <p className="text-base text-[#6e6458]">Insira seus dados para continuar</p>
          </div>

          <form className="space-y-5">
            <label className="block space-y-2">
              <span className="flex items-center gap-2 text-sm font-medium text-[#352f28]">
                <MdOutlineEmail className="text-lg text-[#C0C8CB]" />
                Email
              </span>
              <input
                placeholder="email@readbooks.com"
                type="email"
                name="email"
                id="emailLogin"
                className="w-full rounded-2xl border border-[#C0C8CB] bg-white px-4 py-4 text-[#1f1f1f] outline-none transition placeholder:text-[#C0C8CB] focus:border-[#8a7f6b] focus:ring-4 focus:ring-[#8a7f6b]/10"
              />
            </label>

            <label className="block space-y-2">
              <div className="flex items-center justify-between gap-4 text-sm font-medium text-[#352f28]">
                <span className="flex items-center gap-2">
                  <MdLockOutline className="text-lg text-[#C0C8CB]" />
                  Senha
                </span>
                <button type="button" className="text-sm font-medium text-[#003441] transition cursor-pointer">
                  Esqueci minha senha
                </button>
              </div>
              <input
                placeholder="Digite sua senha"
                type="password"
                name="password"
                id="passwordLogin"
                className="w-full rounded-2xl border border-[#C0C8CB] bg-white px-4 py-4 text-[#1f1f1f] outline-none transition placeholder:text-[#C0C8CB] focus:border-[#8a7f6b] focus:ring-4 focus:ring-[#8a7f6b]/10"
              />
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#1f2a24] px-5 py-4 text-base font-semibold text-white transition hover:bg-[#2b3a32] cursor-pointer"
            >
              Entrar
              <FaArrowRight />
            </button>
          </form>

          <div className="flex items-center gap-4 text-sm text-[#70787C]">
            <hr className="flex-1 border-[#C0C8CB]" />
            <span className="whitespace-nowrap tracking-[0.25em]">ou continue com</span>
            <hr className="flex-1 border-[#C0C8CB]" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button className="flex items-center justify-center gap-3 rounded-2xl border border-[#C0C8CB] bg-white px-5 py-4 font-medium text-[#352f28] transition hover:border-[#c8bca9] hover:bg-[#eff5fc] cursor-pointer">
              <FcGoogle className="text-xl" />
              <span>Google</span>
            </button>

            <button className="flex items-center justify-center gap-3 rounded-2xl border border-[#C0C8CB] bg-white px-5 py-4 font-medium text-[#352f28] transition hover:border-[#C0C8CB] hover:bg-[#eff5fc] cursor-pointer">
              <IoLogoApple className="text-xl" />
              <span>Apple</span>
            </button>
          </div>

          <div className="flex justify-center">
            <p className="text-center text-sm  text-[#40484B] lg:text-left">
              Não tem uma conta?{' '}
              <button className="font-semibold text-[#003441] transition hover:text-[#685f51] cursor-pointer">
                Criar conta
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginPage