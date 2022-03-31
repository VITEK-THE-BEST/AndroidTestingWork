<template>
  <Page>
    <ActionBar>
      <Label text="dollarPrice" />
    </ActionBar>
    <Button
      text="удалить"
      @tap="this.getDollars()"
    />
    <!-- <StackLayout orientation="vertical" width="100%" height="100%">
      <ListView
        class="list-group"
        for="dollar in dollarPrice"
        separator-color="transparent"
      >
        <v-template>
          <Label
            id="active-task"
            :text="dollar"
            class="list-group-item-heading"
            text-wrap="true"
          />
        </v-template>
      </ListView> -->
    </StackLayout>
  </Page>
</template>

<script>
import { getDollar, getUsers, getaeroflot, test } from "@/http";

export default {
  data() {
    return {
      dollarPrice: [{ dollar: 123 }, { dollar: 321 }],
    };
  },
  created() {
    this.getDollars();
    console.log("_______________test_____");
    console.log(test());
    console.log("_________________________");
  },
  methods: {
    getDollars() {
      console.log("_________________________");
      console.log(getDollar());
      console.log("_________________________");

      return (this.dollarPrice = getDollar());
    },
  },
  computed: {
    message() {
      return "Blank {N}-Vue app";
    },
  },
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
