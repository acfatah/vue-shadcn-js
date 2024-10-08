import AccountForm from './components/AccountForm.vue'
import AppearanceForm from './components/AppearanceForm.vue'
import DisplayForm from './components/DisplayForm.vue'
import NotificationsForm from './components/NotificationsForm.vue'
import ProfileForm from './components/ProfileForm.vue'

export default [
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileForm,
  },
  {
    path: '/account',
    name: 'Account',
    component: AccountForm,
  },
  {
    path: '/appearance',
    name: 'Appearance',
    component: AppearanceForm,
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: NotificationsForm,
  },
  {
    path: '/display',
    name: 'Display',
    component: DisplayForm,
  },
]
