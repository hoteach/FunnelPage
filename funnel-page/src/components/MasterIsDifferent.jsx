import image from "../assets/hoteach/5.gif"

export function MasterIsDifferent() {
    return (
        <section className="bg-white">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:flex lg:flex-row-reverse lg:py-16 lg:px-6">
                <div className="lg:w-1/2 font-light text-gray-500 sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Но как ще получа достъп?</h2>
                    <p>След като направиш покупката, ще получиш активационен имейл с линк, който ще те отведе директно в Hoteach. Веднага ще започнеш своята персонализирана обучителна пътека, която ще ти помогне да създадеш проект, с който ще се откроиш сред кандидатите за работа.
                    </p>
                </div>
                <div className="gap-4 lg:w-1/2 mt-8">
                    <img className="w-[60rem] rounded-2xl" src={image} alt="office content 1" />
                </div>
            </div>
        </section>
    );
}