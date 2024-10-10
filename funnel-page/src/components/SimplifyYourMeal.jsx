
import image from "../assets/hoteach/FlaimySmileSit.png"

export function SimplifyYourMeal() {
    function App(){
        return window.open('https://app.mealmasterbot.com');
    }
    return (
        <section className="bg-white py-8 antialiased md:py-16">
            <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
            <div className="content-center justify-self-start md:col-span-7 md:text-start">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:max-w-2xl md:text-5xl xl:text-6xl">Искаш да изпъкнеш<br />пред работодателите?</h1>
                <p className="max-w-2xl text-gray-500 md:mb-12 md:text-lg mb-3 lg:mb-5 lg:text-xl">Да изпъкнеш пред работодателите като програмист е по-трудно от всякога. Просто да имаш знания вече не стига – трябва да покажеш впечатляващи проекти, които демонстрират уменията ти.
                </p>
                <a onClick={App} className="inline-block rounded-lg cursor-pointer text-black bg-maincol border-2 border-black px-6 py-3.5 text-center font-medium focus:outline-none focus:ring-4 focus:ring-primary-300">Разбери как...</a>
            </div>
            <div className="hidden md:col-span-5 md:mt-0 lg:flex">
                <img className="w-96 rounded-2xl" src={image} alt="shopping illustration" />
            </div>
            </div>
        </section>
    );
}