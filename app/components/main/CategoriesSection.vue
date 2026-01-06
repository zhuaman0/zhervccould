<template>
  <section class="container">
    <h1
      data-aos="fade-up"
      data-aos-duration="800"
      class="text-3xl max-w-[600px] w-full sm:text-4xl font-bold text-[#181236] text-start mb-12"
    >
      Ознакомьтесь с категориями для дальнейшей работы
    </h1>

    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <li
        v-for="(card, index) in cards"
        :key="index"
        data-aos="fade-up"
        class="border rounded p-6 text-start hover:shadow-lg transition cursor-pointer"
      >
        <NuxtLink :to="card.to">
          <img :src="card.img" alt="Стартапам" class="mb-4" />
          <span class="font-bold text-lg text-[#181236]">{{ card.title }}</span>
          <p class="mt-2 text-[#181236]">{{ card.desc }}</p>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import startup from '@/assets/icons/startup.svg'
import investor from '@/assets/icons/investor.svg'
import bag from '@/assets/icons/bag.svg'
import userDocument from '@/assets/icons/user_document.svg'
const cards = [
  {
    img: startup,
    title: 'Стартапам',
    desc: 'Узнайте, как наши инвестиции и экспертиза могут помочь вам развивать свой стартап',
    to: '/startups',
  },
  {
    img: investor,
    title: 'Инвесторам',
    desc: 'У нас есть широкий спектр инвестиционных возможностей для стабильной прибыли',
    to: '/investors',
  },
  {
    img: bag,
    title: 'Корпорациям',
    desc: 'Узнайте, как наше партнерство может приносить выгоду вашей корпорации',
  },
  {
    img: userDocument,
    title: 'Специалистам',
    desc: 'Присоединяйтесь к нашей сети и делитесь своими знаниями и опытом с другими участниками',
  },
]
</script>
