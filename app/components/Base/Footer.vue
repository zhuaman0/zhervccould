<template>
    <footer class="bg-[#228B6B] py-16 px-16">
        <div>
            <div class="flex items-start">
                <div class="left-nav w-full flex justify-start">
                    <div>
                        <NuxtLink to="/">
                            <div class="flex items-center">
                                <img src="@/assets/icons/logo_white.svg" alt="">
                                <h1 class="text-white uppercase ml-[10px] leading-none">zher <br> venture capital</h1>
                            </div>
                        </NuxtLink>
                        <p class="text-sm text-white mt-4 max-w-[310px] w-full font-light">Многогранное видение, высокая квалификация и стратегические инвестиции</p>
                    </div>
                </div>
                <ul class="text-white flex items-center gap-4 justify-center w-full">
                    <NuxtLink class="cursor-pointer" to="/startups">
                        <li>
                            Стартапы
                        </li>
                    </NuxtLink>
                    <li class="cursor-pointer">
                        Корпорации
                    </li>
                    <NuxtLink class="cursor-pointer" to="/investors">
                        <li>
                            Инвесторы
                        </li>
                    </NuxtLink>
                    <li class="cursor-pointer">
                        Специалисты
                    </li>
                </ul>
                <div class="flex items-center gap-4 justify-end w-full">
                    <NuxtLink class="cursor-pointer" to="https://www.facebook.com/?locale=ru_RU"><img src="@/assets/social/facebook.svg" alt=""></NuxtLink>
                    <NuxtLink class="cursor-pointer" to="https://www.youtube.com/"><img src="@/assets/social/youtube.svg" alt=""></NuxtLink>
                    <NuxtLink class="cursor-pointer" to="https://www.instagram.com/"><img src="@/assets/social/instagram.svg" alt=""></img></NuxtLink>
                </div>
            </div>
            <div class="w-full bg-white h-[0.5px] my-8"></div>
            <div class="w-full flex justify-center text-white font-light">
            <ul class="flex items-center gap-4">
                <li class="cursor-pointer">2025 ZherVC. Все права защищены.</li>
                <li class="cursor-pointer">Политика конфиденциальности</li>
                <li class="cursor-pointer">Связаться с поддержкой</li>
            </ul>
            </div>
        </div>
    </footer>
</template>


<script lang="ts"></script>