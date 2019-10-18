const todoList = {
    todos: {
        '1': {id: 1, details: 'Read', completed: false},
        '2': {id: 2, details: 'Write', completed: false},
        '3': {id: 3, details: 'Sleep', completed: false},
        '4': {id: 4, details: 'Clean', completed: false},
        '5': {id: 5, details: 'Shop', completed: false},
        '6': {id: 6, details: 'Repair', completed: false},
        '7': {id: 7, details: 'Code', completed: false},
        '8': {id: 8, details: 'Meet', completed: false},
        '9': {id: 9, details: 'Cook', completed: false},
        '10': {id: 10, details: 'Walk', completed: false},
        '11': {id: 11, details: 'Meditate', completed: false}
    },
    columns: {
        'column-1' : {
            id: 'column-1',
            title: 'To do',
            taskIds: ['1','2','3','4','5','6','7','8','9','10','11']
        }
    },
    columnOrder: ['column-1']
}

export default todoList;