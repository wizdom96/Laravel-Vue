<template>
  <div>
    <v-text-field
      browser-autocomplete="current-password"
      :class="errorClass"
      :counter="counter"
      :error-messages="errorMessages"
      :hint="hint"
      :label="label"
      :name="name"
      v-model="_value"
    ></v-text-field>
    <has-error :form="form" :field="name"></has-error>
  </div>
</template>

<script>
import i18n from "~/plugins/vue-i18n";
import TextInput from "./TextInput";

export default {
  extends: TextInput,
  name: "password-input",

  props: {
    name: {
      type: String,
      default: "password",
    },
    label: {
      type: String,
      default: i18n.t("password"),
    },

    hide: {
      default: null,
    },
  },
};
</script>
