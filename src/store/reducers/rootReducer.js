const inIt = {
    Data01: [
        { id: 1, name: "Name01" },
        { id: 2, name: "Name02" }
    ],
    arrJobs: [
        { id: 'abcJob1', title: 'Developers', salary: '500' },
        { id: 'abcJob2', title: 'Testers', salary: '400' },
        { id: 'abcJob3', title: 'Project managers', salary: '1000' },
    ],
}

const rootReducer = (state = inIt, action) => {

    switch (action.type){
        case "DELETE_USER":
            //console.log(">>> run into delete user: ", action)
            let arrJobs = state.arrJobs;
            arrJobs=arrJobs.filter(item=> item.id !== action.payload.id)
            console.log(arrJobs);
            return{
                ...state,arrJobs
            }
        case "CREATE_USER":
            console.log(">>> run into create user: ", action)
            let addJob = {
                id: action.payload.idRandom,
                title: action.payload.titleJobs,
                salary: action.payload.salary
            }
            //console.log(addJob)
            return{
                ...state,arrJobs:[...state.arrJobs,addJob]
            }
        default : return state;
    }

    return state;
}

export default rootReducer;