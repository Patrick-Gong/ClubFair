import startGame from "../../assets/startGame.png";
import { motion, useScroll, useTransform } from "framer-motion";

function Intro_Footer() {
  const { scrollYProgress } = useScroll();

  const boxOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <footer className="bg-gradient-to-b from-[#d5cae4] from-0% to-gray-500 to-100% py-10 flex justify-center">
      <motion.div
        className="px-4 py-5 bg-[#ffeadd] rounded-lg flex flex-col items-center shadow-lg"
        style={{
          opacity: boxOpacity,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          transform: "translateY(-20px)",
        }}
      >
        <p className="font-semibold text-lg mb-5">
          웹 프로젝트의 완성을 위해 <br /> 각 분야의 팀원들을 구해야 합니다
        </p>
        <p className="font-semibold text-lg mb-16">
          4번의 게임을 통해 팀원을 구해보세요!
        </p>
        <img
          className="w-[90%] h-44 mb-8"
          src={startGame}
          alt="게임 시작 이미지"
        />
        <button
          className="bg-[#FF9B62] text-black font-bold flex justify-center items-center rounded-4xl w-[90%] h-13 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)]"
          type="button"
        >
          팀원 구하러 가기
        </button>
      </motion.div>
    </footer>
  );
}

export default Intro_Footer;
