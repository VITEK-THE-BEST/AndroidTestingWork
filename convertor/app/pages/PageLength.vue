<template>
  <Page>
    <ActionBar title="длина" />
    <StackLayout verticalAlignment="top">
      <convertor :ToDefault="ToDefault" :ToNeed="ToNeed" />
    </StackLayout>
  </Page>
</template>

<script>
import Convertor from "@/components/Convertor.vue";

export default {
  data() {
    return {
      ToDefault: {
        "Сантиметры": function (val) {
          return val;
        },
        "Метры": function (val) {
          return val * 100;
        },
      },
      ToNeed: {
        "Сантиметры": function (val) {
          return val;
        },
        "Метры": function (val) {
          return val / 100;
        },
      },
    };
  },
  components: {
    Convertor,
  },
};
</script>
