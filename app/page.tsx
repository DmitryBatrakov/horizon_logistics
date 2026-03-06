import { AboutUs } from "@/components/blocks/AboutUs/AboutUs";
import { ContactUs } from "@/components/blocks/ContactUs/ContactUs";
import { Faq } from "@/components/blocks/Faq/Faq";
import { Hero } from "@/components/blocks/Hero/Hero";
import { Process } from "@/components/blocks/Process/Process";
import { OurServices } from "@/components/blocks/OurServices/OurServices";
import { Stats } from "@/components/blocks/Stats/Stats";

// export default function Home() {
//     return (
//         <main className="relative">
//             <Hero />
//             <AboutUs />
//             <OurServices />

//             <section className="relative h-[300vh]">
//                 <div className="sticky top-0 h-screen z-10">
//                     <Process />
//                 </div>

//                 <div className="relative top-0 h-screen z-30">
//                     <Stats />
//                 </div>

//                 <div className="sticky top-0 h-screen z-10">
//                     <ContactUs />
//                 </div>
//             </section>
//             <Faq />
//         </main>
//     );
// }

// export default function Home() {
//     return (
//       <main className="relative">
//         <Hero />
//         <AboutUs />
//         <OurServices />

//         {/* 1. Секция Process: залипает, пока Stats на нее наезжает */}
//         <div className="relative h-[200vh]">
//           <div className="sticky top-0 h-screen z-10">
//             <Process />
//           </div>
//           {/* Stats едет поверх Process */}
//           <div className="relative z-20 bg-white">
//             <Stats />
//           </div>
//         </div>

//         {/* 2. ЭФФЕКТ КАРТЫ: Stats уезжает ВВЕРХ, открывая ContactUs */}
//         {/* Контейнер должен быть выше экрана, чтобы дать место для маневра */}
//         <div className="relative h-[200vh] z-30">
//           {/* Контент ContactUs прибит к экрану и ждет под низом */}
//           <div className="sticky top-0 h-screen z-0">
//             <ContactUs />
//           </div>

//           {/* Эта "заглушка" имитирует хвост секции Stats.
//              Когда мы скроллим этот блок, настоящий Stats уже уехал выше,
//              а этот блок (с тем же фоном) продолжает закрывать ContactUs,
//              пока не скроется сам.
//           */}
//           <div className="absolute top-0 left-0 w-full h-screen bg-white z-10 pointer-events-none">
//              {/* Оставь пустым или продублируй конец секции Stats для бесшовности */}

//           </div>
//         </div>

//         {/* FAQ идет обычным потоком, перекрывая ContactUs в конце */}
//         <div className="relative z-40 bg-white">
//           <Faq />
//         </div>
//       </main>
//     );
//   }

export default function Home() {
    return (
        <main className="relative ">
            <Hero />
            <AboutUs />

            {/* ГРУППА 1: Process и Stats */}
            <section className="relative z-20">
                <div className="sticky top-0 h-screen">
                    <OurServices />
                </div>
                {/* Stats накрывает Process и ДОЛЖНА накрывать ContactUs в начале */}
                <div className="relative z-30 min-h-[200vh]">
                    <Stats />
                    <Process />
                </div>
            </section>

            {/* ГРУППА 2: ContactUs (Эффект раскрытия) */}
            <section className="relative z-10 mt-[-100vh]">
                {/* mt-[-100vh] подтягивает эту секцию ВНУТРЬ предыдущей, под Stats */}
                <div className="sticky top-0 h-screen">
                    <ContactUs />
                </div>
                {/* Этот блок создает длину скролла, чтобы Stats успел уехать */}
                <div className="h-screen pointer-events-none" />
            </section>

            {/* ГРУППА 3: Faq и Footer */}
            <section className="relative z-40">
                <Faq />
                {/* Если есть Footer, он будет здесь */}
            </section>
        </main>
    );
}
