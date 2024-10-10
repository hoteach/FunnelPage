
import image from "../assets/hoteach/6.gif"

export function MeetTheTeam() {
    return (
        <section className="bg-white">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 flex flex-col-reverse lg:flex-row-reverse sm:py-16 lg:px-6">
                <img className="lg:w-1/2" src={image} alt="dashboard image" />
                <div className="mt-4 lg:w-1/2 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">И сега сигурно си мислиш...</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg">"Не ми е ясно дали наистина ще получа стойност от офертата, защото съм опитвал подобни програми и не съм видял резултати", но искам да те уверя, че това не е така, защото моята оферта включва стъпка по стъпка ръководство и конкретни примери, които са създадени с оглед на нуждите на начинаещите програмисти, което значително увеличава шансовете за успех. Освен това, предлагам лична обратна връзка и поддръжка, за да ти помогна да приложиш наученото на практика и да постигнеш реални резултати.

                    </p>
                </div>
            </div>
        </section>
    );
}