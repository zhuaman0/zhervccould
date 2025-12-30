<template>
  <section class="py-16 px-4 max-w-[1300px] mx-auto">
    <h2
      data-aos="fade-up"
      data-aos-duration="800"
      class="text-3xl max-w-[600px] w-full sm:text-4xl font-bold text-[#181236] text-start mb-12"
    >
      Ознакомьтесь с категориями для дальнейшей работы
    </h2>

    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <li
        v-for="(card, index) in cards"
        :key="index"
        data-aos="fade-up"
        class="border rounded p-6 text-start hover:shadow-lg transition"
      >
        <img src="" alt="Стартапам" class="mb-4" />
        <h3 class="font-bold text-lg text-[#181236]">{{ card.title }}</h3>
        <p class="mt-2 text-[#181236]">{{ card.desc }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    title: 'Стартапам',
    desc: 'Узнайте, как наши инвестиции и экспертиза могут помочь вам развивать свой стартап',
  },
  {
    title: 'Инвесторам',
    desc: 'У нас есть широкий спектр инвестиционных возможностей для стабильной прибыли',
  },
  {
    title: 'Корпорациям',
    desc: 'Узнайте, как наше партнерство может приносить выгоду вашей корпорации',
  },
  {
    title: 'Специалистам',
    desc: 'Присоединяйтесь к нашей сети и делитесь своими знаниями и опытом с другими участниками',
  },
]
</script>
