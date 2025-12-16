<template>
    <div class="flex w-full justify-center my-[20px]">
        <div class="">
            <h1 class="font-bold tx text-center">Регистрация стартапа</h1>
            <form @submit.prevent="handleRegister" class="bg-white max-w-[500px] min-w-[500px] mt-[20px] p-8">
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
import { type User, type UserLoginResponse } from '~/types'
const router = useRouter()
const email = ref('')
const password = ref('')
const handleRegister = async () => {
    try {
        const response = await api.authApi.setLoginUser({
            email: email.value,
            password: password.value,
        })
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