import image from "../assets/hoteach/special.gif";
import image2 from "../assets/hoteach/9.gif";

export function DiscoverWithMealMaster() {
  function App() {
    return window.open("https://app.mealmasterbot.com");
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <section className="bg-white flex justify-center items-center flex-col">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Какво прави Hoteach толкова специална?
            </h2>
            <ul className="ml-10 font-black">
              <li className="p-2">
                Тя не е просто платформа с ресурси – Hoteach е твоя персонализиран гид. 
              </li>
              <li className="p-2">
                TСлед като се регистрираш, ние ще генерираме персонализирана обучителна пътека, базирана на твоите умения и интереси.
              </li>
              <li className="p-2">
              Ще ти предоставим готови проекти, ресурси и шаблони, заедно с детайлни обяснения на всяка стъпка.
              </li>
              <li className="p-2">
              Независимо дали имаш нужда от идея за проект, допълнителни материали, или помощ с определена технология, Hoteach ще бъде до теб през цялото време.
              </li>
            </ul>
          </div>
          <div className="gap-4 mt-8">
            <img
              className="w-[60rem] rounded-2xl"
              src={image}
              alt="office content 1"
            />
          </div>
        </div>
        <a
          onClick={App}
          className="inline-block cursor-pointer rounded-lg px-6 py-3.5 text-center font-medium text-xl text-black bg-maincol border-2 border-black focus:outline-none focus:ring-4 focus:ring-primary-300"
        >
          Вземи сега замо за <span className="text-secondary font-bold">13.48лв</span> !
        </a>
      </section>
      <div className="max-w-screen-md px-4 lg:px-0 flex justify-center items-center flex-col mb-2 lg:mb-2 mt-8 lg:mt-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
        Това е твоят шанс...
        </h2>
        <p className="text-lg">
        Да представиш нещо уникално и професионално, което да ти отвори врати в топ компании.
        </p>
      </div>
      <div className="static md:relative max-w-screen-md px-4 lg:px-0 flex justify-center items-center flex-col mb-8 lg:mb-8 mt-8 lg:mt-8">
        <img
          src={image2}
          alt="office content 1"
          className="hidden md:block w-full h-auto rounded-2xl object-cover"
        />
        <div className="static md:absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-6 rounded-2xl">
          <p className="text-lg mt-5">
          Hoteach ти помага във всеки етап – от идеята до финалния продукт, с ресурси, които ти липсват, и обяснения, които ти дават пълно разбиране.
          </p>
          <p className="text-lg mt-5">
          Регистрирай се сега за 8.90 лв и започни да изграждаш проектите, които ще те отличат. След плащането, ще получиш имейл с активационен линк и можеш веднага да започнеш своята персонализирана пътека!

          </p>
        </div>
      </div>
      <div className="max-w-screen-md px-4 lg:px-0 flex justify-center items-center flex-col">
        <p className="text-lg mt-5">
        Не пропускай възможността да получиш достъп до над 200 специализирани ресурса – идеи за успешни проекти, ръководства, шаблони, упражнения и дори готови решения за социални медии и GitHub. Всичко това е на една ръка разстояние – само за 8.90 лв.!
        </p>
      </div>
    </div>
  );
}
