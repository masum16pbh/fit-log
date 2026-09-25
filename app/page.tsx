import Baner from "./components/baner";
import ExercisePage from "./works/page";

export default function Home(){
  return(
    <>
    <div className="container">
      <Baner></Baner>
      <ExercisePage></ExercisePage>
    </div>
    </>
  )
}