<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2 lg4 offset-lg4>
      <v-card>
        <form @submit.prevent="login" @keydown="form.onKeydown($event)">
          <v-card-title primary-title>
            <h3 class="headline mb-0">{{ $t('login') }}</h3>
          </v-card-title>
          <v-card-text>
            <!-- Email -->
            <email-input
              :form="form"
              :label="$t('email')"
              :v-errors="errors"
              :value.sync="form.email"
              name="email"
              prepend="person_outline"
            ></email-input>

            <!-- Password -->
            <password-input
              :v-errors="errors"
              :form="form"
              :value.sync="form.password"
              prepend="lock_outline"
              type="hidden"
            ></password-input>

            <submit-button :block="true" :form="form" :label="$t('login')"></submit-button>
          </v-card-text>
          <v-card-actions>
            <router-link :to="{ name: 'register' }">{{ $t('register') }}</router-link>
            <v-spacer></v-spacer>
          </v-card-actions>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Form from "vform";

export default {
  name: "login-view",
  metaInfo() {
    return { title: this.$t("login") };
  },
  data: () => ({
    form: new Form({
      email: "",
      password: "",
    }),
  }),

  methods: {
    async login() {
      if (await this.formHasErrors()) return;
      this.busy = true;

      const { data } = await this.form.post("/api/login");

      this.$store.dispatch("saveToken", {
        token: data.token,
      });

      await this.$store.dispatch("fetchUser");
      this.busy = false;

      this.$router.push({ name: "home" });
    },
  },
};
</script>
