<template>
  <div class="flex w-full justify-center my-[20px]">
    <div class="">
      <h1 class="font-bold tx text-center">Войти</h1>
      <form
        @submit.prevent="handleRegister"
        class="bg-white max-w-[500px] min-w-[500px] mt-[20px] p-8"
      >
        <pre>{{ email }}</pre>
        <pre>{{ password }}</pre>
        <div class="w-full mt-4">
          <UiInput
            v-model="email"
            :id="'email'"
            :label="'Электронная почта'"
            :placeholder="'name@example.com'"
          />
        </div>
        <div class="w-full mt-4">
          <input v-model="email" />
          <UiInput
            :model-value="password"
            :id="'password'"
            :label="'Пароль'"
            :placeholder="'Введите пароль'"
            type="password"
            @update:model-value="v => (password = v)"
          />
          <!-- ErrorMessage -->
          <!-- type="password" -->
        </div>
        <div class="mt-4 text-white">
          <button type="submit" class="bg-[#36CE9F] text-white font-bold w-full py-4">
            Зарегистрироваться
          </button>
        </div>
        <div class="my-[10px] flex justify-center">
          <p>Уже зарегистрированы?</p>
          <a class="text-[#36CE9F]" href="/auth/login">Войти</a>
        </div>
      </form>
    </div>
    <!-- TODO: validation of form, can be made with libraries -->
  </div>
</template>

<script setup lang="ts">
import {api} from '#imports'
import {type User, type UserLoginResponse} from '~/types'
import {InputDefault, useInputControl} from '~/components/ui'
import {AuthService} from '~/services'
const router = useRouter()
const email = ref('test@gmai..com')
const password = ref('')
// const {
//   value: emailControl,
//   error: emailError,
//   validate: validateEmail,
// } = useInputControl()
// const {
//   value: passwordControl,
//   error: passwordError,
//   validate: validatePassword,
// } = useInputControl()
const handleRegister = async () => {
  const payload = {
    email: email.value,
    password: password.value,
  }
  AuthService.login(payload)
    .then(() => {
      router.push('/')
    })
    .catch(() => {
      alert('NOt loged in')
    })
}
</script>

<style scoped>
.tx {
  font-size: 25px;
}
</style>
