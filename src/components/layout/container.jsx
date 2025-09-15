export default function Container() {
    return (
        <main className="bg-[#0A1F33] font-sans">
            <section className="container mx-auto flex flex-col xl:flex-row min-h-screen px-6 py-12 justify-center">
                <div>
                    <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white">O aplicativo que ajuda você a atingir o pico da sua produtividade com foco e organização.</h1>
                <h1 className="mt-4 text-lg md:text-xl text-gray-300">O Zenith combina foco, organização e motivação em um só lugar, ajudando você a alcançar seus objetivos com mais produtividade todos os dias.</h1>
                <a href="/signup" className="mt-6 bg-[#FF7A1A] text-white px-4 py-2 rounded-lg hover:bg-[#123C60] transition w-fit">Comece Agora</a>
                </div>
<img src="guy.jpg" alt="sla" />
            </section>
        </main>
    )
}