<template>
  <v-card flat>
    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
      <v-card-title primary-title>
        <h5 class="subheading mb-0">{{ $t("your_password") }}</h5>
      </v-card-title>
      <v-card-text>
        <password-input :form="form" :v-errors="errors" :value.sync="form.password"></password-input>

        <password-input
          :form="form"
          :label="$t('confirm_password')"
          :v-errors="errors"
          :value.sync="form.password_confirmation"
          data-vv-as="password"
          name="password_confirmation"
        ></password-input>
      </v-card-text>
      <v-card-actions>
        <submit-button :flat="true" :form="form" :label="$t('update')"></submit-button>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
import Form from "vform";

export default {
  name: "password-view",
  data: () => ({
    form: new Form({
      password: "",
      password_confirmation: "",
    }),
  }),

  methods: {
    async update() {
      if (await this.formHasErrors()) return;

      this.$emit("busy", true);

      await this.form.patch("/api/settings/password");

      this.form.reset();
      this.$emit("busy", false);

      this.$store.dispatch("responseMessage", {
        type: "success",
        text: this.$t("password_updated"),
      });
    },
  },
};
</script>
