import Counter from "./Component/Counter/index"
import SixteenBox from "./Component/SixteenBox"
import SlideShow from "./Component/SlideShow"
import StudentScore from "./Component/StudentScore"

export default function Home() {
  return (
    <>
      <h1>Session 001</h1>
      <Counter />

      <hr></hr>
      <h1>Session 002</h1>
      <StudentScore />
      <hr></hr>
      
    </>
  )
}
