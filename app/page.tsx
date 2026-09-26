import Baner from "./components/baner";
import ExercisePage from "./works/page";

export default function Home(){
  return(
    <>
    <div className="container">
      <Baner></Baner>
      <h2>THE LIBRARY</h2>
      <ExercisePage></ExercisePage>
    </div>
    </>
  )
}