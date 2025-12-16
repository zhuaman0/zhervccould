<template>
    <div class="flex w-full justify-center my-[20px]">
        <div class="">
            <h1 class="font-bold tx text-center">Регистрация стартапа</h1>
            <form @submit.prevent="handleRegister" class="bg-white max-w-[500px] min-w-[500px] mt-[20px] p-8">
                <div class="w-full">
                    <label for="name">Имя и фамилия</label>
                    <v-text-field
					    class="w-full mt-2"
					    id="fullname"
                        placeholder="Введите имя и фамилию"
                        variant="outlined"
						autocomplete="off"
                        v-model="fullName"
                    ></v-text-field>
                </div>
                <div class="w-full mt-4">
                    <label for="gmail">Электронная почта</label>
                    <v-text-field
					    class="w-full mt-2"
					    id="gmail"
                        placeholder="daniyar.a@gmail.com"
                        variant="outlined"
						autocomplete="off"
                        v-model="email"
                    ></v-text-field>
                </div>
                <div class="w-full mt-4">
                    <label for="phone-number">Номер телефона</label>
                    <v-text-field
                        v-maska="'+7 (###) ###-##-##'"
					    class="w-full mt-2"
					    id="phone-number"
                        placeholder="+7 (777) 123-45-67"
                        variant="outlined"
						autocomplete="off"
                        v-model="phoneNumber"
                    ></v-text-field>
                </div>
                <div class="w-full mt-4">
                    <label for="password">Пароль</label>
                    <v-text-field
					    class="w-full mt-2"
					    id="password"
                        placeholder="*********************"
                        variant="outlined"
						autocomplete="off"
                        v-model="password"
                    ></v-text-field>
                </div>
				<div class="mt-4 text-white">
					<button type="submit" class="bg-[#36CE9F] text-white font-bold w-full py-4">Зарегистрироваться</button>
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
import { api } from '#imports'
import { type User } from '~/types'
const fullName = ref('')
const email = ref('')
const phoneNumber = ref('')
const password = ref('')
const handleRegister = async () => {
    try {
        const response = await api.authApi.setRegisterUser({
            fullName: fullName.value,
            email: email.value,
            phoneNumber: phoneNumber.value,
            password: password.value,
            role: 'Investor'
        })
        console.log(response)
    }catch(err) {
        console.log(err)
    }
}
</script>

<style scoped>
.tx {
    font-size: 25px;
}
</style>