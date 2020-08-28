import Vue from "vue";

import EmailInput from "./form/EmailInput";
import PasswordInput from "./form/PasswordInput";
import SubmitButton from "./form/SubmitButton";
import TextInput from "./form/TextInput";
import { HasError, AlertError, AlertSuccess } from "vform";

Vue.component(EmailInput.name, EmailInput);
Vue.component(PasswordInput.name, PasswordInput);
Vue.component(SubmitButton.name, SubmitButton);
Vue.component(TextInput.name, TextInput);
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
Vue.component(AlertSuccess.name, AlertSuccess);
