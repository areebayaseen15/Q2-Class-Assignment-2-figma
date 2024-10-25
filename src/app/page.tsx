import Card from "./components/card";
import Main from "./components/main";
import Nav from "./components/nav";


export default function Home(){
  return(
    <div className="home overflow-hidden ">
      {/* navBar */}
      <Nav/>
  
  {/* //maincontainer */}
  <main className="container w-[900px] h-[1028px] top-[104px] ml-[156px] pt-[50px] bottom-[80px] gap-20  ">

  <Main/>
      <Card/>
   
      </main>
    </div>
  )
}