<script setup>
  import { ref, reactive } from 'vue';
  const sending =  reactive({
    list:[
      { name: 'LMS', value: '01' },
      { name: 'RCS(LMS)', value: '02' },
      { name: 'MMS', value: '03' },
      { name: 'APP PUSH', value: '04' },
    ],
    selected : ref('01'),
  })

</script>
<template>
  <div class="sub-group my-page">
    <div class="sub-title-area">
      <h4 class="sub-title">타겟마케팅 탐색</h4>
    </div>
    <div class="static-content">
      <!-- 결과 -->
      <div class="target-marketing-wrap">
          <div class="target-marketing-result">
            <div class="result-box">
              대상군은 약 <b>15,000,000</b>명 이며
              <br> 
              <div class="inp-select">
                  <v-select v-model="sending.selected" :items="sending.list" item-title="name" item-value="value" hide-details
                      variant="outlined" color="primary" placeholder="선택" />
              </div>
              예상 견적은 약 <b>5,000,000</b>원 입니다. <small>(VAT 별도) </small>
            </div>
            <p class="text-etc text-16">※ 추출된 결과는 고객님의 마케팅 판단에 도움을 드리고자 하기 위함으로, 최종 판촉대상과 발송대상은 차이가 있을 수 있습니다.</p>
          </div>
          
          <div class="btn-list btm-st">
              <v-btn variant="flat" min-width="22rem" rounded="md" size="x-large" color="secondary">다시 검색</v-btn>
              <v-btn variant="flat" min-width="22rem" rounded="md" size="x-large" color="primary">즉시 신청</v-btn>
          </div>
      </div>
    </div>

    <PopupAlert :dialog-info="dialogInfo" @close="dialogInfo.toggle = false" />
  </div>
</template>