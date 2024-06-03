function Lesson06() {
    //1. Типизация строк - String
    let userName: string = 'Bob';
    //  userName = true

    userName = '2'
    userName = 1 + 2 + '3';
    // userName = '4' - '2';
    console.log(userName)

    // let message: number = `Hello, ${userName}`
    let message: string = `Hello, ${userName}`

    //2. Типизация чисел - number
    let luckyNumber: number = 7;
    luckyNumber = 7.1;
    luckyNumber = NaN;
    // luckyNumber = 2 + '1';

    //3. Типизация логического типа - boolean
    let isAdmin: boolean = true;
    // isAdmin = undefined
    isAdmin = false;
    isAdmin = 2 > 3;
    console.log(isAdmin)

    //4. Типизация null и undefined
    let emptyValue: null = null;
    // emptyValue = 0;
    // emptyValue = undefined;

    let empty: undefined = undefined;
    // empty = 0;

    //5. Типизация массива
    const colors: string[] = ['red', 'black', 'green'];
    // colors.push(3);
    colors.push("");
    colors[0] = 'yellow'
    console.log(colors)

    //6. Тип tupel (кортеж)
    const fruits: [string, number, boolean] = ['apple', 3, true]
    // fruits[2] = undefined;

    //7. Типизация функции
    const showMessage = (): void => {
        console.log('Hello')
    }

    showMessage()

    const showNumber = (): number => {
        return 4
    }

    console.log(showNumber())

    //8. Тип any
    let city: any = 23;
    city = 'Warsaw'
    city = [2, '', true]

    //9. Типизация функции с параметрами
    const arrUser = (firstName: string = 'User', age: number = 30): [string, number] => {
        return [firstName, age]
    }

    arrUser('Mary', 23);
    // arrUser('Tom', '2')
    arrUser()

    //9. Автоматическое определение типа
    const numAr = [2, 4, 5];
    // numAr.push('red');
    let str = true;
    // str = ''
    const mixArray = [5, false, null];
    mixArray[4] = 10;

    //10. Union типы
    let numStr: string | number | number[] = 2;
    numStr = '3';
    numStr = [2, 3]

    //11. Типизация объектов с помощью interface и type
    interface User {
        name?: string,
        age: number | string
    }

    interface User {
        job: string
    }

    const userData: User = {
        age: 25,
        job: 'manager'
    }

    userData.age = '26'

    interface Admin extends User {
        isAdmin: boolean
    }

    const adminData: Admin = {
        age: 34,
        job: 'Admin',
        isAdmin: true
    }

    //type
    type Weight = string | number

    type Animal = {
        name: string,
        weight: Weight
    }

    const animal: Animal = {
        name: 'Lion',
        weight: 200
    }

    type NewAnimal = Animal & { country: string }

    const newAnimal: NewAnimal = {
        country: 'Afrika',
        name: 'Zebra',
        weight: '150'
    }

    return <div>Lesson06 - {message}</div>
}

export default Lesson06