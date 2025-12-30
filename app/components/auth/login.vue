<template>
  <div class="flex w-full justify-center my-[20px]">
    <div class="">
      <h1 class="font-bold tx text-center">Войти</h1>
      <form
        @submit.prevent="handleRegister"
        class="bg-white max-w-[500px] min-w-[500px] mt-[20px] p-8"
      >
        <div class="w-full mt-4">
            <UiInput
              v-model="email"
              :id="'email'"
              :label="'Электронная почта'"
              :placeholder="'name@example.com'"
          />
        </div>
        <div class="w-full mt-4">
            <UiInput
              :model-value="password"
              :id="'password'"
              :label="'Пароль'"
              :placeholder="'Введите пароль'"
              type="password"
              @update:model-value="v => (password = v)"
            />
          <ErrorMessage name="password" class="text-red-500 text-sm" />
          <!-- type="password" -->
        </div>
        <div class="mt-4 text-white">
          <button type="submit" class="bg-[#36CE9F] text-white font-bold w-full py-4">
            Войти
          </button>
        </div>
        <div class="my-[10px] flex justify-center">
          <p>Уже зарегистрированы?</p>
          <a class="text-[#36CE9F]" href="/auth/login">Войти</a>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {api} from '#imports'
import {type User, type UserLoginResponse} from '~/types'
import {AuthService} from '~/services'
import {ErrorMessage, Field, Form, useForm} from 'vee-validate'
import {toTypedSchema} from '@vee-validate/zod'
import * as zod from 'zod'
const router = useRouter()
const email = ref('')
const password = ref('')

// const schema = toTypedSchema(
//   zod.object({
//     email: zod
//       .string()
//       .min(1, {message: 'This is required'})
//       .email({message: 'Must be a valid email'}),
//     password: zod
//       .string()
//       .min(1, {message: 'This is required'})
//       .min(8, {message: 'Too short'}),
//   })
// )
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
      alert('Not loged in')
    })
}
</script>

<style scoped>
.tx {
  font-size: 25px;
}
</style>
