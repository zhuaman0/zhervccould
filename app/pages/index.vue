<template>
  <div class="">
    <h1>Current language - {{ locale }}</h1>
    <h2>
      {{ $t('hello') }}
      {{ $t('find_startup') }}
    </h2>

    <button @click="setLocale('ru')">ru</button>
    <button @click="setLocale('en')">en</button>
    <MainSectionHeader class="mt-16" />
    <MainCategoriesSection class="mt-16" />
    <MainStartupOpportunities class="mt-16" />
    <MainStartupCriteria class="mt-16" />
    <MainFaqSection class="mt-16 mb-16" />
  </div>
</template>

<script lang="ts" setup>
const {locale, setLocale} = useI18n()
</script>
