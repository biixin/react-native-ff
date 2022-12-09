

const initialState = {
    name:'Matheus',
    email:'teteu@gmail.com',
};

export default (state = initialState, action: { type: any; payload: { name: string; email: string; }; }) => {

    switch(action.type) {
        case'SET_NAME':
            return {...state, name:action.payload.name};
            break;
        case'SET_EMAIL':
            return {...state, email:action.payload.email};
            break;
    }

    return state;
}