const initialData={
    states:[
        {id: 0, stateName: require("../assets/on_img.jpeg") },
        {id: 1, stateName: require("../assets/in_book.jpeg") },
        {id: 2, stateName: require("../assets/aside_ball.jpeg") },
        {id: 3, stateName: require("../assets/WhatsApp Image 2021-06-02 at 11.24.22 AM.jpeg")}
    ],
    capitals:[
        {id: 1, name:"in"},
        {id: 3, name: "below"},
        {id: 2, name:"aside"},
        {id: 0, name:"on"},

    ],
    
    columns:{
        'column-1':{
            id: "column-1",
            title: "Images",
            teskIds: ["task-1", 'task-2' , 'task-3','task-4']
        },
        'column-2':{
            id: "column-2",
            title: "Prepositions",
            teskIds: []
        },
    },
    columnOrder:["column-1", "column-2" ],
    line:[],
    x:0,
    y:0,
    x1:0,
    y1:0
};

export default initialData;