import home from "../screens/home";
import toDo from "../screens/home/toDo";

const routes = {
    home: {
        path: '/',
        component: home
    },
    create: {
        path: '/create',
        component: toDo
    },
    toDo: {
        path: '/toDo/:id?',
        component: toDo
    }
}

export default routes