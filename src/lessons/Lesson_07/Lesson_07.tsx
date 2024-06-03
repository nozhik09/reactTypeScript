import {useState} from "react";
import Counter from "../../components/Counter/Counter";
import './styles.css'

function Lesson_07() {
//jeneric
    type CustomArrayType<T> = T[]
    const numbersArray: CustomArrayType<string> = ['string', 'string1', 'string2']
    const booleanArra: CustomArrayType<boolean> = [false, true]

    type CustomTunel<T = number> = [number, string, T]
    const arrayMix: CustomTunel<string> = [2, 'blue', 'black']
    const arrayMix2: CustomTunel = [3, 'red', 4]


    interface Fruits<T> {
        title: string,
        adrdress: T
    }

    const fruit1: Fruits<number> = {

        title: 'Apple',
        adrdress: 29
    }

    interface Adress {
        country: string,
        city: string
    }


    const fruit2: Fruits<Adress> = {
        title: 'Orange',
        adrdress: {
            country: 'Germany',
            city: 'Cologne'
        }

    }

    enum Colors {Red, Black, Green}

    let color = Colors.Green


    //enum+object

    enum UserRole {
        ADMIN = 'ADMIN',
        USER = 'User',
        GUEST = 'Guest'
    }


    interface User {
        name: string,
        role: UserRole
    }


    const adminUser: User = {
        name: 'Alice',
        role: UserRole.ADMIN
    }
    const [count, setCount] = useState<number>(0);

    const onMinusClick = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 0));
    };
    const onPlusClick = () => {
        setCount((prevValue) => prevValue + 1);
    };

    const borderObj = {
        borderStyle: 'solid',
        fontSize: '34px',
        color: 'black'

    }


    return (<div className='lesson07_components'>
        <p style={{fontSize: '24px', color: '#954bf2'}}>Inline style example</p>
        <div style={borderObj}>Start</div>
        <Counter count={count} onMinusClick={onMinusClick} onPlusClick={onPlusClick}/>
        <div style={borderObj}>End</div>
    </div>)


}

export default Lesson_07;