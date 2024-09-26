<script setup>
import { reactive } from 'vue'
import PopReport from '@/components/target/PopReport.vue';
//리포트 정보 객체
let popInfo = reactive({
    toggle: false
})

</script>

<template>

<div class="guide-wrap">
        <v-row>
            <v-col cols="12">
                <v-btn @click="popInfo.toggle = true;">결과리포트 팝업 열기</v-btn>
            </v-col>
        </v-row>
    </div>


<PopReport
  :dialog-info="popInfo"
 />
</template>
