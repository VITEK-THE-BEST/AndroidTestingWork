<template>
  <Page>
    <ActionBar>
      <Label text="Home" />
    </ActionBar>

    <GridLayout>
      <Page>
        <ActionBar :title="title">
          <NavigationButton
            text="Back"
            android.systemIcon="ic_menu_back"
            @tap="onNavigationButtonTap"
          ></NavigationButton>
        </ActionBar>
        <RadCalendar locale="ru-RU"></RadCalendar>
      </Page>
    </GridLayout>
  </Page>
</template>

<script>
export default {
  computed: {
    message() {
      return "Blank {N}-Vue app";
    },
  },
};
</script>

<style scoped lang="scss">
// @import '@nativescript/theme/scss/variables/blue';

// // Custom styles
// .fas {
//     @include colorize($color: accent);
// }

// .info {
//     font-size: 20;
//     vertical-align: center;
// }
</style>
