<script setup>
  import { ref, reactive } from 'vue';
  const subjectList = [ "건강기능식품", "미용/뷰티", "교육", "취업", "자동차", "반려동물", "보험", "부동산/분양", "App 설치 및 가입유도", "기타" ]
  const subjectSelected = ref();

</script>
<template>
  <div class="sub-group my-page">
    <div class="sub-title-area">
      <h4 class="sub-title">타겟마케팅 신청</h4>
    </div>
    <div class="static-content member mo-pd-row-0">
        <div class="complete-box">
              <v-icon>icon-success</v-icon>
              <div class="complete-text">
                <div>타겟마케팅 신청이 완료되었습니다.</div>
                <p>
                  검토가 완료되었거나 검토 후 메시지 수정이 필요한 경우
                  <br>안내 이메일이 발송될 예정입니다.
                </p>
              </div>
            </div>
          <div class="btn-list btm-st">
              <v-btn variant="flat" min-width="22rem" rounded="md" size="x-large" color="secondary">메인</v-btn>
              <v-btn variant="flat" min-width="22rem" rounded="md" size="x-large" color="primary">신청내역 확인</v-btn>
          </div>
    </div>

  </div>
</template>