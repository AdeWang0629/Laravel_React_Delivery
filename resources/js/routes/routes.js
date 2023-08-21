import { lazy } from 'react';


export default [
  {
    path: 'dashboard',
    component: lazy(() => import('../components/Dashboard')),
    exact: true,
  },
  {
    path: 'onboarding/team',
    component: lazy(() => import('../components/onboarding/Team')),
    exact: true,
  },
  {
    path: 'onboarding/dept',
    component: lazy(() => import('../components/onboarding/Dept')),
    exact: true,
  },
  {
    path: 'onboarding/plans',
    component: lazy(() => import('../components/onboarding/Plan')),
    exact: true,
  }
]