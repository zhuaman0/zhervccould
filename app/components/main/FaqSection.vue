<script setup>
import {ref} from 'vue'

const activeIndex = ref(null)

const toggleFAQ = index => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqItems = [
  {
    question: 'Каковы сроки получения ответа на инвестиционное предложение?',
    answer:
      'Мы стараемся рассмотреть каждое предложение внимательно, но сроки ответа могут варьироваться в зависимости от загруженности. Обычно мы стараемся ответить в течение нескольких недель.',
  },
  {
    question: 'Какие требования вы предъявляете к стартапам для инвестиций?',
    answer:
      'Мы ищем инновационные проекты с сильной командой, четкой бизнес-моделью и потенциалом масштабирования.',
  },
  {
    question: 'Есть ли у вас минимальная или максимальная сумма инвестиций?',
    answer:
      'Минимальная сумма инвестиций составляет $50,000. Максимальная сумма зависит от потенциала проекта.',
  },
  {
    question: 'Какие виды поддержки вы предоставляете стартапам после инвестиции?',
    answer:
      'Мы предоставляем финансовую поддержку, менторство, доступ к нашей сети контактов и операционную помощь.',
  },
  {
    question: 'Как связаться с вашей компанией для дополнительных вопросов?',
    answer:
      'Вы можете написать нам на email: contact@example.com или позвонить по телефону: +7 (XXX) XXX-XX-XX.',
  },
]
</script>

<template>
  <div class="tw-py-12 tw-px-4 sm:tw-px-6 lg:tw-px-10">
    <div class="tw-max-w-[1300px] tw-mx-auto">
      <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-8">
        <div class="tw-w-full lg:tw-w-1/2">
          <h2
            data-aos="fade-right"
            class="tw-text-[40px] tw-leading-[40px] tw-font-bold tw-mb-6 tw-text-[#181236]"
          >
            Часто задаваемые <br />
            вопросы
          </h2>
          <p
            data-aos="fade-right"
            data-aos-duration="1200"
            class="tw-text-[#181236] tw-mb-8 tw-text-[16px] tw-leading-[24px]"
          >
            Если вы не нашли ответа на свой вопрос, то можете
            <br />
            написать в нашу службу поддержки
          </p>
          <h4
            data-aos="fade-right"
            data-aos-duration="1600"
            class="tw-border tw-border-[#228B6B] tw-text-[#228B6B] tw-font-semibold tw-text-[14px] tw-px-5 tw-py-3 tw-bg-white tw-inline-block"
            type="button"
          >
            Написать в службу поддержки
          </h4>
        </div>

        <div class="tw-w-full lg:tw-w-1/2">
          <div class="tw-flex tw-flex-col tw-gap-4">
            <div
              v-for="(item, index) in faqItems"
              :key="index"
              class="tw-border-b tw-border-gray-300"
            >
              <div
                class="tw-flex tw-justify-between tw-items-center tw-py-3 cursor-pointer"
                @click="toggleFAQ(index)"
              >
                <h3 class="tw-text-lg tw-font-semibold tw-text-[#181236]">
                  {{ item.question }}
                </h3>
                <span
                  :class="activeIndex === index ? 'tw-rotate-180' : ''"
                  class="tw-transition-transform tw-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="tw-h-4 tw-w-4 tw-text-[#228B6B]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div
                v-show="activeIndex === index"
                class="tw-py-2 tw-text-[#181236] tw-text-[16px]"
              >
                {{ item.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tw-rotate-180 {
  transform: rotate(180deg);
}

.tw-transition-transform {
  transition: transform 0.3s ease-in-out;
}
</style>
