<template>
    <button @click="openWinow">Open</button>
    <Teleport class="" to="body">
        <div v-if="open" class="fixed w-full  h-full top-0 left-0 bg flex justify-center items-center z-99">
            <div class="bg-white max-w-[400px] min-w-[400px] flex items-center justify-center flex-col py-8 py-8">
                <img src="@/assets/icons/correct.svg" alt="">
                <h1 class="my-4">{{ message }}</h1>
                <p>{{ desc }}</p>
                <button @click="closeWindow" class="bg-[#36CE9F] text-white px-2 py-2 w-full mx-4">{{ button }}</button>
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts">
const open = ref(false)

export default defineComponent({
    name: 'ModalWindow',
    props: {
        message: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        button: {
            type: String,
            required: true
        },
        open: {
            type: Boolean,
            required: true
        }
    },
    emits: ['close', 'open'],
    methods: {
        closeWindow() {
            this.$emit('close')
        },
        openWinow() {
            this.$emit('open')
        }
    }
})
</script>

<style scoped>
.bg {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>