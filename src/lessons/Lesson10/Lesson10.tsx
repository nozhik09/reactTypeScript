import {useEffect, useState} from "react";
import {Lesson10Components, Fact, FactItem , Loader} from "./styles";
import Button from "../../components/Button/Button";

function Lesson10() {
    const [inputFacts, setInputFacts] = useState<string[]>([]);
    const [showFactBlock, setShowFactBlock] = useState(false);

    const getCatFacts = async () => {
        try {
            const response = await fetch("https://catfact.ninja/fact");
            const result = await response.json();
            if (!response.ok) {
                throw Object.assign(new Error('API error'), {error: result})
            }

            setInputFacts((cats) => [...cats, result.fact]);
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

    return (
        <Lesson10Components>
            <Button name="GET MORE INFO" onClick={GetMore}/>

            {showFactBlock && (
                <Fact>
                    {inputFacts.map((fact, id) => (
                        <FactItem key={id}>{fact}</FactItem>
                    ))}
                </Fact>
            )}
            <Button name="DELETE ALL DATA" onClick={DeleteAllFact} disabled={!showFactBlock}/>
        </Lesson10Components>
    );
}

export default Lesson10;