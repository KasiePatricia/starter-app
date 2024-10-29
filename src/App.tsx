import StickyNavbar from "@components/stickyNavbar";
import './App.css';
import HoverToShowText from "@components/hoverAdditionContent/HoverToShowtext";
import HoverMenu from "@components/showMenuOnImageHover";
import TooltipAlertModal from "@components/tooltipAlertModal";
import CollapsibleContentMain from "@components/CollapsibleContent";
import StarRating from "@components/StarRating";
import { UsingHash } from "@components/UsingHash";
import { TextAreaMain } from "@components/textarea/UncontrolledTextarea";
import { MultiselectCheckboxMain } from "@components/checkbox/MultipleCheckbox";
import { LazyLoadImageMain } from "@components/imageCompo/LazyLoader";


function App() {

  return (
    <>
      <StickyNavbar />
      <main className="container px-4 mx-auto md:px-0">
        <HoverToShowText />
        <HoverMenu />
        <TooltipAlertModal />
        <CollapsibleContentMain /> 
        <StarRating value={2} />
        <StarRating 
          value={3}
          size="lg"
          onChange={(newRating) => console.log(`New rating: ${newRating}`)}
        />
        <UsingHash />
        <TextAreaMain />
        <MultiselectCheckboxMain />
        <LazyLoadImageMain />
      </main>
    </>
  )
}

export default App
