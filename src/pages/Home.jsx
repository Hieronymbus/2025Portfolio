import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {


    return (

        <div
            className="min-h-screen bg-background text-foreground overflow-x-hidden"
        >

            {/* {Theme Toggle} */}
                <ThemeToggle />
            {/* {Background Effects} */}
                <StarBackground />
            {/* {Navbar} */}
                <NavBar />
            {/* {Main Content} */}
                <main>
                    <HeroSection />
                    <AboutSection />
                </main>
            {/* {Footer} */}
            
        </div>
    )
};