<script setup>
import { ref, reactive } from 'vue'
import PopMessageModify from '@/components/target/PopMessageModify.vue';


let popInfo = reactive({
    toggle: false,
    type: ref('01'),
})

</script>

<template>

    <div class="guide-wrap">
        <v-row>
            <v-col cols="12">
                <v-btn @click="popInfo.toggle = true;popInfo.type = '01'">LMS 수정 팝업 열기</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-btn @click="popInfo.toggle = true;popInfo.type = '02'">RCS 수정 팝업 열기</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-btn @click="popInfo.toggle = true;popInfo.type = '03'">MMS 수정 팝업 열기</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-btn @click="popInfo.toggle = true;popInfo.type = '04'">PUSH 수정 팝업 열기</v-btn>
            </v-col>
        </v-row>
    </div>

  <PopMessageModify :dialog-info="popInfo" />
</template>
