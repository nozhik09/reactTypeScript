import {SectionTitle, SectionWrapper} from "./styles";
import Content from "lessons/Lesson13/components/Content/Content";
import {SectionProps} from "./types";

function Section() {


    return (
        <SectionWrapper>
            <SectionTitle>Section Block</SectionTitle>
            <Content/>
        </SectionWrapper>


    )


}

export default Section