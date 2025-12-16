<template>
    <header
        class="toolbar flex justify-between px-16 py-4 items-center bg-white">
        <div class="left-nav flex items-center">
            <img src="@/assets/icons/logo.svg" alt="">
            <h1 class="text-[#36CE9F] uppercase ml-[10px] leading-none">zher <br> venture capital</h1>
        </div>
        <div class="center-nav">
            <ul class="flex items-center gap-6">
                <NuxtLink to="/startps" class="nav-link"><li>Стартапы</li></NuxtLink>
                <NuxtLink to="investors" class="nav-link"><li>Инвесторы</li></NuxtLink>
                <NuxtLink to="/specials" class="nav-link"><li>Специалисты</li></NuxtLink>
            </ul>
        </div>
        <div class="right-nav flex gap-4">
            <button class="border-[#36CE9F] border-r-none border-[3px] text-[#36CE9F] p-2 font-bold">Регистрация</button>
            <button class="bg-[#36CE9F] text-white p-3 font-bold">Войти</button>
        </div>
    </header>
</template>