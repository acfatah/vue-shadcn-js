<script setup>
import Container from './components/Container.vue'
import CookieSettings from './components/CookieSettings.vue'
import CreateAccount from './components/CreateAccount.vue'
import DatePicker from './components/DatePicker.vue'
import GithubCard from './components/GithubCard.vue'
import Notifications from './components/Notifications.vue'
import PaymentMethod from './components/PaymentMethod.vue'
import ReportAnIssue from './components/ReportAnIssue.vue'
import ShareDocument from './components/ShareDocument.vue'
import TeamMembers from './components/TeamMembers.vue'
</script>

<template>
  <div class="md:hidden">
    TBD: mobile view
  </div>

  <div class="hidden items-start justify-center gap-[10px] rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
    <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
      <Container>
        <CreateAccount />
      </Container>
      <Container>
        <PaymentMethod />
      </Container>
    </div>
    <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
      <Container>
        <TeamMembers />
      </Container>
      <Container>
        <ShareDocument />
      </Container>
      <Container>
        <DatePicker />
      </Container>
      <Container>
        <Notifications />
      </Container>
    </div>
    <div class="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
      <Container>
        <ReportAnIssue />
      </Container>
      <Container>
        <GithubCard />
      </Container>
      <Container>
        <CookieSettings />
      </Container>
    </div>
  </div>
</template>
