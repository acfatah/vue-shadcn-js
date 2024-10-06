import TabsComponent from './components/DashboardTabs.vue'
import TabsSource from './components/DashboardTabs.vue?raw'
import DateRangePickerComponent from './components/DateRangePicker.vue'
import DateRangePickerSource from './components/DateRangePicker.vue?raw'
import MainNavComponent from './components/MainNav.vue'
import MainNavSource from './components/MainNav.vue?raw'
import OverviewComponent from './components/Overview.vue'
import OverviewSource from './components/Overview.vue?raw'
import RecentSalesComponent from './components/RecentSales.vue'
import RecentSalesSource from './components/RecentSales.vue?raw'
import SearchComponent from './components/Search.vue'
import SearchSource from './components/Search.vue?raw'
import TeamSwitcherComponent from './components/TeamSwitcher.vue'
import TeamSwitcherSource from './components/TeamSwitcher.vue?raw'
import UserNavComponent from './components/UserNav.vue'
import UserNavSource from './components/UserNav.vue?raw'
import Dashboard from './Dashboard.vue'
import DashboardSource from './Dashboard.vue?raw'

export default {
  title: 'Blocks/Dashboard',
  component: Dashboard,
  tags: ['autodocs'],
  layout: 'fullscreen',
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: DashboardSource,
      },
    },
  },
}

export const TeamSwitcher = {
  parameters: {
    docs: {
      source: {
        code: TeamSwitcherSource,
      },
    },
  },

  render: () => ({
    components: {
      TeamSwitcherComponent,
    },

    template: `
      <TeamSwitcherComponent />
    `,
  }),
}

export const MainNav = {
  parameters: {
    docs: {
      source: {
        code: MainNavSource,
      },
    },
  },

  render: () => ({
    components: {
      MainNavComponent,
    },

    template: `
      <MainNavComponent />
    `,
  }),
}

export const UserNav = {
  parameters: {
    docs: {
      source: {
        code: UserNavSource,
      },
    },
  },

  render: () => ({
    components: {
      UserNavComponent,
    },

    template: `
      <UserNavComponent />
    `,
  }),
}

export const Search = {
  parameters: {
    docs: {
      source: {
        code: SearchSource,
      },
    },
  },

  render: () => ({
    components: {
      SearchComponent,
    },

    template: `
      <SearchComponent />
    `,
  }),
}

export const DateRangePicker = {
  parameters: {
    docs: {
      source: {
        code: DateRangePickerSource,
      },
    },
  },

  render: () => ({
    components: {
      DateRangePickerComponent,
    },

    template: `
      <DateRangePickerComponent />
    `,
  }),
}

export const Tabs = {
  parameters: {
    docs: {
      source: {
        code: TabsSource,
      },
    },
  },

  render: () => ({
    components: {
      TabsComponent,
    },

    template: `
      <TabsComponent />
    `,
  }),
}

export const Overview = {
  parameters: {
    docs: {
      source: {
        code: OverviewSource,
      },
    },
  },

  render: () => ({
    components: {
      OverviewComponent,
    },

    template: `
      <OverviewComponent />
    `,
  }),
}

export const RecentSales = {
  parameters: {
    docs: {
      source: {
        code: RecentSalesSource,
      },
    },
  },

  render: () => ({
    components: {
      RecentSalesComponent,
    },

    template: `
      <RecentSalesComponent />
    `,
  }),
}
