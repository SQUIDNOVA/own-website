import SQLogo from "../../assets/images/squidnovaLogo-removebg-preview.png";

export default function AboutCompany() {
  return (
    <main className=" bg-darkblue/95 pt-20 p-4 sm:p-6 lg:p-[2%] flex flex-col sm:flex-row gap-3 text-justify ">
      <div className=" mt-[8%] flex flex-col sm:flex-row gap-3 text-justify ">
        <div className=" sm:w-2/3  flex flex-col space-y-2 ">
          <h1 className=" text-lg sm:text-2xl font-bold text-gray-300 ">WHO ARE WE</h1>
          <p className=" text-xs  sm:text-xl md:text-lg lg:text-2xl text-white/70 leading-tight ">
            {`
              This startup began as a schoolboy’s dream. Inspired by a movie, he once thought, “Why can’t I start a business in the future?” 
              As time passed and he entered his teenage years, he doubted himself and set the idea aside to focus on his studies. 
              After completing his UG degree, he moved on to his PG studies. On his first day, a classmate introduced himself as the founder of a company, 
              which reignited that long-forgotten dream. He realized his mistake of giving up and decided to start again from scratch. 
              He began searching for people to join him in different roles for his company. One day, an idea struck him — 
              “Why can’t I choose people from around me?” He decided to pick talented individuals from his own friend circle, as he believed strongly 
              in their abilities and trusted that their skills would help his dream grow. 
            `}
            <span className=" text-white/70 ">
              {`
                Drawing inspiration from his creativity, marketing skills, and helping nature, he shaped a new vision — a company that supports users
                from A to Z with ideas, innovation, and solutions. Though he faced many challenges, his determination kept the company standing strong to this day. 
                One day, he casually told his friends that he was going to start a company — playfully at first — but that playful dream became reality. 
                A small thought from “DAY ONE” is now on its way to becoming a big success “ONE DAY.”
              `}
            </span>
          </p>
        </div>
        <div className=" sm:w-1/3 ">
          <div className=" flex flex-col items-center ">
            <img src={SQLogo} alt=" company logo" className=" size-75 sm:size-full " />
          </div>
        </div>
      </div>
    </main>
  );
}
