import { Hero } from "./components/Hero";
import { ContentContainer } from "./styles";

export function Home(){
  return (
    <>
      <Hero/>
      {/* Content */ }
      <ContentContainer>
        <div className="container">
          <h2>Our Coffee</h2>
          <div className="content__all">
            
          </div>
        </div>
      </ContentContainer>
    </>
  )
}