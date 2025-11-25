import { createBoard } from '@wixc3/react-board';
import { createRemixStub } from '@remix-run/testing';
import App from 'app/root';
import HomePage from 'app/routes/_index/route';
import RESUME from 'app/routes/resume/route';
import Contact from '~/page/contact/route';
import Luna from 'app/routes/luna/route';
import Nura from 'app/routes/nura/route';
import Rush from 'app/routes/rush/route';
import VelaBeauty from '~/page/canim/route';
import Velnoir from 'app/routes/velnoir/route';
import Work from '~/page/work/route';
import Yum from 'app/routes/yum/route';


// import Beast from 'app/routes/Beast/route'

const AppWrapper = createRemixStub([
    {
        Component: () => {
            return <App />;
        },
        children: [
            {
                path: '/',
                Component: HomePage,
            },
            {
                path: '/about',
                Component: RESUME,
            },
            {
                path: '/contact',
                Component: Contact,
            },
            {
                path: '/luna',
                Component: Luna,
            },
            {
                path: '/nura',
                Component: Nura,
            },
            {
                path: '/velaBeauty',
                Component: VelaBeauty,
            },
            {
                path: '/velnoir',
                Component: Velnoir,
            },
            {
                path: '/rush',
                Component: Rush,
            },
            {
                path: '/work',
                Component: Work,
            },
            {
                path: '/yum',
                Component: Yum,
            },
            {
                path: '/Beast',
                Component: Yum,
            },
        ],
    },
]);

export default createBoard({
    name: 'App',
    Board: () => <AppWrapper />,
    environmentProps: {
        windowWidth: 552,
        windowHeight: 844,
    },
});
