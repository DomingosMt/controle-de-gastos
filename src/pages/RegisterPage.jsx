
import { MdOutlineEmail, MdLockOutline, MdPersonOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple, IoEyeOffOutline } from "react-icons/io5";
import backgroundImage from "../assets/imagemloginpage.jpg";

function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] lg:flex">
      <section className="relative flex min-h-[42vh] overflow-hidden bg-[#1f2a24] text-white lg:min-h-screen lg:w-[44%]">
        <img
          src={backgroundImage}
          alt="imagem de escritório"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/40 to-black/70" />

        <div className="relative z-10 flex w-full flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/12 ring-1 ring-white/30 backdrop-blur-sm">
              <span className="text-base font-bold text-white">F</span>
            </div>
            <span className="text-lg font-semibold text-white">FinControl</span>
          </div>

          <div className="max-w-md space-y-5 pb-4 lg:pb-10">
            <h2 className="text-3xl leading-tight font-semibold sm:text-4xl lg:text-[3.5rem] lg:leading-[1.02]">
              Seu parceiro para uma vida financeira tranquila.
            </h2>
          </div>
        </div>
      </section>

      <section className="flex min-h-[58vh] items-center justify-center px-6 py-10 sm:px-10 lg:min-h-screen lg:w-[56%] lg:px-16 xl:px-24">
        <div className="w-full max-w-115 space-y-8">
          <div className="space-y-3 text-center lg:text-left">
            <h1 className="text-3xl font-semibold text-[#1f1f1f] sm:text-4xl">
              Criar sua conta
            </h1>
            <p className="text-base text-[#6e6458]">
              Comece sua jornada para o controle financeiro hoje.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
            <label className="block space-y-2">
              <span className="flex items-center gap-2 text-sm font-medium text-[#352f28]">
                <MdPersonOutline className="text-lg text-[#C0C8CB]" />
                Nome completo
              </span>
              <input
                placeholder="Seu nome"
                type="text"
                name="fullName"
                id="fullNameRegister"
                className="w-full rounded-2xl border border-[#C0C8CB] bg-white px-4 py-4 text-[#1f1f1f] outline-none transition placeholder:text-[#C0C8CB] focus:border-[#8a7f6b] focus:ring-4 focus:ring-[#8a7f6b]/10"
              />
            </label>

            <label className="block space-y-2">
              <span className="flex items-center gap-2 text-sm font-medium text-[#352f28]">
                <MdOutlineEmail className="text-lg text-[#C0C8CB]" />
                Email
              </span>
              <input
                placeholder="seu@email.com"
                type="email"
                name="email"
                id="emailRegister"
                className="w-full rounded-2xl border border-[#C0C8CB] bg-white px-4 py-4 text-[#1f1f1f] outline-none transition placeholder:text-[#C0C8CB] focus:border-[#8a7f6b] focus:ring-4 focus:ring-[#8a7f6b]/10"
              />
            </label>

            <label className="block space-y-2">
              <span className="flex items-center gap-2 text-sm font-medium text-[#352f28]">
                <MdLockOutline className="text-lg text-[#C0C8CB]" />
                Senha
              </span>
              <div className="relative">
                <input
                  placeholder="••••••••"
                  type="password"
                  name="password"
                  id="passwordRegister"
                  className="w-full rounded-2xl border border-[#C0C8CB] bg-white px-4 py-4 pr-12 text-[#1f1f1f] outline-none transition placeholder:text-[#C0C8CB] focus:border-[#8a7f6b] focus:ring-4 focus:ring-[#8a7f6b]/10"
                />
                <button
                  type="button"
                  aria-label="Mostrar senha"
                  className="absolute inset-y-0 right-4 flex items-center text-[#6e6458] transition hover:text-[#1f1f1f]"
                >
                  <IoEyeOffOutline className="text-lg" />
                </button>
              </div>
              <p className="text-xs text-[#6e6458]">Deve ter pelo menos 8 caracteres</p>
            </label>

            <label className="block space-y-2">
              <span className="flex items-center gap-2 text-sm font-medium text-[#352f28]">
                <MdLockOutline className="text-lg text-[#C0C8CB]" />
                Confirmar senha
              </span>
              <input
                placeholder="••••••••"
                type="password"
                name="confirmPassword"
                id="confirmPasswordRegister"
                className="w-full rounded-2xl border border-[#C0C8CB] bg-white px-4 py-4 text-[#1f1f1f] outline-none transition placeholder:text-[#C0C8CB] focus:border-[#8a7f6b] focus:ring-4 focus:ring-[#8a7f6b]/10"
              />
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#1f2a24] px-5 py-4 text-base font-semibold text-white transition hover:bg-[#2b3a32] cursor-pointer"
            >
              Criar conta
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

            <button className="flex items-center justify-center gap-3 rounded-2xl border border-[#C0C8CB] bg-white px-5 py-4 font-medium text-[#352f28] transition hover:border-[#c8bca9] hover:bg-[#eff5fc] cursor-pointer">
              <IoLogoApple className="text-xl" />
              <span>Apple</span>
            </button>
          </div>

          <div className="flex justify-center">
            <p className="text-center text-sm text-[#40484B] lg:text-left">
              Já tem uma conta?{' '}
              <button className="font-semibold text-[#003441] transition hover:text-[#685f51] cursor-pointer">
                Entrar
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RegisterPage