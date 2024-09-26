<script setup>
  import { ref } from 'vue';
  import Phrase from '@/components/target/Phrase.vue'

  const props = defineModel('data', { type: Object })
  const data = props.value;
  const emits = defineEmits(['alert'])

  const handleFileChange = (e) => {
    data.file = e.target.value
  };

</script>

<template>
    <div class="message-wrap">
      <div class="phone-area">
        <div class="phone">
          <div class="screen">
            <!-- insert-form-wrap -->
            <div class="insert-form-wrap no-line-b">
                <div class="insert-row">
                    <div class="ele-tit essential">제목
                      <span class="byte"><em>{{ data.title.length }}</em> / 1000bytes</span>
                    </div>
                    <div class="ele-inp">
                        <div class="input-wrap">
                            <v-text-field v-model="data.title" placeholder="제목을 입력해주세요." 
                            density="comfortable" variant="outlined" color="primary" hide-details="auto" 
                            clearable required @click:clear="data.title = ''"></v-text-field>
                        </div>
                    </div>
                </div>  

                <div class="insert-row">
                    <div class="ele-tit essential">알림메시지
                      <!-- <span class="byte"><em>{{ data.alarm.length }}</em> / 60bytes</span> -->
                    </div>
                    <div class="ele-inp">
                        <div class="f-wrap input-wrap">
                          <span class="tit text-16">(광고)[신한카드,</span>
                            <v-text-field v-model="data.alarm" placeholder="메시지를 입력해주세요."
                            density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                            maxLength="60" required  @click:clear="data.alarm = ''">
                            </v-text-field>
                        </div>
                        <div class="text-etc text-16">※ 수신거부:설정 > 수신동의 설정</div>
                    </div>
                </div>                

                <div class="insert-row">
                    <div class="ele-tit essential">PUSH 내용 <small class="text-small text-13">(이미지 및 문서를 등록해주세요.)</small></div>
                    <div class="ele-inp">
                      <div class="inp-file-add">
                        <div v-if="data.file" class="file-name text-16">{{ data.file }} <button type="button" class="btn-del" @click="data.file = ''"></button></div>
                        <div v-else class="btn-file-wrap">
                          <div class="btn-file">
                            <input type="file" @change="handleFileChange($event)" />
                            <v-btn :ripple="false" variant="outlined" color="primary" size="large" rounded="md" >파일 불러오기</v-btn>
                          </div>
                          <div class="text-etc text-16">※확장자 ooo, ooo</div>
                        </div>
                      </div>                          
                    </div>
                </div>    
                <div class="insert-row">
                    <div class="ele-tit">랜딩 URL <small class="text-small text-13">(필요 시 입력)</small></div>
                    <div class="ele-inp">
                        <div class="input-wrap">
                            <v-text-field v-model="data.url" placeholder="내용을 입력해주세요." density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable required></v-text-field>
                        </div>
                    </div>
                </div>   
            </div>
            <!-- // insert-form-wrap -->

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
              <li>10분간 자리비움 시 자동 로그아웃될 수 있으므로 <span class="txt-save">임시저장</span>을 해주세요. <br>임시저장된 내용은 MY > MY타겟마케팅에서 확인 가능합니다.</li>
              <li>알림메시지에 '(광고)[신한카드]' 문구와 수신거부 관련 문구는 필수로 포함됩니다.</li>
              <li>등록하신 PUSH 내용은 신한카드 제작물로 이용됩니다.</li>
              <li>문구 등 소재를 업로드하시면 영업일 기준 6~7일 이내에 디자인 제작 완료되며, 이미지 제작이므로 문구 수 제한은 없습니다.</li>
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
      </div>
</template>
