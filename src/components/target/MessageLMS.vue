<script setup>
  import { ref } from 'vue';
  import Phrase from '@/components/target/Phrase.vue'

  const props = defineModel('data', { type: Object })
  const data = props.value;
  const emits = defineEmits(['alert'])

</script>

<template>
    <div class="message-wrap">
      <div class="phone-area">
        <div class="phone">
          <div class="screen">
            <!-- insert-form-wrap -->
            <div class="insert-form-wrap no-line-b">
                <div class="insert-row">
                    <div class="ele-tit">(광고)[신한카드,
                      <span class="byte"><em>{{ data.title.length }}</em> / 60bytes</span>
                    </div>
                    <div class="ele-inp">
                        <div class="f-wrap input-wrap">
                            <v-text-field v-model="data.title" placeholder="제목을 입력해주세요."
                            density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                            maxLength="60" required @click:clear="data.title = ''">
                            </v-text-field>
                            <span class="tit text-16">안내]</span>

                        </div>
                    </div>
                </div> 
                   
                <div class="insert-row">
                    <div class="ele-tit">(광고)[신한카드]</div>
                    <div class="ele-inp">
                        <v-textarea v-model="data.detail" hide-details="auto" persistent-counter no-resize
                            maxLength="1800" variant="outlined" color="primary" rows="13" placeholder="문의 내용을 입력하세요.">
                            <template v-slot:counter>
                                <strong>{{ data.detail.length }}</strong><span>/ 1800bytes</span>
                            </template>
                        </v-textarea>
                    </div>
                </div>                               
            </div>
            <!-- // insert-form-wrap -->
            <div class="text-etc">
              <p>※ 준법감시 심의필 제20240307
                <br>-Cpc003호(2024.03.07~2025.03.06)
                </p>
                <p>※ 수신거부 080-800-8114(무료)</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="data.modify" class="message-area">
          <div class="check-noti-wrap">
            <div class="tit"><i class="ico-info"></i>수정 전 확인해주세요.</div>
            <ul class="list-dot text-16">
              <li>기존 요청 주셨던 문구 중에서 수정될 부분만 변경해주세요.</li>
              <li>변동사항이 없는 문구나 파일은 <b class="bold">삭제하지 마시고 그대로</b> 두시면 됩니다.</li>
              <li>기존 정보를 다시 불러오려면 <span class="txt-init">초기화</span>를 진행해주세요.</li>
            </ul>            
          </div>

          <div v-if="data.message" class="inquiry-area">
              <div class="title">업무 담당자가 전하는 말씀</div>
              <div class="inquiry-box">
                  <div class="text">{{ data.message }}</div>
              </div>
          </div>
        </div>
      <div v-else class="message-area">
          <div class="check-noti-wrap">
            <div class="tit"><i class="ico-info"></i>작성 전 확인해주세요.</div>
            <ul class="list-dot text-16">
              <li>10분간 자리비움 시 자동 로그아웃될 수 있으므로 <span class="txt-save">임시저장</span>을 해주세요. <br>저장된 내용은 MY > MY타겟마케팅에서 확인 가능합니다.</li>
              <li>제목에 노출되는'(광고)[신한카드, 안내]', 내용 상단에 노출되는 (광고)[신한카드], 내용 하단에 노출되는 준법감시 및 수신거부 문구는 필수로 포함됩니다.</li>
              <li>추후 변동 가능성 있는 문구가 있으시면 입력해주시길 바랍니다. (최대 5건)</li>
              <li>고객명, 개인화 URL 및 쿠폰번호 등은 개인화 문구 가능합니다.</li>
              <li>행사기간, 랜딩페이지 URL, 사은품 및 경품 종류, 고객센터, 전화번호 등은 추후 변경이 가능합니다.</li>
              <li>테스트문자는 회원가입 시 등록한 휴대폰번호로 발송됩니다. 추가 발송이 필요한 경우 개별 요청 주시길 바랍니다.</li>
            </ul>            
          </div>

          <div class="message-form-wrap">
            <div class="cnt-title subtitle-20">
              <b class="title">변동 가능 문구</b>
              <small class="text-sm">(최대 5건)</small>
            </div>
            <Phrase :data="data.phrase" @alert="(v)=>{emits('alert', v)}" />

            <div class="cnt-title subtitle-20">
              <div class="title">전달사항</div>
            </div>
            <div class="message-form insert-form-wrap">
              <div class="insert-row">
                <div class="ele-inp">
                  <v-textarea v-model="data.message" hide-details="auto" persistent-counter no-resize class="textarea-message-detail"
                      variant="outlined" color="primary" rows="13" placeholder="요청사항이 있으시면 기재해주세요. (예, 테스트 수신 요청함)">
                        <template v-slot:counter>
                            <strong>{{ data.message.length }}자</strong><span>/ 300자</span>
                        </template>
                  </v-textarea>
                </div>
              </div>
            </div>
          </div>            
          <!-- // message-form-wrap -->
        </div>
        <!-- // message-area -->
      </div>
</template>
