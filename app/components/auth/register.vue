<template>
  <div class="">
    <div class="w-full">
      <h1 class="font-bold tx text-center">
        Регистрация {{ typeInRussian().toLocaleLowerCase() }}
      </h1>
      <form @submit.prevent="" class="bg-white max-w-[500px] min-w-[500px] mt-[20px] p-8">
        <div class="w-full">
          <label for="name">Имя и фамилия</label>
        </div>
        <div class="w-full mt-4">
          <label for="gmail">Электронная почта</label>
        </div>
        <div class="w-full mt-4">
          <label for="phone-number">Номер телефона</label>
        </div>
        <div class="w-full mt-4">
          <label for="password">Пароль</label>
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
  </div>
</template>

<script setup lang="ts">
import {api} from '#imports'
import {USER_ROLES, type User} from '~/types'

const props = defineProps({
  registerType: {
    type: String,
    required: true,
  },
})

const fullName = ref('')
const email = ref('')
const phoneNumber = ref('')
const password = ref('')
// const handleRegister = async () => {
//   try {
//     const response = await api.authApi.setRegisterUser({
//       fullName: fullName.value,
//       email: email.value,
//       phoneNumber: phoneNumber.value,
//       password: password.value,
//       role: 'Investor',
//     })
//     console.log(response)
//   } catch (err) {
//     console.log(err)
//   }
// }

function typeInRussian() {
  if (props.registerType === 'Investor') {
    return 'Инвестор'
  } else {
    return 'Стартап'
  }
}
</script>

<style scoped>
.tx {
  font-size: 25px;
}
</style>
