<template>
  <Page>
    <ActionBar>
      <Label text="dollarPrice" />
    </ActionBar>

    <TabView
      height="100%"
      textFieldBackgroundColor="#07bb58"
      android-tabs-position="bottom"
      tab-text-font-size="16"
    >
      <TabViewItem title="курс доллара">
        <StackLayout orientation="vertical" width="100%" height="100%">
          <Button text="обновить курс" @tap="getDollars(dollarPrice.dollar)" />
          <Label
            id="dollar"
            :text="dollarPrice.dollar"
            class="list-group-item-heading"
            text-wrap="true"
          />
          <Label
            id="up"
            :text="messageDollar"
            class="list-group-item-heading"
            text-wrap="true"
            v-if="red === true"
          />
          <Label
            id="down"
            :text="messageDollar"
            class="list-group-item-heading"
            text-wrap="true"
            v-if="red === false"
          />
        </StackLayout>
      </TabViewItem>

      <TabViewItem title="рейсы самолетов">
        <StackLayout
          id="detail"
          orientation="vertical"
          width="100%"
          height="100%"
        >
          <Button text="обновить рейсы" @tap="getAeroflot" />
          <!-- <GridLayout columns="115*, 115*" rows="115*, 115*">
            <label col="0" text="откуда" />
            <label col="1" text="куда" />
          </GridLayout> -->
          <ListView
            class="list-group"
            for="aero in arrAeroflot"
            separator-color="transparent"
          >
            <v-template>
              <StackLayout orientation="vertical" width="100%" height="100%">
                <GridLayout columns="115*, 115*" row="*">
                  <StackLayout id="from" col="0">
                    <Label
                      :text="aero.from.city"
                      class="list-group-item-heading"
                      text-wrap="true"
                    />
                    <Label
                      :text="aero.from.country"
                      class="list-group-item-heading"
                      text-wrap="true"
                    />
                  </StackLayout>
                  <StackLayout id="where" col="1">
                    <Label
                      :text="aero.where.city"
                      class="list-group-item-heading"
                      text-wrap="true"
                    />
                    <Label
                      :text="aero.where.country"
                      class="list-group-item-heading"
                      text-wrap="true"
                    />
                  </StackLayout>
                </GridLayout>

                <Label
                  :text="aero.company"
                  class="list-group-item-heading"
                  text-wrap="true"
                />
                <Label
                  :text="aero.number_plane"
                  class="list-group-item-heading"
                  text-wrap="true"
                />
                <Label
                  :text="aero.price"
                  class="list-group-item-heading"
                  text-wrap="true"
                />
              </StackLayout>
            </v-template>
          </ListView>
        </StackLayout>
      </TabViewItem>
      <TabViewItem title="друзья">
        <StackLayout orientation="vertical" width="100%" height="100%">
          <Button text="обновить список друзей" @tap="getUsers" />

          <ListView
            class="list-group"
            for="user in arrUsers"
            separator-color="transparent"
          >
            <v-template>
              <StackLayout id="detail">
                <Label
                  :text="user.firstname"
                  class="list-group-item-heading"
                  text-wrap="true"
                />
                <Label
                  :text="user.firstname"
                  class="list-group-item-heading"
                  text-wrap="true"
                />
                <Label
                  :text="user.lastname"
                  class="list-group-item-heading"
                  text-wrap="true"
                />
                <Label
                  :text="user.email"
                  class="list-group-item-heading"
                  text-wrap="true"
                />
                <Label
                  :text="user.phone"
                  class="list-group-item-heading"
                  text-wrap="true"
                />

                <Label
                  :text="user.country"
                  class="list-group-item-heading"
                  text-wrap="true"
                />
              </StackLayout>
            </v-template>
          </ListView>
        </StackLayout>
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
import { Http } from "@nativescript/core";

export default {
  data() {
    return {
      dollarPrice: { dollar: 2.81 },
      red: false,
      arrAeroflot: [
        {
          from: {
            city: "city from",
            country: "country from",
          },
          where: {
            city: "where city",
            country: "where country",
          },
          company: "aeroflot company",
          number_plane: "64-64-64",
          price: 456456,
        },
      ],
      arrUsers: [
        {
          firstname: "имя:Brenda",
          lastname: "фамилия:Kilback",
          email: "почта:bruen.vincent@adams.com",
          phone: "телефон:818.483.3614",
          country: "страна:American Samoa",
        },
      ],
    };
  },
  created() {
    this.getDollars();
    this.getAeroflot();
    this.getUsers();
  },
  watch() {
    this.getDollars();
    this.getAeroflot();
    this.getUsers();
  },
  methods: {
    getDollars(old_val) {
      Http.getJSON("http://10.0.2.2:8000/api/dollarPrice")
        .then((response) => {
          if (old_val < response.dollar) {
            this.dollarPrice = response;
            this.red = true;
          } else {
            this.dollarPrice = response;
            this.red = false;
          }
        })
        .catch((e) => {
          console.error(e);
        });
    },
    getAeroflot() {
      Http.getJSON("http://10.0.2.2:8000/api/aeroflot")
        .then((response) => {
          console.log(response);
          this.arrAeroflot = response;
        })
        .catch((e) => {
          console.error(e);
        });
    },
    getUsers() {
      Http.getJSON("http://10.0.2.2:8000/api/users")
        .then((response) => {
          console.log("___________getAeroflot__getAeroflot___");
          console.log(response);
          console.log("___________getAeroflot__getAeroflot___");
          this.arrUsers = response;
        })
        .catch((e) => {
          console.log("___________error__error___");
          console.error(e);
          console.log("___________error__error___");
        });
    },
  },
  mounted:{

  },
  computed: {
    messageDollar() {
      return "**";
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
Button {
  font-size: 12;
  font-weight: bold;
  color: white;
  background-color: #1a2c95;
  padding: 10;
  border-radius: 20px;
}

#up {
  font-size: 12;
  font-weight: bold;
  color: #60e920;
  padding: 10;
}
#down {
  font-size: 12;
  font-weight: bold;
  color: #ff0000;
  padding: 10;
}
#dollar {
  font-size: 16;
  font-weight: bold;
  color: rgb(41, 36, 36);
  padding: 10;
}
#from {
  font-size: 16;
  font-weight: bold;
  background-color: #3abf3a8f;
}
#where {
  font-size: 16;
  font-weight: bold;
  background-color: #3a69bf8f;
}
#detail {
  font-size: 16;
  font-weight: bold;
  background-color: #c5cddc8f;
  padding: 10;
  border-radius: 20px;
}
</style>
