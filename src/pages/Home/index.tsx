import { Card } from "../../components/Card";
import { Hero } from "./components/Hero";
import { AllCoffee, ContentContainer } from "./styles";

export function Home(){

  return (
    <>
      <Hero/>
      {/* Content */ }
      <ContentContainer>
        <div className="container">
          <h2>Our Coffee</h2>
          <AllCoffee>
            <Card/>
          </AllCoffee>
        </div>
      </ContentContainer>
    </>
  )
}