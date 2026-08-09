export default function Footer() {
  return (
    <footer className="w-full mt-16 overflow-hidden">
      <div className="h-4"> </div>
      <div className="flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_center,#9a3d15_0%,#5b1f0e_46%,#321005_100%)] px-4 py-8 text-center shadow-[inset_0_12px_24px_rgba(0,0,0,0.24),inset_0_-12px_20px_rgba(0,0,0,0.24)] md:px-6">

        <div className=" text-center text-sm mt-16 font-medium text-[#ffd59b]">
          <p>© 2026 Candomblé por uma Yawo.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
