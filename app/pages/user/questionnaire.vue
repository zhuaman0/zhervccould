<template>
  <div class="container">
    <BreadCrumbs
      class="mt-4"
      :links="[
        {title: 'Главная', path: '/'},
        {title: 'Найти стартап', path: '/'},
        {title: String(questionnaire?.fullName), path: ``},
      ]"
    />
    <div>
      <h1 class="font-bold text-3xl mt-2">Моя анкета</h1>
      <ProductsHeader :title="questionnaire?.fullName" />
      <QuestionnaireInformation :questionnaire="questionnaire" />
      <WorkStartups :questionnaire="questionnaire" />
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import {api} from '#imports'
import {useToast} from 'vue-toastification'
import type {InvestorResponseQuestionnaire} from '~/types'
import BreadCrumbs from '~/components/ui/Crumbs/BreadCrumbs.vue'
import ProductsHeader from '~/components/products/components/ProductsHeader.vue'
import QuestionnaireInformation from '~/components/investors/components/QuestionnaireInformation.vue'
import WorkStartups from '~/components/investors/components/WorkStartups.vue'

const questionnaire = ref()
const toast = useToast()

const getQuestionnaire = async () => {
  api.startupApi
    .getQuestionnaire()
    .then(res => {
      questionnaire.value = res
      console.log(questionnaire.value)
    })
    .catch(err => {
      toast.error('You have error')
    })
}

onMounted(() => {
  getQuestionnaire()
})
</script>
