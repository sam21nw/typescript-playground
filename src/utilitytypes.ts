interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
    studentId: "csc123",
    title: "Final project",
    grade: 0
};

console.log(updateAssignment(assign1, { grade: 95 }));

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

// Required and Readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to db, etc
    return assign;
};

// const assignVerified: Readonly<Assignment> = {
//     assignGraded, verified: true
// };

// recordAssignment(assignGraded);

// Awaited - helps us with the return type of a promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string;
}

// Assuming you only want id and name
interface RequiredUserProperties {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<RequiredUserProperties[]> => {
    const data: User[] = await fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err.message);
        }
        return [];
    });

    return data.map(({ id, name, username, email }) => ({ id, name, username, email }));
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then(users => console.log(users));
