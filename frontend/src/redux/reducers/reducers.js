const initialState = {
    isSignedIn: false,
    user: {
        name: "Jon Dexter",
        email: "jondexter20@gmail.com",
    },
    event : [
        {
            id:1,
            status: "active", 
            title: "Project 401 Meeting",
            description: "Meeting to consider the requirements and prepare the workflow. Client and all developers are joining",
            estimatedDuration: 50,
            date: "Friday, 25TH May 2022",
            time: "5 : 30PM GMT",
            location: "Facebook Live and Zoom",
            meetingLink: 'https://zoom.us/0RYhyss/',
            people: 20,
        },
    ],
    newEvent : [
        {

        },
    ]

}


const reducers = (state = initialState, action) => {
    switch (action.type) {
        case "IS_SIGN_IN":
            return {
                ...state,
                isSignedIn: action.payload
            };
            
    
        default:
            return state;
    }
}


export default reducers;