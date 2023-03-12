import Header from "../components/Header"
import ImageList from "../components/ImageList";
import Description from "../components/Description";
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div className="mainLayout">
            <Header className="layoutHeader" />
            <ImageList className="layoutImages" />
            <Description className="layoutDescription" />
            <Footer className="layoutFooter" />
        </div>
    );
}