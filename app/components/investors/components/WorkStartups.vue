<template>
  <div class="bg-white max-w-4xl p-6 mt-2 mb-16">
    <div class="flex items-center justify-between">
      <h1 class="font-bold text-[20px]">Работа со стартапами</h1>
      <img src="@/assets/icons/pen.svg" alt="" />
    </div>
    <div class="mt-2 lg:flex-col">
      <h1 class="text-[#9296A1] text-[14px] font-[400] leading-[20px] mb-[2px]">
        Размер инвестиционных средств
      </h1>
      <a
        v-maska="'## ###'"
        target="_blank"
        class="text-[#181236] text-[16px] font-[400] leading-[20px]"
        >{{ questionnaire?.investmentAmount }} $</a
      > 
    </div>
    <div class="mt-2">
      <MethodInnovations :innovations="questionnaire?.innovationMethods" />
    </div>
    <div class="mt-2">
      <DevelopmentStages :stages="questionnaire?.developmentStages" />
    </div>
    <div class="mt-2">
      <Industries :industries="questionnaire?.industries" />
    </div>
    <div class="mt-2">
      <Technologies :technologies="questionnaire?.technologies" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MethodInnovations from '~/components/products/components/MethodInnovations.vue'
import DevelopmentStages from '~/components/products/components/DevelopmentStages.vue'
import Industries from '~/components/products/components/Industries.vue'
import Technologies from '~/components/products/components/Technologies.vue'
import type {InvestorResponseQuestionnaire} from '~/types'

defineProps<{
  questionnaire: InvestorResponseQuestionnaire
}>()
</script>
