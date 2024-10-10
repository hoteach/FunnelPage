import image from "../assets/hoteach/projects.gif"

export function BenefitsOfUsing() {
    return (
        <section className="bg-white flex justify-center items-center flex-col">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:flex lg:flex-row-reverse lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Hoteach е тук, за да ти помогне да създадеш точно такива проекти.</h2>
                    <p className="font-black">Тя е създадена с мисълта за начинаещи и средно напреднали програмисти, които искат не само да усвояват нови технологии, но и да ги прилагат на практика, като създават завършени и професионални проекти.
                    </p>
                </div>
                <div className="gap-4 mt-8">
                    <img className="w-[60rem] rounded-2xl" src={image} alt="office content 1" />
                </div>
            </div>
        </section>
    );
}