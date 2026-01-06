<template>
  <div class="container">
    <div class="flex justify-between">
      <div class="mr-16">
        <h1 class="text-3xl font-bold">Часто задаваемые вопросы</h1>
        <p class="text-[#181236] mt-4 text-[16px] leading-[24px]">
          Если вы не нашли ответа на свой вопрос, то можете написать в нашу службу
          поддержки
        </p>
        <div class="border-[1px] border-[#228B6B] px-5 py-3 bg-white inline-block mt-4">
          <button class="text-[#228B6B] font-semibold text-[14px]">
            Написать в службу поддержки
          </button>
        </div>
      </div>
      <div class="w-[1200px]">
        <ul class="flex-1 space-y-4">
          <li
            v-for="(item, index) in faqs"
            :key="index"
            class="bg-[#E9FBF4] p-6 cursor-pointer"
            @click="openFaq(index)"
          >
            <div class="flex justify-between items-center">
              <h3 class="text-[20px] font-medium">
                {{ item.question }}
              </h3>

              <span class="text-[28px] text-[#2F855A]">{{
                currentIndex === index ? '×' : '+'
              }}</span>
            </div>

            <Transition name="faq">
              <div
                v-if="currentIndex === index"
                class="mt-4 text-gray-700 leading-relaxed"
              >
                {{ item.answer }}
              </div></Transition
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
const currentIndex = ref<number | null>(null)
const faqs = [
  {
    question: 'Каковы сроки получения ответа на инвестиционное предложение?',
    answer:
      'Мы стараемся рассмотреть каждое предложение внимательно, но сроки ответа могут варьироваться в зависимости от загруженности. Обычно мы стараемся ответить в течение нескольких недель.',
  },
  {
    question: 'Какие требования вы предъявляете к стартапам для инвестиций?',
    answer:
      'Мы оцениваем инновационность проекта, команду, рынок, наличие MVP и потенциал масштабирования.',
  },
  {
    question: 'Есть ли у вас минимальная или максимальная сумма инвестиций?',
    answer:
      'Сумма инвестиций определяется индивидуально и зависит от стадии проекта и его потребностей.',
  },
  {
    question: 'Какие виды поддержки вы предоставляете стартапам после инвестиций?',
    answer:
      'Мы предоставляем менторство, доступ к партнёрам, стратегическую и операционную поддержку.',
  },
  {
    question: 'Как связаться с вашей компанией для дополнительных вопросов?',
    answer:
      'Вы можете написать в нашу службу поддержки через форму обратной связи на сайте.',
  },
]

function openFaq(index: number) {
  currentIndex.value = currentIndex.value === index ? null : index
}
</script>
