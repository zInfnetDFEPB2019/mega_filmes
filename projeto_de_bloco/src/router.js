import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home'
import Detalhe from './components/Detalhe'
import Busca from './components/Buscar'
import EditMedia from './components/EditMedia'


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/detalhe/:id',
            name: 'detalhe',
            component: Detalhe,
            children: [
                {
                    path: 'edit',
                    name: 'editMedia',
                    component: EditMedia
                }
            ]
        },{
            path: '/busca',
            name: 'busca',
            component: Busca
        }   
    ]
});