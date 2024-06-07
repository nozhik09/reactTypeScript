import {useEffect, useState} from "react";
import {Lesson10Components, Fact, FactItem , Loader} from "./styles";
import Button from "../../components/Button/Button";
import {v4} from "uuid";

function Lesson10() {
    const [inputFacts, setInputFacts] = useState<string[]>([]);
    const [showFactBlock, setShowFactBlock] = useState(false);

    const getCatFacts = async () => {
        try {
            const response = await fetch("https://catfact.ninja/fact");
            const result = await response.json();
            if (!response.ok) {
                throw Object.assign(new Error('API error'), {error: result})
            }else {
                setInputFacts((cats) => [...cats, result.fact]);

            }


            setShowFactBlock(true);
        } catch (error) {
            console.log('Error')
        } finally {
            <Loader/>
        }
    };

    useEffect(() => {
        getCatFacts();
    }, []);

    const GetMore = () => {
        getCatFacts();
    };

    const DeleteAllFact = () => {
        setInputFacts([]);
        setShowFactBlock(false);
    };

    const catFacts = inputFacts.map((fact)=>{
        return <FactItem key={v4()}>{fact}</FactItem>



    })

    return (
        <Lesson10Components>
            <Button name="GET MORE INFO" onClick={GetMore}/>

            {showFactBlock && (
                <Fact>
                    {catFacts}
                </Fact>
            )}
            <Button name="DELETE ALL DATA" onClick={DeleteAllFact} disabled={!showFactBlock}/>
        </Lesson10Components>
    );
}

export default Lesson10;